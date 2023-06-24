const sliders = document.querySelector(".carrusel__content");
const slider = document.querySelector(".carrusel");
const slider_buttons = document.querySelector(".carrusel__buttons");

const size = slider.clientWidth;

let mov = null;

sliders.style.transform = `translate(-${mov}px)`

slider_buttons.addEventListener("click",(event)=>{
    const {target} = event;
    if(target.classList.contains("carrusel__button_i--1")){
        mov = 0;
        sliders.style.transform = `translate(-${mov}px)`
    }else if(target.classList.contains("carrusel__button_i--2")){
        mov = size
        sliders.style.transform = `translate(-${mov}px)`
    }else if(target.classList.contains("carrusel__button_i--3")){
        mov = size*2;
        sliders.style.transform = `translate(-${mov}px)`
    }
})


const header = document.querySelector(".header");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 450){
        header.style.background = "#1b1515";
    }else{
        header.style.background = "transparent";
    }
})


const nav = document.querySelector(".nav");
const header_toggle = document.querySelector(".header__toggle");

header_toggle.addEventListener("click",()=>{
    nav.classList.toggle("nav--none");
});

const getAddOption = (event)=>{
    const {target} = event;
    if(target.classList.contains("nav__li")){
        const hijos = target.children;
        hijos[1].classList.toggle("nav__li-ul--display");
    }
}


nav.addEventListener("click",getAddOption);


