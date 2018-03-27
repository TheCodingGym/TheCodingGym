// REQUIRE
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//  EXPRESS
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  MONGOOSE
const mongoose = require('mongoose');
const keys = require('../config/keys.js');
mongoose.connect(keys.mongoURI);
mongoose.connection.once('open', () => {
  console.log('^^^^^^CONNECTED TO THE DATABASE^^^^^');
});

// COOKIES
app.use(cookieParser('process.env.COOKIE_SECRET'));

//  PATH FOR STATIC FILES
app.use(express.static(`${__dirname}./../../`));
app.use('/css', express.static(path.join(__dirname, './../client/css')));
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, './../../index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('******SERVER LISTENING ON PORT 3000******'));
