const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authorization = require('./routes/authorization.router');
const registration = require('./routes/registration.router');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', authorization);
app.use('/api', registration);

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
