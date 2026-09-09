/* GEI Research Portfolio Engine v1.0.5 */
(() => {
  'use strict';
  const esc = v => String(v ?? '').replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
  const readProgress = () => window.GEI_PROGRESS?.getState?.() || null;
  const readSession = () => window.GEI_SESSION?.getState?.() || null;
  const researchState = () => window.GEIResearch?.getState?.() || {reviews:{},notes:{}};
  const records = () => window.GEI_RESEARCH?.records || [];

  function snapshot(){
    const p=readProgress(), s=readSession(), r=researchState();
    const touched = new Set([
      ...Object.keys(r.reviews||{}).filter(k => r.reviews[k]),
      ...Object.keys(r.notes||{}).filter(k => r.notes[k])
    ]);
    return {p,s,r,touched,records:records()};
  }

  function render(){
    const root=document.querySelector('#portfolio-app'); if(!root) return;
    const {p,s,r,touched,records}=snapshot();
    const achievements=p?.achievements||[];
    const unlocked=achievements.filter(a=>a.unlocked);
    const totalXP=Number(p?.xp?.total||0);
    const displayName=s?.profile?.displayName || 'GEI Visitor';
    const persona=s?.profile?.persona || 'visitor';
    root.querySelector('[data-name]').textContent=displayName;
    root.querySelector('[data-persona]').textContent=persona;
    root.querySelector('[data-xp]').textContent=String(totalXP);
    root.querySelector('[data-achievements]').textContent=`${unlocked.length}/${achievements.length}`;
    root.querySelector('[data-modules]').textContent=String(p?.moduleCount||0);
    root.querySelector('[data-research]').textContent=String(touched.size);
    root.querySelector('[data-id]').textContent=(s?.identity?.visitorId||'local').slice(-8).toUpperCase();
    root.querySelector('[data-achievement-list]').innerHTML=achievements.map(a=>`<article class="achievement ${a.unlocked?'unlocked':''}"><span class="badge">${esc(a.icon)}</span><div><h3>${esc(a.title)}</h3><p>${esc(a.description)}</p></div><strong>${a.unlocked?'UNLOCKED':'LOCKED'} · ${Number(a.xp||0)} XP</strong></article>`).join('');
    root.querySelector('[data-research-list]').innerHTML=records.slice(0,12).map(x=>`<div class="record"><span>${esc(x.id)}</span><strong>${esc(x.title)}</strong><small>${touched.has(x.id)?'TOUCHED':'NOT TOUCHED'}</small></div>`).join('') || '<p class="muted">Research records are not currently available.</p>';
    root.querySelector('[data-credential]').textContent='No verified credential is issued by this local portfolio.';
  }

  function boot(){
    const root=document.querySelector('#portfolio-app'); if(!root) return;
    ['gei-session:change','gei-session:module','gei-profile:change','gei-progress:ready','gei-progress:change','gei-lab-progress'].forEach(e=>document.addEventListener(e,render));
    window.addEventListener('storage',render);
    render();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
  window.GEI_PORTFOLIO={version:'1.0.5',getSnapshot:snapshot,refresh:render};
})();
