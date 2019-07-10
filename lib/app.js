const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/api/v1/dogs', (req, res) => {
  res.send([{ name: 'Spot', age: 5, weight: '20lbs' },
    { name: 'Fido', age: 3, weight: '20lbs' },
    { name: 'Clifford', age: 4, weight: '15lbs' }]);
});

module.exports = app;
