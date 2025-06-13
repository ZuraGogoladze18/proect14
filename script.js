const burger = document.querySelector(".aizen");
const menu = document.querySelector(".header-nav");
const madara = document.querySelector(".madara");

burger.addEventListener("click", ()=>{
    menu.classList.add("soka");
    madara.style.display = "block";
    burger.style.display = "none";
})

madara.addEventListener("click", ()=>{
    menu.classList.remove("soka");
    madara.style.display = "none";
    burger.style.display = "block";
})