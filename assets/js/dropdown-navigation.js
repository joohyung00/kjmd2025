document.addEventListener('DOMContentLoaded', () => {
  // Click on the link inside any LI that contains a submenu
  document.addEventListener('click', (e) => {
    const toggleLink = e.target.closest('.masthead__menu-item');
    if (!toggleLink) return;

    const hasMenu = toggleLink.querySelector('.dropdown-menu, .subnav, ul ul');
    const clickedAnchor = e.target.closest('a');

    if (clickedAnchor && hasMenu) {
      e.preventDefault();
      e.stopPropagation();

      // Close others
      document.querySelectorAll('.masthead__menu-item.dropdown-active')
        .forEach(item => { if (item !== toggleLink) item.classList.remove('dropdown-active'); });

      // Toggle current
      toggleLink.classList.toggle('dropdown-active');
    }
  });

  // Close when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.masthead__menu-item.dropdown-active')
      .forEach(item => item.classList.remove('dropdown-active'));
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.masthead__menu-item.dropdown-active')
        .forEach(item => item.classList.remove('dropdown-active'));
    }
  });
});
