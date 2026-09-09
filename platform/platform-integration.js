/* GEI Platform Integration v1.0.1 */
(() => {
  'use strict';
  const REGISTRY_SRC = '../platform/platform-registry.js';
  const CORE_SRC = '../platform/platform-core.js';
  const NAV_ID = 'gei-platform-unified-nav';
  const PATH = window.location.pathname;

  function load(src) {
    return new Promise((resolve, reject) => {
      const existing = [...document.scripts].find(s => s.src.includes(src));
      if (existing) return existing.dataset.loaded === 'true' ? resolve() : existing.addEventListener('load', resolve, { once:true });
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => { script.dataset.loaded = 'true'; resolve(); };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function moduleForPath() {
    if (PATH.includes('/research/')) return 'research';
    if (PATH.includes('/laboratory/')) return 'laboratory';
    if (PATH.includes('/media/')) return 'media';
    if (PATH.includes('/commerce/')) return 'marketplace';
    if (PATH.includes('/content/')) return 'explore';
    if (PATH.includes('/platform/')) return 'platform';
    return 'control-room';
  }

  function render() {
    if (document.getElementById(NAV_ID) || !window.GEI_PLATFORM_REGISTRY) return;
    const current = moduleForPath();
    const nav = document.createElement('header');
    nav.id = NAV_ID;
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'GEI unified navigation');
    nav.innerHTML = `<style>
      #${NAV_ID}{position:sticky;top:0;z-index:9999;padding:10px 14px;border-bottom:1px solid rgba(47,210,255,.18);background:rgba(6,7,13,.92);backdrop-filter:blur(16px);font-family:Inter,system-ui,sans-serif}
      #${NAV_ID} .gei-nav-inner{width:min(1240px,100%);margin:auto;display:flex;align-items:center;gap:10px;overflow-x:auto;scrollbar-width:none}
      #${NAV_ID} .gei-nav-inner::-webkit-scrollbar{display:none}
      #${NAV_ID} .gei-nav-brand{font-weight:900;letter-spacing:.12em;color:#f4fbff;white-space:nowrap;margin-right:4px}
      #${NAV_ID} .gei-nav-brand small{display:block;color:#91a8b8;font-size:8px;letter-spacing:.18em;margin-top:2px}
      #${NAV_ID} a{color:#dff8ff;text-decoration:none;font-size:11px;padding:8px 9px;border:1px solid transparent;border-radius:9px;white-space:nowrap}
      #${NAV_ID} a:hover,#${NAV_ID} a[aria-current="page"]{border-color:rgba(47,210,255,.28);background:rgba(47,210,255,.09);color:#2fd2ff}
      #${NAV_ID} .gei-nav-status{margin-left:auto;color:#91a8b8;font-size:9px;letter-spacing:.12em;white-space:nowrap}
      @media(max-width:700px){#${NAV_ID}{padding:8px 9px}#${NAV_ID} .gei-nav-brand{display:none}#${NAV_ID} .gei-nav-status{display:none}}
    </style><div class="gei-nav-inner"><a class="gei-nav-brand" href="../">GEI<small>PLATFORM</small></a>${window.GEI_PLATFORM_REGISTRY.list().map(m => `<a href="${m.path}" data-module="${m.id}" ${m.id===current?'aria-current="page"':''}>${m.label}</a>`).join('')}<span class="gei-nav-status">CORE 1.0.1</span></div>`;
    document.body.prepend(nav);
    nav.addEventListener('click', event => {
      const link = event.target.closest('[data-module]');
      if (!link || !window.GEIPlatform) return;
      window.GEIPlatform.navigate(link.dataset.module);
    });
    if (window.GEIPlatform) window.GEIPlatform.navigate(current);
  }

  async function boot() {
    try { await load(REGISTRY_SRC); await load(CORE_SRC); render(); }
    catch (error) { console.warn('GEI Platform Integration unavailable:', error); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true }); else boot();
})();
