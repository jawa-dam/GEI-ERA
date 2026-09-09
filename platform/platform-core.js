/* GEI Platform Core v1.0
 * Shared, provider-neutral application state for the GEI platform.
 * Browser storage is convenience state only; it is not authentication or payment proof.
 */
(() => {
  'use strict';
  const KEY = 'gei-platform-v1.0';
  const defaults = {
    version: '1.0.0',
    activeModule: 'control-room',
    visits: 0,
    lastVisited: null,
    history: [],
    preferences: { reducedMotion: false }
  };

  function read() {
    try { return { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
    catch (_) { return { ...defaults }; }
  }
  function write(state) { localStorage.setItem(KEY, JSON.stringify(state)); return state; }

  window.GEIPlatform = {
    getState: read,
    setState(patch) { return write({ ...read(), ...patch }); },
    navigate(moduleId) {
      const state = read();
      const next = String(moduleId || 'control-room');
      const history = [next, ...(state.history || []).filter(x => x !== next)].slice(0, 8);
      const nextState = write({ ...state, activeModule: next, lastVisited: next, visits: state.visits + 1, history });
      document.dispatchEvent(new CustomEvent('gei-platform:navigate', { detail: nextState }));
      return nextState;
    },
    reset() { localStorage.removeItem(KEY); document.dispatchEvent(new CustomEvent('gei-platform:reset')); },
    version: '1.0.0'
  };
})();
