const express = require('express');
const path = require('path');
const {apiRouter} = require('./api/api');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/dist'));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/dist', 'index.html'))
});


app.post('/', (req, res) => {
    apiRouter(req, res);
});


app.listen(port);