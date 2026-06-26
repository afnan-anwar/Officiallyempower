document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".carousel img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let current = 0;

    function updateCarousel() {

        images.forEach(img => img.classList.remove("active"));

        images[current].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        updateCarousel();
    });

    updateCarousel();

});

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

    testimonials.forEach(card => card.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
}

document.querySelector(".right").addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    showSlide(current);
});

document.querySelector(".left").addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showSlide(current);
});
