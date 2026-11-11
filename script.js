const mobileToggle = document.getElementById('mobileToggle');
const mainNav = document.getElementById('mainNav');

mobileToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.has-dropdown > .nav-link')
.forEach((link) => {
    link.addEventListener('click', (event) => {
        if (window.matchMedia('(max-width: 980px)').matches) {
            event.preventDefault();
            link.parentElement.classList.toggle('dropdown-open');
        }
    });
});
document.querySelectorAll('.main-nav > a.nav-link')
.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 980px)').matches) {
            mainNav.classList.remove('open');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
const searchToggle = document.getElementById('searchToggle');
const searchPanel = document.getElementById('searchPanel');
const searchInput = document.getElementById('searchInput');

searchToggle.addEventListener('click', () => {
    searchPanel.classList.toggle('open');

    if (searchPanel.classList.contains('open')) {
        searchInput.focus();
    }
});

document.getElementById('searchForm')
.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) return;

    window.open(
        `https://www.google.com/search?q=${encodeURIComponent(query + ' site:cietcbe.edu.in')}`,
        '_blank',
        'noopener'
    );
});
const heroSlides = [
    ...document.querySelectorAll('.hero-slide')
];

const heroDots = [
    ...document.querySelectorAll('#heroDots button')
];

let activeSlide = 0;
let heroTimer;

function showHeroSlide(index) {

    activeSlide =
        (index + heroSlides.length) % heroSlides.length;

    heroSlides.forEach((slide, i) => {
        slide.classList.toggle(
            'active',
            i === activeSlide
        );
    });

    heroDots.forEach((dot, i) => {
        dot.classList.toggle(
            'active',
            i === activeSlide
        );
    });
}
function resetHeroTimer() {
    clearInterval(heroTimer);

    heroTimer = setInterval(() => {
        showHeroSlide(activeSlide + 1);
    }, 6000);
}
document.getElementById('heroNext')
.addEventListener('click', () => {
    showHeroSlide(activeSlide + 1);
    resetHeroTimer();
});
document.getElementById('heroPrev')
.addEventListener('click', () => {
    showHeroSlide(activeSlide - 1);
    resetHeroTimer();
});
heroDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showHeroSlide(i);
        resetHeroTimer();
    });
});
resetHeroTimer();

const placementTrack =
    document.getElementById('placementTrack');

document.getElementById('placementPrev')
.addEventListener('click', () => {

    placementTrack.scrollBy({
        left: -placementTrack.clientWidth * 0.75,
        behavior: 'smooth'
    });

});

document.getElementById('placementNext')
.addEventListener('click', () => {

    placementTrack.scrollBy({
        left: placementTrack.clientWidth * 0.75,
        behavior: 'smooth'
    });

});
const testimonials = [

    {
        text: 'Good atmosphere to learn. The Staff are very helpful to assisting students to develop their knowledge. The placements are good. Apart from academics, they also give importance to sports and other extra-curricular activities. Very neat and clean campus.',

        name: 'B. Sivasankar',

        company: 'CADS Software India Private Limited',

        image: 'https://www.cietcbe.edu.in/upload/testimonial1.png'
    },

    {
        text: 'I am very proud and blessed to be a part of this college as it has taught me many lessons for life. The lecturers are very focused on our carrier and have very good subject knowledge.',

        name: 'Sarah Lopez',

        company: 'Aarbee Structures Private Limited',

        image: 'https://www.cietcbe.edu.in/upload/testimonial2.png'
    },

    {
        text: 'Very good learning experience. CIET enables us to empower ourselves in every aspect of life.',

        name: 'S. Gnanidhar Zimnass',

        company: 'SAASHA Constructions and Designs',

        image: 'https://www.cietcbe.edu.in/upload/testimonial3.png'
    }

];
let testimonialIndex = 0;

const testimonialText =
    document.getElementById('testimonialText');

const testimonialName =
    document.getElementById('testimonialName');

const testimonialCompany =
    document.getElementById('testimonialCompany');

const testimonialImage =
    document.getElementById('testimonialImage');

const testimonialDots = [
    ...document.querySelectorAll('#testimonialDots button')
];
function showTestimonial(index) {

    testimonialIndex =
        (index + testimonials.length) % testimonials.length;

    const item = testimonials[testimonialIndex];

    testimonialText.textContent = item.text;

    testimonialName.textContent = item.name;

    testimonialCompany.textContent = item.company;

    testimonialImage.src = item.image;

    testimonialImage.alt = item.name;

    testimonialDots.forEach((dot, i) => {

        dot.classList.toggle(
            'active',
            i === testimonialIndex
        );

    });

}
document.getElementById('testimonialPrev')
.addEventListener('click', () => {
    showTestimonial(testimonialIndex - 1);
});
document.getElementById('testimonialNext')
.addEventListener('click', () => {
    showTestimonial(testimonialIndex + 1);
});
testimonialDots.forEach((dot, i) => {

    dot.addEventListener('click', () => {
        showTestimonial(i);
    });

});
const backToTop =
    document.getElementById('backToTop');

window.addEventListener('scroll', () => {

    backToTop.classList.toggle(
        'visible',
        window.scrollY > 450
    );

}, { passive: true });
backToTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});
window.addEventListener('resize', () => {

    if (window.innerWidth > 980) {

        mainNav.classList.remove('open');

        mobileToggle.setAttribute(
            'aria-expanded',
            'false'
        );

    }

});
