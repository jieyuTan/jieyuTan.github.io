$(document).ready(function() {
	$('.answer').hide();
	$('.main h2').mouseover(
	function() {
		var $answer = $(this).next('.answer');
		if($answer.is(':hidden')) {
			$answer.slideDown();
			$(this).addClass('close');
		} else {
			$answer.fadeOut();
			$(this).removeClass('close');
		}
	});  //结束click
});//结束ready