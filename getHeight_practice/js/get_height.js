$(document).ready(function(){
	// #boxの高さ
	var boxHeight = $("#box").height();
	console.log("収納時の#boxの高さ：" + boxHeight); // 60px


		$("#box").children("span").on("click", function(){

			var listHeight = $(this).next("ul").height();
			console.log("ulの高さ：" + listHeight); // 300px

			$("#box").children("ul").show();

			var boxHeight = $("#box").height();
			console.log("展開時の#boxの高さ：" + boxHeight); // 360px
	});




}); // end of jQuery