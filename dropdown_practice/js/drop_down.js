$(document).ready(function() {
	$("li.drop-down").children("a").on("click", function(){
		var $this = $(this);
		//console.log($this); //a
		//console.log($this.next()); // ul.item

		if ($this.hasClass("expand") == true) {
			$this.removeClass("expand").next("ul").slideUp();
		}else{
			//var ulHeight = $("li.drop-down").children("ul.item").height();
			$this.addClass("expand").next("ul").slideDown();
			//$("#wrapper").height(ulHeight);
		}


	});
}); // end of jQuery