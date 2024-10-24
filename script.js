let slideIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel img').length;
    const slideWidth = document.querySelector('.carousel img').clientWidth;

    slideIndex += direction;

    // Cegah slide keluar dari batas
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    console.log(totalSlides);
    console.log(slideIndex);

    carousel.style.transform = `translateX(${-slideIndex * slideWidth *0.67}px)`;
}
