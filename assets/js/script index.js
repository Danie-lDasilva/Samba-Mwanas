let menuBurgerIcon = document.querySelector(".burger--toggler")
let menuBurger = document.querySelector(".menuBurger")
let Overlay = document.querySelector(".overlay--burger")
let trigger = document.querySelector(".trigger")

menuBurgerIcon.addEventListener("click" , toggleBurger)
trigger.addEventListener("click" , toggleBurgerClose)

function toggleBurger(){
    menuBurgerIcon.classList.toggle("active")
    menuBurger.classList.toggle("active")
    Overlay.classList.toggle("active")
  }
  function toggleBurgerClose(){
    menuBurgerIcon.classList.toggle("active")
    menuBurger.classList.toggle("active")
    Overlay.classList.toggle("active")
  }