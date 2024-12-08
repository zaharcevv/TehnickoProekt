function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

function closeMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('open');
}

// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
  const rotateIcon = document.getElementById('hamburger-icon');

  // Toggle the "rotated" class on click
  rotateIcon.addEventListener('click', function() {
    rotateIcon.classList.toggle('active'); // Add/remove the "rotated" class
  });
});




  