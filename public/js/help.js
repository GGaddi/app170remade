$(document).ready(function(){
	$('.popup').hide()

	$("#faq").click(function() {
		$('.popup').show()
	});

	$("#close").click(function(){
		$('.popup').hide()
	});
});