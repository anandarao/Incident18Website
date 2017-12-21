$(function() {
	$(".button-collapse").sideNav();
	$(".ribbon-wrapper > img, .ribbon-wrapper > a").animate({opacity:1}, 1000);
});

function initMap() {
	var originalMapCenter = new google.maps.LatLng(0, 0);
	var position1 = new google.maps.LatLng(30, 30);
	var position2 = new google.maps.LatLng(31, 31);
	var position3 = new google.maps.LatLng(30, 31);
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: originalMapCenter,
		maxZoom : 10,
		minZoom : 3,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.BOTTOM_CENTER
		},
	});

	var infowindow = new google.maps.InfoWindow({
		content: 'Change the zoom level',
		position: originalMapCenter
	});
	infowindow.open(map);

	var marker1 = new google.maps.Marker({
		position: position1,
		map: map,
		label: '1'
	});

	var marker2 = new google.maps.Marker({
		position: position2,
		map: null,
		label: '2'
	});

	var marker3 = new google.maps.Marker({
		position: position3,
		map: null,
		label: '3'
	});

	map.addListener('zoom_changed', function() {
		infowindow.setContent('Zoom: ' + map.getZoom());

		var zoom_level = map.getZoom();

		if (zoom_level >= 7){
			marker1.setMap(null);
			marker2.setMap(map);
			marker3.setMap(map);
		}
		else
		{
			marker1.setMap(map);
			marker2.setMap(null);
			marker3.setMap(null);
		}

	});
}