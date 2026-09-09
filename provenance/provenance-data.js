/* GEI Provenance Intelligence v1.0.12
 * Structured provenance vocabulary for traceability. This client layer is not an authoritative audit ledger.
 */
(() => {
  'use strict';
  const eventTypes = Object.freeze([
    'platform-navigation','session','command','module-action','discovery','knowledge','profile','progress','portfolio','research-reference','system'
  ]);
  const fields = Object.freeze(['eventId','eventType','actor','action','module','target','source','occurredAt','recordedAt','context','evidenceRefs','integrity']);
  const modules = Object.freeze([
    'control-room','platform','explore','academy','research','laboratory','media','library','marketplace','vault','profile','progress','portfolio','discovery','knowledge','timeline','search','commands'
  ]);
  window.GEI_PROVENANCE_DATA = Object.freeze({version:'1.0.12',eventTypes,fields,modules});
})();
