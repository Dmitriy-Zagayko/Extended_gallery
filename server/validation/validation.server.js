const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

const validateFieldsInRegistration = (req, res, next) => {
	const validateLogin = new RegExp(/^[a-z0-9]{3,20}/, "i");
	const validatePassword = new RegExp(/^[a-z0-9!@$^."№;%:?*()-_=+]{5,20}/, "i");
	const { login, password } = req.body;

	if (!login || !password) {
		return res.status(400).json({ message: 'No data.' });
	}
	if (login && !validateLogin.test(login)) {
		return res.status(400).json({ message: 'Incorrect login.' });
	}
	if (password && !validatePassword.test(password)) {
		return res.status(400).json({ message: 'Incorrect password.' });
	}
	next();
};

const authentificateToken = (req, res, next) => {
	try {
		
		next();
	} catch (e) {
		res.sendStatus(400).json({ message: 'Bad request.' });
	}
};

module.exports = { validateFieldsInRegistration, authentificateToken };
