/* GEI Unified Knowledge & Discovery Layer v1.0.6 */
(() => {
  'use strict';
  const records = [
    {id:'GEI-RES-001',title:'GEI Research Decision & Outcome Engine',type:'Research',category:'Research',description:'Structured research records for questions, decisions, evidence, outcomes, and revisions.',tags:['research','decisions','outcomes','provenance'],route:'../research/'},
    {id:'GEI-RES-002',title:'GEI Provenance & Audit Trail',type:'Research',category:'Research',description:'A provenance architecture for tracing sources, revisions, evidence, and research decisions.',tags:['provenance','audit','sources','evidence'],route:'../research/'},
    {id:'GEI-LES-001',title:'Genesis Day One — Guided Introduction',type:'Lesson',category:'Academy',description:'An introductory GEI learning experience built around observation, language, questions, and systems thinking.',tags:['academy','genesis','day-one','learning'],route:'../content/'},
    {id:'GEI-GDE-001',title:'GEI Discovery Guide',type:'Guide',category:'Library',description:'An entry-level guide introducing GEI vocabulary and framework concepts.',tags:['guide','ebook','discovery'],route:'../content/'},
    {id:'GEI-PRD-001',title:'GEI Blueprint Collection',type:'Product',category:'Marketplace',description:'A planned premium publication concept combining visual models, interpretation, and supporting material.',tags:['blueprint','premium','publication'],route:'../commerce/'},
    {id:'GEI-MED-001',title:'GEI Control Room Experience',type:'Experience',category:'Control Room',description:'The interactive dashboard connecting GEI exploration, learning, research, laboratory, library, and commerce surfaces.',tags:['control-room','interactive','dashboard'],route:'../'},
    {id:'GEI-LAB-001',title:'Dam Simulator',type:'Experiment',category:'Laboratory',description:'A conceptual hydraulic-flow learning experiment using a controllable gate.',tags:['laboratory','dam','water','systems'],route:'../laboratory/'},
    {id:'GEI-LAB-002',title:'Mill Simulator',type:'Experiment',category:'Laboratory',description:'A conceptual water-to-mechanical-energy learning experiment.',tags:['laboratory','mill','water','energy'],route:'../laboratory/'},
    {id:'GEI-LAB-003',title:'Water Lab',type:'Experiment',category:'Laboratory',description:'A conceptual exploration of water behavior and systems thinking.',tags:['laboratory','water','systems'],route:'../laboratory/'},
    {id:'GEI-LAB-004',title:'Word Detective',type:'Experiment',category:'Laboratory',description:'A language-focused learning experiment for investigating words and relationships.',tags:['laboratory','language','words'],route:'../laboratory/'},
    {id:'GEI-LAB-005',title:'Genesis Systems Challenge',type:'Challenge',category:'Laboratory',description:'A premium conceptual challenge connecting GEI systems observations.',tags:['laboratory','genesis','challenge'],route:'../laboratory/'},
    {id:'GEI-PLT-001',title:'GEI Platform Core',type:'Platform',category:'Platform',description:'The shared application layer connecting GEI modules and navigation.',tags:['platform','navigation','systems'],route:'../platform/'},
    {id:'GEI-PRO-001',title:'Shared Profile & Experience',type:'Profile',category:'Profile',description:'Browser-local personalization built on the shared visitor/session layer.',tags:['profile','personalization','visitor'],route:'../profile/'},
    {id:'GEI-PRG-001',title:'Unified Progress & Achievement',type:'Progress',category:'Learning',description:'A unified local view of learning activity, XP, achievements, and module participation.',tags:['progress','xp','achievements','learning'],route:'../progress/'},
    {id:'GEI-POR-001',title:'Research Portfolio',type:'Portfolio',category:'Research',description:'A presentation layer for local research activity, achievements, and future credential pathways.',tags:['portfolio','research','credentials'],route:'../portfolio/'},
    {id:'GEI-MED-002',title:'GEI Systems Introduction',type:'Video',category:'Media',description:'Planned introductory GEI media record.',tags:['media','video','introduction'],route:'../media/'},
    {id:'GEI-MED-003',title:'GEI Guided Research Audio',type:'Audio',category:'Media',description:'Planned guided research audio record.',tags:['media','audio','research'],route:'../media/'},
    {id:'GEI-MED-004',title:'GEI Interactive Book',type:'Book',category:'Media',description:'Planned interactive book record for the GEI media system.',tags:['media','book','interactive'],route:'../media/'},
    {id:'GEI-MED-005',title:'Genesis Day One Visual Study',type:'Image Study',category:'Media',description:'Planned visual study record for Genesis Day One.',tags:['media','image','day-one'],route:'../media/'}
  ];
  window.GEI_DISCOVERY_DATA = Object.freeze({version:'1.0.6',records:Object.freeze(records.map(Object.freeze))});
})();
