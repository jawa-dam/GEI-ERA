/* GEI Unified Knowledge & Discovery Engine v1.0.6
 * Discovery indexes published and planned GEI records for navigation only.
 * It does not establish truth, credentials, payment, or protected access.
 */
(() => {
  'use strict';
  const KEY='gei-discovery-v1.0.6';
  const data=()=>window.GEI_DISCOVERY_DATA||{records:[]};
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(_){return{}}};
  const write=s=>{try{localStorage.setItem(KEY,JSON.stringify(s))}catch(_){}};
  let state={query:'',category:'All',recent:[],...read()};
  const normalize=s=>({query:String(s.query||''),category:String(s.category||'All'),recent:Array.isArray(s.recent)?s.recent.slice(0,8):[]});
  state=normalize(state);
  function records(){return data().records||[]}
  function categories(){return ['All',...new Set(records().map(r=>r.category))]}
  function matches(r,q,c){const hay=[r.id,r.title,r.type,r.category,r.description,...(r.tags||[])].join(' ').toLowerCase();return (!q||hay.includes(q.toLowerCase()))&&(c==='All'||r.category===c)}
  function results(){return records().filter(r=>matches(r,state.query.trim(),state.category))}
  function persist(){state=normalize(state);write(state);document.dispatchEvent(new CustomEvent('gei-discovery:change',{detail:getState()}));render()}
  function getState(){return JSON.parse(JSON.stringify(state))}
  function setQuery(q){state.query=String(q||'');persist()}
  function setCategory(c){state.category=categories().includes(c)?c:'All';persist()}
  function select(id){const r=records().find(x=>x.id===id);if(!r)return null;state.recent=[id,...state.recent.filter(x=>x!==id)].slice(0,8);persist();return r}
  function clear(){state={query:'',category:'All',recent:[]};persist()}
  window.GEI_DISCOVERY=Object.freeze({version:'1.0.6',getState,records,results,categories,setQuery,setCategory,select,clear});
  function render(){
    const grid=document.getElementById('discovery-results'); if(!grid)return;
    const items=results();
    grid.innerHTML=items.map(r=>`<article class="discovery-card"><div class="discovery-card-top"><span>${r.type}</span><b>${r.category}</b></div><h3>${r.title}</h3><p>${r.description}</p><div class="discovery-tags">${(r.tags||[]).slice(0,4).map(t=>`<span>#${t}</span>`).join('')}</div><a class="discovery-open" href="${r.route}" data-id="${r.id}">Open record →</a></article>`).join('')||'<div class="discovery-empty">No GEI records match your search. Try another term or category.</div>';
    const count=document.getElementById('discovery-count');if(count)count.textContent=`${items.length} record${items.length===1?'':'s'}`;
    const cats=document.getElementById('discovery-categories');if(cats)cats.innerHTML=categories().map(c=>`<button type="button" class="discovery-filter ${c===state.category?'active':''}" data-category="${c}">${c}</button>`).join('');
    const recent=document.getElementById('discovery-recent');if(recent)recent.innerHTML=state.recent.map(id=>records().find(r=>r.id===id)).filter(Boolean).map(r=>`<a href="${r.route}">${r.title}</a>`).join('')||'<span>No recent records yet.</span>';
  }
  document.addEventListener('DOMContentLoaded',()=>{
    const input=document.getElementById('discovery-search');input?.addEventListener('input',e=>setQuery(e.target.value));
    document.getElementById('discovery-categories')?.addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b)setCategory(b.dataset.category)});
    document.getElementById('discovery-results')?.addEventListener('click',e=>{const a=e.target.closest('[data-id]');if(a)select(a.dataset.id)});
    document.getElementById('discovery-clear')?.addEventListener('click',clear);
    render();
  });
  document.addEventListener('gei-session:change',render);
  document.addEventListener('gei-platform:navigate',render);
})();
