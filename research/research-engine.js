(() => {
  const KEY = "gei-research-state-v05";
  const defaultState = { query:"", type:"all", status:"all", selected:null, reviews:{}, notes:{} };
  let state = load();

  function load(){ try { return {...defaultState, ...(JSON.parse(localStorage.getItem(KEY)) || {})}; } catch(e){ return {...defaultState}; } }
  function save(){ localStorage.setItem(KEY, JSON.stringify(state)); }
  function records(){ return window.GEI_RESEARCH?.records || []; }
  function filtered(){
    const q = state.query.trim().toLowerCase();
    return records().filter(r => {
      const hay = [r.id,r.title,r.type,r.status,r.abstract,...(r.keywords||[])].join(" ").toLowerCase();
      return (!q || hay.includes(q)) && (state.type === "all" || r.type === state.type) && (state.status === "all" || r.status === state.status);
    });
  }
  function esc(v){ return String(v ?? "").replace(/[&<>\"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c])); }
  function setState(patch){ state={...state,...patch}; save(); render(); }
  function openRecord(id){ state.selected=id; save(); render(); }
  function closeRecord(){ state.selected=null; save(); render(); }
  function setReview(id,value){ state.reviews[id]=value; save(); render(); }
  function addNote(id,note){ if(note.trim()){ state.notes[id]=note.trim(); save(); render(); } }
  function render(){
    const root=document.querySelector("#research-app"); if(!root) return;
    const rows=filtered();
    const selected=records().find(r=>r.id===state.selected);
    root.querySelector("[data-count]").textContent=`${rows.length} of ${records().length} records`;
    root.querySelector("[data-grid]").innerHTML=rows.map(r=>`<article class="record-card" tabindex="0" data-open="${esc(r.id)}"><div class="card-top"><span class="type">${esc(r.type)}</span><span class="status">${esc(r.status)}</span></div><h3>${esc(r.title)}</h3><p>${esc(r.abstract)}</p><div class="tags">${(r.keywords||[]).slice(0,4).map(x=>`<span>${esc(x)}</span>`).join("")}</div><footer><strong>${esc(r.id)}</strong><span>v${esc(r.version)}</span></footer></article>`).join("") || `<div class="empty"><strong>No research records match.</strong><span>Try another search or filter.</span></div>`;
    const modal=root.querySelector("[data-modal]");
    if(!selected){ modal.hidden=true; return; }
    modal.hidden=false;
    modal.querySelector("[data-detail]").innerHTML=`<div class="detail-kicker">${esc(selected.type)} · ${esc(selected.id)}</div><h2>${esc(selected.title)}</h2><p class="detail-abstract">${esc(selected.abstract)}</p><div class="detail-grid"><section><h4>Claims</h4><ul>${(selected.claims||[]).map(x=>`<li>${esc(x)}</li>`).join("")||"<li>No claims recorded.</li>"}</ul></section><section><h4>Evidence</h4><ul>${(selected.evidence||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section><section><h4>Sources</h4><ul>${(selected.sources||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section><section><h4>Related records</h4><ul>${(selected.related||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section></div><div class="provenance"><h4>Provenance</h4><p><b>Method:</b> ${esc(selected.provenance?.method)}</p><p><b>Recorded:</b> ${esc(selected.provenance?.recordedAt)}</p><p><b>Evidence refs:</b> ${(selected.provenance?.evidenceRefs||[]).map(esc).join(" · ")}</p></div><div class="review-box"><label for="review-select"><b>Review state</b></label><select id="review-select"><option value="unreviewed">Unreviewed</option><option value="in-review">In review</option><option value="reviewed">Reviewed</option><option value="revision-requested">Revision requested</option><option value="accepted">Accepted</option><option value="archived">Archived</option></select><label for="research-note"><b>Research note</b></label><textarea id="research-note" rows="3" placeholder="Record a local research note…">${esc(state.notes[selected.id]||"")}</textarea><button class="primary" data-save-note>Save note</button></div>`;
    modal.querySelector("#review-select").value=state.reviews[selected.id]||"unreviewed";
  }
  document.addEventListener("DOMContentLoaded",()=>{
    const root=document.querySelector("#research-app"); if(!root) return;
    root.querySelector("[data-search]").value=state.query;
    root.querySelector("[data-search]").addEventListener("input",e=>setState({query:e.target.value}));
    root.querySelectorAll("[data-type]").forEach(b=>b.addEventListener("click",()=>setState({type:b.dataset.type})));
    root.querySelector("[data-status]").addEventListener("change",e=>setState({status:e.target.value}));
    root.querySelector("[data-grid]").addEventListener("click",e=>{const card=e.target.closest("[data-open]"); if(card) openRecord(card.dataset.open);});
    root.querySelector("[data-grid]").addEventListener("keydown",e=>{const card=e.target.closest("[data-open]"); if(card&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openRecord(card.dataset.open);}});
    root.querySelector("[data-modal]").addEventListener("click",e=>{if(e.target.matches("[data-close]")||e.target.matches("[data-modal]")) closeRecord(); if(e.target.matches("[data-save-note]")){const id=state.selected; addNote(id,e.target.parentElement.querySelector("textarea").value);}});
    root.querySelector("[data-modal]").addEventListener("change",e=>{if(e.target.id==="review-select") setReview(state.selected,e.target.value);});
    document.addEventListener("keydown",e=>{if(e.key==="Escape"&&state.selected) closeRecord();});
    render();
  });
  window.GEIResearch = { getState:()=>({...state}), filter:filtered };
})();
