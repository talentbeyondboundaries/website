$(document).ready(function() {

	// Inline/header dropdowns toggler functionality
	$('.dropdown-toggle').on('click', function(e) {
		e.preventDefault();
		var toggler = $(this),
			target = $(toggler.attr('data-dropdown-target'));

		toggler.toggleClass('dropdown-toggle--active');
		target.toggleClass('dropdown--show');

		// Schedule for next tick
		setTimeout(function() {
			if (target.hasClass('dropdown--show')) {
				$(document).on('click', function(e) {
					// If element clicked is not part of a dropdown
					if ($(e.target).closest('.dropdown').length === 0) {
						toggler.removeClass('dropdown-toggle--active');
						target.removeClass('dropdown--show');
						$(document).off('click');
					}
				});
			}
		}, 0);
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
