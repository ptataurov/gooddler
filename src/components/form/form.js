import './form.scss';

const btns = document.querySelectorAll('.button');
const form = document.querySelector('.form');
const btnClose = document.querySelector('.form__close');
const body = document.body;

const btnsContact = Array.from(btns).filter(btn => btn.textContent === 'Contact Us' || btn.textContent === 'Contact us');

btnsContact.forEach(btn => {
	btn.onclick = () => {
		// body.classList.add('fixed');
		form.classList.add('form--show');
	}
})

btnClose.onclick = () => {
	// body.classList.remove('fixed');
	form.classList.remove('form--show');
};