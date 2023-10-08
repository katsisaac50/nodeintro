// var superheros = require("superheros")
// var supervillains = require('supervillains');

// var hero = superheros.random();
// var villain = supervillains.random();

// console.log(hero);

// console.log(supervillains.all);

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const authRouter = require('./routes/auth');
const mongoose = require('mongoose');

// 
require('dotenv').config();


// db connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,

}).then(() => {
  console.log('db connected');
}).catch((err) => {
  console.log(err);
});

// middlewares
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// logging
 app.use(morgan('dev'));

// static files
app.use(express.static('public'));

// routes middleware
app.use('/api', authRouter);

app.listen(1400, () => {
  console.log('Server is running on port 5000');
})

