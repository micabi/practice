$(document).ready(function() {
	$("li.drop-down").children("a").on("click", function(){
		var $this = $(this);
		console.log($this);
	});
}); // end of jQuery