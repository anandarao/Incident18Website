function fetch_data(year) {
	var data = inci_timeline[year];
	var image = '<div class="col s12 m12 l12 center"><img src="' + data["img"] + '"/></div>';
	var content = '<div class="col s12 m12 l12"><h1 class="center timeline-heading">' + data["header"] + '</h1></div>';
	content += '<div class="col s12 m12 l6 offset-l3 timeline-tagline">' + data["description"] + '</div>';
	console.log(content);
	$('#insert-row').html(image + content);
}

$(function() {
	fetch_data($('.timeline > div > div > div.active').text());
	$(".button-collapse").sideNav();
	$('.timeline > div > div > div').click(function(){
		$('.timeline > div > div > div').removeClass('active');
		$(this).addClass('active');
		fetch_data($(this).text());
	});
	$(".scrollable-wrap").scroll(function(){
		$("#ip-container").css("opacity", 1 - $(".scrollable-wrap").scrollTop() / 500);
	});
});