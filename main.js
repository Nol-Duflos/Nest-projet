//Année du copyright

const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear();

//Menu Hamburger responsive

document.querySelector(".navbar .hamburger-btn").addEventListener("click", ()=>{
    document.querySelector(".links").classList.toggle("active");
});