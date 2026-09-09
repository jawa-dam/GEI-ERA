/* GEI Shared Identity & Session Layer v1.0.2
 * Persistent anonymous visitor/session state for the GEI platform.
 * Browser storage is convenience state only; it is not authentication,
 * authorization, payment proof, or verified researcher identity.
 */
(() => {
  'use strict';

  const KEY = 'gei-session-v1.0.2';
  const VERSION = '1.0.2';
  const PERSONAS = ['visitor', 'learner', 'researcher'];
  const MAX_NAME = 48;

  const now = () => new Date().toISOString();

  function createId(prefix) {
    if (globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function') {
      return `${prefix}-${globalThis.crypto.randomUUID()}`;
    }
    if (globalThis.crypto && typeof globalThis.crypto.getRandomValues === 'function') {
      const bytes = new Uint8Array(16);
      globalThis.crypto.getRandomValues(bytes);
      return `${prefix}-${Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('')}`;
    }
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  }

  function defaults() {
    const stamp = now();
    return {
      schemaVersion: 1,
      version: VERSION,
      identity: {
        visitorId: createId('visitor')
      },
      profile: {
        displayName: '',
        persona: 'visitor'
      },
      session: {
        sessionId: createId('session'),
        createdAt: stamp,
        lastActiveAt: stamp,
        pageViews: 0,
        moduleVisits: {},
        currentModule: 'control-room'
      }
    };
  }

  function safeInt(value, fallback = 0) {
    const n = Number(value);
    return Number.isFinite(n) && n >= 0 ? Math.floor(n) : fallback;
  }

  function cleanName(value) {
    return String(value || '')
      .replace(/[<>]/g, '')
      .replace(/[\u0000-\u001F\u007F]/g, '')
      .trim()
      .slice(0, MAX_NAME);
  }

  function normalize(raw) {
    const base = defaults();
    if (!raw || typeof raw !== 'object') return base;

    const identity = raw.identity && typeof raw.identity === 'object' ? raw.identity : {};
    const profile = raw.profile && typeof raw.profile === 'object' ? raw.profile : {};
    const session = raw.session && typeof raw.session === 'object' ? raw.session : {};
    const moduleVisits = session.moduleVisits && typeof session.moduleVisits === 'object' && !Array.isArray(session.moduleVisits)
      ? session.moduleVisits
      : {};

    const normalizedVisits = {};
    Object.keys(moduleVisits).slice(0, 100).forEach(id => {
      const key = String(id).slice(0, 80);
      normalizedVisits[key] = safeInt(moduleVisits[id]);
    });

    return {
      schemaVersion: 1,
      version: VERSION,
      identity: {
        visitorId: typeof identity.visitorId === 'string' && identity.visitorId.length <= 100
          ? identity.visitorId
          : base.identity.visitorId
      },
      profile: {
        displayName: cleanName(profile.displayName),
        persona: PERSONAS.includes(profile.persona) ? profile.persona : 'visitor'
      },
      session: {
        sessionId: typeof session.sessionId === 'string' && session.sessionId.length <= 120
          ? session.sessionId
          : base.session.sessionId,
        createdAt: typeof session.createdAt === 'string' ? session.createdAt : base.session.createdAt,
        lastActiveAt: typeof session.lastActiveAt === 'string' ? session.lastActiveAt : base.session.lastActiveAt,
        pageViews: safeInt(session.pageViews),
        moduleVisits: normalizedVisits,
        currentModule: typeof session.currentModule === 'string' ? session.currentModule.slice(0, 80) : 'control-room'
      }
    };
  }

  function read() {
    try {
      return normalize(JSON.parse(localStorage.getItem(KEY) || 'null'));
    } catch (_) {
      return defaults();
    }
  }

  let state = read();

  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) {}
    return getState();
  }

  function getState() {
    return JSON.parse(JSON.stringify(state));
  }

  function emit(eventName) {
    document.dispatchEvent(new CustomEvent(eventName, { detail: getState() }));
  }

  function touch() {
    state.session.lastActiveAt = now();
    persist();
    emit('gei-session:change');
    return getState();
  }

  function setProfile(profile = {}) {
    if (Object.prototype.hasOwnProperty.call(profile, 'displayName')) {
      state.profile.displayName = cleanName(profile.displayName);
    }
    if (Object.prototype.hasOwnProperty.call(profile, 'persona') && PERSONAS.includes(profile.persona)) {
      state.profile.persona = profile.persona;
    }
    state.session.lastActiveAt = now();
    persist();
    emit('gei-session:change');
    return getState();
  }

  function recordModuleVisit(moduleId) {
    const id = String(moduleId || '').trim().slice(0, 80);
    if (!id) return getState();
    state.session.currentModule = id;
    state.session.moduleVisits[id] = safeInt(state.session.moduleVisits[id]) + 1;
    state.session.pageViews = safeInt(state.session.pageViews) + 1;
    state.session.lastActiveAt = now();
    persist();
    emit('gei-session:module');
    return getState();
  }

  function reset() {
    state = defaults();
    persist();
    emit('gei-session:reset');
    emit('gei-session:ready');
    return getState();
  }

  function clear() {
    try { localStorage.removeItem(KEY); } catch (_) {}
    state = defaults();
    emit('gei-session:reset');
    return getState();
  }

  window.GEI_SESSION = Object.freeze({
    version: VERSION,
    personas: PERSONAS.slice(),
    getState,
    getIdentity: () => ({ ...getState().identity }),
    getProfile: () => ({ ...getState().profile }),
    touch,
    setProfile,
    recordModuleVisit,
    reset,
    clear,
    isAuthenticated: () => false,
    isAuthoritative: () => false
  });

  document.addEventListener('gei-platform:navigate', event => {
    const moduleId = event.detail && event.detail.activeModule;
    if (moduleId) recordModuleVisit(moduleId);
  });

  window.addEventListener('pagehide', () => {
    state.session.lastActiveAt = now();
    persist();
  });

  persist();
  document.dispatchEvent(new CustomEvent('gei-session:ready', { detail: getState() }));
})();
