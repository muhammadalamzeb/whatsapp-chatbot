// Animation for header text
const header = document.querySelector('header');
header.style.opacity = '0';

setTimeout(() => {
    header.style.transition = 'opacity 1s';
    header.style.opacity = '1';
}, 500);
