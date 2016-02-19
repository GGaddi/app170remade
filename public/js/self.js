var change;

$(document).ready(function(){
	initializePage();
});

function initializePage() {
	$("#namebtn").click(editName);
	$("#namebtnconfirm").click(confirmName);
	$("#usermessage").click(editMsg);
	$("#save").click(saveChanges);
	change = 0;
}

function editName (e) {
	e.preventDefault();

	var htmlString = '<input type="text" id="nameIn" placeholder="username" maxlength="10"></input>' + 
	'<a href="#"><img src="http://placehold.it/15x15"/ id="namebtnconfirm"></a>';

	$('#namefield').html(htmlString);

	$("#namebtnconfirm").click(confirmName);
}

function confirmName (e) {
	e.preventDefault();

	var newName = $('#nameIn').val();
	localStorage.setItem("newName", newName);
	change = 1;

	var htmlString = newName + 
	'<a href="#"><img src="http://placehold.it/15x15"/ id="namebtn"></a>';

	$('#namefield').html(htmlString);

	$("#namebtn").click(editName);
}

function editMsg (e) {
	var htmlString = '<textarea id="msgIn" placeholder="enter a personal message...">';

	$("#messagefield").html(htmlString);
}

function saveChanges (e) {
	//var newName = $(this).val();
	console.log("I am working");
	if (change == 1) {
		var user = JSON.parse(localStorage.getItem(localStorage.getItem("user")));
		user.charName = localStorage.getItem("newName");
		localStorage.setItem(localStorage.getItem("user"), JSON.stringify(user));
	}
	/*var newNameWhole = document.getElementById("namefield").innerHTML;
	var newName = newNameWhole.replace('<a href="#"><img src="http://placehold.it/15x15"/ id="namebtn"></a>', ''); */
	console.log(change);
}