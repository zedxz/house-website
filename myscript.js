var showLargeHouse = function() {
  //alert( "Welcome to my home!" );
	var houseobject = $('#houseimage')
  	houseobject.removeClass('hidden')
	houseobject.addClass ('largehouse')
}
var showhousedelay = function() {
	window.setTimeout(showLargeHouse, 1000);
}
$('#mybutton').click(showhousedelay)

$("#welcome-text").text("Nice to meet you!")

