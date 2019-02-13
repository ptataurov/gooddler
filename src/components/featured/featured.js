import './featured.scss';

import '../button/button';

const list = document.querySelector('.featured__slider-list');
const items = list.querySelectorAll('.featured__slider-item');
const btnPrev = document.querySelector('.featured__arrow-div:first-of-type');
const btnNext = document.querySelector('.featured__arrow-div:last-of-type');
let translateWidth = 0;
let countLeft = 0;

const getCountRight = () => {
	if (document.body.clientWidth > 1440) {
		return items.length - 4;
	} else if (document.body.clientWidth <= 1440) {
		return items.length - 3;
	} else if (document.body.clientWidth <= 1080) {
		return items.length - 2;
	} else {
		return items.length - 1;
	}
};

let defaultCountRight = getCountRight();

let margin = document.body.clientWidth > 720 ? 40 : 60;


let countRight = defaultCountRight;

window.onresize = () => {
	defaultCountRight = getCountRight();
	translateWidth = 0;
	list.style.transform = `translateX(${translateWidth}px)`;
	countLeft = 0;
	countRight = defaultCountRight;
	margin = document.body.clientWidth > 720 ? 40 : 60;
};

const itemWidth = items[0].clientWidth + 2;


const nextSlide = () => {
	if (countRight > 0) {
		translateWidth -= itemWidth + margin;
		list.style.transform = `translateX(${translateWidth}px)`;
		countRight--;
		countLeft++;
	} else {
		translateWidth = 0;
		list.style.transform = `translateX(0)`;
		countRight = defaultCountRight;
		countLeft = 0;
	}
};

const prevSlide = () => {
	if (countLeft > 0) {
		translateWidth += itemWidth + margin;
		list.style.transform = `translateX(${translateWidth}px)`;
		countRight++;
		countLeft--;
	} else {
		translateWidth = -(itemWidth + margin) * (defaultCountRight);
		list.style.transform = `translateX(${translateWidth}px)`;
		countRight = 0;
		countLeft = defaultCountRight;
	}
};

let interval = setInterval(() => {
	nextSlide()
}, 4000);

btnPrev.addEventListener('click', () => {

	console.log('click')
	clearInterval(interval);
	prevSlide();
	interval = setInterval(() => {
		nextSlide()
	}, 4000);
});

btnNext.addEventListener('click', () => {
	clearInterval(interval);
	nextSlide();
	interval = setInterval(() => {
		nextSlide()
	}, 4000);
});

items.forEach(item => {
	item.addEventListener('mouseover', () => {
		clearInterval(interval);
	})
	item.addEventListener('mouseout', () => {
		interval = setInterval(() => {
			nextSlide()
		}, 4000);
	})
})