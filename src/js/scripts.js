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

	// Homepage show video slide in popup
	(function() {
		setTimeout(function() {
			$('.popup--watch-video').fadeIn(1200).on('click', '.popup__dismiss', function(e) {
				e.preventDefault();
				$(this).closest('.popup').remove();
			});
		}, 10000);
	})();

	// Set slider slide down button position (to hug bottom of the screen)
	(function() {
		var headerHeight = $('.tbb-header').innerHeight();
		$('.section__slide-btn').css({
			'top': $(window).innerHeight() - 150,
			'opacity': 1
		}).on('click', function() {
			var target = $(this).parent().next();
			var scrollTo = target.offset().top - headerHeight;
			$('html, body').stop().animate({
				scrollTop: scrollTo
			}, 700);
		});
	})();
});
