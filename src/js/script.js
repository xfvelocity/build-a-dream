const mainNav = document.getElementById('jsMenu');
const navBarToggle = document.getElementById('jsToggle');
const servicesBox = document.getElementsByClassName('servicesColumn');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('pressed');
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    servicesBox[2].style.animation = '1s ease-in slide forwards';
    servicesBox[1].style.animation = '1.3s ease-in slide forwards';
    servicesBox[0].style.animation = '1.6s ease-in slide forwards';
  }
});
