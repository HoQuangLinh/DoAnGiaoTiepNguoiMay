var navbar = document.querySelector(".nav-res");
var menu = document.querySelector(".nav-menu-res");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    navbar.classList.add("active");
    menu.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
    menu.classList.remove("active");
})

navbar.addEventListener("click", (e) => {
    if (e.target == navbar) {
        navbar.classList.remove("active");
        menu.classList.remove("active");
    }
})