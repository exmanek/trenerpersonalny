const navBtn = document.querySelector("#nav-burgericon")
const nav = document.querySelector(".nav")


navBtn.addEventListener("click", function() {
    nav.classList.toggle("active")
})