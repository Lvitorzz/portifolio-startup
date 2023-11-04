// JavaScript para a rolagem automática do slider
const slider = document.querySelector('.slider');
let slideWidth = slider.offsetWidth;
let currentSlide = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % 3; // 3 é o número de slides
    slider.scrollTo({
        left: currentSlide * slideWidth,
        behavior: 'smooth'
    });
}

// Configure um intervalo de tempo (por exemplo, a cada 3 segundos) para rolar automaticamente.
setInterval(nextSlide, 3000); // 3000ms = 3 segundos