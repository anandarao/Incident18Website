(function() {

	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById( 'ip-container' ),
		header = container.querySelector( 'header.ip-header' ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	// canvas related variables
	var canvas = document.getElementById( "canvas" );
	var ctx=canvas.getContext( "2d" );
	var cw,ch;

	// load the logo and the logo outline
	// then start the animation
	var logoOutline;
	var logo = fetch_loader();

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
					if( y <= 1 ) {
						setInterval( function() {
							$("#ip-container").removeClass('loading');
							$("#ip-container").addClass('loaded');
						}, 500);
						clearInterval( interval );

						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}

							window.removeEventListener( 'scroll', noscroll );
						};

						if( support.animations ) {
							header.addEventListener( animEndEventName, onEndHeaderAnimation );
						}
						else {
							onEndHeaderAnimation();
						}
					}
				}, 20 );
		};

		simulationFn();
	}

	function start(){

		logoOutline = outlinePNG( logo, 'lightgray' );

		cw = canvas.width = logoOutline.width;
		ch = canvas.height = logoOutline.height;
		
		logo.displayY = logo.height - 4;
		
		requestAnimationFrame( animate );
	}

	function animate( time ){

		y = logo.displayY;

		// clear the logo canvas
		ctx.clearRect( 0, 0, cw, ch );

		// use the clipping version of drawImage to 
		// increasingly reveal the logo from the bottom
		ctx.drawImage(
			logo, 0, y, logo.width, logo.height - y,
			4, y + 4, logo.width, logo.height - y
		);

		// reduce .displayY which increases the reveal
		logo.displayY--;
		
		// request another loop if the entire logo has not been revealed
		if ( logo.displayY > 0 ) {

			// draw logo outline
			ctx.drawImage( logoOutline, 0, 0 );
		
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