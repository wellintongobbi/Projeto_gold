document.addEventListener("DOMContentLoaded", function() {
console.log("rodando");
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
  ======================== */
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  /* =======================
     MENU HAMBURGUER
  ======================== */
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  /* =======================
     SMOOTH SCROLL TOP 🔥
  ======================== */
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");

      if (targetId === "#" || targetId === "") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        const header = document.querySelector("header");
        const headerHeight = header.offsetHeight;

        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        // fecha menu mobile
        const navMenu = document.querySelector("nav ul");
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
        }
      }
    });
  });

  /* =======================
   SMOOTH SCROLL GLOBAL 🔥
  ======================= */
  const lenis = new Lenis({
    lerp: 0.1, // mais suave
    wheelMultiplier: 0.8, // scroll mais controlado
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

});