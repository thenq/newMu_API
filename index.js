import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;
const URL = `mongodb+srv://admin:3gXiO54zbQW0ps51@cluster0.g2zio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

app.use('/posts', posts);

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connected to db...');
		app.listen(PORT, () => {
			console.log(`App is running on port ${PORT}`)
		})
	}).catch(err => {
		console.log(err)
	});
