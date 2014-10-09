$(document).ready(function() {
	$('.ryu').mouseenter (function() {
		$('.ryu-still, .ryu-cool').hide();
		$('.ryu-ready').show();
	})
	.mouseleave (function() {
		$('.ryu-ready, .ryu-cool ').hide();
		$('.ryu-still').show();
		
	})
	.mousedown (function() {
		playHadouken();
		$('.ryu-ready, .ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate({'left': '800px'}, 500,
			function() {
				$(this).hide();
				$(this).css('left', '500px');
			}
		);// show hadouken and animate it to the right of screen
	})
	.mouseup (function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
$(document).keydown(function(e) {
	if (e.keyCode == 88){
		$('.ryu-ready,.ryu-still, .ryu-throwing').hide();
		$('.ryu-cool').show();
		}
	})
	.keyup(function(e) {
	if (e.keyCode == 88){
		$('.ryu-cool, .ryu-ready, .ryu-throwing').hide();
		$('.ryu-still').show();
		}
	});
});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}