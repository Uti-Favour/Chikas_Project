document.addEventListener('DOMContentLoaded', function(){
  window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  });

  
});

