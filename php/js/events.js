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
	{
		category_name: 'music',
		back_color: '#FEC19B',
		events_details: [
			{
				name: 'Bandish',
				code: 'bandish',
				tagline: 'The Eastern Rock Band Competition',
				description: `Thaikkudam Bridge, Agam, Indian Ocean, Avial are some of the
great rock bands produced in our country. Incident 2018 presents Bandish,
the Eastern Rock Band Competition. Witness the birth of the next great Indian
band as teams from various parts of the country battle it out for fame and
glory.`
			},
			{
				name: 'Pulse',
				code: 'pulse',
				tagline : 'The Western Rock Band Competition',
				description: `Rock is a form of music that keeps anyone on the edge with the
overpowering sound of the electric guitar and clash of the drums pumping
one’s adrenaline to the limit. The sound of the palm sliding on the electric
guitar, fingers slapping on the bass, solos being shredded at supersonic
speed and drums being bashed away, nothing sends shivers down the spine
quite like good old rock and roll. Incident 2018 brings to you under the
umbrella of its’s music events a treat for the ears of any listener, an ultimate
face-off between some of the most hard-core and ardent bands from colleges
across India. Be part of an unrestricted show of skill and live through the
experience of undoubtedly one of the best Rock Showdowns among college
fests. Be on the edge and let your pulse race as you join us at the Western
Rock Band Competition- Pulse.`
			},
			{
				name: 'Unplugged',
				code: 'unplugged',
				tagline : 'The Western Accoustic Band Competition + Acapella',
				description: `Welcome to the World of Acapella where different teams battle it
out for glory and to get their pitches perfect. Incident 2018 presents Uplugged,
the western acoustic and acapella competition. Participants shall battle each
other only with the power of their vocal cords or with an accompanying
acoustic instrument. See you there, Aca-fans!`
			},
			{
				name: 'Dhwanik',
				code: 'dhwanik',
				tagline : 'The Eastern Accoustic Band Competition',
				description: `Is all the rock getting you tired? Well, sit back and witness different
teams take the floor to refresh you with the ‘sounds of the nation’. Incident
2018 presents Dhwanik, the Eastern Acoustic Band Competition. At the end, it
will leave you saying,”Aisa dekha nahi khoobsurat koi.”`
			},
			{
				name: 'Raagalaya',
				code: 'raagalaya',
				tagline : 'The Solo Eastern Vocal Competition',
				description: `The knack of singing classical eastern is a skill that few have
ever truly been able to master after years and years of hard work. Yet the
effort put in is worth everything because there is nothing quite like the notes in
our very own Indian classical music that seem to strike a special cord within
us; with every undulation in a performer’s voice setting off a few goose bumps
all over us. Incident brings to you the Eastern Solo Singing Competition-
Raaghalaya, a chance to frolic in the infinite expanse of ragas and lose
yourself to the taal. Expose yourself to the magic and richness of Indian
culture through its music at the musical events this Incident 2018.`,
			},
			{
				name: 'War of DJs',
				code: 'djwars',
				tagline : 'The Beach DJ Competition',
				description: `The wind is howling, the waves are thrashing and the stage has been set. The battle
lines have been drawn. The beats have been dropped, the audience is on their feet
and their heart rates are rising with every passing moment. This is not just any
turntable battle. This is the Incident DJ Wars, where the fight for supremacy stands
tall. DJ Wars is one of the most highly anticipated shows during Incident. An event of
colossal magnitude, DJ Wars invites professional DJs from all over India to come
together and compete in a battle where the last man standing wins. In this contest,
DJs go head to head as they prove their mettle in order to win the DJ Was and the
glory that comes with it. Their duels are quite legendary and have made their way
into NITK folklore due to their intense routines which have set the stage on fire.
Adjudicated by reputed experts from the mainstream recording industry, this event
promises to propel the best in the business into the limelight, on a night which the
Malabar Coast will never forget.`,
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
