$(function() {
	$(".button-collapse").sideNav();
	$(".ribbon-wrapper > img, .ribbon-wrapper > a").animate({opacity:1}, 1000);
});

function modal_open_up() {
	close_button = '<div class="close-button-wrapper"><i id="close-button" class="material-icons">&#xE5CD;</i></div>';
	content = close_button + '<div class="container"><h1>Event 1</h1></div>';
	modal_container = '<div id="modal-container">' + content + '</div>';
	$('body').append(modal_container);
	setTimeout(function() {
		$("#modal-container").css({
			'top': '0',
			'left': '0',
			'min-height': '100vh',
			'width': '100vw',
		});
	}, 50);
	$('#close-button').click(function() {
		$('#modal-container').remove();
	});
}

function initMap() {
	var originalMapCenter = new google.maps.LatLng(13, 0);
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: originalMapCenter,
		maxZoom : 8,
		minZoom : 3,
		styles:[
		  {
		    "elementType": "labels",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.neighborhood",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape",
		    "stylers": [
		      {
		        "color": "#bababa"
		      },
		      {
		        "visibility": "on"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.icon",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "stylers": [
		      {
		        "color": "#ffffff"
		      },
		      {
		        "visibility": "on"
		      }
		    ]
		  }
		],
		disableDefaultUI: true

	});

	// Categories of Events

	var categories = [
		{
			position: new google.maps.LatLng(30, -105),
			icon: 'images/events/dance/dance.png',
			type: 'dance'
		}
	];

	var category_markers = []

	categories.forEach(function(category) {
		var marker = new google.maps.Marker({
			position: category.position,
			map: map,
			icon: category.icon,
			title: "Click to zoom"
		});

		marker.addListener('click', function() {
			map.setZoom(4);
			map.setCenter(marker.getPosition());
		});

		category_markers.push(marker);
	});

	// Events

	var events = [
		{
			name: 'Tandav',
			position: new google.maps.LatLng(35, -100),
			icon: 'images/events/dance/tandav.png',
			category: 'dance',
			description: 'bla-bla',
			rules: 'bla-bla',
			prizes: 'bla-bla',
			contact: 'bla-bla'
		}
	];

	var event_markers = []

	events.forEach(function(event) {
		var marker = new google.maps.Marker({
			position: event.position,
			map: null,
			icon: event.icon,
			title: event.name
		});

		marker.addListener('click', function() {
			modal_open_up();
		});

		event_markers.push(marker);
	});

	map.addListener('zoom_changed', function() {
		if (map.getZoom() >= 4)
		{
			category_markers.forEach(function(marker) {
				marker.setMap(null);
			});

			event_markers.forEach(function(marker) {
				marker.setMap(map);
			});
		}
		else
		{
			category_markers.forEach(function(marker) {
				marker.setMap(map);
			});

			event_markers.forEach(function(marker) {
				marker.setMap(null);
			});
		}
	});
}