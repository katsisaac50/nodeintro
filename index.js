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

app.use(cors());
 app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/api/users', (req, res) => {
  res.json({ users: [
    {name: 'Isaac', age: 21}, 
    {name: 'Katongole', age: 21}, 
    {name: 'Katongole', age: 21}, 
    {name: 'Katongole', age: 21},
  ], 
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
})

