var current_index = 0
var categories_data = [
	{
		category_name: 'dance',
		back_color: '#9c3273',
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
	{
		category_name: 'sports',
		back_color: '#FEC19B',
		events_details: [
			{
				name: 'Slam Dunk',
				code: 'slamdunk',
				tagline: 'Inter College Basket Ball tournament',
				description: `Fond of the NBA? Ever felt that you were unlucky because you could not watch your
							favourite NBA team play in action? Think you are ready to show off your skill sets on
							the basketball court? Well, worry no more! Team Incident brings you the next best
							thing! From 360 lay ups to dunk contests, Slam Dunk, Incident’s Basketball contest
							is everything you would expect to get, live in action. With teams coming from all over
							India, this platform is the perfect chance for your team to get the recognition you
							deserve. Strap on your Steph Curry shoes for the 3-point contests and the long-
							range shooting skill contests. Get the chance to witness the live exquisite DUNK
							contest, all
							3 of which are open to all participants. Don’t miss it!`
			},
			{
				name: 'Spinshock',
				code: 'spinshock',
				tagline : 'Inter College Throw Ball tournament',
				description: ``
			}
		],
	},
	{
		category_name: 'haute_couture',
		back_color: '#FEC19B',
		events_details: [
			{
				name: 'Haute Couture',
				code: 'haute_couture',
				tagline: 'Inter College Basket Ball tournament',
				description: `An evening of panache, colour, and finery; prepare your eyes for the spectacle that
							is the Incident Fashion Show, Haute Couture. With teams coming in from colleges all
							over the nation to compete, the ramp is nothing short of prestigious, and is easily
							one of the most anticipated events of Incident. A crowd favourite, the show is the
							product of months of hard work, with teams displaying their creativity through never-
							before explored themes, and an array of dazzling clothes and props. Do make sure
							to watch this extravaganza and witness, for yourself, why it is that when one thinks of
							fashion, one thinks of Incident Haute Couture.`
			}
		],
	},
	{
		category_name: 'fine_arts',
		back_color: '#FEC19B',
		events_details: [
			{
				name: 'Body Art',
				code: 'bodyart',
				tagline: 'Body Painting Competition',
				description: `Ever thought of having your own body of work? We&#39;ve
							taken it a step further. Take part in our Body Art competition and express on a
							slightly different canvas.`
			},
			{
				name: 'News Paper Costume',
				code: 'npcostume',
				tagline: 'News Paper Costume Design Competition',
				description: `I got news for you. You gotta have news
							for us in this iteration of Newspaper Costume Design, where contestants have
							to create a costume made entirely of newspapers.`
			}
		],
	},
	{
		category_name: 'gaming',
		back_color: '#FEC19B',
		events_details: [
			{
				name: 'CS GO',
				code: 'csgo',
				tagline: 'Counter Strike Global Offensive Tournament',
				description: `Prepare to enter the warzone and prove yourselves to be true top fraggers in this team based competitive first person shooter. Teams must consist of 5 members.`
			},
			{
				name: 'DOTA 2',
				code: 'dota',
				tagline: 'DoTA 2 Tournament',
				description: `Show your Sleight of Fist in the War of Ancients as you Eclipse your foes in this Action RTS game. Teams must consist of 5 members.`
			},
			{
				name: 'AoE 3',
				code: 'aoe',
				tagline: 'Age of Empires III Tournament',
				description: `Conquer the map with a partner in this intense real time strategy games. You may register as a solo or as teams of 2.`
			},
			{
				name: 'FIFA 18',
				code: 'fifa',
				tagline: 'FIFA 18 Tournament',
				description: `The next step in the quest to lift the trophy starts now, with the FIFA 16 Ultimate Team Championship Series - the biggest EA SPORTS tournament of all time. In the Ultimate Team Championship Series, the top players compete for your pride. Individual registrations.`
			},
			{
				name: 'NFS MW',
				code: 'nfs',
				tagline: 'Need For Speed MW Tournament',
				description: `Shift to top gear as you race past your opponents at top speed. Individual registrations.`
			},
			{
				name: 'Mini Militia',
				code: 'mm',
				tagline: 'Mini Militia Tournament',
				description: `Think you've got what it takes to dominate the mobile warzone? Fight your way to the top in grueling rounds and establish yourself as the champion. Individual registrations.`
			}
		],
	},
	{
		category_name: 'lit',
		back_color: '#FEC19B',
		events_details: [
			{
				name: 'General Quiz',
				code: 'genquiz',
				tagline: '',
				description: `The enthusiastic applause from a roaring crowd, the buzzing of the electrified air of suspense and the almost audible focus of the quizzers rapt on their feet. Questions fired and answers spat back with equal zeal.This is the battlefield where only knowledge reigns supreme. Charge those neurons and see if your team has got what it takes to win the general quiz. Conducted by Major Chandrakanth Nair, this is a quiz you definitely cannot afford to miss.`
			},
			{
				name: 'Travel Quiz',
				code: 'travelquiz',
				tagline: '',
				description: `Have you travelled far and wide, and are just waiting for a chance to share all that you've learnt? Have you spent hours exploring exotic destinations from the comfort of your room, with the internet as are you guide? Do you know Foreign cities as well as your hometown, from watching too many TV shows? If you love travel, adventure and all things geography, let your knowledge take centre stage and join us on an exciting journey through the world! Conducted by Major Chandrakant Nair, the travel quiz promises to be a fantastic adventure.`
			},
			{
				name: 'India Quiz',
				code: 'indiaquiz',
				tagline: '',
				description: `If you are confident with your trivia about India, this is your chance. If competition comes naturally to you, if your brain is dying for some activity and if you see thrill in do-or-die situations, we invite you to take part in the ultimate brain storming session.Watch while teams battle it out on the stage as answers fly back and forth with equal aplomb, in the India Quiz conducted by NITK alumnus Hem Maradia.`
			},
			{
				name: 'Lone Wolf Quiz',
				code: 'lonewolfquiz',
				tagline: '',
				description: `Do you know everything from fun facts about infinity war to the intricacies of global economics? Are you generally shunned among your peers for being a know it all? (Or does information unintentionally come out blurting whenever you open your mouth?) Well, here you can actually win prizes for that! So come and embrace the chance to show the ignoramuses that information is the real wealth!`
			}
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
	$('#haute_couture').hover(function(){
		$(this).attr('src', 'images/events/world_map/hover/asia.png');
	}, function() {
		$(this).attr('src', 'images/events/world_map/asia.png');
	});
	$('#dance').hover(function(){
		$(this).attr('src', 'images/events/world_map/hover/africa.png');
	}, function() {
		$(this).attr('src', 'images/events/world_map/africa.png');
	});
	$('#lit').hover(function(){
		$(this).attr('src', 'images/events/world_map/hover/antarctica.png');
	}, function() {
		$(this).attr('src', 'images/events/world_map/antarctica.png');
	});
	$('#fine_arts').hover(function(){
		$(this).attr('src', 'images/events/world_map/hover/aus.png');
	}, function() {
		$(this).attr('src', 'images/events/world_map/aus.png');
	});
	$('#sports').hover(function(){
		$(this).attr('src', 'images/events/world_map/hover/europe.png');
	}, function() {
		$(this).attr('src', 'images/events/world_map/europe.png');
	});
	$('#music').hover(function(){
		$(this).attr('src', 'images/events/world_map/hover/namer.png');
	}, function() {
		$(this).attr('src', 'images/events/world_map/namer.png');
	});
	$('#gaming').hover(function(){
		$(this).attr('src', 'images/events/world_map/hover/samer.png');
	}, function() {
		$(this).attr('src', 'images/events/world_map/samer.png');
	});
});

function open_events_view(event_category) {
	var data, event_list_divs = '';
	for (var i = 0; i < categories_data.length; i++) {
		if (categories_data[i]['category_name'] === event_category)
			data = categories_data[i];
	}

	if (event_category === "haute_couture")
	{
		open_event(data['events_details'][0], data['category_name']);
		return;
	}

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
				<div class="col m10 s10 l2 offset-l3 offset-m1 offset-s1 link-buttons center register-button"><a>Register</a></div>
				<div class="col m10 s10 l2 offset-l2 offset-m1 offset-s1 link-buttons center rules-button"><a>Rules</a></div>
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
