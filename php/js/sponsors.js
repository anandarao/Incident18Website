$(function() {
	$(".button-collapse").sideNav();
	$(".ribbon-wrapper > img, .ribbon-wrapper > a").animate({opacity:1}, 1000);

	var content = "";

	var l1 = "";
	$.each(sponsors["l1"], function(index, sponsor) {
		l1 += `
			<div class="col l12 m12 s12 center-align">
				<a target="_blank" href="${sponsor.link}">
					<img class="hide-on-med-and-up" src="images/sponsors/${index}.png" style="max-width:90vw;">
					<img class="hide-on-med-and-down"src="images/sponsors/${index}.png" style="max-width:60vw;">
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
	$.each(sponsors["l2"], function(index, sponsor) {
		l2 += `
			<div class="col l6 m6 s12 center-align">
				<a target="_blank" href="${sponsor.link}">
					<img class="hide-on-med-and-up" src="images/sponsors/${index}.png" style="max-width:90vw;">
					<img class="hide-on-med-and-down"src="images/sponsors/${index}.png" style="max-width:35vw;">
				</a>
				<p class="sponsor-p sponsor-double sponsor-title">${sponsor.name}</p>
				<p class="sponsor-p sponsor-design-double sponsor-desig">${sponsor.designation}</p>
			</div>
		`;
	});

	var level_two = `
		<div class="row">
			${l2}
		</div>
	`;

	var l3 = "";
	$.each(sponsors["l3"], function(index, sponsor) {
		l3 += `
			<div class="col l4 m4 s12 center-align">
				<a target="_blank" href="${sponsor.link}">
					<img class="hide-on-med-and-up" src="images/sponsors/${index}.png" style="max-width:90vw;">
					<img class="hide-on-med-and-down"src="images/sponsors/${index}.png" style="max-width:20vw;">
				</a>
				<p class="sponsor-p sponsor-double sponsor-title">${sponsor.name}</p>
				<p class="sponsor-p sponsor-design-double sponsor-desig">${sponsor.designation}</p>
			</div>
		`;
	});

	var level_three = `
		<div class="row">
			${l3}
		</div>
	`;

	content = level_one + level_two + level_three;

	$('#sponsors-container').html(content);
});