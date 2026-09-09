/* GEI Unified Activity Timeline & Journey Engine v1.0.11
 * Records browser-local journey events for presentation and navigation only.
 * Local activity is not an authoritative academic, identity, payment, or credential record.
 */
(() => {
  'use strict';
  const KEY='gei-timeline-v1.0.8', MAX=80;
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(_){return{}}};
  const write=s=>{try{localStorage.setItem(KEY,JSON.stringify(s))}catch(_){}};
  let state={events:[],...read()};
  state={events:Array.isArray(state.events)?state.events.slice(0,MAX):[]};
  const label=id=>(window.GEI_TIMELINE_DATA?.modules||[]).find(m=>m.id===id)?.label||String(id||'GEI');
  const snapshot=()=>JSON.parse(JSON.stringify(state));
  const persist=()=>{write(state);document.dispatchEvent(new CustomEvent('gei-timeline:change',{detail:snapshot()}));render()};
  function add(type,title,module,detail){
    const event={id:`evt-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,type:String(type||'activity'),title:String(title||'GEI activity'),module:String(module||'platform'),detail:String(detail||''),at:new Date().toISOString()};
    const previous=state.events[0];
    if(previous&&previous.type===event.type&&previous.title===event.title&&previous.module===event.module&&Date.now()-Date.parse(previous.at)<1500)return event;
    state.events=[event,...state.events].slice(0,MAX);persist();return event;
  }
  function recordNavigation(module){return add('navigation',`Visited ${label(module)}`,module,'Platform navigation activity');}
  function record(eventType,payload){
    const map={
      'gei-session:ready':['session','Session initialized','platform'],
      'gei-session:change':['session','Session activity updated','platform'],
      'gei-session:module':['navigation',`Activity in ${label(payload?.currentModule)}`,payload?.currentModule||'platform'],
      'gei-discovery:change':['discovery','Discovery state changed','discovery'],
      'gei-knowledge:change':['knowledge','Knowledge Graph activity','knowledge'],
      'gei-profile:change':['profile','Profile activity','profile'],
      'gei-progress:change':['progress','Learning progress updated','progress'],
      'gei-portfolio:change':['portfolio','Research portfolio updated','portfolio'],
      'gei-command:execute':['command',`Command: ${payload?.label||'GEI action'}`,payload?.module||'platform',`Dispatched ${payload?.commandId||'command'} from ${payload?.source||'command'}`],
      'gei-action:dispatch':['action',`Module action: ${payload?.label||'GEI action'}`,payload?.module||'platform',`Adapter ${payload?.version||'unknown'} dispatched ${payload?.commandId||'action'}`]
    };
    const item=map[eventType];if(item)add(item[0],item[1],item[2],item[3]||eventType);
  }
  function clear(){state={events:[]};persist()}
  function getState(){return snapshot()}
  function events(){return state.events.slice()}
  window.GEI_TIMELINE=Object.freeze({version:'1.0.11',getState,events,recordNavigation,record,clear});
  document.addEventListener('gei-platform:navigate',e=>recordNavigation(e.detail?.activeModule));
  ['gei-session:ready','gei-session:change','gei-session:module','gei-discovery:change','gei-knowledge:change','gei-profile:change','gei-progress:change','gei-portfolio:change','gei-command:execute','gei-action:dispatch'].forEach(name=>document.addEventListener(name,e=>record(name,e.detail)));
  function render(){
    const list=document.getElementById('timeline-list');if(!list)return;
    const items=events();
    list.innerHTML=items.map(e=>`<article class="timeline-item"><div class="timeline-dot" aria-hidden="true"></div><div class="timeline-card"><div class="timeline-meta"><span>${e.type}</span><time datetime="${e.at}">${new Date(e.at).toLocaleString()}</time></div><h3>${e.title}</h3><p>${e.detail}</p><small>${label(e.module)}</small></div></article>`).join('')||'<p class="muted">Your GEI journey will appear here as you explore the platform.</p>';
    const count=document.getElementById('timeline-count');if(count)count.textContent=`${items.length} event${items.length===1?'':'s'}`;
  }
  document.addEventListener('DOMContentLoaded',()=>{document.getElementById('timeline-clear')?.addEventListener('click',clear);render()});
})();
