/* GEI Command Orchestration Engine v1.0.11
 * The command layer resolves intent; module action adapters own action contracts.
 * No authentication, payment, entitlement, credential, research-authority, or
 * protected-state mutation is performed here.
 */
(() => {
  'use strict';
  const KEY='gei-commands-v1.0.10', MAX_RECENT=8;
  const data=()=>window.GEI_COMMAND_DATA||{commands:[]};
  const registry=()=>window.GEI_PLATFORM_REGISTRY;
  const actions=()=>window.GEI_ACTIONS;
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(_){return{}}};
  const write=s=>{try{localStorage.setItem(KEY,JSON.stringify(s))}catch(_) {}};
  let state={recent:[],lastCommand:null,...read()};
  state={recent:Array.isArray(state.recent)?state.recent.slice(0,MAX_RECENT):[],lastCommand:state.lastCommand||null};
  const snapshot=()=>JSON.parse(JSON.stringify(state));
  const persist=()=>{write(state);document.dispatchEvent(new CustomEvent('gei-command:change',{detail:snapshot()}));render()};
  const normalize=value=>String(value||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
  const commands=()=>data().commands||[];
  function resolve(input){
    const q=normalize(input);
    if(!q)return null;
    let exact=commands().find(c=>normalize(c.id)===q||normalize(c.label)===q||c.aliases.some(a=>normalize(a)===q));
    if(exact)return exact;
    return commands().find(c=>c.aliases.some(a=>q===normalize(a))||normalize(c.label).includes(q))||null;
  }
  function routeFor(command){
    const item=registry()?.get?.(command.module);
    if(!item)return null;
    return item.path;
  }
  function execute(input,options={}){
    const command=typeof input==='string'?resolve(input):input;
    if(!command)return {ok:false,reason:'unknown-command',input:String(input||'')};
    const fallbackRoute=routeFor(command);
    if(!fallbackRoute)return {ok:false,reason:'unregistered-module',command:command.id};
    state.lastCommand=command.id;
    state.recent=[command.id,...state.recent.filter(id=>id!==command.id)].slice(0,MAX_RECENT);
    persist();
    const actionResult=actions()?.dispatch?.(command,{source:options.source||'command'})||null;
    if(actionResult && !actionResult.ok && actionResult.reason!=='no-module-action'){
      return {ok:false,reason:actionResult.reason,commandId:command.id,module:command.module};
    }
    const route=actionResult?.route||fallbackRoute;
    const detail={commandId:command.id,label:command.label,module:command.module,route,action:actionResult?.kind||'navigate',source:options.source||'command',at:new Date().toISOString()};
    document.dispatchEvent(new CustomEvent('gei-command:execute',{detail}));
    if(options.navigate!==false){window.location.href=new URL(route,document.baseURI).href;}
    return {ok:true,...detail};
  }
  function clearRecent(){state={recent:[],lastCommand:null};persist()}
  function reset(){clearRecent()}
  function render(){
    const list=document.getElementById('command-recent');if(!list)return;
    list.innerHTML=state.recent.map(id=>commands().find(c=>c.id===id)).filter(Boolean).map(c=>`<button type="button" data-command="${c.id}"><strong>${c.label}</strong><small>${c.description}</small></button>`).join('')||'<span class="muted">No commands used yet.</span>';
    const last=document.getElementById('command-last');if(last)last.textContent=state.lastCommand?commands().find(c=>c.id===state.lastCommand)?.label||state.lastCommand:'Ready';
  }
  function init(){
    document.getElementById('command-input')?.addEventListener('input',e=>{
      const target=document.getElementById('command-suggestions');
      const q=normalize(e.target.value);
      if(!target){return;}
      if(!q){target.innerHTML='<span class="muted">Try “open research” or “start dam lab”.</span>';return;}
      const matches=commands().filter(c=>normalize(c.label).includes(q)||c.aliases.some(a=>normalize(a).includes(q))).slice(0,6);
      target.innerHTML=matches.map(c=>`<button type="button" data-command="${c.id}"><strong>${c.label}</strong><small>${c.description}</small></button>`).join('')||'<span class="muted">No supported command.</span>';
    });
    document.getElementById('command-input')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();const command=resolve(e.target.value);if(command)execute(command,{source:'command-center'})}});
    document.getElementById('command-run')?.addEventListener('click',()=>{const input=document.getElementById('command-input');const command=resolve(input?.value);if(command)execute(command,{source:'command-center'})});
    document.getElementById('command-suggestions')?.addEventListener('click',e=>{const b=e.target.closest('[data-command]');if(b)execute(b.dataset.command,{source:'command-center'})});
    document.getElementById('command-recent')?.addEventListener('click',e=>{const b=e.target.closest('[data-command]');if(b)execute(b.dataset.command,{source:'recent-command'})});
    document.getElementById('command-clear')?.addEventListener('click',clearRecent);
    document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.shiftKey&&e.key.toLowerCase()==='k'){e.preventDefault();document.getElementById('command-input')?.focus()}});
    render();
  }
  window.GEI_COMMANDS=Object.freeze({version:'1.0.11',commands,resolve,execute,getState:()=>snapshot(),clearRecent,reset});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
