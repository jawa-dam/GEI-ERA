(() => {
  const KEY='gei-lab-v0.7';
  const initial={xp:0,completed:[],runs:0};
  const state=()=>{try{return JSON.parse(localStorage.getItem(KEY))||initial}catch{return initial}};
  const save=s=>localStorage.setItem(KEY,JSON.stringify(s));
  const complete=id=>{const s=state();const e=window.GEI_LAB.experiments.find(x=>x.id===id);if(!e)return false;if(!s.completed.includes(id)){s.completed.push(id);s.xp+=e.xp;}s.runs++;save(s);window.dispatchEvent(new CustomEvent('gei-lab-progress',{detail:s}));return true};
  window.GEI_LAB_ENGINE={state,complete,reset(){localStorage.removeItem(KEY);location.reload()}};

  // V1.0.1 Platform Integration: laboratory progress remains local educational state.
  const platformScript=document.createElement('script'); platformScript.src='../platform/platform-integration.js'; document.head.appendChild(platformScript);
})();
