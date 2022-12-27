const firstScreenSwiper = new Swiper(".first-screen-slider", {
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides: 1,
    spaceBetween: 32,
    slidesPerView: "auto",

    centeredSlides: true,

    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".first-screen-slider-nav__btn_next",
        prevEl: ".first-screen-slider-nav__btn_prev"
    },
    pagination: {
        el: ".first-screen-slider__pagination",
    },
    breakpoints: {
        1320: {
            slidesOffsetBefore: 310,
            centeredSlides: false,
        }

    }
})

const inspirationsSlider = new Swiper(".inspirations-slider__container", {
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides: 1,
    spaceBetween: 32,
    slidesPerView: "auto",

    centeredSlides: false,

    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".inspirations-slider__btn-next",
    },
    pagination: {
        el: ".inspirations-slider__pagination",
    },
    breakpoints: {
        767: {
            centeredSlides: false,
        }
    }
})

const tipsSlider = new Swiper(".tips-slider", {
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides: 1,
    spaceBetween: 32,
    centeredSlides: true,

    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".tips-slider__btn-next",
        prevEl: ".tips-slider__btn-prev",
    },
    pagination: {
        el: ".tips-slider__pagination",
    },
    breakpoints: {
        1050: {
            slidesPerView: 3.12,
        },
        767: {
            slidesPerView: 2.12,
        },

        600: {
            slidesPerView: 1.9,
        },
        400: {
            slidesPerView: 1.4,
        },

        320: {
            slidesPerView: 1.2,
        }
    }
})
