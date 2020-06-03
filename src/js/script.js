const button = document.querySelector('.button');
const navLinks = document.querySelector('.nav-links');
const topHeader = document.querySelector('nav .title');
const navLinksLi = document.querySelectorAll('.nav-links li');

button.addEventListener('click', (e) => {
  e.preventDefault();
  navLinks.classList.toggle('pressed');
  topHeader.classList.toggle('border-remove');
  navLinks.style.animation = '.5s ease-out forwards navExtend'
  navLinksLi.forEach(function (link) {
    link.style.animation = '1s ease-out forwards navLinksAppear'
  })
});

var slideIndex = [1,1,2,3];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}