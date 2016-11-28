$(document).ready(function(){
	//console.log("load");
	//$('#news').load('news.html');
	$.ajax('news.html', {
		//data: data,
		dataType: "html",
		cache: false,
		timeout: 3000
	}).done(function(data, status, jqXHR){
		//console.log(data);
		console.log(status);
		//console.log(jqXHR);
		$('#news').html(data);
	}).fail(function(data, status, jqXHR){
		console.log(data);
		console.log(status);
		console.log(jqXHR);
}
	);
});