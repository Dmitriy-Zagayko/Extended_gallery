import '../../style/style.css';
import { render } from '../helpers/render';
import { support } from '../helpers/support';
import * as constants from '../helpers/constants';

export const gallery = () => {

	const token = support.getCookie('token');
	if (!token) {
		return support.redirect('index.html');
	}

	const btnStartSlideShow = document.getElementById('btn-start-slide-show');
	const btnStopSlideShow = document.getElementById('btn-stop-slide-show');
	const btnLogOut = document.getElementById('btn-log-out');
	const gallerySmallPicture = document.getElementById('gallery-small-picture');
	const bigPicture = document.getElementById('big-picture');
	const smallPicture = document.getElementsByClassName('gallery-footer__small-picture');


	btnLogOut.addEventListener('click', exit);
	gallerySmallPicture.addEventListener('click', changeBigPicture);
	btnStartSlideShow.addEventListener('click', startSlideShow);
	btnStopSlideShow.addEventListener('click', stopSlideShow);

	let interval;
	let counter = 0;

	function changeBigPicture(event) {
		if (event.target.className === 'gallery-footer__small-picture') {
			bigPicture.src = event.target.src;
		}
	}

	function startSlideShow() {
		render.hide(btnStartSlideShow);
		render.hide(gallerySmallPicture);
		render.show(btnStopSlideShow);
		bigPicture.classList.add('gallery-main__big-picture_flipping_start');
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
		bigPicture.classList.remove('gallery-main__big-picture_flipping_start');
		clearInterval(interval);
	}

	function exit() {
		support.killCookie('token');
		support.redirect('index.html');
	}
	
};
