import '../../style/style.css';
import { postRequest } from '../helpers/request';
import * as constants from '../helpers/constants';

export const authorization = () => {

	const loginInputAuth = document.getElementById('login-input-authorization');
	const passwordInputAuth = document.getElementById('password-input-authorization');
	const loginButton = document.getElementById('login-button');

	loginButton.addEventListener('click', () => {

		const authorizationBody = { login: loginInputAuth.value, password: passwordInputAuth.value };
		
		postRequest(constants.AUTHURL, authorizationBody).then((data) => {
			if (data.token) {
				const redirect = (path) => window.location.pathname = path;
				redirect('gallery.html');
			}
		}).catch(() => {
			console.log('Something go wrong.');
		});

	});

};
