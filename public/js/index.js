
/*$.getJSON('./accounts.json', function(data) {
	console.log(data);
	accountData = data;
}); */
/*$.ajax({ 
	url: 'accounts.json', 
	dataType: 'json', 
	type: 'get', 
	cache: false, 
	success: function(data) {
		console.log(data);
		accountData = data;
	} 
}); */
$(document).ready(function() {

	var $email = $('<input type="text" name="email" placeholder="e-mail" class = "account"/>');
	//var $email = $('<input type="email" name="email" placeholder="e-mail"/>');
	$('#register').click(function() {
		//console.log("I am working.");
		if( $(this).text() == "(or create an account)") {
			$email.show();
			$('#login').prepend($email);
			$('#log').text("sign up!");
			$(this).text("(did you want to log in?)");
		}
		else {
			$email.hide();
			$('#log').text("log in!");
			$(this).text("(or create an account)");
		}
	});
});

//$('#log').click(
