$(document).ready(function(){
	$('button').addClass('animate__animated animate__bounce');
	$('.btn-primary').addClass('animate__animated animate__wobble');
	$('button').removeClass('btn-primary');
	$('#target1').css({color:'red', backgroundColor:'yellow'});
	$('#target2').prop('disabled', true);
	$('h1').html('Welcome to <strong>Saksham</strong> portal.');
	$('#target4').appendTo('.left');
	$('#target4').clone().appendTo('#target4');
});