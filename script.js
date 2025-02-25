document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scroll for menu button
    document.querySelector('.hero button').addEventListener('click', () => {
        document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
    });
});