document.addEventListener('DOMContentLoaded', () => {
  const tabsRoot = document.querySelector('.js-tabs');
  if (!tabsRoot) return;

  const tabs   = tabsRoot.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.mission-panel');

  const setActive = (selector) => {
    const active = document.querySelector('.mission-panel.is-active');
    if (active) active.classList.remove('is-active');
    const next = document.querySelector(selector);
    if (next) next.classList.add('is-active');

    tabs.forEach(t => {
      const on = t.dataset.target === selector;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    history.replaceState(null, '', selector);
  };
    

tabs.forEach(tab => tab.addEventListener('click', () => setActive(tab.dataset.target)));
  const initial = (location.hash && document.querySelector(location.hash + '.mission-panel')) ? location.hash : '#m1';
  setActive(initial);
});
