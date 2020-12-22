require('dotenv')
	.config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express()

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
})
	.then(() => console.log('FINALLY!!!'))
	.catch(e => console.log('This is the CONNECT', e));

mongoose.set('debug', true);

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});