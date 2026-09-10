/* GEI Provenance Intelligence Engine v1.0.12
 * Browser-local traceability layer. Not an authoritative audit ledger.
 */
(() => {
  'use strict';
  const KEY='gei-provenance-v1.0.12', MAX=120;
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(_){return{}}};
  const write=s=>{try{localStorage.setItem(KEY,JSON.stringify(s))}catch(_){}};
  let state={events:[],...read()};
  state={events:Array.isArray(state.events)?state.events.slice(0,MAX):[]};
  const snapshot=()=>JSON.parse(JSON.stringify(state));
  const emit=()=>{write(state);document.dispatchEvent(new CustomEvent('gei-provenance:change',{detail:snapshot()}));render()};
  const actor=()=>{const s=window.GEI_SESSION?.getState?.();return s?.identity?.visitorId||'local-visitor'};
  const validModule=m=>(window.GEI_PROVENANCE_DATA?.modules||[]).includes(m);
  function validate(record){
    const required=['eventId','eventType','actor','action','module','target','source','occurredAt','recordedAt','integrity'];
    const missing=required.filter(k=>record?.[k]===undefined||record?.[k]===null||record?.[k]==='');
    const errors=[...missing.map(k=>`missing:${k}`)];
    if(!window.GEI_PROVENANCE_DATA?.eventTypes?.includes(record?.eventType))errors.push('invalid:eventType');
    if(!validModule(record?.module))errors.push('invalid:module');
    return {valid:errors.length===0,errors};
  }
  function record(input={}){
    const now=new Date().toISOString();
    const event={eventId:input.eventId||`prov-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,eventType:input.eventType||'system',actor:input.actor||actor(),action:input.action||'activity',module:input.module||'platform',target:input.target||'platform',source:input.source||'gei-client',occurredAt:input.occurredAt||now,recordedAt:now,context:input.context||{},evidenceRefs:Array.isArray(input.evidenceRefs)?input.evidenceRefs:[],integrity:input.integrity||{verificationState:'local-unverified',authoritative:false,version:'1.0.12'}};
    const check=validate(event);if(!check.valid)return {ok:false,errors:check.errors};
    state.events=[event,...state.events].slice(0,MAX);emit();return {ok:true,event};
  }
  function mapEvent(name,payload){
    const p=payload||{};
    const maps={
      'gei-platform:navigate':{eventType:'platform-navigation',action:'navigate',module:p.activeModule||'platform',target:p.activeModule||'platform',source:'platform'},
      'gei-command:execute':{eventType:'command',action:'execute',module:p.module||'commands',target:p.commandId||'command',source:p.source||'command',context:{label:p.label,route:p.route}},
      'gei-action:execute':{eventType:'module-action',action:'execute',module:p.module||'platform',target:p.actionId||'module-action',source:p.source||'action',context:{commandId:p.commandId,route:p.route}},
      'gei-session:ready':{eventType:'session',action:'initialize',module:'platform',target:'session',source:'session'},
      'gei-session:change':{eventType:'session',action:'update',module:'platform',target:'session',source:'session'},
      'gei-discovery:change':{eventType:'discovery',action:'change',module:'discovery',target:'discovery-state',source:'discovery'},
      'gei-knowledge:change':{eventType:'knowledge',action:'change',module:'knowledge',target:'knowledge-graph',source:'knowledge'},
      'gei-profile:change':{eventType:'profile',action:'change',module:'profile',target:'profile',source:'profile'},
      'gei-progress:change':{eventType:'progress',action:'change',module:'progress',target:'progress',source:'progress'},
      'gei-portfolio:change':{eventType:'portfolio',action:'change',module:'portfolio',target:'portfolio',source:'portfolio'}
    };
    const base=maps[name];if(base)record({...base,context:{...(base.context||{}),payload:p}});
  }
  function events(){return state.events.slice()}
  function inspect(id){return state.events.find(e=>e.eventId===id)||null}
  function clear(){state={events:[]};emit()}
  window.GEI_PROVENANCE=Object.freeze({version:'1.0.12',record,validate,events,inspect,clear,getState:snapshot});
  ['gei-platform:navigate','gei-command:execute','gei-action:execute','gei-session:ready','gei-session:change','gei-discovery:change','gei-knowledge:change','gei-profile:change','gei-progress:change','gei-portfolio:change'].forEach(n=>document.addEventListener(n,e=>mapEvent(n,e.detail)));
  function render(){
    const list=document.getElementById('provenance-list');if(!list)return;
    const items=events();list.innerHTML=items.map(e=>`<button type="button" class="prov-item" data-prov="${e.eventId}"><span>${e.eventType}</span><strong>${e.action}</strong><small>${e.module} · ${new Date(e.occurredAt).toLocaleString()}</small></button>`).join('')||'<p class="muted">No provenance events recorded yet.</p>';
    const count=document.getElementById('provenance-count');if(count)count.textContent=`${items.length} event${items.length===1?'':'s'}`;
    list.querySelectorAll('[data-prov]').forEach(b=>b.addEventListener('click',()=>{const e=inspect(b.dataset.prov),out=document.getElementById('provenance-detail');if(out)out.textContent=JSON.stringify(e,null,2)}));
  }
  document.addEventListener('DOMContentLoaded',()=>{document.getElementById('provenance-clear')?.addEventListener('click',clear);render()});
})();
