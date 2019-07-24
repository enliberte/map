const express = require('express');
const path = require('path');
const {apiRouter} = require('./api/api');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer  = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/uploads/`)
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.placemarkId}_${file.originalname}`)
    }
});
const upload = multer({storage}).array('pictures');


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

app.post('/pictures', (req, res) => {
    let uploadSuccess = true;
    upload(req, res, err => {
        uploadSuccess = false;
        res.status(404).send(err);
    });
    if (uploadSuccess) {
        res.send('upload successful')
    }
});

app.listen(port);