$(document).ready(function(){
	initializePage();
});

function initializePage() {
	$("#namebtn").click(editName);
	$("#namebtnconfirm").click(confirmName);
}

function editName (e) {
	e.preventDefault();

	var htmlString = '<input type="text" id="nameIn" placeholder="username" maxlength="10">' + 
	'<a href="#"><img src="http://placehold.it/15x15"/ id="namebtnconfirm"></a>';

	$('#namefield').html(htmlString);

	$("#namebtnconfirm").click(confirmName);
}

function confirmName (e) {
	e.preventDefault();

	var newName = $('#nameIn').val();

	var htmlString = newName + 
	'<a href="#"><img src="http://placehold.it/15x15"/ id="namebtn"></a>';

	$('#namefield').html(htmlString);

	$("#namebtn").click(editName);
}