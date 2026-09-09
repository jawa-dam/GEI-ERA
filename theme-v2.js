(() => {
  const KEY='gei-theme';
  const saved=localStorage.getItem(KEY);
  const initial=saved || (matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
  document.documentElement.dataset.theme=initial;
  window.setGEITheme=(mode)=>{document.documentElement.dataset.theme=mode;localStorage.setItem(KEY,mode);document.dispatchEvent(new CustomEvent('gei-theme-change',{detail:mode}));};
  window.toggleGEITheme=()=>setGEITheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
})();
