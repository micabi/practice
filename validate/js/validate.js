$(document).ready(function(){
	$('p.length').text('0');

	$('[name=comment]').on('keyup', function(){
		var text = $('[name=comment]').val();
		var textlength = text.length;

		$('p.length').text(textlength);

		if (textlength >= 50) {
			$('p.length').css({
				'color': 'red'
			});
		}
	});

	$('[name=comment]').on('blur', function(){
		$('p.length').css({
			'color': '#000'
	});
});
});