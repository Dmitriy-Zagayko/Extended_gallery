export const validateFieldsInRegistration = (login, password, confirmPassword, error) => {
	const validateLogin = new RegExp(/^[a-z0-9]{3,20}/, 'i');
	const validatePassword = new RegExp(/^[!@#$^.№&;%(*?/:=)-_+]{5,20}/, 'i');
	if (!login || !password) {
		error.textContent = 'Empty fields';
		return false;
	} else if (!validateLogin.test(login)) {
		error.textContent = 'Incorrect login';
		return false;
	} else if (!validatePassword.test(password)) {
		error.textContent = 'Incorrect password';
		return false;
	} else if (password !== confirmPassword) {
		error.textContent = 'Password mismatch';
		return false;
	} else {
		return true;
	}
};
