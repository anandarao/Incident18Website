var categories_data = [
	{
		category_name: 'dance',
		cat_stamp: 'images/stamps/dance_events.png',
		back_color: '#FEC19B',
		events_details: [
			{
				name: 'Tandav',
				event_stamp: 'images/stamps/tandav.png',
				back_img: '../images/events_img/local_train.jpg',
				description: 'In purus ligula, elementum vel tincidunt ut, mollis non orci. Integer blandit sodales urna, ut rhoncus dolor rhoncus a. Nullam interdum tristique odio iaculis auctor. Vestibulum magna tellus, bibendum pharetra tristique eu, venenatis id erat. Donec nec sagittis enim. Ut feugiat metus quis nibh iaculis, et posuere felis consequat. Quisque vel ultricies lectus, et interdum libero. Etiam cursus est vel turpis commodo, sed malesuada dolor lobortis.',
				rules_link: '',
			},
			{
				name: 'Tandav',
				event_stamp: 'images/stamps/tandav.png',
				back_img: '../images/events_img/local_train.jpg',
				description: 'In purus ligula, elementum vel tincidunt ut, mollis non orci. Integer blandit sodales urna, ut rhoncus dolor rhoncus a. Nullam interdum tristique odio iaculis auctor. Vestibulum magna tellus, bibendum pharetra tristique eu, venenatis id erat. Donec nec sagittis enim. Ut feugiat metus quis nibh iaculis, et posuere felis consequat. Quisque vel ultricies lectus, et interdum libero. Etiam cursus est vel turpis commodo, sed malesuada dolor lobortis.',
				rules_link: '',
			},
		],
	}
];

$(function() {
	$(".button-collapse").sideNav();
	$(".ribbon-wrapper > img, .ribbon-wrapper > a").animate({opacity:1}, 1000);
	$('img.map-contienents').click(function() {
		open_events_view($(this).attr('id'));
	});
});

function open_events_view(event_category) {
	var data, event_list_divs = '';
	for (var i = 0; i < categories_data.length; i++) {
		if (categories_data[i]['category_name'] === event_category)
			data = categories_data[i];
	}
	for (var i = 0; i < data['events_details'].length; i++) {
		event_list_divs += '<div class="center list-scroller-element">' + data.events_details[i]['name'] + '</div>';
	}
	content = `<div class="events-list">
		<i class="events-close material-icons">close</i>
		<div class="events-list-img-container center"><img src="` + data['cat_stamp'] + `" /></div>
		<div class="letter">
			<div class="list-scroller">` + event_list_divs + `</div>
		</div>
	</div>`;
	$('body').append(content);
	$('.events-list').css({
		'background-color': data['back_color'],
	});
	setTimeout(function() {
		$('.events-list').css({
			'opacity': '1',
		});
	}, 50);
	$('.events-close').click(function() {
		$('.events-list').css({
			'opacity': '0',
		});
		setTimeout(function() {
			$('.events-list').remove();
		}, 100);
	});
	$('.list-scroller-element').click(function() {
		for (var a = 0; a < data['events_details'].length; a++) {
			if ($(this).text() === data['events_details'][a]['name']) {
				open_event(data['events_details'][a]);
				break;
			}
		}
	});
}

function open_event(event_data) {
	event_content = `<div class="event-view">
		<i class="event-view-left material-icons">keyboard_arrow_left</i>
		<div class="event-view-img-container center"><img src="` + event_data['event_stamp'] +`" /></div>
		<div class="event-description">
			<p>` + event_data['description'] + `</p>
			<div class="buttons-container row">
				<div class="col l2 offset-l3 link-buttons center register-button"><a>Register</a></div>
				<div class="col l2 offset-l2 link-buttons center rules-button"><a>Rules</a></div>
			</div>
		</div>
	</div>`;
	$('body').append(event_content);
	$('.event-view').css({
		'background-image': 'url(' + event_data['back_img'] + ')',
	});
	setTimeout(function() {
		$('.event-view').css({
			'opacity': '1',
		});
	}, 50);
	$('.event-view-left').click(function() {
		$('.event-view').css({
			'opacity': '0',
		});
		setTimeout(function() {
			$('.event-view').remove();
		}, 100);
	});
}
