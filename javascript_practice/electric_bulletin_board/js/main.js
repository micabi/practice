window.addEventListener("load", function(){
	//console.log("load");

	var msg = "これはテストメッセージです。";
	console.log(msg.length);
	//console.log(msg);

	console.log(msg.substring(3, msg.length));
	console.log(msg.substring(0, 3));
	console.log(msg.substring(3, msg.length) + msg.substring(0, 3));

	setInterval(abc, 1000);

	function abc(){
		msg = msg.substring(3, msg.length) + msg.substring(0, 3); // 4文字目から最後まで + 0文字目から4文字目まで
		document.board.mytext.value = msg;
		//console.log(msg.substring(3, msg.length) + msg.substring(0, 3));
	}

}, false);