const searchOpenBtn = document.getElementById("search-mobile-btn")
const searchForm = document.getElementById("search-form")

searchOpenBtn.addEventListener("click", () => {
    searchOpenBtn.classList.toggle("search-form__mobile_open")
    searchForm.classList.toggle("header__search_open")
})