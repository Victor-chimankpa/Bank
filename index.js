// let navbar = document.querySelector(".navitem");
window.addEventListener("scroll", function () {
  let header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});


const toggleIcon = document.querySelector("#toggle-nav");
const menu = document.querySelector(".menu");
const navClose = document.querySelector("#close");

toggleIcon.onclick = () => {
  menu.classList.toggle("active");
};

navClose.onclick = () => {
  menu.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("active");
};


let swiper = new Swiper(".reveiw-slider", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      // spaceBetween: 50,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

AOS.init({
  offset:400,
  duration:600
});

