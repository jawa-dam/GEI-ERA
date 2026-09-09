/* GEI Module Action Contracts v1.0.11
 * Each contract describes actions a module owns. The adapter layer may
 * request an action, but the module remains the owner of its state,
 * permissions, evidence, commerce, and credentials.
 */
(() => {
  'use strict';
  const contracts = [
    {
      module:'control-room', version:'1.0.11',
      actions:{'open-control-room':{label:'Open Control Room',kind:'navigate',route:'../'}}
    },
    {
      module:'platform', version:'1.0.11',
      actions:{'open-platform':{label:'Open Platform',kind:'navigate',route:'../platform/'}}
    },
    {
      module:'discovery', version:'1.0.11',
      actions:{'open-discovery':{label:'Open Discovery',kind:'navigate',route:'../discovery/'}}
    },
    {
      module:'knowledge', version:'1.0.11',
      actions:{'open-knowledge':{label:'Open Knowledge Graph',kind:'navigate',route:'../knowledge/'}}
    },
    {
      module:'timeline', version:'1.0.11',
      actions:{'open-timeline':{label:'Open Timeline',kind:'navigate',route:'../timeline/'}}
    },
    {
      module:'search', version:'1.0.11',
      actions:{'open-search':{label:'Open Search',kind:'navigate',route:'../search/'}}
    },
    {
      module:'academy', version:'1.0.11',
      actions:{'open-academy':{label:'Open Academy',kind:'navigate',route:'../content/'},'explore-day-one':{label:'Explore Day One',kind:'navigate',route:'../content/'}}
    },
    {
      module:'research', version:'1.0.11',
      actions:{'open-research':{label:'Open Research',kind:'navigate',route:'../research/'}}
    },
    {
      module:'laboratory', version:'1.0.11',
      actions:{
        'open-laboratory':{label:'Open Laboratory',kind:'navigate',route:'../laboratory/'},
        'start-dam-lab':{label:'Start Dam Lab',kind:'navigate',route:'../laboratory/?experiment=GEI-LAB-001'},
        'start-mill-lab':{label:'Start Mill Lab',kind:'navigate',route:'../laboratory/?experiment=GEI-LAB-002'},
        'start-water-lab':{label:'Start Water Lab',kind:'navigate',route:'../laboratory/?experiment=GEI-LAB-003'},
        'open-word-detective':{label:'Open Word Detective',kind:'navigate',route:'../laboratory/?experiment=GEI-LAB-004'}
      }
    },
    {
      module:'library', version:'1.0.11',
      actions:{'open-library':{label:'Open Library',kind:'navigate',route:'../content/'}}
    },
    {
      module:'media', version:'1.0.11',
      actions:{'open-media':{label:'Open Media',kind:'navigate',route:'../media/'}}
    },
    {
      module:'marketplace', version:'1.0.11',
      actions:{'open-marketplace':{label:'Open Marketplace',kind:'navigate',route:'../commerce/'}}
    },
    {
      module:'vault', version:'1.0.11',
      actions:{'open-vault':{label:'Open Vault',kind:'navigate',route:'../commerce/'}}
    },
    {
      module:'profile', version:'1.0.11',
      actions:{'open-profile':{label:'Open Profile',kind:'navigate',route:'../profile/'}}
    },
    {
      module:'progress', version:'1.0.11',
      actions:{'view-progress':{label:'View Progress',kind:'navigate',route:'../progress/'}}
    },
    {
      module:'portfolio', version:'1.0.11',
      actions:{'view-portfolio':{label:'View Portfolio',kind:'navigate',route:'../portfolio/'}}
    }
  ];
  window.GEI_ACTION_DATA=Object.freeze({version:'1.0.11',contracts:Object.freeze(contracts.map(c=>Object.freeze({...c,actions:Object.freeze(c.actions)}))),get(module){return contracts.find(c=>c.module===module)||null}});
})();
