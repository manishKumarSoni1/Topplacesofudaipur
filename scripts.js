// Navigation Links Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero Section CTA Button

document.querySelector('.cta').addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector('#top-places').scrollIntoView({
        behavior: 'smooth'
    });
});

// 3.Top Places Highlight - "Learn More" Button

document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', function () {
        const placeInfo = this.closest('.place').querySelector('.more-info');
        placeInfo.classList.toggle('visible');
    });
});

// 4. Interactive Map - Filter Functionality

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');
        filterMapMarkers(filter);
    });
});

function filterMapMarkers(filter) {
    // Assuming you have map markers stored in an array called `markers`
    markers.forEach(marker => {
        if (filter === 'all' || marker.category === filter) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    });
}

// 5. Featured Place of the Month - "Visit Now" Button

document.querySelector('.visit-now').addEventListener('click', function () {
    window.location.href = 'featured-place-detail.html';
});

// 6. FAQ Section - Accordion Style Toggle

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// 7. Image Gallery - Lightbox Functionality

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        const imgSrc = this.querySelector('img').getAttribute('src');
        openLightbox(imgSrc);
    });
});

function openLightbox(imgSrc) {
    const lightbox = document.querySelector('.lightbox');
    lightbox.querySelector('img').setAttribute('src', imgSrc);
    lightbox.classList.add('open');
}

document.querySelector('.lightbox').addEventListener('click', function () {
    this.classList.remove('open');
});

// 8. Visitor Testimonials - Carousel Navigation

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

document.querySelector('.next-testimonial').addEventListener('click', function () {
    showTestimonial(currentTestimonial + 1);
});

document.querySelector('.prev-testimonial').addEventListener('click', function () {
    showTestimonial(currentTestimonial - 1);
});

function showTestimonial(index) {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (index + totalTestimonials) % totalTestimonials;
    testimonials[currentTestimonial].classList.add('active');
}

// 9. Blog & Articles - "Read More" Button

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function () {
        const articleUrl = this.getAttribute('data-url');
        window.location.href = articleUrl;
    });
});

// 10. Floating Chat/Help Button

document.querySelector('.chat-button').addEventListener('click', function () {
    // Open the chat window or help center
    openChatWindow();
});

function openChatWindow() {
    // Implementation to open the chat or help center
    alert("Chat window opened!"); // Replace with actual implementation
}


