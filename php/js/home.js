function fetch_data(year) {
	var data = inci_timeline[year];
	var image = '<div class="col s5 m5 l5 center"><img src="' + data["img"] + '"/></div>';
	var content = '<div class="col s7 m7 l7"><h1>' + data["header"] + '</h1><p>' + data["description"] + '</p></div>';
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