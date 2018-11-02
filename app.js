var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser =  require('body-parser');

var apiRouter = require('./routes/api');

var app = express();
global.config = require('./config.js');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port',global.config.server.port);

app.use('/api', apiRouter);


module.exports = app;
