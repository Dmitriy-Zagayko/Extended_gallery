const { Router } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authorization = Router();

require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

authorization.post('/authorization', async (req, res) => {
	try {

		const { login, password } = req.body;

		const user = await User.findOne({ login });

		if (!user) {
			return res.status(400).json({ message: 'User not found.' });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ message: 'Wrong password, try again.' });
		}

		const token = jwt.sign(
			{ userId: user.id },
			secretKey,
			{ expiresIn: '1h' },
		);

		res.json({ token, userId: user.id });

	} catch (e) {
		res.status(500).json({ message: 'Something go wrong. Try again.' });
	}
});

module.exports = authorization;
