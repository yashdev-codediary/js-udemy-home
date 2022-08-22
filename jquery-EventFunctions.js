// example - getting value of each item from data array using api call with ajax

$(document).ready(function(){
	var url = "https://api.sampleapis.com/coffee/hot";
	$.getJSON(url, function(data){
		var coffieData = data;
		console.log(coffieData);
		var coffieItem = '';

		coffieData.map(function(item, index, array){
			$('#getAns').on('click', function(data){
				coffieItem += "<div>";
				coffieItem += item.title;
				coffieItem += "</div>";
				$('.answerKey1').html(coffieItem);
			});
		});
	});


});