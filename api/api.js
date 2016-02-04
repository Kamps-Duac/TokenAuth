var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User.js');

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
});

app.post('/register', function(req,res){
	var user = req.body;
	var newUser = new User.model({
		email: user.email,
		password: user.password
	});
	
	newUser.save(function(err) {
		res.status(200).json(newUser);
	})
})

mongoose.connect('mongodb://localhost/psjwt');
//mongodb://<jwt_ps2>:<Jwt#8892>@ds031972.mongolab.com:31972/jwt_ps

var server = app.listen(3000, function() {
	console.log('api listening on ', server.address().port);
});