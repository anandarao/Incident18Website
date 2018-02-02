<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Website for Incident 2018">
	<meta name="author" content="Incident 2018 Website Team">

	<title>About Us - Incident 2018</title>

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
</head>
<body class="about-body">

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
				<li><a target="_blank" href="https://www.townscript.com/widget/incident-233014" class="side-nav-register">Register</a></li>
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

	<div id="m-logo"><img class="logo" src="images/inci-logo-final.png"></div>

	<main>
		<div class="row content-container">
			<div class="col s12 m12 l6 center">
				<div class="row">
					<div class="col s12 m12 l12"><iframe src="https://www.youtube.com/embed/RiXNTenVx4E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
					<div class="col s12 m12 l12"><a target="_blank" href="https://drive.google.com/open?id=1pDozVFWFA8XU8S7GlMIiYYRmSvuTS3Qd" class="waves-effect waves-light btn-large">Brochure</a></div>
				</div>
			</div>
			<div class="col s12 m12 l6 about-para">
				<p>From the days of its inception in 1980, NITK’s annual cultural festival has only grown larger and better with every passing year. This year, ‘Inci’ brings with it a fresh shot of enthusiasm, energy, and intensity. This colourful bonanza presents itself with the unique theme of “A Global Odyssey”.<br/><br/>Incident has been widely appreciated and admired for being one of the largest cultural events all over the country. It is known to keep its 30,000+ crowd enthralled in a variety of mind-blowing and invigorating string of events over a period of five days. The 4 days Incident embodies mesmerizing memories and exuberant experiences. The entire event is studded with performances by renowned musicians and artists who keep the crowd raving all night long.<br/><br/>There are a lot of things worth looking forward to during Incident. Some of the major crowd pullers are the Beach events, Pronites, Haute Couture and Slam Dunk; just to name a few. Every Incident brings with it a new wave of exquisite events and scintillating performances which are worth the annual wait!</p>
			</div>
		</div>
	</main>	
	<script type="text/javascript">
		$(function() {
			$('#m-logo > img').click(function(){
				window.open('index.php', '_self');
			});
		});
	</script>
</body>
</html>