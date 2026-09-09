(() => {
  const KEY='gei-media-v0.8';
  const initial={selectedType:'all',selectedId:null,history:[]};
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY))||initial}catch{return initial}};
  const write=s=>localStorage.setItem(KEY,JSON.stringify(s));
  const assets=()=>window.GEI_MEDIA?.assets||[];
  window.GEI_MEDIA_ENGINE={
    state:read, assets,
    filter(type){const s=read();s.selectedType=type;write(s);return assets().filter(a=>type==='all'||a.type===type)},
    select(id){const a=assets().find(x=>x.id===id);if(!a)return null;const s=read();s.selectedId=id;s.history=[id,...s.history.filter(x=>x!==id)].slice(0,10);write(s);window.dispatchEvent(new CustomEvent('gei-media-select',{detail:a}));return a},
    reset(){localStorage.removeItem(KEY);location.reload()}
  };

  // V1.0.1 Platform Integration: media remains a catalog/experience layer.
  const platformScript=document.createElement('script'); platformScript.src='../platform/platform-integration.js'; document.head.appendChild(platformScript);
})();
