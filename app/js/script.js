 $(document).ready(function () {
 	$(window).scroll(function () {
 		changeBackground();
 	});
	 
	

 	$('#menu-btn').on('click', function () {
		
		
		var hadShow = $('#navbarNav').hasClass('show');
 		

 		if (!hadShow) {
			
 			$('#logo').css({'visibility': 'hidden', 'transition': 'all 0s'});
 		} else {
			$('#logo').css({'visibility': 'visible'});
		}
		
 	});


 });



 function changeBackground() {
 	let navHeight = $('#main-nav').outerHeight();
 	let currentPosition = $(window).scrollTop();

 	if (currentPosition >= navHeight) {
 		$('#main-nav').addClass('scrolled');
 	} else {
 		$('#main-nav').removeClass('scrolled');
 	}

 }

 // Add scrollspy to <body>
 $('body').scrollspy({
 	target: ".navbar",
 	offset: 50
 });

 // Add smooth scrolling on all links inside the navbar
 $("#main-nav a").on('click', function (event) {

 	// Make sure this.hash has a value before overriding default behavior
 	if (this.hash !== "") {

 		// Prevent default anchor click behavior
 		event.preventDefault();

 		// Store hash
 		var hash = this.hash;

 		// Using jQuery's animate() method to add smooth page scroll
 		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
 		$('html, body').animate({
 			scrollTop: $(hash).offset().top
 		}, 800, function () {

 			// Add hash (#) to URL when done scrolling (default click behavior)
 			window.location.hash = hash;
 		});

 	} // End if

 });
