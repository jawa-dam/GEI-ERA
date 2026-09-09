window.GEI_CONTENT = [
  {
    id:"GEI-RES-001", title:"GEI Research Decision & Outcome Engine", slug:"gei-research-decision-outcome-engine",
    description:"A structured research record for questions, decisions, evidence, outcomes, and revisions.", contentType:"research", category:"Research", author:"Genesis Engineered Interpretations",
    created:"2026-09-08", updated:"2026-09-08", version:"0.1.0", status:"published", access:"free", price:null, currency:null,
    tags:["research","decisions","outcomes","provenance"], sources:["GEI Research Architecture"], related:["GEI-RES-002"], media:[],
    seo:{title:"GEI Research Decision & Outcome Engine",description:"Explore the GEI framework for documenting research questions, decisions, evidence, and outcomes.",canonical:"https://yalltoo.com/research/gei-research-decision-outcome-engine"},
    provenance:{recordedBy:"GEI Research System",recordedAt:"2026-09-08T00:00:00Z",method:"Version-controlled research architecture",evidenceRefs:["GEI-MASTER-BUILD.md"],auditNote:"V0.3 demonstration record."}
  },
  {
    id:"GEI-RES-002", title:"GEI Provenance & Audit Trail", slug:"gei-provenance-audit-trail",
    description:"A planned evidence layer for tracing sources, revisions, research decisions, and supporting material.", contentType:"research", category:"Research", author:"Genesis Engineered Interpretations",
    created:"2026-09-08", updated:"2026-09-08", version:"0.1.0", status:"planned", access:"free", price:null, currency:null,
    tags:["provenance","audit","sources","evidence"], sources:["GEI Research Architecture"], related:["GEI-RES-001"], media:[],
    seo:{title:"GEI Provenance & Audit Trail",description:"A structured provenance layer for tracking GEI sources, revisions, evidence, and research decisions.",canonical:"https://yalltoo.com/research/gei-provenance-audit-trail"},
    provenance:{recordedBy:"GEI Research System",recordedAt:"2026-09-08T00:00:00Z",method:"Architecture planning record",evidenceRefs:["GEI-MASTER-BUILD.md"],auditNote:"Planned V0.3 content record."}
  },
  {
    id:"GEI-LES-001", title:"Genesis Day One — Guided Introduction", slug:"genesis-day-one-guided-introduction",
    description:"An introductory learning experience connecting the Genesis Day One text to observation, questions, language, and systems thinking.", contentType:"lesson", category:"Academy", author:"Genesis Engineered Interpretations",
    created:"2026-09-08", updated:"2026-09-08", version:"0.1.0", status:"published", access:"free", price:null, currency:null,
    tags:["academy","genesis","day-one","learning"], sources:["Genesis 1:1–5 (KJV)"], related:["GEI-RES-001"], media:["day-one-interactive"],
    seo:{title:"Genesis Day One — Guided Introduction",description:"Begin a guided GEI learning experience exploring Genesis Day One through language and systems thinking.",canonical:"https://yalltoo.com/academy/genesis-day-one-guided-introduction"},
    provenance:{recordedBy:"GEI Academy System",recordedAt:"2026-09-08T00:00:00Z",method:"Curriculum architecture record",evidenceRefs:["Genesis 1:1–5 (KJV)"],auditNote:"Demonstration lesson record."}
  },
  {
    id:"GEI-GDE-001", title:"GEI Discovery Guide", slug:"gei-discovery-guide", description:"An entry-level guide designed to introduce visitors to the GEI framework and vocabulary.", contentType:"guide", category:"Library", author:"Genesis Engineered Interpretations",
    created:"2026-09-08", updated:"2026-09-08", version:"0.1.0", status:"planned", access:"premium", price:10, currency:"USD",
    tags:["guide","ebook","discovery","premium"], sources:["GEI content architecture"], related:["GEI-LES-001"], media:[],
    seo:{title:"GEI Discovery Guide",description:"A guided introduction to Genesis Engineered Interpretations for curious new readers.",canonical:"https://yalltoo.com/library/gei-discovery-guide"},
    provenance:{recordedBy:"GEI Publishing System",recordedAt:"2026-09-08T00:00:00Z",method:"Product catalog architecture",evidenceRefs:["GEI-MASTER-BUILD.md"],auditNote:"Planned catalog record; no purchase flow is active in V0.3."}
  },
  {
    id:"GEI-PRD-001", title:"GEI Blueprint Collection", slug:"gei-blueprint-collection", description:"A premium research-rich publication concept combining visual models, interpretation, and supporting material.", contentType:"product", category:"Marketplace", author:"Genesis Engineered Interpretations",
    created:"2026-09-08", updated:"2026-09-08", version:"0.1.0", status:"planned", access:"premium", price:25, currency:"USD",
    tags:["blueprint","premium","marketplace","publication"], sources:["GEI publishing architecture"], related:["GEI-GDE-001"], media:["blueprint-preview"],
    seo:{title:"GEI Blueprint Collection",description:"Explore the planned premium GEI Blueprint Collection of visual and research-rich publications.",canonical:"https://yalltoo.com/marketplace/gei-blueprint-collection"},
    provenance:{recordedBy:"GEI Commerce System",recordedAt:"2026-09-08T00:00:00Z",method:"Product catalog architecture",evidenceRefs:["GEI-MASTER-BUILD.md"],auditNote:"Catalog architecture only; checkout remains a later release."}
  },
  {
    id:"GEI-MED-001", title:"GEI Control Room Experience", slug:"gei-control-room-experience", description:"The interactive dashboard experience connecting GEI exploration, research, academy, laboratory, library, marketplace, and vault systems.", contentType:"media", category:"Experience", author:"Genesis Engineered Interpretations",
    created:"2026-09-08", updated:"2026-09-08", version:"0.2.0", status:"published", access:"free", price:null, currency:null,
    tags:["control-room","interactive","dashboard","experience"], sources:["GEI-ERA V0.2"], related:["GEI-RES-001"], media:[],
    seo:{title:"GEI Control Room Experience",description:"Enter the GEI Control Room and explore the interactive research, learning, laboratory, library, and marketplace architecture.",canonical:"https://yalltoo.com/"},
    provenance:{recordedBy:"GEI Platform System",recordedAt:"2026-09-08T00:00:00Z",method:"Release record",evidenceRefs:["V0.2-INTERACTIVE-CONTROL-ROOM.md"],auditNote:"Represents the V0.2 Control Room release."}
  }
];

// V1.0.1 Platform Integration.
const platformScript=document.createElement('script'); platformScript.src='../platform/platform-integration.js'; document.head.appendChild(platformScript);
