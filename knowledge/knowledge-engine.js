/* GEI Unified Knowledge Graph Engine v1.0.7
 * Relationship navigation is an organizational model only. It does not establish truth, proof, identity, or authority.
 */
(() => {
  'use strict';
  const KEY='gei-knowledge-v1.0.7';
  const data=()=>window.GEI_KNOWLEDGE_DATA||{nodes:[],edges:[]};
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(_){return{}}};
  const write=s=>{try{localStorage.setItem(KEY,JSON.stringify(s))}catch(_){}};
  let state={selected:null,filter:'All',recent:[],...read()};
  const normalize=s=>({selected:typeof s.selected==='string'?s.selected:null,filter:typeof s.filter==='string'?s.filter:'All',recent:Array.isArray(s.recent)?s.recent.slice(0,8):[]});
  state=normalize(state);
  const nodes=()=>data().nodes||[];
  const edges=()=>data().edges||[];
  const categories=()=>['All',...new Set(nodes().map(n=>n.category))];
  const node=id=>nodes().find(n=>n.id===id)||null;
  const neighbors=id=>edges().filter(e=>e.from===id||e.to===id).map(e=>({edge:e,node:node(e.from===id?e.to:e.from)})).filter(x=>x.node);
  const visible=()=>nodes().filter(n=>state.filter==='All'||n.category===state.filter);
  const getState=()=>JSON.parse(JSON.stringify(state));
  function persist(event='gei-knowledge:change'){state=normalize(state);write(state);document.dispatchEvent(new CustomEvent(event,{detail:getState()}));render()}
  function select(id){if(!node(id))return null;state.selected=id;state.recent=[id,...state.recent.filter(x=>x!==id)].slice(0,8);persist('gei-knowledge:select');return node(id)}
  function setFilter(f){state.filter=categories().includes(f)?f:'All';persist()}
  function clear(){state={selected:null,filter:'All',recent:[]};persist('gei-knowledge:clear')}
  function render(){
    const list=document.getElementById('knowledge-nodes');if(!list)return;
    const selected=node(state.selected);
    list.innerHTML=visible().map(n=>`<button type="button" class="knowledge-node ${n.id===state.selected?'active':''}" data-node="${n.id}"><span>${n.category}</span><strong>${n.label}</strong><small>${n.id}</small></button>`).join('')||'<div class="knowledge-empty">No nodes match this category.</div>';
    const cats=document.getElementById('knowledge-filters');if(cats)cats.innerHTML=categories().map(c=>`<button type="button" class="knowledge-filter ${c===state.filter?'active':''}" data-filter="${c}">${c}</button>`).join('');
    const detail=document.getElementById('knowledge-detail');
    if(detail){
      if(!selected){detail.innerHTML='<p class="muted">Select a node to inspect its relationships.</p>'}
      else {const links=neighbors(selected.id);detail.innerHTML=`<div class="detail-eyebrow">${selected.type} · ${selected.id}</div><h2>${selected.label}</h2><p>This node is connected to ${links.length} relationship${links.length===1?'':'s'} in the current GEI model.</p><div class="relationship-list">${links.map(x=>`<button type="button" data-node="${x.node.id}"><span>${x.edge.relation}</span>${x.node.label}</button>`).join('')||'<span class="muted">No relationships recorded.</span>'}</div><a class="open-record" href="${selected.route}">Open system →</a>`}
    }
    const count=document.getElementById('knowledge-count');if(count)count.textContent=`${visible().length} nodes · ${edges().length} relationships`;
    const recent=document.getElementById('knowledge-recent');if(recent)recent.innerHTML=state.recent.map(node).filter(Boolean).map(n=>`<button type="button" data-node="${n.id}">${n.label}</button>`).join('')||'<span>No recent nodes yet.</span>';
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('knowledge-filters')?.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b)setFilter(b.dataset.filter)});
    document.getElementById('knowledge-nodes')?.addEventListener('click',e=>{const b=e.target.closest('[data-node]');if(b)select(b.dataset.node)});
    document.getElementById('knowledge-detail')?.addEventListener('click',e=>{const b=e.target.closest('[data-node]');if(b)select(b.dataset.node)});
    document.getElementById('knowledge-recent')?.addEventListener('click',e=>{const b=e.target.closest('[data-node]');if(b)select(b.dataset.node)});
    document.getElementById('knowledge-clear')?.addEventListener('click',clear);
    render();
  });
  window.GEI_KNOWLEDGE=Object.freeze({version:'1.0.7',getState,nodes,edges,node,neighbors,categories,visible,select,setFilter,clear});
  document.addEventListener('gei-platform:navigate',render);
  document.addEventListener('gei-session:change',render);
})();
