//Menu Hamburger responsive

document.querySelector(".navbar .hamburger-btn").addEventListener("click", ()=>{
    document.querySelector(".navbar").classList.toggle("active");
});




//Année du copyright

const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear();