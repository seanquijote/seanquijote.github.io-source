$(document).ready(function(){

	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: false
	});
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

	$('.slider').slider({indicators: false});
	$('.scrollspy').scrollSpy();
  $('.materialboxed').materialbox();
});
