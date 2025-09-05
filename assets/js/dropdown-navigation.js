/**
 * Dropdown Navigation Toggle
 * Handles click-based dropdown functionality for navigation menu
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get all dropdown toggle elements
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  // Add click event listener to each dropdown toggle
  dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Get the parent menu item
      const menuItem = this.closest('.masthead__menu-item');
      
      // Close all other open dropdowns
      const allMenuItems = document.querySelectorAll('.masthead__menu-item.has-dropdown');
      allMenuItems.forEach(function(item) {
        if (item !== menuItem) {
          item.classList.remove('dropdown-active');
        }
      });
      
      // Toggle the current dropdown
      menuItem.classList.toggle('dropdown-active');
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.masthead__menu-item.has-dropdown')) {
      const activeDropdowns = document.querySelectorAll('.masthead__menu-item.dropdown-active');
      activeDropdowns.forEach(function(item) {
        item.classList.remove('dropdown-active');
      });
    }
  });
  
  // Close dropdowns when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const activeDropdowns = document.querySelectorAll('.masthead__menu-item.dropdown-active');
      activeDropdowns.forEach(function(item) {
        item.classList.remove('dropdown-active');
      });
    }
  });
});