import './form.scss';

const btns = document.querySelectorAll('.button');
const form = document.querySelector('.form');
const btnClose = document.querySelector('.form__close');

const btnsContact = Array.from(btns).filter(btn => btn.textContent === 'Contact Us' || btn.textContent === 'Contact us');

btnsContact.forEach(btn => {
	btn.onclick = () => {
		form.classList.add('form--show');
	}
})

btnClose.onclick = () => {
	form.classList.remove('form--show');
};