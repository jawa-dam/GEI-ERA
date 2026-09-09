(() => {
  const KEY = 'gei-commerce-v0.6';
  const defaultState = { entitlements: [], lastProduct: null };
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || defaultState; } catch { return defaultState; } };
  const write = state => localStorage.setItem(KEY, JSON.stringify(state));
  const products = () => window.GEI_COMMERCE?.products || [];
  const getProduct = id => products().find(p => p.id === id || p.sku === id);
  const hasAccess = id => read().entitlements.some(e => e.productId === id && ['active','demo'].includes(e.status));

  window.GEI_COMMERCE_ENGINE = {
    state: read,
    products,
    getProduct,
    hasAccess,
    grantDemo(productId) {
      const product = getProduct(productId); if (!product) return false;
      const state = read();
      if (!state.entitlements.some(e => e.productId === product.id)) state.entitlements.push({ id:'DEMO-' + product.id, productId:product.id, status:'demo', source:'local-demo', issuedAt:new Date().toISOString(), expiresAt:null });
      state.lastProduct = product.id; write(state); return true;
    },
    recordProviderEntitlement(entitlement) {
      if (!entitlement?.productId || !getProduct(entitlement.productId)) return false;
      const state = read();
      state.entitlements = state.entitlements.filter(e => e.productId !== entitlement.productId);
      state.entitlements.push({ ...entitlement, status: entitlement.status || 'active', recordedAt:new Date().toISOString() });
      state.lastProduct = entitlement.productId; write(state); return true;
    },
    revoke(productId) {
      const state = read(); state.entitlements = state.entitlements.filter(e => e.productId !== productId); write(state);
    },
    reset() { localStorage.removeItem(KEY); },
    checkout(productId) {
      const product = getProduct(productId); if (!product) return { ok:false, reason:'product-not-found' };
      window.dispatchEvent(new CustomEvent('gei-commerce-checkout', { detail:{ product } }));
      return { ok:true, provider:'external', product };
    }
  };
})();
