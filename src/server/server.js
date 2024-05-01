const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

module.exports = app


