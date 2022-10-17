let slideIndex = 1;
showSlides(slideIndex);

/* // Next/previous controls */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* // Thumbnail image controls */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "grid";
}

function menu() {
    let menu = document.getElementsByClassName("menu");
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.add('active');
    }
}
function menutoggle() {
    let menu = document.getElementsByClassName("menu");
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove('active');
    }
}



