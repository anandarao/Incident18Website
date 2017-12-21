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
	<script type="text/javascript">

		function fetch_loader() {
			var logo = new Image();
			logo.src = "images/inci-loader.png";
			return logo;
		}

		function fetch_loader_background() {
			var logo_background = new Image();
			logo_background.src = "images/inci-loader-back.jpg";
			return logo_background;
		}

	</script>
	<script type="text/javascript" src="js/home.js"></script>
</head>

<body>

	<header></header>

	<main>
		<div id="social-icons" class="right">
			<a target="_blank" rel="nofollow" href="https://www.facebook.com/incidenttheofficialpage" title="Facebook"><i class="fa fa-facebook"></i></a>
			<a target="_blank" rel="nofollow" href="https://twitter.com/incident_nitk" title="Twitter"><i class="fa fa-twitter"></i></a>
			<a target="_blank" rel="nofollow" href="https://www.youtube.com/user/nitkincident" title="Youtube"><i class="fa fa-youtube-play"></i></a>
			<a target="_blank" rel="nofollow" href="https://www.instagram.com/incident_nitk/" title="Instagram"><i class="fa fa-instagram"></i></a>
			<a target="_blank" rel="nofollow" href="https://www.linkedin.com/company-beta/13373310" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
		</div>
		
	</main>

	<div class="ribbon-wrapper">
		<span></span>
		<span></span>
		<a href="highlights.php">Highights</a>
		<a href="events.php">Events</a>
		<a href="sponsors.php">Sponsors</a>
		<a href="team.php">Team</a>
		<div id="ribbon">
			<i></i>
			<i></i>
			<i></i>
			<i></i>
		</div>
	</div>

	<!-- preloader -->
	<div id="ip-container" class="ip-container">
		<div class="ip-loader center">
			<canvas id="canvas"></canvas>
		</div>
	</div>

	<script src="js/preloader.js"></script>

	<script type="text/javascript">
		$(".ribbon-wrapper > img").click(function() {window.location.href = "index.php";});
	</script>

</body>
</html>