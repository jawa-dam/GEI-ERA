(() => {
  const KEY = 'gei-theme';
  const root = document.documentElement;
  const saved = localStorage.getItem(KEY);
  const initial = saved || 'dark';

  root.dataset.theme = initial;

  window.setGEITheme = (mode) => {
    const next = ['dark', 'light', 'system'].includes(mode) ? mode : 'dark';
    root.dataset.theme = next;
    localStorage.setItem(KEY, next);
    document.dispatchEvent(new CustomEvent('gei-theme-change', { detail: next }));
  };

  window.getGEITheme = () => root.dataset.theme || 'dark';

  window.toggleGEITheme = () => {
    const current = window.getGEITheme();
    setGEITheme(current === 'dark' ? 'light' : 'dark');
  };
})();
