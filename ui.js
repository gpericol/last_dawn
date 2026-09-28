(function () {
  "use strict";

  function el(id) {
    return document.getElementById(id);
  }

  const UI = {
    init() {
      this.chat = el("chat");
      this.choices = el("choices");
      this.sceneLabel = el("scene-label");
      this.signalLabel = el("signal-label");
      this.batteryLabel = el("battery-label");
      this.statusLabel = el("status-label");
      this.debugPanel = el("debug-panel");
      this.debugPre = el("debug-state");
      this.endPanel = el("end-panel");
    },

    clear() {
      this.chat.innerHTML = "";
      this.choices.innerHTML = "";
      this.endPanel.hidden = true;
    },

    clearChoices() {
      this.choices.innerHTML = "";
    },

    setBusy(busy) {
      this.statusLabel.textContent = busy ? "Nico sta scrivendo…" : "";
    },

    renderMessage(sender, text, extra) {
      const row = document.createElement("div");
      row.className = "message-row " + (sender === "player" ? "player" : "nico");

      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.textContent = text;

      if (extra && extra.restored) {
        bubble.dataset.restored = "true";
      }

      row.appendChild(bubble);
      this.chat.appendChild(row);
      this.scrollToBottom();
    },

    renderSystem(text) {
      const row = document.createElement("div");
      row.className = "system-message";
      row.textContent = text;
      this.chat.appendChild(row);
      this.scrollToBottom();
    },

    renderChoice(prompt, options, onChoose, remainingMs) {
      this.clearChoices();
      const wrap = document.createElement("div"); wrap.className = "choice-card";
      const title = document.createElement("div"); title.className = "choice-prompt"; title.textContent = prompt || "Cosa gli dici?"; wrap.appendChild(title);
      if (remainingMs !== null && remainingMs !== undefined) {
        const timer=document.createElement("div"); timer.id="choice-timer"; timer.className="choice-timer"; wrap.appendChild(timer); this.updateChoiceTimer(remainingMs);
      }
      options.forEach((option) => {
        const button=document.createElement("button"); button.className="choice-button"; button.type="button"; button.textContent=option.text;
        button.addEventListener("click",()=>{ this.clearChoices(); onChoose(option.id); }); wrap.appendChild(button);
      });
      this.choices.appendChild(wrap); this.scrollToBottom();
    },

    updateChoiceTimer(remainingMs) {
      const timer=document.getElementById("choice-timer"); if (!timer) return;
      timer.textContent=`Tempo: ${Math.max(0,Math.ceil(remainingMs/1000))}s`;
    },

    renderEnd(title, message) {
      this.clearChoices();
      this.endPanel.hidden = false;
      el("end-title").textContent = title || "Fine";
      el("end-message").textContent = message || "";
      this.scrollToBottom();
    },

    setMeta(scene, state) {
      this.sceneLabel.textContent = scene ? `${scene.id} · ${scene.title}` : "";
      this.signalLabel.textContent = `Segnale: ${state.SIGNAL_STATE || "?"}`;
      this.batteryLabel.textContent = `Batteria: ${state.BATTERY_STATE || "?"}`;
    },

    setDebug(enabled, payload) {
      this.debugPanel.hidden = !enabled;
      if (enabled) {
        this.debugPre.textContent = JSON.stringify(payload, null, 2);
      }
    },

    showError(error, save) {
      const panel = el("error-panel");
      panel.hidden = false;
      el("error-text").textContent = String(error);
      el("error-state").textContent = JSON.stringify(save || {}, null, 2);
    },

    hideError() {
      el("error-panel").hidden = true;
    },

    scrollToBottom() {
      requestAnimationFrame(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      });
    }
  };

  window.LUA_UI = UI;
})();
