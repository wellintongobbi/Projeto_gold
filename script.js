<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {

  /* =======================
     SLIDER
  ======================== */
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function nextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  if (slides.length > 0) {
    setInterval(nextSlide, 4000);
  }

  /* =======================
     ANIMAÇÃO SOBRE
  ======================== */
  const sobreBox = document.querySelector(".sobre-box");

  if (sobreBox) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(sobreBox);
  }
/* =======================
   HEADER SHRINK
======================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
=======
document.addEventListener("DOMContentLoaded", function() {

  /* =======================
     SLIDER
  ======================== */
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function nextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  if (slides.length > 0) {
    setInterval(nextSlide, 4000);
  }

  /* =======================
     ANIMAÇÃO SOBRE
  ======================== */
  const sobreBox = document.querySelector(".sobre-box");

  if (sobreBox) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(sobreBox);
  }
/* =======================
   HEADER SHRINK
======================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
>>>>>>> 0e3e34a424dbd1895eaa92b34d594d101c236ab1
});