export const validateFieldsInRegistration = (login, password, confirmPassword) => {
	const validateLogin = new RegExp(/^[a-z0-9]{3,20}/, 'i');
	const validatePassword = new RegExp(/^[a-z0-9!@$^."№;%:?*()-_=+]{5,20}/, 'i');
	if (!login || !password) {
		console.log('Empty fields');
		return false;
	} else if (!validateLogin.test(login)) {

		console.log(login);
		console.log('Incorrect login');
		return false;
	} else if (!validatePassword.test(password)) {
		console.log('Incorrect password');
		return false;
	} else if (password !== confirmPassword) {
		console.log('Password mismatch');
		return false;
	} else {
		return true;
	}
};
