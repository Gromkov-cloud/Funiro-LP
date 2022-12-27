"use strict";

/******/(function () {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/144: /***/function _() {
      var burgerBtn = document.querySelector(".burger");
      var bodyOverlay = document.querySelector(".body-overlay");
      var menuMobile = document.getElementById("nav");
      var body = document.querySelector("body");
      var html = document.querySelector("html");
      burgerBtn.addEventListener("click", function () {
        burgerBtn.classList.toggle("burger_active");
        if (bodyOverlay.classList.contains("body-overlay_active")) {
          bodyOverlay.classList.remove("body-overlay_opacity");
          setTimeout(function () {
            bodyOverlay.classList.remove("body-overlay_active");
            html.classList.remove("body_hidden");
          }, 260);
        } else {
          bodyOverlay.classList.add("body-overlay_opacity", "body-overlay_active");
          html.classList.add("body_hidden");
        }
        menuMobile.classList.toggle("header__nav_active");
      });

      /***/
    },

    /***/888: /***/function _() {
      var furnitureSliderBody = document.getElementById("furniture-gallery");
      var bodyWidth = document.body.clientWidth;
      var furnitureSliderBodyWidth = furnitureSliderBody.clientWidth;
      var touchStartX = void 0;
      var initialTranslateX = -50;
      furnitureSliderBody.style.transform = "translateX(" + initialTranslateX + "%)";

      // опредяем пределы в которых должен двигаться слайдер
      var xDifference = furnitureSliderBodyWidth - bodyWidth;
      var xDifferencePercent = xDifference * 100 / furnitureSliderBodyWidth;
      // левая и правая границы для свойства transform
      var leftLimit = initialTranslateX + xDifferencePercent / 2;
      var rightLimit = initialTranslateX - xDifferencePercent / 2;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        furnitureSliderBody.addEventListener("touchstart", function (e) {
          touchStartX = e.touches[0].clientX;
          initialTranslateX = +furnitureSliderBody.style.transform.match(/\-\d*/g);
        });
        furnitureSliderBody.addEventListener("touchmove", function (e) {
          // акутальная координата Х события движения
          var touchX = e.touches[0].clientX;
          // количество проскроленных пикселей Х координаты
          var touchMovedX = touchX - touchStartX;
          // количество проскроленных пикселей Х координаты в процентах, относительно длинны слайдера
          var touchMovedXPercent = touchMovedX * 100 / furnitureSliderBodyWidth;
          // величина отступа для слайдера в процентах, с учетом начального значения
          var translateX = +(initialTranslateX + touchMovedXPercent).toFixed(0);
          if (leftLimit >= translateX && translateX >= rightLimit) {
            furnitureSliderBody.style.transform = "translateX(" + translateX + "%)";
          }
        });
      } else {
        furnitureSliderBody.addEventListener('mousemove', function (e) {
          var offsetX = e.clientX;
          // отступ в процентах с учетом начального значения (ЛЕВАЯ ГРАНИЦА) (transform: translateX("начальное значение = 50%"))
          var xDifferencePercentInitial = 50 - xDifferencePercent / 2;
          // преобразование Х координаты положения курсора в отступ для галереии (transform: translateX("отступ"))
          var translateX = (-(offsetX * xDifferencePercent / bodyWidth + xDifferencePercentInitial)).toFixed(0);
          furnitureSliderBody.style.transform = "translateX(" + translateX + "%)";
        });
      }

      /***/
    },

    /***/135: /***/function _() {
      var searchOpenBtn = document.getElementById("search-mobile-btn");
      var searchForm = document.getElementById("search-form");
      searchOpenBtn.addEventListener("click", function () {
        searchOpenBtn.classList.toggle("search-form__mobile_open");
        searchForm.classList.toggle("header__search_open");
      });

      /***/
    },

    /***/419: /***/function _() {
      var firstScreenSwiper = new Swiper(".first-screen-slider", {
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
          el: ".first-screen-slider__pagination"
        },
        breakpoints: {
          1320: {
            slidesOffsetBefore: 310,
            centeredSlides: false
          }
        }
      });
      var inspirationsSlider = new Swiper(".inspirations-slider__container", {
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
          nextEl: ".inspirations-slider__btn-next"
        },
        pagination: {
          el: ".inspirations-slider__pagination"
        },
        breakpoints: {
          767: {
            centeredSlides: false
          }
        }
      });
      var tipsSlider = new Swiper(".tips-slider", {
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
          prevEl: ".tips-slider__btn-prev"
        },
        pagination: {
          el: ".tips-slider__pagination"
        },
        breakpoints: {
          1050: {
            slidesPerView: 3.12
          },
          767: {
            slidesPerView: 2.12
          },
          600: {
            slidesPerView: 1.9
          },
          400: {
            slidesPerView: 1.4
          },
          320: {
            slidesPerView: 1.2
          }
        }
      });

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/
  (function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
      /******/var getter = module && module.__esModule ? /******/function () {
        return module['default'];
      } : /******/function () {
        return module;
      };
      /******/
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/
  (function () {
    /******/ // define getter functions for harmony exports
    /******/__webpack_require__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (function () {
    /******/__webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (function () {
    "use strict";

    /* harmony import */
    var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
    /* harmony import */
    var _burger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
    /* harmony import */
    var _search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
    /* harmony import */
    var _swiper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swiper_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _furniture_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(888);
    /* harmony import */
    var _furniture_slider_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_furniture_slider_js__WEBPACK_IMPORTED_MODULE_3__);

    // import "./video.js"
  })();

  /******/
})();