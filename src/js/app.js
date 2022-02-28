import * as customFunctions from './modules/functions.js';

customFunctions.isWebp();


let menuBtn = document.querySelector('.nav__icon');
let nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('_active');
    nav.classList.toggle('_active');
})

let textedSlider = document.querySelector('.textedSlider');
console.log(textedSlider.offsetWidth)