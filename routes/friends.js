// Get all of our friend data
var accountData = require('../accounts.json');

exports.view = function(req, res){
	console.log(accountData);
	res.render('friends', accountData);
};