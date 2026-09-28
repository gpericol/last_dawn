(function () {
  "use strict";
  const manifest=window.LUA_MANIFEST, storage=window.LUA_STORAGE, ui=window.LUA_UI, engine=window.LUA_ENGINE;
  function byId(id){ return document.getElementById(id); }
  function mergeContent(){
    const merged={schemaVersion:manifest.schemaVersion,contentVersion:manifest.contentVersion,startNode:manifest.startNode,scenes:{},nodes:{},initialState:{}};
    Object.values(window.LUA_CONTENT || {}).forEach((act)=>{ Object.assign(merged.scenes,act.scenes||{}); Object.assign(merged.nodes,act.nodes||{}); Object.assign(merged.initialState,act.initialState||{}); });
    return merged;
  }
  const content=mergeContent();
  function createFreshSave(){ const s=storage.createNewSave(manifest,content.initialState); storage.save(s); return s; }
  function fillMissingState(save){ Object.entries(content.initialState).forEach(([k,v])=>{ if (!(k in save.state)) save.state[k]=JSON.parse(JSON.stringify(v)); }); return save; }
  function tryMigrate(loaded){
    const old=loaded && loaded.save; if (!old || old.saveVersion!==manifest.saveVersion) return null;
    if (old.contentVersion!=="beta-004-act3-001") return null;
    const candidate=fillMissingState(old); candidate.contentVersion=manifest.contentVersion;
    if (candidate.currentNodeId==="A3-S19-END" && candidate.state.ACT3_COMPLETE) { candidate.currentNodeId="A4-S01-START"; candidate.currentSceneId="A4-S01"; candidate.nodeProgress=0; }
    if (!content.nodes[candidate.currentNodeId]) return null;
    storage.save(candidate); return candidate;
  }
  function getUsableSave(){
    const loaded=storage.load(manifest); if (!loaded) return createFreshSave();
    if (loaded.corrupt){ ui.showError("Save corrotto. Verrà creata una nuova partita.",loaded); storage.reset(); return createFreshSave(); }
    if (loaded.incompatible){ const migrated=tryMigrate(loaded); if (migrated) return migrated; const ok=confirm("Il save appartiene a una beta non compatibile. Ricominciare?"); if (ok){storage.reset(); return createFreshSave();} throw new Error("Save incompatibile."); }
    return fillMissingState(loaded);
  }
  function wireControls(settings){
    const tm=byId("time-mode"); tm.value=settings.timeMode||"FAST"; tm.addEventListener("change",()=>{settings.timeMode=tm.value;storage.saveSettings(settings);engine.settings=settings;engine.refreshDebug();});
    const dbg=byId("debug-toggle"); dbg.checked=Boolean(settings.debug); dbg.addEventListener("change",()=>{settings.debug=dbg.checked;storage.saveSettings(settings);engine.settings=settings;engine.refreshDebug();});
    byId("reset-button").addEventListener("click",()=>{if(!confirm("Ricominciare il gioco? Il salvataggio locale verrà cancellato."))return;storage.reset();location.reload();});
    byId("export-button").addEventListener("click",()=>{try{storage.exportSave(manifest);}catch(err){ui.showError(err,engine.save);}});
    byId("import-input").addEventListener("change",async(e)=>{const f=e.target.files&&e.target.files[0];if(!f)return;try{const text=await f.text();const parsed=JSON.parse(text);if(parsed.contentVersion==="beta-004-act3-001"){const migrated=tryMigrate({save:parsed});if(!migrated)throw new Error("Impossibile migrare il save Beta 004.");location.reload();return;}storage.importSaveText(text,manifest);location.reload();}catch(err){ui.showError(err,engine.save);}});
    byId("continue-slice").addEventListener("click",()=>{alert("Beta Web 005: gioco completo. Fine.");});
  }
  async function bootstrap(){ui.init();const settings=storage.loadSettings();const save=getUsableSave();engine.init({manifest,content,storage,ui,save,settings});wireControls(settings);engine.restoreHistory();await engine.run();}
  window.addEventListener("pagehide",()=>{if(engine.save)storage.save(engine.save);});
  window.addEventListener("DOMContentLoaded",()=>{bootstrap().catch((err)=>{console.error(err);ui.showError(err,engine.save);});});
})();
