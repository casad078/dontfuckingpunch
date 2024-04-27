document.addEventListener('DOMContentLoaded', function() {
    const gif = document.getElementById('gif');
    const scrollButton = document.getElementById('scrollButton');

    // Play GIF when the page loads
    gif.src = "gif.gif";

    // Scroll to next section when the button is clicked
    scrollButton.addEventListener('click', function() {
        const nextSection = document.querySelector('.section-two');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });
});
