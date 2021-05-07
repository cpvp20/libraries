const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.end('Hello there from book!');
});

app.get('/libraries', (req, res) => {
    var options = {
        root: path.join(__dirname)
    };
    var rating = req.query.rating;
    console.log(rating);
    res.setHeader('Content-Type', 'application/json');
    res.status = 200;
    if (rating >= 3)
        res.sendFile('big.json', options);
    else
        res.sendFile('small.json', options);
});

app.listen(port, () => {
    console.log(`Backend Server running on port ${port}`);
});