import '../../style/style.css';
import { postRequest } from '../helpers/request';
import { support } from '../helpers/support';
import * as constants from '../helpers/constants';

export const authorization = () => {

	const loginInputAuth = document.getElementById('login-input-authorization');
	const passwordInputAuth = document.getElementById('password-input-authorization');
	const loginButton = document.getElementById('login-button');

	loginButton.addEventListener('click', () => {

		const authorizationBody = { login: loginInputAuth.value, password: passwordInputAuth.value };
		
		postRequest(constants.AUTHURL, authorizationBody).then((data) => {
			if (data.token) {
				support.setCookie('token', data.token, constants.AGETOKEN);
				support.redirect('gallery.html');
			}
			console.log(data.message);
		}).catch(() => {
			console.log('Something go wrong.');
		});

	});

};
