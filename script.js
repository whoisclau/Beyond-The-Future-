/*const links = document.getElementById("links");
function showMenu(){
    links.style.right = "0";
}
function hideMenu(){
    links.style.right = "-200px";
}*/



/*let linksEL = document.querySelector('.links');
let iconEL = document.querySelector('.icon');

linksEL.addEventListener('click', () => {
    iconEL.classList.toggle('show');
})*/




/*let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
/* function currentSlide(n) {
  showSlides(slideIndex = n);
} */

/*function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/


/*--image slides--*/
let slideIndex = [1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}


/*----copyrigth years automation----*/
document.addEventListener("DOMContentLoaded", function() {
  var currentYear = new Date().getFullYear();
  document.getElementById("copyrightYear").innerText = currentYear;
});