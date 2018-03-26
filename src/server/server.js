const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

//  EXPRESS
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  MONGOOSE
mongoose.connection.once('open', () => {
  console.log('===CONNECTED TO DATABASE===');
});

// COOKIES
app.use(cookieParser('process.env.COOKIE_SECRET'));
// 
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../index.html'))
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('******SERVER LISTENING ON PORT 3000******'));
