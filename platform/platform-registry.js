/* GEI Platform Registry v1.0.6 */
(() => {
  'use strict';
  const modules = [
    {id:'control-room',label:'Control Room',path:'../',state:'implemented',description:'Primary GEI dashboard and system gateway.'},
    {id:'platform',label:'Platform',path:'../platform/',state:'implemented',description:'Shared GEI Platform Core and module registry.'},
    {id:'explore',label:'Explore',path:'../content/',state:'implemented',description:'Structured GEI content explorer.'},
    {id:'discovery',label:'Discovery',path:'../discovery/',state:'implemented',description:'Unified GEI knowledge discovery and record navigation.'},
    {id:'academy',label:'Academy',path:'../content/',state:'foundation',description:'Current Academy content surface.'},
    {id:'research',label:'Research',path:'../research/',state:'implemented',description:'Research, evidence, sources, provenance, chronology, and review.'},
    {id:'laboratory',label:'Laboratory',path:'../laboratory/',state:'implemented',description:'Interactive conceptual GEI experiments.'},
    {id:'library',label:'Library',path:'../content/',state:'implemented',description:'Current content-library surface.'},
    {id:'media',label:'Media',path:'../media/',state:'implemented',description:'GEI media catalog and experience layer.'},
    {id:'marketplace',label:'Marketplace',path:'../commerce/',state:'implemented',description:'GEI product catalog and commerce surface.'},
    {id:'vault',label:'Vault',path:'../commerce/',state:'implemented',description:'Entitlement-aware knowledge access surface.'},
    {id:'profile',label:'Profile',path:'../profile/',state:'implemented',description:'Shared local profile and experience presentation layer.'},
    {id:'progress',label:'Progress',path:'../progress/',state:'implemented',description:'Unified local learning progress and achievement presentation layer.'},
    {id:'portfolio',label:'Portfolio',path:'../portfolio/',state:'implemented',description:'Research portfolio and future credential presentation layer.'}
  ];
  window.GEI_PLATFORM_REGISTRY=Object.freeze({version:'1.0.6',modules:Object.freeze(modules.map(Object.freeze)),get(id){return modules.find(m=>m.id===id)||null},list(){return modules.slice()}});
})();
