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
    slides[i].classList.add("hidden");
  }
  slides[slideIndex-1].classList.add("block") 
  setTimeout(showSlides, 2000);
}

// Next/previous controls
const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

showSlides(slideIndex);


//Animate on Scroll
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});