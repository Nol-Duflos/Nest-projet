document.querySelector(".navbar .hamburger").addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("active");
});




//Année du copyright

const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear();