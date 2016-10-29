$(document).ready(function(){
	//console.log("load");
	var carouselImagesList = $(".carousel").find(".thumbs-list");

	carouselImagesList.each(function(){
		console.log($(this)); // .thumbs-list

		var listWidth = $(this).outerWidth();
		console.log(listWidth); // 10000px

		var doubleListWidth = listWidth * 2;
		console.log(doubleListWidth); // 20000px
		console.log($(this).parent()); // .thumbs

		$(this).parent().width(doubleListWidth);
		console.log($(this).parent().width()); // 20000px

		$(this).clone().insertAfter($(this));

	});





});