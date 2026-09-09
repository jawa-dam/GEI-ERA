/* GEI Unified Activity Timeline & Journey Layer v1.0.8 */
(() => {
  'use strict';
  const modules = [
    {id:'control-room',label:'Control Room'}, {id:'platform',label:'Platform'}, {id:'discovery',label:'Discovery'},
    {id:'academy',label:'Academy'}, {id:'research',label:'Research'}, {id:'laboratory',label:'Laboratory'},
    {id:'profile',label:'Profile'}, {id:'progress',label:'Progress'}, {id:'portfolio',label:'Portfolio'},
    {id:'media',label:'Media'}, {id:'marketplace',label:'Marketplace'}, {id:'vault',label:'Vault'}
  ];
  window.GEI_TIMELINE_DATA = Object.freeze({version:'1.0.8',modules:Object.freeze(modules.map(Object.freeze))});
})();
