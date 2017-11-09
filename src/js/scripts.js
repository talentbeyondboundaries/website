$(document).ready(function() {

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
});
