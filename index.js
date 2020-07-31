const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');
const account = require('./routes/account');

const app = express();

const port = 3000;

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.db);

mongoose.connection.on('connected', () => {
    console.log("Fine");
});

mongoose.connection.on('connected', (err) => {
    console.log("Error");
});

app.get('/', (req, res) => {
    res.send('Main page');
});

app.use('/account', account);

app.listen(port, () => {
    console.log("Cервер был запущен по порту: " + port);
});