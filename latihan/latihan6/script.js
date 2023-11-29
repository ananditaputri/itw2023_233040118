const menuTonggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuTonggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});
