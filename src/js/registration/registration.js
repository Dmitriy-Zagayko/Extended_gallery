import '../../style/style.css';
import { postRequest } from '../helpers/request';
import * as constants from '../helpers/constants';
import { support } from '../helpers/support';
import { render } from '../helpers/render';
import { validateFieldsInRegistration } from '../helpers/validation.client';

export const registration = () => {

	const loginInputReg = document.getElementById('login-input-registration');
	const passwordInputReg = document.getElementById('password-input-registration');
	const passwordConfirmInputReg = document.getElementById('password-confirm-input-registration');
	const registrationButton = document.getElementById('registration-button');
	const textError = document.getElementById('text-error');

	registrationButton.addEventListener('click', () => {

		if (validateFieldsInRegistration(loginInputReg.value, passwordInputReg.value, passwordConfirmInputReg.value, textError)) {

			const registrationBody = { login: loginInputReg.value, password: passwordInputReg.value };

			postRequest(constants.REGURL, registrationBody).then((data) => {
				switch (data.message) {
					case 'Such user already exists.':
						render.setText(textError, data.message);
						break;
					case 'Something go wrong. Try again.':
						render.setText(textError, data.message);
						break;
					case 'Done!':
						render.setText(textError, '');
						render.clear({ loginInputReg, passwordInputReg, passwordConfirmInputReg });
						support.redirect('index.html');
				}
			}).catch(() => {
				render.setText(textError, 'Something go ne tak');
			});
		}
	});
};
