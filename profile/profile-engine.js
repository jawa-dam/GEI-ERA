/* GEI Shared Profile & Experience Layer v1.0.3
 * Presentation and personalization over the non-authoritative V1.0.2 session state.
 * This layer never treats browser state as authentication, authorization, payment proof,
 * or verified identity.
 */
(() => {
  'use strict';

  const PROFILE_EVENT = 'gei-profile:change';

  function session() {
    return window.GEI_SESSION || null;
  }

  function getSnapshot() {
    const api = session();
    if (!api) return null;
    return api.getState();
  }

  function displayVisitor(state) {
    const id = state?.identity?.visitorId || 'visitor-local';
    return id.slice(-8).toUpperCase();
  }

  function emit() {
    document.dispatchEvent(new CustomEvent(PROFILE_EVENT, { detail: getSnapshot() }));
  }

  function setProfile(profile) {
    const api = session();
    if (!api) return null;
    const next = api.setProfile(profile);
    emit();
    return next;
  }

  function resetProfile() {
    return setProfile({ displayName: '', persona: 'visitor' });
  }

  window.GEI_PROFILE = Object.freeze({
    version: '1.0.3',
    getState: getSnapshot,
    getVisitorLabel: () => {
      const state = getSnapshot();
      return state ? displayVisitor(state) : 'LOCAL';
    },
    setProfile,
    resetProfile,
    isPersonalized: () => {
      const state = getSnapshot();
      return Boolean(state?.profile?.displayName || state?.profile?.persona !== 'visitor');
    }
  });

  document.addEventListener('gei-session:change', emit);
  document.addEventListener('gei-session:reset', emit);
  document.dispatchEvent(new CustomEvent('gei-profile:ready', { detail: getSnapshot() }));
})();
