/**
*Credits: 
*https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular 
*http://adrianmejia.com/
**/

//server.js
var express  = require('express');
var app      = express(); 

//Load Database configuration and connect
var mongoose = require('mongoose');
var db = require('./config/database');
mongoose.connect(db.url);


var port     = process.env.PORT || 8081;
var morgan = require('morgan'); //To log requests to console

var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(methodOverride());

// load the routes
require('./app/routes.js')(app);

// listen (start app with node server.js)
app.listen(port);
console.log("App listening on port "+port);