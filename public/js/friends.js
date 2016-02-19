$(document).ready(function(){
	initializePage();
	$('.lookpop').hide();
	$('.addpop').hide();
	$('.delpop').hide();
});

function initializePage() {
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('tabe-curr');
		$('.flist').removeClass('flist-curr');

		$(this).addClass('tabe-curr');
		$("#"+tab_id).addClass('flist-curr');
		});

	$('.lookup').click(function() {
		$('.lookpop').show()
	});

	$('.adding').click(function() {
		$('.addpop').show()
	});

	$('.deleting').click(function() {
		$('.delpop').show()
	});

	$(".close").click(function(){
		$('.delpop').hide()
		$('.addpop').hide()
		$('.lookpop').hide()
	});
}

function viewItem (e) {
	var itemID = $(this).closest('.entries').attr('id');
	var itemDesc = $(this).closest('.entries').attr('alt');
	//console.log("user clicked on item " + itemID);

	$('.desc h1').html(itemID);
	$('.desc p').html(itemDesc);

	if ($(this).hasClass('item-curr'))
		$(this).removeClass('item-curr');
	else
		$(this).addClass('item-curr');

	//var url = "/item/" + itemID;

	//$.get(url, callbackItem);
}

/*function callbackItem (result) {
	var itemName = $(result).attr('name');
	var itemDesc = $(result).attr('description');

	$('.desc h1').html(itemName);
	$('.desc p').html(itemDesc);
}*/
