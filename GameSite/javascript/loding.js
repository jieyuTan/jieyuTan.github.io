$(document).ready(function() {
		$('#w').click(function(evt) {
			evt.preventDefault();
			if ($('#apDiv2').is(':hidden')) {
				$('#apDiv2').slideDown(300);
				$(this).addClass('close');
			} else {
				$('#apDiv2').slideUp(600);
				$(this).removeClass('close');
			}
		}); //结束click
	});