(function() {

	var support = { animations : Modernizr.cssanimations },
	container = document.getElementById( 'ip-container' ),
	header = container.querySelector( 'header.ip-header' ),
	animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	// canvas related variables
	var canvas = document.getElementById( "canvas" );
	var ctx = canvas.getContext( "2d" );
	var cw,ch;
	var times = 0;

	// load the logo and the logo outline
	// then start the animation
	var logoOutline;
	var logo = fetch_loader();
	var logo_background = fetch_loader_background();
	var alpha = 0;
	var firsttime = true;
	var bus_1 = new Image();
	bus_1.src = "images/logo/Bus1.png";
	var eiffel = new Image();
	eiffel.src = "images/logo/EiffelTower.png";
	var pyramids = new Image();
	pyramids.src = "images/logo/PyramidsPNG.png";
	var opera = new Image();
	opera.src = "images/logo/OperaHouse.png";
	var pisa = new Image();
	pisa.src = "images/logo/Pisa.png";
	var bottom_pillar = new Image();
	bottom_pillar.src = "images/logo/BottomPillar.png";
	var gateway = new Image();
	gateway.src = "images/logo/GatewayPNG.png";
	var triangle = new Image();
	triangle.src = "images/logo/TrianglePNG.png";
	var bigben = new Image();
	bigben.src = "images/logo/BigBenPNG.png";
	var christ = new Image();
	christ.src = "images/logo/ChristPNG.png";
	var left_pillar = new Image();
	left_pillar.src = "images/logo/LeftPillar.png";
	var liberty = new Image();
	liberty.src = "images/logo/LibertyPNG.png";
	var taj = new Image();
	taj.src = "images/logo/TajMahalPNG.png";
	var nitk = new Image();
	nitk.src = "images/logo/NITK.png";
	var pink_flight = new Image();
	pink_flight.src = "images/logo/PinkFlight.png";
	var green_flight = new Image();
	green_flight.src = "images/logo/GreenFlight.png";
	var aqua_flight = new Image();
	aqua_flight.src = "images/logo/AquaFlight.png";
	var sun = new Image();
	sun.src = "images/logo/Sun.png";
	var balloon = new Image();
	balloon.src = "images/logo/Baloon.png";

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}
			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		$("#ip-container").addClass('loading');
		$(".ribbon-wrapper > a").hide();

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}

	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	function startLoading() {
		start();
		var simulationFn = function(callback) {
			var interval = setInterval( function() {
					// reached the end
					if( y <= 1) {
						var buttons = '<div id="register"><button onclick="popup(\'incident-233014\');" class="waves-effect waves-light btn-large" >Register Now</button><noscript id="tsNoJsMsg">Javascript on your browser is not enabled.</noscript><script src="//www.townscript.com/popup-widget/townscript-widget.nocache.js" type="text/javascript"></script></div><div id="ambassador-link"><a href = "ica.php"><button onclick="" class="waves-effect waves-light btn-large">Campus Ambassador</button></a></div>';
						setInterval( function() {
							$("#ribbon").addClass("ribbon");
							$(".ribbon-wrapper > a").show('slow').animate({opacity:1});
							$("#ip-container").removeClass('loading');
							$("#ip-container").addClass('loaded');
							if (firsttime) {
								$('body').append(buttons);
								firsttime = false;
								$('#ip-container').css({
									'background-color': 'transparent',
								});
							}
						}, 1000);
						clearInterval( interval );

						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}
							window.removeEventListener( 'scroll', noscroll );
						};
					}
				}, 1000 );
		};

		simulationFn();
	}

	function start(){

		logoOutline = outlinePNG( logo, 'lightgray' );
		ctx.globalAlpha = alpha;

		cw = canvas.width = 600;
		ch = canvas.height = 600;
		
		logo.displayY = logo.height - 4;
		
		requestAnimationFrame( animate );
	}

	function animate( time ){

		y = logo.displayY;

		if (alpha < 1) {
			alpha += 0.02;
		}

		// clear the logo canvas
		ctx.clearRect( 0, 0, 600, 600 );

		ctx.globalAlpha = alpha;
		times += 1;

		if (times > 19) ctx.drawImage(bus_1, 0, 0);
		if (times > 29) ctx.drawImage(eiffel, 0, 0);
		if (times > 39) ctx.drawImage(pyramids, 0, 0);
		if (times > 49) ctx.drawImage(opera, 0, 0);
		if (times > 59) ctx.drawImage(pisa, 0, 0);
		if (times > 79) ctx.drawImage(bottom_pillar, 0, 0);
		if (times > 89) ctx.drawImage(gateway, 0, 0);
		if (times > 99) ctx.drawImage(triangle, 0, 0);
		if (times > 109) ctx.drawImage(bigben, 0, 0);
		if (times > 119) ctx.drawImage(christ, 0, 0);
		if (times > 129) ctx.drawImage(left_pillar, 0, 0);
		if (times > 139) ctx.drawImage(liberty, 0, 0);
		if (times > 149) ctx.drawImage(taj, 0, 0);
		if (times > 159) ctx.drawImage(nitk, 0, 0);
		ctx.drawImage(pink_flight, 0, 0);
		ctx.drawImage(green_flight, 0, 0);
		ctx.drawImage(aqua_flight, 0, 0);
		ctx.drawImage(sun, 0, 0);
		ctx.drawImage(balloon, 0, 0);

		ctx.drawImage(logo_background, 0, 0);

		// use the clipping version of drawImage to 
		// increasingly reveal the logo from the bottom
		ctx.drawImage(
			logo, 0, y, logo.width, logo.height - y,
			270, 190 + y, logo.width, logo.height - y
		);

		// reduce .displayY which increases the reveal
		logo.displayY--;
		
		// request another loop if the entire logo has not been revealed
		if ( logo.displayY > 0 ) {

			// draw logo outline

			// request another loop until the logo is fully displayed
			requestAnimationFrame( animate );
		}
		
	}

	function outlinePNG( img, outlineColor ) {

		// new canvas sized to image size + 4px on each side
		var c = document.createElement('canvas');
		var cctx = c.getContext('2d');
		c.width = img.width + 8;
		c.height = img.height + 8;

		// redraw the image with 8-way offsets (n,s,e,w,nw,ne,se,sw)
		cctx.translate( 4, 4 );
		cctx.drawImage( img, -2, -2 );
		cctx.drawImage( img,  0, -2 );
		cctx.drawImage( img,  2, -2 );
		cctx.drawImage( img, -2,  0 );
		cctx.drawImage( img,  2,  0 );
		cctx.drawImage( img, -2,  2 );
		cctx.drawImage( img,  0,  2 );
		cctx.drawImage( img,  2,  2 );
		cctx.translate( -4, -4 );

		// fill with color
		cctx.globalCompositeOperation = "source-in";
		cctx.fillStyle = outlineColor;
		cctx.fillRect( 0, 0, img.width + 8, img.height + 8 );

		// draw original image in "erase" mode
		cctx.globalCompositeOperation = "destination-out";
		cctx.drawImage( img, 4, 4 );
		// return the outline canvas
		return c;
	}

	init();

})();