document.addEventListener('DOMContentLoaded', () => {
  // Click on the link inside any LI that contains a submenu
  document.addEventListener('click', (e) => {
  const toggle = e.target.closest('.masthead__menu-item.has-dropdown > .dropdown-toggle, .masthead__menu-item.has-dropdown > span.dropdown-toggle, .masthead__menu-item.has-dropdown > a.dropdown-toggle, .masthead__menu-item.has-dropdown > button.dropdown-toggle');
  if (!toggle) return;

  e.preventDefault();
  e.stopPropagation();

  const item = toggle.closest('.masthead__menu-item.has-dropdown');

  document.querySelectorAll('.masthead__menu-item.dropdown-active')
    .forEach(el => { if (el !== item) el.classList.remove('dropdown-active'); });

  item.classList.toggle('dropdown-active');

  if (toggle.matches('button.dropdown-toggle')) {
    toggle.setAttribute('aria-expanded', item.classList.contains('dropdown-active') ? 'true' : 'false');
  }
});

// close on outside click / Esc
document.addEventListener('click', () => {
  document.querySelectorAll('.masthead__menu-item.dropdown-active')
    .forEach(el => el.classList.remove('dropdown-active'));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.masthead__menu-item.dropdown-active')
      .forEach(el => el.classList.remove('dropdown-active'));
  }
});

});
