// ==========================
// Toggle Mobile Navigation Menu
// ==========================
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeIcon();
});

// Change nav toggle icon
function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

// ==========================
// Smooth Scrolling for Navigation Links
// ==========================
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute("href"));
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjusting for the fixed navbar height
            behavior: "smooth"
        });
    });
});

// ==========================
// Swiper.js Initialization for Testimonials Section
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    // Swiper for Testimonial Section
    const testimonialSlide = new Swiper(".testimonial__wrapper", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        effect: "coverflow",
        grabCursor: true,
        slidesPerView: 1,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            520: {
                slidesPerView: "auto",
            },
        },
    });

    // ==========================
    // ScrollReveal.js Initialization for Animations
    // ==========================
    ScrollReveal().reveal('.hero', {
        origin: 'top',
        distance: '100px',
        duration: 1200,
        delay: 400,
        easing: 'ease-out',
    });

    ScrollReveal().reveal('.about__description, .about__img, .service-card, .maxicare-plan, .why-content, .faq-item', {
        origin: 'bottom',
        distance: '100px',
        duration: 1200,
        delay: 400,
        easing: 'ease-out',
        interval: 200
    });

    ScrollReveal().reveal('.testimonial__wrapper', {
        origin: 'right',
        distance: '100px',
        duration: 1500,
        delay: 400,
        easing: 'ease-out',
    });

    // ==========================
    // Close Navigation Menu on Link Click (Mobile)
    // ==========================
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove("nav__menu--open");
            }
        });
    });

    // ==========================
    // Make the Navbar Sticky on Scroll (Header Scroll Effect)
    // ==========================
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 0) {
            navbar.classList.add("header--scroll");
        } else {
            navbar.classList.remove("header--scroll");
        }
    });
});
