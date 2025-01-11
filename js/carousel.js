const carouselItems = document.querySelectorAll('.carousel-item');
let currentSlide = 0;
const intervalDuration = 8000;
let intervalCarousel;

function showSlide(index) {
    carouselItems[currentSlide].classList.remove('active');
    currentSlide = (index + carouselItems.length) % carouselItems.length;
    carouselItems[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function startAutoCarousel() {
    clearInterval(intervalCarousel)
    intervalCarousel = setInterval(nextSlide, intervalDuration);
}

document.getElementById('prevBtn').addEventListener('click', () => {
    startAutoCarousel();
    showSlide(currentSlide - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    startAutoCarousel();
    showSlide(currentSlide + 1);
});

showSlide(currentSlide);

startAutoCarousel();