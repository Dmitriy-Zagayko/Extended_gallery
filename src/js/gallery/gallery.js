import '../../style/style.css';
import { render } from '../helpers/render';
import { support } from '../helpers/support';
import * as constants from '../helpers/constants';

export const gallery = () => {

	const token = support.getCookie('token');
	if (!token) {
		return support.redirect('index.html');
	}

	const btnStartSlideShow = document.getElementById('btnStartSlideShow');
	const btnStopSlideShow = document.getElementById('btnStopSlideShow');
	const btnLogOut = document.getElementById('btnLogOut');
	const gallerySmallPicture = document.getElementById('gallery-small-picture');
	const bigPicture = document.getElementById('bigPicture');
	const smallPicture = document.getElementsByClassName('gallery__small-picture');


	btnLogOut.addEventListener('click', exit);
	gallerySmallPicture.addEventListener('click', changeBigPicture);
	btnStartSlideShow.addEventListener('click', startSlideShow);
	btnStopSlideShow.addEventListener('click', stopSlideShow);

	let interval;
	let counter = 0;

	function changeBigPicture(event) {
		if (event.target.className === 'gallery__small-picture') {
			bigPicture.src = event.target.src;
		}
	}

	function startSlideShow() {
		render.hide(btnStartSlideShow);
		render.hide(gallerySmallPicture);
		render.show(btnStopSlideShow);
		bigPicture.classList.add('after_start');
		interval = setInterval(slideShow, constants.MSFORSLIDESHOW);
	}

	function slideShow() {
		if (counter === smallPicture.length) {
			counter = constants.AUTOCONTINUESLIDESHOW;
		}
		bigPicture.src = smallPicture[counter].src;
		counter++;
	}

	function stopSlideShow() {
		render.show(btnStartSlideShow);
		render.show(gallerySmallPicture);
		render.hide(btnStopSlideShow);
		bigPicture.classList.remove('after_start');
		clearInterval(interval);
	}

	function exit() {
		support.killCookie('token');
		support.redirect('index.html');
	}
	
};
