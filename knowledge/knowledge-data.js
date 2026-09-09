/* GEI Unified Knowledge Graph & Relationship Layer v1.0.7 */
(() => {
  'use strict';
  const nodes = [
    {id:'GEI-PLT-001',label:'GEI Platform Core',type:'Platform',category:'Platform',route:'../platform/'},
    {id:'GEI-DIS-001',label:'GEI Knowledge Discovery',type:'Discovery',category:'Discovery',route:'../discovery/'},
    {id:'GEI-RES-001',label:'Research Decision & Outcome Engine',type:'Research',category:'Research',route:'../research/'},
    {id:'GEI-RES-002',label:'Provenance & Audit Trail',type:'Research',category:'Research',route:'../research/'},
    {id:'GEI-LES-001',label:'Genesis Day One Guided Introduction',type:'Lesson',category:'Academy',route:'../content/'},
    {id:'GEI-LAB-001',label:'Dam Simulator',type:'Experiment',category:'Laboratory',route:'../laboratory/'},
    {id:'GEI-LAB-002',label:'Mill Simulator',type:'Experiment',category:'Laboratory',route:'../laboratory/'},
    {id:'GEI-LAB-003',label:'Water Lab',type:'Experiment',category:'Laboratory',route:'../laboratory/'},
    {id:'GEI-LAB-004',label:'Word Detective',type:'Experiment',category:'Laboratory',route:'../laboratory/'},
    {id:'GEI-PRG-001',label:'Unified Progress & Achievement',type:'Progress',category:'Learning',route:'../progress/'},
    {id:'GEI-PRO-001',label:'Shared Profile & Experience',type:'Profile',category:'Profile',route:'../profile/'},
    {id:'GEI-POR-001',label:'Research Portfolio',type:'Portfolio',category:'Research',route:'../portfolio/'},
    {id:'GEI-MED-001',label:'GEI Control Room Experience',type:'Experience',category:'Control Room',route:'../'},
    {id:'GEI-MKT-001',label:'GEI Marketplace',type:'Marketplace',category:'Commerce',route:'../commerce/'},
    {id:'GEI-LIB-001',label:'GEI Library',type:'Library',category:'Library',route:'../content/'}
  ];
  const edges = [
    {from:'GEI-PLT-001',to:'GEI-DIS-001',relation:'connects'},
    {from:'GEI-PLT-001',to:'GEI-PRG-001',relation:'connects'},
    {from:'GEI-PLT-001',to:'GEI-PRO-001',relation:'connects'},
    {from:'GEI-DIS-001',to:'GEI-RES-001',relation:'discovers'},
    {from:'GEI-DIS-001',to:'GEI-LES-001',relation:'discovers'},
    {from:'GEI-DIS-001',to:'GEI-LAB-001',relation:'discovers'},
    {from:'GEI-DIS-001',to:'GEI-PRG-001',relation:'discovers'},
    {from:'GEI-RES-001',to:'GEI-RES-002',relation:'supports-provenance'},
    {from:'GEI-RES-001',to:'GEI-POR-001',relation:'feeds'},
    {from:'GEI-LAB-001',to:'GEI-LAB-002',relation:'related'},
    {from:'GEI-LAB-001',to:'GEI-LAB-003',relation:'related'},
    {from:'GEI-LAB-003',to:'GEI-LES-001',relation:'illustrates'},
    {from:'GEI-LAB-004',to:'GEI-LES-001',relation:'illustrates'},
    {from:'GEI-PRG-001',to:'GEI-LAB-001',relation:'tracks'},
    {from:'GEI-PRG-001',to:'GEI-RES-001',relation:'tracks'},
    {from:'GEI-PRG-001',to:'GEI-PRO-001',relation:'personalizes'},
    {from:'GEI-POR-001',to:'GEI-RES-002',relation:'references'},
    {from:'GEI-MED-001',to:'GEI-PLT-001',relation:'gateway'},
    {from:'GEI-MKT-001',to:'GEI-LIB-001',relation:'offers-content'}
  ];
  window.GEI_KNOWLEDGE_DATA = Object.freeze({version:'1.0.7',nodes:Object.freeze(nodes.map(Object.freeze)),edges:Object.freeze(edges.map(Object.freeze))});
})();
