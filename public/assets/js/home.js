var recntsl = new Swiper(".recntsl", {
    slidesPerView: 3,
    speed: 900,
    loop: true,
    freeMode: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".recntslArr1",
      prevEl: ".recntslArr2",
    },
    breakpoints: {
      40: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
});
var reviesl = new Swiper(".reviesl", {
  slidesPerView: 2,
  speed: 600,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  breakpoints: {
    40: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});
var clientsSl = new Swiper(".clientsSl", {
  slidesPerView: 6,
  speed: 400,
  loop: true,
  autoplay: true,
  spaceBetween: 50,
  navigation: {
    nextEl: ".clientsSlArr2",
    prevEl: ".clientsSlArr1",
  },
  breakpoints: {
    40: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    1600: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  }
});