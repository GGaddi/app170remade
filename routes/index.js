// Get all of our friend data
var accountData = require('../accounts.json');

exports.view = function(req, res){
	console.log(req.query);
	console.log(accountData);
	var username = req.query.username;
	var password =  req.query.password;
	var email = req.query.email;
	//console.log(username);
	var newAccount = {
		"username": req.query.username,
		"password": req.query.password,
		"email": req.query.email
	//$("#submitBtn")
	//console.log(data);
	};
	console.log(username);
	if(!username || !password || !email) {

	}
	else { 
		console.log(newAccount);
		accountData["accounts"].push(newAccount);
	}
	res.render('index');
};

exports.login = function(req, res) {
	console.log("I AM RUNNING!!!!!!")
	
	res.json(accountData);
}