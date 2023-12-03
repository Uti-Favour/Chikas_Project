
 
  // JavaScript for toggling mobile menu visibility
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuClosedIcon = document.getElementById('menu-closed-icon');
  const menuOpenIcon = document.getElementById('menu-open-icon');

menuOpenIcon.addEventListener('click' , function(){
mobileMenu.classList.toggle('block');
});

