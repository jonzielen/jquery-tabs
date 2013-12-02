$(function() {
	/*jquery tabs*/
	var lastClick = 0;

	$('#tab-nav li a').click(function(e) {
		var tabNumber = $(this).parent().index();

		if (tabNumber !== lastClick) {
			lastClick = tabNumber;
			$('#tab-nav li a').removeClass('active-tab');
			$(this).addClass('active-tab');
			$('#tab-holder div').fadeOut();
			$('#tab-holder div:eq('+tabNumber+')').fadeIn();
			var containerHeight = $('#tab-nav').innerHeight() + $('#tab-holder div:eq('+tabNumber+')').innerHeight();
			$('#tab-container').animate({
				height: containerHeight
			});
			e.preventDefault();
		} else {
			return false;
		};
	});
});

