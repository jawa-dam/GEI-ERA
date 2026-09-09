/* GEI Command Orchestration Registry v1.0.10 */
(() => {
  'use strict';
  const commands = [
    {id:'open-control-room',label:'Open Control Room',module:'control-room',aliases:['open control room','control room','home'],description:'Open the primary GEI dashboard.'},
    {id:'open-platform',label:'Open Platform',module:'platform',aliases:['open platform','platform'],description:'Open the shared GEI Platform Core.'},
    {id:'open-discovery',label:'Open Discovery',module:'discovery',aliases:['open discovery','discovery','discover'],description:'Open curated GEI knowledge discovery.'},
    {id:'open-knowledge',label:'Open Knowledge Graph',module:'knowledge',aliases:['open knowledge graph','knowledge graph','knowledge'],description:'Open the GEI relationship graph.'},
    {id:'open-timeline',label:'Show My Journey',module:'timeline',aliases:['show my journey','open timeline','timeline','my journey'],description:'Open the browser-local GEI activity timeline.'},
    {id:'open-search',label:'Open Search',module:'search',aliases:['open search','search'],description:'Open unified GEI search.'},
    {id:'open-academy',label:'Open Academy',module:'academy',aliases:['open academy','academy','learn'],description:'Open the current Academy foundation surface.'},
    {id:'open-research',label:'Open Research',module:'research',aliases:['open research','research'],description:'Open GEI research and provenance.'},
    {id:'open-laboratory',label:'Open Laboratory',module:'laboratory',aliases:['open laboratory','laboratory','lab'],description:'Open the conceptual GEI Laboratory.'},
    {id:'start-dam-lab',label:'Start Dam Simulator',module:'laboratory',aliases:['start dam lab','open dam simulator','dam simulator','start dam simulator'],description:'Open the Laboratory surface for the Dam Simulator.'},
    {id:'start-mill-lab',label:'Start Mill Simulator',module:'laboratory',aliases:['start mill lab','open mill simulator','mill simulator','start mill simulator'],description:'Open the Laboratory surface for the Mill Simulator.'},
    {id:'start-water-lab',label:'Start Water Lab',module:'laboratory',aliases:['start water lab','open water lab','water lab'],description:'Open the Laboratory surface for the Water Lab.'},
    {id:'open-word-detective',label:'Open Word Detective',module:'laboratory',aliases:['open word detective','word detective'],description:'Open the Laboratory surface for Word Detective.'},
    {id:'open-library',label:'Open Library',module:'library',aliases:['open library','library'],description:'Open the current GEI Library surface.'},
    {id:'open-media',label:'Open Media',module:'media',aliases:['open media','media'],description:'Open the GEI media catalog.'},
    {id:'open-marketplace',label:'Open Marketplace',module:'marketplace',aliases:['open marketplace','marketplace','shop'],description:'Open the GEI Marketplace.'},
    {id:'open-vault',label:'Open Vault',module:'vault',aliases:['open vault','vault'],description:'Open the entitlement-aware GEI Vault surface.'},
    {id:'open-profile',label:'Open Profile',module:'profile',aliases:['open profile','profile','my profile'],description:'Open the shared local profile.'},
    {id:'view-progress',label:'View My Progress',module:'progress',aliases:['view my progress','open progress','progress','my progress'],description:'Open learning progress and achievements.'},
    {id:'view-portfolio',label:'View Research Portfolio',module:'portfolio',aliases:['view research portfolio','open portfolio','portfolio','my portfolio'],description:'Open the research portfolio presentation.'},
    {id:'explore-day-one',label:'Explore Genesis Day One',module:'explore',aliases:['explore day one','open day one','day one','genesis day one'],description:'Open the current Genesis Day One learning surface.'}
  ];
  window.GEI_COMMAND_DATA=Object.freeze({version:'1.0.10',commands:Object.freeze(commands.map(Object.freeze))});
})();
