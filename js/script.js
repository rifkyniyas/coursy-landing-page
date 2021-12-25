//Toggle Navbar
const navbar = document.getElementById('navbar')
const toggleNavbar = () => {
    navbar.classList.toggle('hidden')
}
window.onclick = (event) => {
    if (!event.target.matches('#toggleBtn') && !navbar.classList.contains('hidden')) {
        toggleNavbar()
    }
}

let slideIndex = 1;

// Thumbnail image controls
const showSlides = (n) => {
  var i;
  var slides = document.getElementsByClassName("slider-item");

  if (n > slides.length) slideIndex = 1
  if (n < 1) slideIndex = slides.length

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Next/previous controls
const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

showSlides(slideIndex);