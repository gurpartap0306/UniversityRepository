var express = require('express'),
  app = express(),
  port = process.env.PORT || 8118,
  mongoose = require('mongoose'),
  University = require('./api/models/universityModel'),
  bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://m001-student:GURpartap97@cluster0.jlnot.mongodb.net/mydb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/universityRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
