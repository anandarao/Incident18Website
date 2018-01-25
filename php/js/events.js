var current_index = 0
var categories_data = [
	{
		category_name: 'dance',
		back_color: '#FEC19B',
		events_details: [
			{
				name: 'Tandav',
				code: 'tandav',
				tagline: 'Semi professional eastern and contemporary group dance',
				description: `Namaskara folks. India, the land of great cultural heritage, with its
						vast variety of cultures and people has been a veritable treasure house of
						dance forms for untold centuries. It has given birth to various dance forms.
						Ladies and gentlemen brace yourselves for an evening celebrating dance,
						culture and history. All the classical dancers out
						there, practice your mudras, perfect the Aramandala and get the Shastriya
						Nritya going!`
			},
			{
				name: 'Promenade',
				code: 'promenade',
				tagline : 'Semi professional western group dance',
				description: `“A small body of determined spirits fired by an unquenchable faith in
				 		their mission can alter the course of history.” Dance like it’s the only thing 
				 		that matters; your only mission. Set the world ablaze with your passion, 
				 		showcase your talent, your skills and enthrall all those who watch with your elegance and grace.
						`
			},
			{
				name: 'Step Up Solo',
				code: 'stepupsolo',
				tagline : 'Solo Dance competition (all styles)',
				description: `“Be who you are, and say what you feel”
							Great things happen when you have the courage to be yourself. But it takes a
							lot more grit to dance the way you want to. Every dancer is unique and all
							dance forms are beautiful, so here’s your chance to show the world what you
							can do with a little bit of courage, talent and creativity; Incident’s Freestyle
							Solo competition: Step Up!`},
			{
				name: 'Step Up Duet',
				code: 'stepupduet',
				tagline : 'Duet Dance Competition (all styles)',
				description: `Two Dancers. One Mind. Groovy. In-Sync. Finesse and
							chemistry is what speaks in a duet. Break boundaries and overturn
							stereotypes; bring in the best of your skills and show the world what two souls
							in complete understanding can do!`
			},
		],
	},
];

$(function() {
	$(".button-collapse").sideNav();
	$(".ribbon-wrapper > img, .ribbon-wrapper > a").animate({opacity:1}, 1000);
	$('img.map-contienents').click(function() {
		open_events_view($(this).attr('id'));
	});
	$('.left-arrow').click(function() {
		current_index -= 1;
		if (current_index < 0)
			current_index = categories_data.length - 1;
		var data_btn_view = categories_data[current_index];
		$('.category-stamp').attr('src', "images/events/" + data_btn_view['category_name'] + "/stamps/" + data_btn_view['category_name'] + ".png");
		$('.view-button-events').attr('id', data_btn_view['category_name']);
	});
	$('.right-arrow').click(function() {
		current_index += 1;
		current_index %= categories_data.length;
		var data_btn_view = categories_data[current_index];
		$('.category-stamp').attr('src', "images/events/" + data_btn_view['category_name'] + "/stamps/" + data_btn_view['category_name'] + ".png");
		$('.view-button-events').attr('id', data_btn_view['category_name']);
	});
	$('.view-button-events').click(function() {
		for (var i = 0; i < categories_data.length; i++) {
			if (categories_data[i]['category_name'] === $(this).attr('id')) {
				open_events_view(categories_data[i]['category_name']);
			}
		}
	});
});

function open_events_view(event_category) {
	var data, event_list_divs = '';
	for (var i = 0; i < categories_data.length; i++) {
		if (categories_data[i]['category_name'] === event_category)
			data = categories_data[i];
	}
	console.log(event_category);
	for (var i = 0; i < data['events_details'].length; i++) {
		event_list_divs += '<div class="center list-scroller-element">' + data['events_details'][i]['name'] + '</div>';
	}
	content = `<div class="events-list">
		<i class="events-close material-icons">close</i>
		<div class="events-list-img-container center"><img src="` + "images/events/" + data['category_name'] + "/stamps/" + data['category_name'] + ".png" + `" /></div>
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
				open_event(data['events_details'][a], data['category_name']);
				console.log(data['events_details'][a]['name']);
				break;
			}
		}
	});
}

function open_event(event_data, category) {
	event_content = `<div class="event-view">
		<i class="event-view-left material-icons">keyboard_arrow_left</i>
		<div class="event-view-img-container center"><img src="` + "images/events/" + category + "/stamps/" + event_data['code'] + ".png" +`" /></div>
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
		'background-image': 'url(' + "images/events/" + category + "/background/" + event_data['code'] + ".png" + ')',
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
