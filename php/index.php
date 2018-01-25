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
			logo_background.src = "images/inci-loader-back.png";
			return logo_background;
		}

	</script>
	<script type="text/javascript" src="js/timeline.json"></script>
	<script type="text/javascript" src="js/home.js"></script>
</head>

<body class="indexbody">

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

	<!-- preloader -->
	<div id="ip-container" class="ip-container">
		<div class="ip-loader center">
			<canvas id="canvas"></canvas>
		</div>
	</div>

	<main>
		<div id="social-icons">
			<a target="_blank" rel="nofollow" href="https://www.facebook.com/incidenttheofficialpage" title="Facebook"><i class="fa fa-facebook"></i></a>
			<a target="_blank" rel="nofollow" href="https://twitter.com/incident_nitk" title="Twitter"><i class="fa fa-twitter"></i></a>
			<a target="_blank" rel="nofollow" href="https://www.youtube.com/user/nitkincident" title="Youtube"><i class="fa fa-youtube-play"></i></a>
			<a target="_blank" rel="nofollow" href="https://www.instagram.com/incident_nitk/" title="Instagram"><i class="fa fa-instagram"></i></a>
			<a target="_blank" rel="nofollow" href="https://www.linkedin.com/company-beta/13373310" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
		</div>
		<div class="scrollable-wrap">
			<div class="zeroth-viewport"></div>
			<div class="first-viewport">
				<div class="row">
					<div class="col s12 m12 l7 center first-viewport-left"><iframe width="600" height="315" src="https://www.youtube.com/embed/RiXNTenVx4E?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
					<div class="col s12 m12 l5 center first-viewport-right">
						<h2 class="heading-h2-inci">About Incident</h2>
						<p>In leo lacus, sodales accumsan nisl nec, vehicula consequat ligula. Donec enim metus, maximus id tincidunt sit amet, faucibus et odio.Suspendisse eros ipsum, rutrum id interdum ut, vehicula quis sem. Morbi tristique sed nisi at facilisis. Morbi tincidunt lectus vitae scelerisque hendrerit. Sed pulvinar tortor nunc. Donec pellentesque justo vitae gravida convallis. Vestibulum dignissim ligula felis, vel sollicitudin odio tincidunt quis. In accumsan turpis et tincidunt tincidunt. Proin nec dapibus diam, ac mattis massa. Proin dignissim dapibus arcu feugiat fermentum. Phasellus malesuada tellus sed cursus tempus. Nulla facilisi. Etiam finibus felis et rutrum pellentesque. Nullam aliquam, mauris eu bibendum sollicitudin, quam turpis aliquam mauris, id sollicitudin nunc ligula id nulla. In leo lacus, sodales accumsan nisl nec, vehicula consequat ligula. Donec enim metus, maximus id tincidunt sit amet, faucibus et odio. In accumsan turpis et tincidunt tincidunt. Proin nec dapibus diam, ac mattis massa. Proin dignissim dapibus arcu feugiat fermentum. Phasellus malesuada tellus sed cursus tempus.</p>
					</div>
				</div>
			</div>
			<div class="second-viewport valign-wrapper">
				<div class="row">
					<div class="col s12 m12 l10">
						<div class="row" id="insert-row">
						</div>
					</div>
					<div class="col s12 m12 l2 timeline">
						<div class="row">
							<div class="col s12 m12 l12"><div class="active">2018</div>
							<div class="col s12 m12 l12"><div>2017</div></div>
							<div class="col s12 m12 l12"><div>2016</div></div>
							<div class="col s12 m12 l12"><div>2015</div></div>
							<div class="col s12 m12 l12"><div>2014</div></div>
							<div class="col s12 m12 l12"><div>2013</div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>

	<script src="js/preloader.js"></script>

	<script type="text/javascript">
		$(".ribbon-wrapper > img").click(function() {window.location.href = "index.php";});
	</script>

</body>
</html>