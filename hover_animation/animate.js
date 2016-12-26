$(document).ready(function(){
	$('li.first').children('a.btn-action').on('mouseenter', function(e){
		//e.preventDefault();
		//console.log("mouseenter");
		//console.log(this); // a
		$(this).children('img').addClass('animate');
	})
	.on('mouseleave', function(e){
		e.preventDefault();
		//console.log("mouseleave");
		//console.log(this); // a
		$(this).children('img').removeClass('animate');
	});

	$('li.second').children('a.btn-action').on('click', function(e){
		e.preventDefault();
	});
});