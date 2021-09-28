import '../../style/style.css';
import { postRequest } from '../helpers/request';
import { support } from '../helpers/support';
import { render } from '../helpers/render';
import * as constants from '../helpers/constants';

export const authorization = () => {

	const loginInputAuth = document.getElementById('login-input-authorization');
	const passwordInputAuth = document.getElementById('password-input-authorization');
	const loginButton = document.getElementById('login-button');
	const textError = document.getElementById('text-error');
	const eye = document.getElementById('hideShowPass');

	support.showHidePassword(eye, passwordInputAuth);

	loginButton.addEventListener('click', () => {

		const authorizationBody = { login: loginInputAuth.value, password: passwordInputAuth.value };
		
		postRequest(constants.AUTHURL, authorizationBody).then((data) => {
			if (data.token) {
				support.setCookie('token', data.token, constants.AGETOKEN);
				support.redirect('gallery.html');
				render.setText(textError, '');
			}
			render.setText(textError, data.message);
		}).catch(() => {
			render.setText(textError, 'Server error, try later.');
		});
	});
};
