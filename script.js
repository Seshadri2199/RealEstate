document.addEventListener('DOMContentLoaded', () => {
    
    /* --- STICKY HEADER --- */
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- MOBILE MENU TOGGLE --- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link, .nav .btn');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    });

    /* --- FADE-IN ANIMATIONS ON SCROLL --- */
    const fadeElements = document.querySelectorAll('.fade-in-element');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible so it doesn't fade back out
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

});
