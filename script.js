// JavaScript for toggling mobile menu visibility
  document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuClosedIcon = document.getElementById('menu-closed-icon');
    const menuOpenIcon = document.getElementById('menu-open-icon');

    // Set initial state - menu closed
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');
    menuClosedIcon.classList.remove('hidden');
    menuOpenIcon.classList.add('hidden');

    // Function to toggle the mobile menu
    function toggleMobileMenu() {
      const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuButton.setAttribute('aria-expanded', !expanded);
      mobileMenu.classList.toggle('block');
      menuClosedIcon.classList.toggle('block');
      menuOpenIcon.classList.toggle('block');
    }

    // Toggle the mobile menu when clicking the image button
    document.getElementById('logo').addEventListener('click', toggleMobileMenu);

    // Toggle the mobile menu when clicking the menu button with icons
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking outside of it
    document.addEventListener('click', function (event) {
      if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        menuClosedIcon.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
      }
    });
    
  });

