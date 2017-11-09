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
});
