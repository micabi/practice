$(document).ready(function(){
	$("#btn1").click(function(){
		$.get("message.txt", function(data){
			console.log(data);
		});
	});
});