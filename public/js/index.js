
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

	var $email = $('<input type="text" name="email" placeholder="e-mail" class = "account" id= "email" />');
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
	$('#log').click(login);
});

function login(e) {

	console.log("User clicked LOGIN button");
	$.get("/login", handleLogin);
}

function handleLogin(result){
	//console.log(result['accounts'].length);
	var value = 0;
	var username;
	var password;
	var email;
	var allow = 0;
	$("input[class=account]").each(function() {
		if($('#log').text() == "log in!"){ 
			if( value == 0) {
				username = $(this).val();
				value = value +1;
			}
			else if (value == 1) {
				password = $(this).val();
			}
    		//var email = $(this).attr("name");
    		//console.log(username);
    		//console.log(password);
    		//console.log("Break");
    	}
    	else{
    		if( value == 0) {
				email = $(this).val();
				value = value +1;
			}
			else if (value == 1) {
				username = $(this).val();
				value = value +1;
			}
			else if (value == 2){
				password =  $(this).val();
			}
    		/*console.log(username);
    		console.log(password);
    		console.log(email); */
    		//console.log("Break");
    	} 
	});
	if($('#log').text() == "log in!") {
		/*console.log("check here");
		console.log(username);
    	console.log(password);
    	console.log(email);
    	console.log("end"); */
		if(username == "" || password == ""){
			location.href = '/';
		}
		else {
			for(var i = 0; i < result['accounts'].length; i++){
				if(result.accounts[i].username == username && result.accounts[i].password == password) {
					allow = 1;
					localStorage.setItem("userAccount", JSON.stringify(result.accounts[i]));
					break;
				}
			}
			if(allow == 1) {
				location.href = 'home';
			}
			else{
				location.href = '/';
			}

			/*jsonObj = [];
			item = {};
    		item ["username"] = username;
    		item ["password"] = password;

    		jsonObj.push(item);
			jsonString = JSON.stringify(jsonObj);
			//console.log("I am running"); */
			//console.log(jsonString);
			//location.href = 'home.html';
		}
	}
	else {
		if(username == "" || password == "" || email == ""){
			location.href = '/';
		}
		else{
			jsonObj = {
				"username": username,
				"password": password,
				"email": email
			};
    		/*item ["username"] = username;
    		item ["password"] = password;
    		item ["email"] = email;

    		jsonObj.push(item); */
    		result["accounts"].push(jsonObj);
    		console.log(result['accounts'].length);
    		/*$.getJSON('./accounts.json', function(data) {
				console.log(data);
				result["accounts"].push(jsonObj);
			}); */
			jsonString = JSON.stringify(jsonObj);
			localStorage.setItem("userAccount", jsonString);
			//console.log("I am running");
			console.log(jsonString);
			console.log(jsonObj);
			location.href = 'home';
		}
	}
}

//$('#log').click(
