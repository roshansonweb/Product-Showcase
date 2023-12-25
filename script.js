let currentSlide = 0;
const images = [
    "macbook_air_1.jpg",
    "macbook_air_2.jpg",
    "macbook_air_3.jpg",
    "macbook_air_4.jpg",
    "macbook_air_5.jpg",
    "macbook_air_6.jpg"
    // Add more image paths as needed
];

function showSlide(index) {
    const sliderImage = document.getElementById("sliderImage");
    if (index < 0) {
        currentSlide = images.length - 1;
    } else if (index >= images.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    sliderImage.src = images[currentSlide];
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Function to learn more
function learnMore() {
    alert("Thank you for your interest! Learn more about the MacBook Air on the official Apple website.");
}

// Initial load
showSlide(currentSlide);
