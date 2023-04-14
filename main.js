const hamburger = document.querySelector(".hamburger");
const navigationNavbar = document.querySelector(".navigation-navbar");
const btnNavbar = document.querySelector(".btn-navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navigationNavbar.classList.toggle("active");
    btnNavbar.classList.toggle("active");
}
