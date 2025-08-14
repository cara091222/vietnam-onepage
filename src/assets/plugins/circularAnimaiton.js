// plugins/circularAnimation.js
const circle = document.querySelector('.circular-a');
    window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    circle.style.top = 280 - scrollY * 0.5 + 'px';
})
