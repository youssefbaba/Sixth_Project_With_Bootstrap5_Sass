$('.owl-carousel').owlCarousel({
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  center: true,
  loop: true,
  margin: 28,
  dots: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    576: {
      items: 2,
      nav: false,
    },
    992: {
      items: 3,
      nav: true,
      margin: 24,
    },
  }
})