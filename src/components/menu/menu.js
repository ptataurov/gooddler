import './hamburger.scss';
import './menu.scss';

const menu = document.querySelector('.menu');
const hamburger = menu.querySelector('.menu__hamburger');
const mobileMenu = document.querySelector('.menu__mobile');

const mobileMenuClose = document.querySelector('.menu__mobile-close');

hamburger.onclick = () => {
	document.body.classList.add('fixed');
	mobileMenu.classList.add('menu__mobile--show');
};

mobileMenuClose.onclick = () => {
	document.body.classList.remove('fixed');
	mobileMenu.classList.remove('menu__mobile--show');
};
