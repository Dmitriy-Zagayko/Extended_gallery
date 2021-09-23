const { Router } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const registration = Router();

registration.post('/registration', async (req, res) => {
	try {

		const { login, password } = req.body;

		const candidate = await User.findOne({ login });

		if (candidate) {
			return res.status(400).json({ message: 'Such user already exists.' });
		}

		const hashedPassword = await bcrypt.hash(password, 12);
		const user = new User({ login, password: hashedPassword });
		
		await user.save();
		
		res.status(201).json({ message: 'Done!' });

	} catch (e) {
		res.status(500).json({ message: 'Something go wrong. Try again.' });
	}
});

module.exports = registration;
