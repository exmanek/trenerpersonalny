const navBtn = document.querySelector("#nav-burgericon")
const nav = document.querySelector(".nav")
const allNavItems = document.querySelectorAll(".nav__item")


navBtn.addEventListener("click", function() {
    nav.classList.toggle("active")
    allNavItems.forEach((item) => {
        item.addEventListener("click", function(){
            nav.classList.remove("active")
        })
    })


})