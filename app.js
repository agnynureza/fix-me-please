const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require('mongoose');

mongoose.connect('mongodb://agnynureza:12345@ds227199.mlab.com:27199/livecode2db', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
