$(document).ready(function(){
	//console.log("load");
	$('.accordion').children('li').on('click', function(){
		//alert("click");
		$(this).toggleClass('expand').find('.content').slideToggle();
	});
});