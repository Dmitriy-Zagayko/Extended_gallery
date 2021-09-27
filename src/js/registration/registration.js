import '../../style/style.css';
import { postRequest } from '../helpers/request';
import * as constants from '../helpers/constants';
import { support } from '../helpers/support';
import { validateFieldsInRegistration } from '../helpers/validation.client';

export const registration = () => {

	const loginInputReg = document.getElementById('login-input-registration');
	const passwordInputReg = document.getElementById('password-input-registration');
	const passwordConfirmInputReg = document.getElementById('password-confirm-input-registration');
	const registrationButton = document.getElementById('registration-button');

	registrationButton.addEventListener('click', () => {

		if (validateFieldsInRegistration(loginInputReg.value, passwordInputReg.value, passwordConfirmInputReg.value)) {
			const registrationBody = { login: loginInputReg.value, password: passwordInputReg.value };

			postRequest(constants.REGURL, registrationBody)
				.then((data) => {
					if (data.message === 'Such user already exists.') {
						console.log('Such user already exists.');
					}
					if (data.message === 'Something go wrong. Try again.') {
						console.log('Something go wrong. Try again.');
					}
					if (data.message === 'Done!') {
						support.redirect('index.html');
					}
				}).catch(() => {
					console.log('Something go wrong.');
				});
		}

	});
};
