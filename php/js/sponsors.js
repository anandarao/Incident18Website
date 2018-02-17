$(function() {
	$(".button-collapse").sideNav();
	$(".ribbon-wrapper > img, .ribbon-wrapper > a").animate({opacity:1}, 1000);
	$('.fa-facebook').click(function(){
		window.open('https://www.facebook.com/incidenttheofficialpage');
	});
	$('.fa-twitter').click(function(){
		window.open('https://twitter.com/incident_nitk');
	});
	$('.fa-youtube-play').click(function(){
		window.open('https://www.youtube.com/user/nitkincident');
	});
	$('.fa-instagram').click(function(){
		window.open('https://www.instagram.com/incident_nitk/');
	});
	$('.fa-linkedin').click(function(){
		window.open('https://www.linkedin.com/company-beta/13373310');
	});
	$('#m-logo > img').click(function(){
		window.open('index.php', '_self');
	});
	var content = "";

	var l1 = "";
	$.each(sponsors["l1"], function(index, sponsor) {
		l1 += `
			<div class="col l12 m12 s12 center-align">
				<a target="_blank" href="${sponsor.link}">
					<img class="hide-on-med-and-up" src="images/sponsors/${index}.png" style="max-width:90vw;">
					<img class="hide-on-med-and-down"src="images/sponsors/${index}.png" style="max-width:45vw;">
				</a>
				<p class="sponsor-p sponsor-single sponsor-title">${sponsor.name}</p>
				<p class="sponsor-p sponsor-design-single sponsor-desig">${sponsor.designation}</p>
			</div>
		`;
	});

	var level_one = `
		<div class="row">
			${l1}
		</div>
	`;

	var l2 = "";
	var level_two = "";
	var count = 0;
	$.each(sponsors["l2"], function(index, sponsor) {
		count ++;
		l2 += `
			<div class="col l6 m6 s12 center-align">
				<a target="_blank" href="${sponsor.link}">
					<img class="hide-on-med-and-up" src="images/sponsors/${index}.png" style="max-width:90vw;">
					<img class="hide-on-med-and-down" src="images/sponsors/${index}.png" style="max-width:35vw; max-height:40vh;">
				</a>
				<p class="sponsor-p sponsor-double sponsor-title">${sponsor.name}</p>
				<p class="sponsor-p sponsor-design-double sponsor-desig">${sponsor.designation}</p>
			</div>
		`;
		if (count == 2) {
			level_two += `
				<div class="row">
					${l2}
				</div>
			`;
			count = 0;
			l2 = "";
		}
	});

	if (count > 0) {
		level_two += `
				<div class="row">
					${l2}
				</div>
			`;
	}

	var l3 = "";
	var level_three = "";
	var count = 0;
	$.each(sponsors["l3"], function(index, sponsor) {
		count ++;
		l3 += `
			<div class="col l4 m4 s12 center-align">
				<a target="_blank" href="${sponsor.link}">
					<img class="hide-on-med-and-up" src="images/sponsors/${index}.png" style="max-width:90vw;">
					<img class="hide-on-med-and-down"src="images/sponsors/${index}.png" style="max-width:20vw; max-height:20vh;">
				</a>
				<p class="sponsor-p sponsor-double sponsor-title">${sponsor.name}</p>
				<p class="sponsor-p sponsor-design-double sponsor-desig">${sponsor.designation}</p>
			</div>
		`;
		if (count == 3) {
			level_three += `
				<div class="row">
					${l3}
				</div>
			`
			count = 0;
			l3 = "";
		}
	});

	if (count > 0) {
		level_three += `
				<div class="row">
					${l3}
				</div>
			`;
	}

	content = level_one + level_two + level_three;

	$('#sponsors-container').html(content);
});