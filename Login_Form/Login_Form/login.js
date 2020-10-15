var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// Creating db connection

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'A1!B2@C3#',
	database : 'chad'
});

// Using express-session

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Loading the html page

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

// Checking the username and password

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		sql="SELECT user_id,username FROM ilance_users WHERE username = ? AND password = md5(md5( ? )+':'+(select saltfrom ilance_users where username= ?))"
		connection.query(sql, [username, password], function(error, results) {
			if (results != 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});

	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
	

});

// Loading the session page

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);