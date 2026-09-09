window.GEI_COMMERCE = {
  version: '0.6.0',
  products: [
    { id:'GEI-GDE-001', sku:'GEI-DISCOVERY-10', title:'GEI Discovery Guide', description:'Entry-level guide to the GEI framework and vocabulary.', type:'ebook', price:10, currency:'USD', access:'premium', status:'planned', fulfillment:'digital', unlocks:['GEI-GDE-001'] },
    { id:'GEI-PRD-001', sku:'GEI-BLUEPRINT-25', title:'GEI Blueprint Collection', description:'Research-rich visual publication concept combining GEI models, interpretation, and supporting material.', type:'publication', price:25, currency:'USD', access:'premium', status:'planned', fulfillment:'digital', unlocks:['GEI-PRD-001'] },
    { id:'GEI-PRE-001', sku:'GEI-PREMIUM-69', title:'GEI Premium Blueprint Access', description:'Premium GEI access package reserved for future protected research and learning experiences.', type:'premium-access', price:69, currency:'USD', access:'premium', status:'planned', fulfillment:'digital', unlocks:['GEI-PRE-001'] }
  ],
  entitlements: [
    { id:'GEI-ENT-DEMO', productId:'GEI-GDE-001', status:'demo', source:'local-demo', issuedAt:null, expiresAt:null }
  ],
  rules: {
    purchaseCreatesEntitlement:true,
    entitlementGrantsAccess:true,
    providerNeutral:true,
    noPaymentCredentialsInClient:true,
    demoEntitlementsAreClearlyLabeled:true
  }
};
