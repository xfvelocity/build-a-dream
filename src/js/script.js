const mainNav = document.getElementById('jsMenu');
const navBarToggle = document.getElementById('jsToggle');
const servicesBox = document.getElementsByClassName('servicesColumn');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('pressed');
});
