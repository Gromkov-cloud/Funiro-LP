const slider = (sliderId) => {
    const sliderBody = document.getElementById(sliderId)
    const slides = sliderBody.querySelectorAll(".slider-item")
    const sliderWheel = document.getElementById("slider-wheel")
    const markers = document.querySelectorAll(".slider-slide-marker")

    const Width = +getComputedStyle(slides[0]).width.slice(0, 3) + 32
    const totalSlideNum = 4
    let currentSlide = 0

    const changeCurrentSlideMarker = () => {
        markers.forEach(marker => {
            marker.classList.remove("active")
            if (marker.dataset.itemNum == currentSlide) {
                marker.classList.add("active")
            }
        })
    }

    const correctCurrentSlide = (currentSlideNum) => {
        if (currentSlideNum > totalSlideNum) {
            currentSlide = 1;
        } else if (currentSlideNum < 1) {
            currentSlide = totalSlideNum;
        }
    };

    const changeSlide = (slideNum) => {
        correctCurrentSlide(slideNum);
        sliderWheel.style.right = - (4 - currentSlide) * Width + "px";
        changeCurrentSlideMarker()
        slides.forEach((slide, index) => {
            slide.classList.remove("active")

            if ((index + 1) == currentSlide) {
                slide.classList.add("active")
            }
        })
    };


    sliderBody.addEventListener("click", (e) => {

        if (e.target.classList.contains("first-screen-slider__item-btn")) {
            currentSlide = +e.target.dataset.itemNum;
            changeSlide(currentSlide);
        }
        if (e.target.classList.contains("first-screen-slider__nex-btn")) {
            currentSlide += 1;

            changeSlide(currentSlide);
        }

        if (e.target.classList.contains("first-screen-slider__prev-btn")) {
            currentSlide -= 1;

            changeSlide(currentSlide);
        }
    })
}

slider("first-screen-slider")