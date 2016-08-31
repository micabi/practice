window.addEventListener("load", function(){
	var out = document.getElementsByTagName('output');
	out[0].innerHTML += "windowが読み込まれました。";
	console.log("windowが読み込まれました。");
}, false);

window.addEventListener("DOMContentLoaded", function(){
	var out = document.getElementsByTagName('output');
	out[0].innerHTML += "DOMが構築されました。";
	console.log("DOMが構築されました。");
}, false);