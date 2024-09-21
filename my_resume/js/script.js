// Строгий режим
"use strict"

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');

burger.addEventListener('click', ()=>{
	burger.classList.toggle('menu-x');
});
window.onscroll = () => {
	burger.classList.remove('menu-x');
};

function toggleMenu() {
	menu.classList.toggle('open');
}

function closeMenu() {
	menu.classList.remove('open');
}

burger.addEventListener('click', toggleMenu);

menuItems.forEach(item => {
	 item.addEventListener('click', closeMenu);
});

window.addEventListener('scroll', closeMenu);

