$(document).ready(function(){
	$('.accordion').children('li').on('click', function(){
		console.log($(this)); // li
		$(this).toggleClass('expand').find('.content').slideToggle()
		.end().siblings('li').removeClass('expand').find('.content').slideUp();
	});
});