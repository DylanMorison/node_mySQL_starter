const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbService = require('./dbService');
const { response } = require('express');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create
app.post('/insert', (request, response) => {});
	console.log(request.body)
// read

app.get('/getAll', (request, response) => {
	const db = dbService.getDbServiceInstance();

	const result = db.getAllData();

	result
		.then((data) => response.json({ data: data }))
		.catch((err) => console.log(err));
});

// update

// delete

app.listen(process.env.PORT, () => console.log('app is running'));
