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

app.use(cors());
 app.use(morgan('dev'));
app.use(express.static('public'));

// routes middleware
app.use('/api', authRouter);



app.listen(5000, () => {
  console.log('Server is running on port 5000');
})

