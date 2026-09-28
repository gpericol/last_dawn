(function () {
  "use strict";

  const SAVE_KEY = "ultimaAlba.beta.save.v1";
  const SETTINGS_KEY = "ultimaAlba.beta.settings.v1";

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function now() {
    return Date.now();
  }

  function createNewSave(manifest, initialState) {
    return {
      saveVersion: manifest.saveVersion,
      contentVersion: manifest.contentVersion,
      currentSceneId: manifest.startScene,
      currentNodeId: manifest.startNode,
      nodeProgress: 0,
      state: clone(initialState || {}),
      history: [],
      pendingQueue: [],
      pendingWait: null,
      playedChoices: {},
      updatedAt: now()
    };
  }

  function save(data) {
    data.updatedAt = now();
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    return data;
  }

  function load(manifest) {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw);
      if (parsed.saveVersion !== manifest.saveVersion) {
        return { incompatible: true, reason: "saveVersion", save: parsed };
      }
      if (parsed.contentVersion !== manifest.contentVersion) {
        return { incompatible: true, reason: "contentVersion", save: parsed };
      }
      return parsed;
    } catch (err) {
      return { corrupt: true, error: String(err) };
    }
  }

  function reset() {
    localStorage.removeItem(SAVE_KEY);
  }

  function loadSettings() {
    const defaults = { timeMode: "FAST", debug: false };
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return defaults;
    try {
      return Object.assign(defaults, JSON.parse(raw));
    } catch (_) {
      return defaults;
    }
  }

  function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  function downloadJSON(filename, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function exportSave(manifest) {
    const loaded = load(manifest);
    if (!loaded || loaded.incompatible || loaded.corrupt) {
      throw new Error("Nessun save valido da esportare.");
    }
    downloadJSON("ultima-alba-beta-save.json", loaded);
  }

  function importSaveText(text, manifest) {
    const parsed = JSON.parse(text);
    if (parsed.saveVersion !== manifest.saveVersion) {
      throw new Error("saveVersion non compatibile.");
    }
    if (parsed.contentVersion !== manifest.contentVersion) {
      throw new Error("contentVersion non compatibile.");
    }
    save(parsed);
    return parsed;
  }

  window.LUA_STORAGE = {
    SAVE_KEY,
    SETTINGS_KEY,
    createNewSave,
    save,
    load,
    reset,
    loadSettings,
    saveSettings,
    exportSave,
    importSaveText
  };
})();
