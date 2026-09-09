/* GEI Unified Progress & Achievement Layer v1.0.4 */
(() => {
  'use strict';

  const achievements = [
    { id:'first-step', title:'First Step', description:'Visit a GEI module for the first time.', xp:25, icon:'01' },
    { id:'systems-explorer', title:'Systems Explorer', description:'Visit 5 distinct GEI modules.', xp:50, icon:'05' },
    { id:'lab-runner', title:'Lab Runner', description:'Run your first Laboratory experiment.', xp:25, icon:'LAB' },
    { id:'lab-builder', title:'Lab Builder', description:'Complete 3 different Laboratory experiments.', xp:75, icon:'3X' },
    { id:'researcher', title:'Researcher', description:'Record a local research review or note.', xp:50, icon:'R' },
    { id:'personalized', title:'Personalized', description:'Set a display name or choose a learner/researcher persona.', xp:50, icon:'ID' },
    { id:'research-explorer', title:'Research Explorer', description:'Interact with 3 or more research records through review or notes.', xp:75, icon:'3R' }
  ];

  const modules = [
    { id:'academy', label:'Academy', source:'optional', description:'Learning progress adapter; activates when an Academy progress state is available.' },
    { id:'laboratory', label:'Laboratory', source:'gei-lab-v0.7', description:'Experiment runs, completions, and existing Lab XP.' },
    { id:'research', label:'Research', source:'gei-research-state-v05', description:'Local research reviews and notes.' },
    { id:'platform', label:'Platform', source:'gei-platform-v1.0', description:'Module visits recorded by the shared Platform Core.' },
    { id:'profile', label:'Profile', source:'gei-session-v1.0.2', description:'Persona and display-name personalization.' }
  ];

  window.GEI_PROGRESS_DATA = Object.freeze({
    version:'1.0.4',
    achievements:Object.freeze(achievements.map(Object.freeze)),
    modules:Object.freeze(modules.map(Object.freeze))
  });
})();
