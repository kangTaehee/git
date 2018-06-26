var keyboardchk = false;
$('body').on('keydown', function(event) {
	if (event.keyCode==9) {
		keyboardchk=true;
	}
});
$('body').on('click', function(event) {
	keyboardchk=false;
});

setTimeout(function() {
	$('.owl-prev,.owl-next').each(function(index, el) {
		$(this).attr('tabindex', '0');
		$(this).keydown(function(event) {
			// console.log()
			if (event.keyCode==13){
				$(this).trigger('click');
				$('.owl-stage').removeClass('keyboardControlActive');
				$('.owl-stage-outer').scrollLeft(0);
			}
		});
	});
	$('.item a').each(function(index, el) {
		$(this).focus(function(event) {
			if (keyboardchk) {
				// $(this).parents('.owl-stage').css('transform','translate3d(0, 0, 0)')
				$(this).parents('.owl-stage').addClass('keyboardControlActive')
				$(this).parents('.owl-carousel').trigger('stop.owl.autoplay');

			}
		});
	});
}, 1500);
