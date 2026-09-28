(function () {
  "use strict";

  function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
  function clone(value) { return JSON.parse(JSON.stringify(value)); }

  const Engine = {
    manifest: null, content: null, storage: null, ui: null, save: null, settings: null,
    running: false, messageIndex: {}, optionIndex: {}, choiceTimer: null, choiceInterval: null,

    init({ manifest, content, storage, ui, save, settings }) {
      this.manifest=manifest; this.content=content; this.storage=storage; this.ui=ui; this.save=save; this.settings=settings;
      if (!Array.isArray(this.save.pendingQueue)) this.save.pendingQueue=[];
      if (!this.save.pendingWait) this.save.pendingWait=null;
      this.buildIndexes(); this.syncScene(); this.refreshMeta(); this.refreshDebug();
    },

    buildIndexes() {
      this.messageIndex={}; this.optionIndex={};
      Object.values(this.content.nodes).forEach((node) => {
        if (node.type === "sequence") (node.messages || []).forEach((m) => { this.messageIndex[m.id]=m; });
        if (node.type === "choice") (node.options || []).forEach((o) => { this.optionIndex[o.id]=o; });
      });
    },

    getNode(id) { const n=this.content.nodes[id]; if (!n) throw new Error(`Nodo inesistente: ${id}`); return n; },
    getScene(id) { return this.content.scenes[id] || null; },
    syncScene() { const n=this.getNode(this.save.currentNodeId); if (n.sceneId) this.save.currentSceneId=n.sceneId; },

    timeDelay(ms) {
      const mode=this.settings.timeMode || "FAST";
      if (mode === "INSTANT") return 0;
      if (mode === "FAST") return Math.min(Math.round(ms * 0.18), 700);
      if (mode === "STORY") return Math.round(ms * 1.8);
      return ms;
    },

    signalDelay() {
      const signal=this.save.state.SIGNAL_STATE;
      if ((this.settings.timeMode || "FAST") === "INSTANT") return 0;
      if (signal === "WEAK") return 180;
      if (signal === "INTERMITTENT") return 280;
      return 0;
    },

    evaluate(condition) {
      if (!condition) return true;
      if (condition.all) return condition.all.every((c)=>this.evaluate(c));
      if (condition.any) return condition.any.some((c)=>this.evaluate(c));
      if (condition.not) return !this.evaluate(condition.not);
      const current=this.save.state[condition.key], value=condition.value;
      switch (condition.op) {
        case "eq": return current===value; case "neq": return current!==value;
        case "gt": return current>value; case "gte": return current>=value;
        case "lt": return current<value; case "lte": return current<=value;
        case "truthy": return Boolean(current); case "falsy": return !current;
        case "in": return Array.isArray(value) && value.includes(current);
        default: throw new Error(`Operatore condizione non supportato: ${condition.op}`);
      }
    },

    applyEffects(effects) {
      (effects || []).forEach((e) => {
        if (!(e.key in this.save.state)) throw new Error(`Variabile runtime non registrata: ${e.key}`);
        if (e.op === "set") this.save.state[e.key]=clone(e.value);
        else if (e.op === "add") this.save.state[e.key]=Number(this.save.state[e.key] || 0)+Number(e.value);
        else if (e.op === "sub") this.save.state[e.key]=Number(this.save.state[e.key] || 0)-Number(e.value);
        else throw new Error(`Effetto non supportato: ${e.op}`);
      });
      this.storage.save(this.save); this.refreshMeta(); this.refreshDebug();
    },

    persistPosition(nodeId, progress) {
      this.save.currentNodeId=nodeId; this.save.nodeProgress=progress || 0; this.syncScene();
      this.storage.save(this.save); this.refreshMeta(); this.refreshDebug();
    },

    recordMessage(message) {
      if (this.save.history.some((h)=>h.type==="message" && h.messageId===message.id)) return;
      this.save.history.push({type:"message",messageId:message.id,deliveredAt:Date.now()}); this.storage.save(this.save);
    },

    queueMessage(message) {
      if (this.save.pendingQueue.some((q)=>q.messageId===message.id)) return;
      this.save.pendingQueue.push({messageId:message.id,writtenAt:Date.now()}); this.storage.save(this.save); this.refreshDebug();
    },

    flushQueue() {
      const queue=[...(this.save.pendingQueue || [])].sort((a,b)=>a.writtenAt-b.writtenAt);
      queue.forEach((q)=>{
        const m=this.messageIndex[q.messageId];
        if (m) { this.ui.renderMessage(m.sender,m.text); this.recordMessage(m); }
      });
      this.save.pendingQueue=[]; this.storage.save(this.save); this.refreshDebug();
    },

    recordChoice(node, option) {
      this.save.playedChoices[node.id]=option.id;
      this.save.history.push({type:"choice",choiceId:node.id,optionId:option.id,chosenAt:Date.now()});
      this.storage.save(this.save);
    },

    restoreHistory() {
      this.ui.clear();
      for (const entry of this.save.history) {
        if (entry.type === "message") { const m=this.messageIndex[entry.messageId]; if (m) this.ui.renderMessage(m.sender,m.text,{restored:true}); }
        else if (entry.type === "choice") { const o=this.optionIndex[entry.optionId]; if (o) this.ui.renderMessage("player",o.text,{restored:true}); }
        else if (entry.type === "system") { this.ui.renderSystem(entry.text); }
      }
      this.refreshMeta(); this.refreshDebug();
    },

    clearChoiceTimers() {
      if (this.choiceTimer) clearTimeout(this.choiceTimer);
      if (this.choiceInterval) clearInterval(this.choiceInterval);
      this.choiceTimer=null; this.choiceInterval=null;
    },

    async run() {
      if (this.running) return;
      this.running=true; this.ui.hideError();
      try {
        while (true) {
          const node=this.getNode(this.save.currentNodeId); this.syncScene(); this.refreshMeta(); this.refreshDebug();

          if (node.type === "state") {
            this.applyEffects(node.effects || []); this.persistPosition(node.next,0); continue;
          }
          if (node.type === "condition") {
            let target=node.else;
            for (const c of node.cases || []) if (this.evaluate(c.when)) { target=c.next; break; }
            if (!target) throw new Error(`Condizione senza destinazione: ${node.id}`);
            this.persistPosition(target,0); continue;
          }
          if (node.type === "sequence") {
            const start=Number(this.save.nodeProgress || 0), messages=node.messages || [];
            for (let i=start; i<messages.length; i+=1) {
              const m=messages[i];
              this.ui.setBusy(m.delivery !== "local_queue");
              await sleep(this.timeDelay(m.delayMs || 0) + (m.delivery === "local_queue" ? 0 : this.signalDelay()));
              this.ui.setBusy(false);
              if (m.delivery === "local_queue") this.queueMessage(m);
              else { this.ui.renderMessage(m.sender,m.text); this.recordMessage(m); }
              this.persistPosition(node.id,i+1);
            }
            if (node.effects) this.applyEffects(node.effects);
            this.persistPosition(node.next,0); continue;
          }
          if (node.type === "system") {
            await sleep(this.timeDelay(node.delayMs || 0));
            if (node.effects) this.applyEffects(node.effects);
            if (node.event === "flush_local_queue") this.flushQueue();
            else if (node.event === "show_system") {
              this.ui.renderSystem(node.text || "");
              this.save.history.push({type:"system",text:node.text || "",deliveredAt:Date.now()});
              this.storage.save(this.save);
            }
            this.persistPosition(node.next,0); continue;
          }
          if (node.type === "choice") {
            const available=(node.options || []).filter((o)=>this.evaluate(o.conditions));
            if (!available.length) throw new Error(`Scelta senza opzioni valide: ${node.id}`);
            let remaining=null;
            if (node.timed) {
              const duration=node.timeoutMs || 10000;
              if (!this.save.pendingWait || this.save.pendingWait.choiceId !== node.id) {
                this.save.pendingWait={choiceId:node.id,deadline:Date.now()+duration}; this.storage.save(this.save);
              }
              remaining=Math.max(0,this.save.pendingWait.deadline-Date.now());
            }
            this.ui.renderChoice(node.prompt,available,(optionId)=>this.choose(node.id,optionId),remaining);
            if (node.timed) {
              this.clearChoiceTimers();
              const tick=()=>this.ui.updateChoiceTimer(Math.max(0,this.save.pendingWait.deadline-Date.now()));
              tick(); this.choiceInterval=setInterval(tick,250);
              this.choiceTimer=setTimeout(()=>{
                const fallback=node.timeoutOptionId || available[0].id;
                this.choose(node.id,fallback).catch((err)=>this.ui.showError(err,this.save));
              },remaining);
            }
            break;
          }
          if (node.type === "end") { this.ui.renderEnd(node.title,node.message); break; }
          throw new Error(`Tipo nodo non supportato: ${node.type}`);
        }
      } catch (err) { this.ui.showError(err,this.save); throw err; }
      finally { this.ui.setBusy(false); this.running=false; }
    },

    async choose(choiceId, optionId) {
      this.clearChoiceTimers(); this.save.pendingWait=null;
      const node=this.getNode(choiceId); if (node.type !== "choice") throw new Error(`${choiceId} non è una scelta.`);
      const option=(node.options || []).find((o)=>o.id===optionId); if (!option) throw new Error(`Opzione inesistente: ${optionId}`);
      if (!this.evaluate(option.conditions)) throw new Error(`Opzione non valida nello stato corrente: ${optionId}`);
      this.ui.clearChoices(); this.ui.renderMessage("player",option.text); this.recordChoice(node,option);
      this.applyEffects(option.effects || []); this.persistPosition(option.next,0); await this.run();
    },

    refreshMeta() { this.ui.setMeta(this.getScene(this.save.currentSceneId),this.save.state); },
    refreshDebug() { this.ui.setDebug(Boolean(this.settings.debug),{currentSceneId:this.save.currentSceneId,currentNodeId:this.save.currentNodeId,nodeProgress:this.save.nodeProgress,state:this.save.state,playedChoices:this.save.playedChoices,historyLength:this.save.history.length,pendingQueue:this.save.pendingQueue,pendingWait:this.save.pendingWait}); }
  };
  window.LUA_ENGINE=Engine;
})();
