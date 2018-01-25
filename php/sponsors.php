<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Website for Incident 2018">
	<meta name="author" content="Incident 2018 Website Team">

	<title>Incident 2018</title>

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
	<script type="text/javascript" src="js/sponsors.json"></script>
	<script type="text/javascript" src="js/sponsors.js"></script>

</head>

<body>

	<header>
		<nav>
			<div class="nav-wrapper">
			<a href="#" data-activates="mobile-demo" class="button-collapse show-on-large"><i class="hamburger material-icons">menu</i></a>
			<ul class="side-nav" id="mobile-demo">
				<li><a href="#!" class="side-nav-register">Register</a></li>
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
	<div id = "scrollable-wrapper">
		<main>
			<div id="social-icons" class="hide-on-med-and-down">
				<a target="_blank" rel="nofollow" href="https://www.facebook.com/incidenttheofficialpage" title="Facebook"><i class="fa fa-facebook"></i></a>
				<a target="_blank" rel="nofollow" href="https://twitter.com/incident_nitk" title="Twitter"><i class="fa fa-twitter"></i></a>
				<a target="_blank" rel="nofollow" href="https://www.youtube.com/user/nitkincident" title="Youtube"><i class="fa fa-youtube-play"></i></a>
				<a target="_blank" rel="nofollow" href="https://www.instagram.com/incident_nitk/" title="Instagram"><i class="fa fa-instagram"></i></a>
				<a target="_blank" rel="nofollow" href="https://www.linkedin.com/company-beta/13373310" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
			</div>

			<div id = "scrollable">
				<div id="sponsors-heading">
					<div class="row">
						<div class="col l12 m12 s12 center-align">
							<h3 class="center-align sponsors-h">For Sponsorship related queries contact</h1>
						</div>
						<div class="col l4 m4 s12 center-align">
							<h5 class="sponsor-h">Sabari Ram</h5>
							<a href="mailto:sabariram@incident.co.in">sabariram@incident.co.in</a><br>
							<a href="tel:+917022209252">+91 7022209252</a>
						</div>
						<div class="col l4 m4 s12 center-align">
							<h5 class="sponsor-h">Ananda Rao H</h5>
							<a href="mailto:anandarao@incident.co.in">anandarao@incident.co.in</a><br>
							<a href="tel:+919535125744">+91 9535125744</a>
						</div>
						<div class="col l4 m4 s12 center-align">
							<h5 class="sponsor-h">Sheetal Shalini</h5>
							<a href="mailto:sheetal@incident.co.in">sheetal@incident.co.in</a><br>
							<a href="tel:+918970832326">+91 8970832326</a>
						</div>
					</div>
				</div>
				<div id="sponsors-container" class="container">
				</div>
			</div>
		</main>
	</div>
	
	<script type="text/javascript">
		$(".ribbon-wrapper > img").click(function() {window.location.href = "index.php";});
		$("#m-logo > img").click(function() {window.location.href = "index.php";});
	</script>

</body>
</html>