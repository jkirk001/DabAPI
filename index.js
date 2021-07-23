const express = require('express');
const app = express();
const mongoose = require('mongoose');

//? Conects to mongoose

mongoose.connect('mongodb://localhost:27017/Dabadoo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//?Checks if mongoose succeeded
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('OMG DB connected!');
});

//?Fixes Cors Issues

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//?Fixes issues with pulling and recieving json from DB

app.use(express.urlencoded({ extended: true }));

//!Routes and Logic

app.get('/', (req, res) => {
  res.send('eyooo');
});

app.get('/allDabs', (req, res) => {});

app.listen(4000, () => {
  console.log(`Example app listening at http://localhost:4000`);
});
