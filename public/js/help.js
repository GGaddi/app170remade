$(document).ready(function(){
$('.popup').hide()

	$("#faq").click(function() {
		$('.popup').delay(1000).show()
	});

	$("#close").click(function(){
		$('.popup').delay(1000).hide()
	});
});