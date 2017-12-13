$(document).ready(function() {

	// Initialize ScrollReveal JS plugin on Parallax elements
	window.sr = ScrollReveal({
		delay: 500,
		duration: 500,
		scale: 1,
		distance: 0
	});
	sr.reveal('[data-parallax] .container-fluid');

	if ($('#home-vid').length) {
		var video = $('#home-vid');
		video.on('canplaythrough', function() {
			video[0].play();
		});
	}

	$('.offcanvas-toggle, .offcanvas-dismiss').on('click', function() {
		$('.offcanvas-toggle').toggleClass('offcanvas-toggle--active');
		$('.offcanvas').toggleClass('offcanvas--active');
	});

	// Popups toggler functionality
	$('.popup-toggle').on('click', function(e) {
		e.preventDefault();
		var toggler = $(this),
			target = $(toggler.attr('data-popup-target'));

		target.addClass('popup--show').find('.popup__dismiss').on('click', function(e) {
			e.preventDefault();
			target.removeClass('popup--show').one('transitionend', function() {
				target.trigger('popup-close');
			});
		});
	});

	// Set slider slide down button position (to hug bottom of the screen)
	(function() {
		$('.section__slide-btn').css({
			'top': $(window).innerHeight() - 150
		}).on('click', function() {
			var target = $(this).parent().next();
			var scrollTo = target.offset().top;
			$('html, body').stop().animate({
				scrollTop: scrollTo
			}, 700);
		});
	})();
});
