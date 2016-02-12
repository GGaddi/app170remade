// Get all of our friend data
//var accountData = require('../accounts.json');

exports.view = function(req, res){
	//console.log(accountData);
	res.render('shop', {
		'shop-items': [
			{
				'name': 'red shirt',
				'id': '001r',
				'lvl': 1,
				'price': 0,
				'img': 'http://placehold.it/105x105',
				'description': 'the perfect shirt for a new adventurer with no money.'			
			},
			{
				'name': 'blue shirt',
				'id': '001b',
				'lvl': 1,
				'price': 0,
				'img': 'http://placehold.it/105x105',
				'description': 'the perfect shirt for a new adventurer with no money.'			
			},
			{
				'name': 'green shirt',
				'id': '001g',
				'lvl': 1,
				'price': 0,
				'img': 'http://placehold.it/105x105',
				'description': 'the perfect shirt for a new adventurer with no money.'			
			}
		]
	});
};