const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authorization = require('./routes/authorization.router');
const registration = require('./routes/registration.router');
const gallery = require('./routes/gallery.router');
const { validateFieldsInRegistration, authentificateToken } = require('./validation/validation.server');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', authorization);
app.use('/api', validateFieldsInRegistration, registration);
app.use('/api/gallery', authentificateToken, gallery);

const PORT = process.env.PORT || 4050;

async function start() {
	try {
		await mongoose.connect(
			process.env.MONGO_URI,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
			() => { console.log('connected to MongoDB') }
		);
		app.listen(PORT, () => console.log(`app start on port:${PORT}`));
	} catch (e) {
		console.log('Server error', e.message);
		process.exit(1);
	}
}

start();
