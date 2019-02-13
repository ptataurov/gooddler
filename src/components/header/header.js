import './header.scss';

import '../menu/menu';
import '../button/button';

import { isTouchDevice } from '../../main';

const fullpage = document.querySelector('.fullpage');

fullpage.style.height = `${window.innerHeight}px`;

window.addEventListener('resize', () => {
	if (!isTouchDevice) {
		fullpage.style.height = `${window.innerHeight}px`;
	}
});

const wrap = document.querySelector('.header__wrap');
const plane = wrap.querySelector('.header__plane');

wrap.addEventListener('mousemove', function(e) {
	const pageX = e.clientX;
	const pageY = e.clientY;

	plane.style.webkitTransform = `translateX(${pageX / 100}%) translateY(${pageY / 100}%)`;
	plane.style.transform = `translateX(${pageX / 100}%) translateY(${pageY / 100}%)`;
	wrap.style = `background-position:${pageX / 200}px center`;
});

