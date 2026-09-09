/* GEI Module Action Adapter Engine v1.0.11
 * Orchestrates module-owned action contracts without taking ownership of
 * module state, authentication, authorization, payment, credentials,
 * research evidence/provenance, or protected resources.
 */
(() => {
  'use strict';
  const data=()=>window.GEI_ACTION_DATA||{contracts:[]};
  const registry=()=>window.GEI_PLATFORM_REGISTRY;
  function contractFor(module){return data().contracts.find(c=>c.module===module)||null}
  function describe(command){
    const c=contractFor(command.module), a=c?.actions?.[command.id];
    return a?{module:command.module,version:c.version,commandId:command.id,label:a.label,kind:a.kind,route:a.route}:null;
  }
  function dispatch(command,options={}){
    const action=describe(command);
    if(!action)return {ok:false,reason:'no-module-action',commandId:command.id,module:command.module};
    const registered=registry()?.get?.(action.module);
    if(!registered)return {ok:false,reason:'unregistered-module',module:action.module};
    const detail={...action,source:options.source||'command',at:new Date().toISOString()};
    document.dispatchEvent(new CustomEvent('gei-action:dispatch',{detail}));
    return {ok:true,...detail};
  }
  function list(module){
    const c=contractFor(module);
    return c?Object.entries(c.actions).map(([id,a])=>({commandId:id,...a,module:c.module,version:c.version})):[];
  }
  window.GEI_ACTIONS=Object.freeze({version:'1.0.11',describe,dispatch,list,contracts:()=>data().contracts.slice()});
})();
