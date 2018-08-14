$(document).ready(function(){


	// carousel initialization
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: false
	});
	
	// slider initialization
	$('.slider').slider({indicators: false});

	// scrollspy initialization
	$('.scrollspy').scrollSpy();

	// materialbox initialization
	$('.materialboxed').materialbox();

	// move next carousel
	$('.moveNextCarousel').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.carousel').carousel('next');
	});

	// move prev carousel
	$('.movePrevCarousel').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.carousel').carousel('prev');
	});
});

