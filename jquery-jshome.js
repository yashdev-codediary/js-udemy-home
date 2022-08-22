$(document).ready(function(){
	//$('button').addClass('animate__animated animate__bounce');
	//$('.btn-primary').addClass('animate__animated animate__wobble');
	$('button').removeClass('btn-primary');
	//$('#target1').css({color:'red', backgroundColor:'yellow'});
	//$('#target2').prop('disabled', true);
	$('h1').html('Welcome to <strong>Saksham</strong> portal.');
	// $('#target4').appendTo('.left');
	// $('#target4').clone().appendTo('#target4');

	/*
	- example of targetting parent div/element of selected class

	$('.columnHeadingLeft').parent().css({backgroundColor:'yellow'});

	- example of targetting child div/element of selected class

	$('.right').children().css({color:'red'});
	*/
	
	/*
	- targetting specific nth child

	$('.target:nth-child(4)').addClass('animate__animated animate__flash');
	*/

	
	//targetting even/odd elements

	$('.target:even').addClass('animate__animated animate__swing');


	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(data){
			$('.geoData').html("Latitude: " + data.coords.latitude + " and Longitude: "+ data.coords.longitude);
		});
	}
	
});