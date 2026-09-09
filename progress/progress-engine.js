/* GEI Unified Learning Progress & Achievement Engine v1.0.4
 * Derives a unified local experience snapshot from existing GEI activity.
 * Browser state is convenience state only; it is not authentication,
 * authorization, payment proof, or a verified credential.
 */
(() => {
  'use strict';

  const KEY = 'gei-progress-v1.0.4';
  const VERSION = '1.0.4';
  const LAB_KEY = 'gei-lab-v0.7';
  const RESEARCH_KEY = 'gei-research-state-v05';
  const ACADEMY_KEYS = ['gei-academy-progress-v1', 'gei-academy-v1', 'gei-academy-progress'];
  const data = () => window.GEI_PROGRESS_DATA || { achievements: [], modules: [] };

  function readJson(key) {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (_) { return null; }
  }

  function loadOwn() {
    const raw = readJson(KEY);
    if (!raw || typeof raw !== 'object') return { schemaVersion:1, unlocked:{}, updatedAt:null };
    return {
      schemaVersion:1,
      unlocked: raw.unlocked && typeof raw.unlocked === 'object' ? raw.unlocked : {},
      updatedAt: typeof raw.updatedAt === 'string' ? raw.updatedAt : null
    };
  }

  let own = loadOwn();

  function session() { return window.GEI_SESSION ? window.GEI_SESSION.getState() : null; }
  function lab() { return readJson(LAB_KEY) || { xp:0, completed:[], runs:0 }; }
  function research() { return readJson(RESEARCH_KEY) || { reviews:{}, notes:{} }; }
  function academy() {
    for (const key of ACADEMY_KEYS) {
      const value = readJson(key);
      if (value && typeof value === 'object') return { connected:true, key, value };
    }
    return { connected:false, key:null, value:null };
  }

  function distinctModules(s) { return Object.keys(s?.session?.moduleVisits || {}).filter(Boolean); }
  function researchTouched(r) {
    return Object.keys(r?.reviews || {}).filter(Boolean).length + Object.keys(r?.notes || {}).filter(Boolean).length;
  }
  function personalized(s) {
    return Boolean(s?.profile?.displayName || (s?.profile?.persona && s.profile.persona !== 'visitor'));
  }

  function conditions(s, l, r) {
    const modules = distinctModules(s);
    const completed = Array.isArray(l.completed) ? l.completed : [];
    const touched = researchTouched(r);
    return {
      'first-step': modules.length >= 1,
      'systems-explorer': modules.length >= 5,
      'lab-runner': Number(l.runs) >= 1,
      'lab-builder': completed.length >= 3,
      'researcher': touched >= 1,
      'personalized': personalized(s),
      'research-explorer': touched >= 3
    };
  }

  function persist() {
    own.updatedAt = new Date().toISOString();
    try { localStorage.setItem(KEY, JSON.stringify(own)); } catch (_) {}
  }

  function refresh() {
    const s = session();
    const l = lab();
    const r = research();
    const checks = conditions(s, l, r);
    data().achievements.forEach(a => {
      if (checks[a.id] && !own.unlocked[a.id]) own.unlocked[a.id] = new Date().toISOString();
    });
    persist();
    document.dispatchEvent(new CustomEvent('gei-progress:change', { detail:getState() }));
    return getState();
  }

  function getState() {
    const s = session();
    const l = lab();
    const r = research();
    const modules = distinctModules(s);
    const unlockedIds = Object.keys(own.unlocked).filter(id => data().achievements.some(a => a.id === id));
    const achievementXP = data().achievements.filter(a => unlockedIds.includes(a.id)).reduce((sum, a) => sum + Number(a.xp || 0), 0);
    const labXP = Number.isFinite(Number(l.xp)) ? Number(l.xp) : 0;
    const academyState = academy();
    return {
      version:VERSION,
      updatedAt:own.updatedAt,
      visitorId:s?.identity?.visitorId || null,
      persona:s?.profile?.persona || 'visitor',
      currentModule:s?.session?.currentModule || 'control-room',
      pageViews:Number(s?.session?.pageViews || 0),
      modulesVisited:modules,
      moduleCount:modules.length,
      laboratory:{ runs:Number(l.runs || 0), completed:Array.isArray(l.completed) ? l.completed.slice() : [], xp:labXP },
      research:{ touchedRecords:researchTouched(r), reviews:Object.keys(r.reviews || {}).length, notes:Object.keys(r.notes || {}).length },
      academy:{ connected:academyState.connected, key:academyState.key },
      achievements:data().achievements.map(a => ({ ...a, unlocked:Boolean(own.unlocked[a.id]), unlockedAt:own.unlocked[a.id] || null })),
      xp:{ laboratory:labXP, achievements:achievementXP, total:labXP + achievementXP }
    };
  }

  function resetAchievements() {
    own = { schemaVersion:1, unlocked:{}, updatedAt:null };
    persist();
    refresh();
  }

  window.GEI_PROGRESS = Object.freeze({
    version:VERSION,
    getState,
    refresh,
    resetAchievements
  });

  document.addEventListener('gei-session:change', refresh);
  document.addEventListener('gei-session:module', refresh);
  document.addEventListener('gei-profile:change', refresh);
  document.addEventListener('gei-lab-progress', refresh);
  document.addEventListener('gei-session:reset', refresh);
  window.addEventListener('storage', event => {
    if ([LAB_KEY, RESEARCH_KEY, 'gei-session-v1.0.2'].includes(event.key)) refresh();
  });

  persist();
  refresh();
  document.dispatchEvent(new CustomEvent('gei-progress:ready', { detail:getState() }));
})();
