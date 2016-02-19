$(document).ready(function(){
	initializePage();
});

function initializePage() {
	$("#begin").click(beginAdventure);
}

function beginAdventure(e){
	var hours = document.getElementById("boss-hr").value;
	var mins = document.getElementById("boss-min").value;
	var seconds = (hours*60*60) + (mins*60);
	console.log(seconds);
    localStorage.setItem("time", seconds);
}
