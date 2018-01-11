$(function() {
	$(".button-collapse").sideNav();
	$(".ribbon-wrapper > img, .ribbon-wrapper > a").animate({opacity:1}, 1000);
});

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

	// Categories of Highlights

	var categories = [
		{
			position: new google.maps.LatLng(30, -105),
			icon: '../images/highlights/workshops/workshops.png',
			type: 'workshops'
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
			name: 'Frisbee',
			position: new google.maps.LatLng(35, -100),
			icon: '../images/highlights/workshops/frisbee.png',
			category: 'workshops',
			description: 'bla-bla',
			cost: 'bla-bla',
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

			// replace this with modal

			var infowindow = new google.maps.InfoWindow({
          		content: event.name
        	});

        	infowindow.open(map, marker);
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