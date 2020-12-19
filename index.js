//filename: Index.js

//import express
let express = require('express');

//import body parser
let bodyParser = require('body-parser');

//import mongoose
let mongoose = require('mongoose');

//initialize app
let app = express();

//import routes
let apiRoutes = require("./api-routes");

//configuration bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/tugas_4_nodejs');

var db = mongoose.connection;

//setup server port (process.environment.PORT)
var port = process.env.PORT || 8080;

//send message for default url
app.get('/', (req,res) => res.send('Hello World with Express and Nodemon'));

//app apiRoutes
app.use('/api', apiRoutes);

//launch app to listen specified PORT
app.listen(port, function(){
  console.log('Running tugas_4_nodejs on Port ' + port);
});
