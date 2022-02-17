const burger = document.querySelector('.bars')
const navLinks = document.querySelector('.nav-links')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

const slider = document.querySelectorAll('.slider')
const leftbtn = document.querySelectorAll('.fa-circle-left')
const rightbtn = document.querySelectorAll('.fa-circle-right')


console.log(slider,leftbtn,rightbtn)
burger.addEventListener("click", ()=>{
    if(navLinks.classList.contains("show")){
        navLinks.classList.remove("show")
        overlay.classList.remove("show")
        navLinks.classList.add("hide")
        overlay.classList.add("hide")
        body.classList.remove('stop-scroll')
        burger.classList.remove('to-cross')
    }
    else{
        navLinks.classList.add("show")
        overlay.classList.add("show")
        navLinks.classList.remove("hide")
        overlay.classList.remove("hide")
        body.classList.add('stop-scroll')
        burger.classList.add('to-cross')
    }
})

leftbtn[0].addEventListener("click", () => {
    // let containerDimensions = slider.getBoundingClientRect();
    // let containerWidth = containerDimensions.width();
    slider[0].scrollBy({
        left: -270,
        top: 0,
        behavior: "smooth"
    });
})

rightbtn[0].addEventListener("click", () => {
    slider[0].scrollBy({
        left: +270,
        top: 0,
        behavior: "smooth"
    });
})

leftbtn[1].addEventListener("click", () => {
    // let containerDimensions = slider.getBoundingClientRect();
    // let containerWidth = containerDimensions.width();
    slider[1].scrollBy({
        left: -270,
        top: 0,
        behavior: "smooth"
    });
})

rightbtn[1].addEventListener("click", () => {
    slider[1].scrollBy({
        left: +270,
        top: 0,
        behavior: "smooth"
    });
})