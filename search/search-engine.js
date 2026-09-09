/* GEI Unified Search & Command Engine v1.0.9 */
(() => {
  'use strict';
  const KEY='gei-search-v1.0.9', MAX_RECENT=8;
  const data=()=>window.GEI_SEARCH_DATA||{records:[]};
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(_){return{}}};
  const write=s=>{try{localStorage.setItem(KEY,JSON.stringify(s))}catch(_){}};
  let state={query:'',category:'All',recent:[],...read()};
  state={query:typeof state.query==='string'?state.query:'',category:typeof state.category==='string'?state.category:'All',recent:Array.isArray(state.recent)?state.recent.slice(0,MAX_RECENT):[]};
  const records=()=>data().records||[];
  const categories=()=>['All',...new Set(records().map(r=>r.category))];
  const getState=()=>JSON.parse(JSON.stringify(state));
  const persist=()=>{write(state);document.dispatchEvent(new CustomEvent('gei-search:change',{detail:getState()}));render()};
  function score(record,q){
    if(!q)return 1;
    const text=[record.id,record.title,record.type,record.category,record.description].join(' ').toLowerCase();
    const terms=q.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let value=0;terms.forEach(t=>{if(record.title.toLowerCase().includes(t))value+=5;if(record.id.toLowerCase().includes(t))value+=4;if(text.includes(t))value+=2});
    return value;
  }
  function results(){
    const q=state.query.trim();
    return records().filter(r=>state.category==='All'||r.category===state.category).map(r=>({record:r,score:score(r,q)})).filter(x=>!q||x.score>0).sort((a,b)=>b.score-a.score||a.record.title.localeCompare(b.record.title));
  }
  function setQuery(q){state.query=String(q||'');persist()}
  function setCategory(c){state.category=categories().includes(c)?c:'All';persist()}
  function select(id){const r=records().find(x=>x.id===id);if(!r)return null;state.recent=[id,...state.recent.filter(x=>x!==id)].slice(0,MAX_RECENT);persist();window.location.href=r.route;return r}
  function clearRecent(){state.recent=[];persist()}
  function reset(){state={query:'',category:'All',recent:[]};persist()}
  function render(){
    const input=document.getElementById('search-query');if(input&&input.value!==state.query)input.value=state.query;
    const filters=document.getElementById('search-filters');if(filters)filters.innerHTML=categories().map(c=>`<button type="button" class="search-filter ${c===state.category?'active':''}" data-category="${c}">${c}</button>`).join('');
    const list=document.getElementById('search-results');if(list){const items=results();list.innerHTML=items.map(x=>`<article class="search-result"><div><span class="result-type">${x.record.type}</span><h3>${x.record.title}</h3><p>${x.record.description}</p><small>${x.record.id} · ${x.record.category}</small></div><button type="button" data-open="${x.record.id}">Open →</button></article>`).join('')||'<p class="muted">No matching GEI records. Try another search.</p>';const count=document.getElementById('search-count');if(count)count.textContent=`${items.length} result${items.length===1?'':'s'}`;}
    const recent=document.getElementById('search-recent');if(recent)recent.innerHTML=state.recent.map(id=>records().find(r=>r.id===id)).filter(Boolean).map(r=>`<button type="button" data-open="${r.id}">${r.title}</button>`).join('')||'<span class="muted">No recent commands.</span>';
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('search-query')?.addEventListener('input',e=>{state.query=e.target.value;persist()});
    document.getElementById('search-query')?.addEventListener('keydown',e=>{if(e.key==='Enter'){const first=results()[0]?.record;if(first)select(first.id)}});
    document.getElementById('search-filters')?.addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b)setCategory(b.dataset.category)});
    document.getElementById('search-results')?.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)select(b.dataset.open)});
    document.getElementById('search-recent')?.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)select(b.dataset.open)});
    document.getElementById('search-reset')?.addEventListener('click',reset);
    document.getElementById('search-clear-recent')?.addEventListener('click',clearRecent);
    document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.getElementById('search-query')?.focus()}});
    render();
  });
  window.GEI_SEARCH=Object.freeze({version:'1.0.9',getState,records,categories,results,setQuery,setCategory,select,clearRecent,reset});
})();