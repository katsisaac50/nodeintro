exports.users = (req, res) => {

  res.json({ users: [
    {name: 'Isaac', age: 21}, 
    {name: 'Katongole', age: 21}, 
    {name: 'Katongole', age: 21}, 
    {name: 'Katongole', age: 21},
  ], 
  });
};