var swiper = new Swiper(".inter_agency", {
  // Default settings (for mobile first)
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    // >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
