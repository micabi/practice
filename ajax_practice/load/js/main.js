$(document).ready(function(){
	// id=btn1 クリックしたら
	$("#btn1").click(function(){
			$("div").load("message.html");
		});

	// id=btn2をクリックしたら
	$("#btn2").click(function(){
			$("div").load("message.html div:eq(2)");
		});
	});