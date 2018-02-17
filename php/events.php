<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Events | Incident 2018">
	<meta name="author" content="Incident 2018 Website Team">
	<meta name="keywords" content="Incident, NITK, 2018, Surathkal, Cultural fest, festival">
	<meta name="revisit-after" content="1 day">
    <meta name="googlebot" content="noodp">
    <meta name="language" content="English">
    <meta name="distribution" content="global">
    <meta name="rating" content="general">
    <meta name=”robots” content=”NOYDIR,NOODP”>
	<meta http-equiv="Resource-Type" content="value">
	<meta name="geo.position" content="13.010870;74.792544">
	<meta name="geo.placename" content="NITK Surathkal">
	<meta name="geo.region" content ="India">

	<title>Events - Incident 2018</title>

	<!-- favicon -->
	<link rel="shortcut icon" href="images/inci-logo.png">

	<!-- Material Icons -->
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

	<!-- Stylesheets -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
	<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">

	<!-- Scripts -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/materialize/0.98.2/js/materialize.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
	<script type="text/javascript" src="js/events.js"></script>
	<script type="text/javascript" src="js/regmodal.js"></script>
</head>

<body class="events-body">

	<header>
		<nav>
			<div class="nav-wrapper">
			<a href="#" data-activates="mobile-demo" class="button-collapse show-on-large"><i class="hamburger material-icons">menu</i></a>
			<ul class="side-nav" id="mobile-demo">
				<li class="social-media-icons-inline">
					<i class="fa fa-facebook"></i>
					<i class="fa fa-twitter"></i>
					<i class="fa fa-youtube-play"></i>
					<i class="fa fa-instagram"></i>
					<i class="fa fa-linkedin"></i>
				</li>
				<li class="about-side-nav-link"><a href="about.php" class="waves-effect waves-light btn">About Us</a></li>
				<li><a class="side-nav-register modal-trigger" href="#modal1">Register</a></li>
				<li><a href="ica.php" class="side-nav-ica">Campus Ambassador</a></li>
				<li><a href="index.php">Home</a></li>
				<li><a href="highlights.php">Highlights</a></li>
				<li><a href="events.php">Events</a></li>
				<li><a href="sponsors.php">Sponsors</a></li>
				<li><a href="team.php">Team</a></li>
			</ul>
			</div>
		</nav>
	</header>

	<div id="m-logo" class="hide-on-large-only"><img class="logo" src="images/inci-logo-final.png"></div>
	<main>
		<div class="maps-container hide-on-med-and-down">
			<img id="haute_couture" class="map-contienents asia" src="images/events/world_map/asia.png"/>
			<img id="fine_arts" class="map-contienents aus" src="images/events/world_map/aus.png"/>
			<img id="dance" class="map-contienents africa" src="images/events/world_map/africa.png">
			<img id="gaming" class="map-contienents samer" src="images/events/world_map/samer.png"/>
			<img id="music" class="map-contienents namer" src="images/events/world_map/namer.png"/>
			<img id="sports" class="map-contienents europe" src="images/events/world_map/europe.png"/>
			<img id="lit" class="map-contienents antarctica" src="images/events/world_map/antarctica.png"/>
			<img class="events-logo" src="images/inci-logo-final.png"/>
		</div>
		<div class="m-maps-container hide-on-large-only">
			<div class="row valign-wrapper">
				<div class="col s2 m2"><i class="left-arrow material-icons">keyboard_arrow_left</i></div>
				<div class="col s8 m8">
					<div class="row">
						<div class="col s12 m12 cat-stamp-img"><img id="dance" class="category-stamp" src="images/events/dance/stamps/dance.png" /></div>
					</div>
				</div>
				<div class="col s2 m2"><i class="right-arrow material-icons">keyboard_arrow_right</i></div>
			</div>
		</div>
	</main>

	<div id="modal1" class="modal modal-fixed-footer">
	  	</div>

	<script type="text/javascript">
		$('#modal1').modal();
		$(".ribbon-wrapper > img").click(function() {window.location.href = "index.php";});
	</script>

</body>
</html>