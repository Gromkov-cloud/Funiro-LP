const furnitureSliderBody = document.getElementById("furniture-gallery")

const bodyWidth = document.body.clientWidth
const furnitureSliderBodyWidth = furnitureSliderBody.clientWidth

let touchStartX
let initialTranslateX = -50
furnitureSliderBody.style.transform = `translateX(${initialTranslateX}%)`


// опредяем пределы в которых должен двигаться слайдер
const xDifference = (furnitureSliderBodyWidth - bodyWidth)
const xDifferencePercent = (xDifference * 100 / furnitureSliderBodyWidth)
// левая и правая границы для свойства transform
const leftLimit = initialTranslateX + xDifferencePercent / 2
const rightLimit = initialTranslateX - xDifferencePercent / 2


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    furnitureSliderBody.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX
        initialTranslateX = +furnitureSliderBody.style.transform.match(/\-\d*/g)
    })
    furnitureSliderBody.addEventListener("touchmove", (e) => {
        // акутальная координата Х события движения
        const touchX = e.touches[0].clientX
        // количество проскроленных пикселей Х координаты
        const touchMovedX = touchX - touchStartX
        // количество проскроленных пикселей Х координаты в процентах, относительно длинны слайдера
        const touchMovedXPercent = touchMovedX * 100 / furnitureSliderBodyWidth
        // величина отступа для слайдера в процентах, с учетом начального значения
        const translateX = +(initialTranslateX + touchMovedXPercent).toFixed(0)

        if (leftLimit >= translateX && translateX >= rightLimit) {
            furnitureSliderBody.style.transform = `translateX(${translateX}%)`
        }
    })

} else {
    furnitureSliderBody.addEventListener('mousemove', (e) => {
        const offsetX = e.clientX
        // отступ в процентах с учетом начального значения (ЛЕВАЯ ГРАНИЦА) (transform: translateX("начальное значение = 50%"))
        const xDifferencePercentInitial = 50 - (xDifferencePercent / 2)
        // преобразование Х координаты положения курсора в отступ для галереии (transform: translateX("отступ"))
        const translateX = (-((offsetX * xDifferencePercent / bodyWidth) + xDifferencePercentInitial)).toFixed(0)

        furnitureSliderBody.style.transform = `translateX(${translateX}%)`
    })
}