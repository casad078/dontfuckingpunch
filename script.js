document.addEventListener('DOMContentLoaded', function() {
    const scrollButton1 = document.getElementById('why-it-started');
    const scrollButton = document.getElementById('scrollButton');
    const scrollButton2 = document.getElementById('what-we-do');
    const scrollButton3 = document.getElementById('taking-action');
    const scrollButton4 = document.getElementById('contact');

    scrollButton1.addEventListener('click', function() {
        const nextSection1 = document.querySelector('.section-two');
        scrollToSection(nextSection1);
    });

    scrollButton.addEventListener('click', function() {
        const nextSection1 = document.querySelector('.together');
        scrollToSection(nextSection1);
    });

    scrollButton2.addEventListener('click', function() {
        const nextSection2 = document.querySelector('.section-three');
        scrollToSection(nextSection2);
    });

    scrollButton3.addEventListener('click', function() {
        const nextSection3 = document.querySelector('.section-four');
        scrollToSection(nextSection3);
    });

    scrollButton4.addEventListener('click', function() {
        const nextSection3 = document.querySelector('.section-five');
        scrollToSection(nextSection3);
    });

    function scrollToSection(section) {
        const stickyMenu = document.getElementById('sticky-menu');
        const stickyMenuHeight = stickyMenu.offsetHeight;
        const bounding = section.getBoundingClientRect();
        const offsetTop = window.pageYOffset + bounding.top - stickyMenuHeight;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});
