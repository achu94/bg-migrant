const express = require('express');
const newsHandler = require('./services/newsHandler');
const cors = require('cors');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello word');
});

app.get('/news',cors(), (req, res) => {
    newsHandler.getTop10().then(data => {
        console.log(data.articles[0])
        res.status(200).send(data.articles);
    })
});

app.listen(port, (req, res) => {
    console.log(`Example app listening at http:://localhost:${port}`);
});