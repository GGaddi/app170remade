// Get all of our friend data
var accountData = require('../accounts.json');

exports.view = function(req, res){
	//console.log(accountData);
	res.render('index', accountData);
};

exports.login = function(req, res) {
	console.log("I AM RUNNING!!!!!!")
	res.json(accountData);
}