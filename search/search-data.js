/* GEI Unified Search & Command Layer v1.0.9 */
(() => {
  'use strict';
  const records = [
    {id:'GEI-PLT-001',title:'GEI Platform Core',type:'Platform',category:'Platform',description:'Shared platform layer connecting GEI systems.',route:'../platform/'},
    {id:'GEI-DIS-001',title:'GEI Knowledge Discovery',type:'Discovery',category:'Discovery',description:'Unified discovery surface for curated GEI records.',route:'../discovery/'},
    {id:'GEI-KNO-001',title:'GEI Knowledge Graph',type:'Knowledge',category:'Knowledge',description:'Relationship map connecting GEI systems and records.',route:'../knowledge/'},
    {id:'GEI-TIM-001',title:'GEI Activity Timeline',type:'Timeline',category:'Journey',description:'Chronological browser-local activity journey.',route:'../timeline/'},
    {id:'GEI-RES-001',title:'Research Decision & Outcome Engine',type:'Research',category:'Research',description:'GEI research decision and outcome record surface.',route:'../research/'},
    {id:'GEI-RES-002',title:'Provenance & Audit Trail',type:'Research',category:'Research',description:'Research provenance, evidence, and review-state surface.',route:'../research/'},
    {id:'GEI-LES-001',title:'Genesis Day One Guided Introduction',type:'Lesson',category:'Academy',description:'Guided introduction to Genesis Day One learning content.',route:'../content/'},
    {id:'GEI-LAB-001',title:'Dam Simulator',type:'Experiment',category:'Laboratory',description:'Conceptual hydraulic dam learning experiment.',route:'../laboratory/'},
    {id:'GEI-LAB-002',title:'Mill Simulator',type:'Experiment',category:'Laboratory',description:'Conceptual mill and water-flow learning experiment.',route:'../laboratory/'},
    {id:'GEI-LAB-003',title:'Water Lab',type:'Experiment',category:'Laboratory',description:'Conceptual water-system learning experiment.',route:'../laboratory/'},
    {id:'GEI-LAB-004',title:'Word Detective',type:'Experiment',category:'Laboratory',description:'Language and word-observation learning experiment.',route:'../laboratory/'},
    {id:'GEI-PRG-001',title:'Unified Progress & Achievement',type:'Progress',category:'Learning',description:'Local learning progress and achievement presentation.',route:'../progress/'},
    {id:'GEI-PRO-001',title:'Shared Profile & Experience',type:'Profile',category:'Identity',description:'Local profile and experience presentation.',route:'../profile/'},
    {id:'GEI-POR-001',title:'Research Portfolio',type:'Portfolio',category:'Research',description:'Research activity and future credential presentation.',route:'../portfolio/'},
    {id:'GEI-MED-001',title:'GEI Control Room Experience',type:'Experience',category:'Control Room',description:'Primary GEI dashboard and system gateway.',route:'../'},
    {id:'GEI-MED-002',title:'GEI Media',type:'Media',category:'Media',description:'GEI media catalog and experience layer.',route:'../media/'},
    {id:'GEI-MKT-001',title:'GEI Marketplace',type:'Marketplace',category:'Commerce',description:'GEI product catalog and commerce surface.',route:'../commerce/'},
    {id:'GEI-LIB-001',title:'GEI Library',type:'Library',category:'Library',description:'Current content-library surface.',route:'../content/'},
    {id:'GEI-VLT-001',title:'GEI Vault',type:'Vault',category:'Commerce',description:'Entitlement-aware knowledge access surface.',route:'../commerce/'},
    {id:'GEI-ACC-001',title:'GEI Academy',type:'Academy',category:'Academy',description:'Current Academy foundation surface.',route:'../content/'}
  ];
  window.GEI_SEARCH_DATA = Object.freeze({version:'1.0.9',records:Object.freeze(records.map(Object.freeze))});
})();