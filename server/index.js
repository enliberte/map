const express = require('express');
const path = require('path');
const {apiRouter, getPlacemarks} = require('./api/api');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/dist'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/dist', 'index.html'))
});


app.post('/', (req, res) => {
    const method = req.body.method;
    const params = req.body.params;
    const promise = apiRouter(method, params);
    promise
        .then(result => res.send(result.rows))
        .catch(err => console.log(err));
});




app.listen(port);
