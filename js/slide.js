const dslider = document.querySelector('.slider');
const dslides = document.querySelectorAll(".slide");

const mslider = document.querySelector('.m-slider');
const mslides = document.querySelectorAll(".m-slide");


let n = 0;
function nextSlide(slider, slides) {
    if (n < slides.length -1) {
        n++;
        slider.style.transform = `translateX(${-n * 33.33}%)`;
        slider.style.transition = `transform 0.5s ease`;
        
    }
}

function prevSlide(slider, slides) {
    if (n >= 0) {
        slider.style.transform = `translateX(${-n * 33.33}%)`;
        slider.style.transition = `transform 0.5s ease`;
        n--;
    }
}