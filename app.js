const menuIcon = document.querySelector(".nav-icon");
const menu = document.querySelector(".menu");
menuIcon.addEventListener('click', function() {
    console.log('click');
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
});