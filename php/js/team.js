$(function() {
	$(".button-collapse").sideNav();
	$(".ribbon-wrapper > img, .ribbon-wrapper > a").animate({opacity:1}, 1000);

	var content = ""; 

	$.each(team, function(index, object) {
		var team_members = "";
		$.each(object, function(index, object) {
			team_members += `
			<div class="col s12 l3 m3 ${index}">
				<div class="team-member center">
					<img src="images/team/${index}.jpg" class="circle team-image"/>
					<h4 class="team-name">${this.name}</h4>
					<p class="team-desig">${this.designation}</p>						
					<p class="team-details-para">
						<a href="mailto:${this.email}">${this.email}</a><br/>
						<a href="tel:+91 ${this.phone}">+91 ${this.phone}</a>
					</p>
					<a target="_blank" href="${this.facebook}">
						<svg style="width: 30px; height: 30px;" viewBox="0 0 24 24">
							<path fill="#4267B2" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"></path>
						</svg>
					</a>
					<a target="_blank" href="${this.linkedin}" style="margin-left: 15px;">
						<svg style="width: 30px; height: 30px;" viewBox="0 0 24 24">
							<path fill="#0077B5" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
						</svg>
					</a>
				</div>
			</div>
			`;
		});

		var team_name = "";
		index.split('_').forEach(function(str) {
			team_name += str;
			team_name += " ";
		});

		var team_content = `
			<div class="row teams-container-row">
				<div class="col s12 m12 l12">
					<h1 class="team-heading-name center">${team_name}</h1>
				</div>
				${team_members}
			</div>
		`;

		content += team_content;
	});

	$('#teams-container').html(content);

	$('.anand').attr('class', 'col s12 m4 l4');
	$('.sheetal').attr('class', 'col s12 m4 l4');
	$('.devraj').attr('class', 'col s12 m4 l4');

	$('.samyak').attr('class', 'col s12 m4 l4');
	$('.thomas').attr('class', 'col s12 m4 l4');
	$('.tirumala').attr('class', 'col s12 m4 l4');

	$('.utkarsh').attr('class', 'col s12 m4 l4');
	$('.azmeera').attr('class', 'col s12 m12 l12');

	$('.humaid').attr('class', 'col s12 m4 l4');
	$('.adil').attr('class', 'col s12 m4 l4');
	$('.rahul1').attr('class', 'col s12 m4 l4');

	$('.emmanuel').attr('class', 'col s12 m4 l4');
	$('.amarnath').attr('class', 'col s12 m4 l4');
	$('.kartik').attr('class', 'col s12 m4 l4');


	$(".team-image").on("error", function(){
        $(this).attr('src', 'http://via.placeholder.com/200x200');
    });
});