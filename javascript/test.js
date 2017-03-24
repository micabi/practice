window.onload = function(){

	var kazu;
	var text = "";

	var output = document.getElementsByClassName('result')[1];
	for(var i = 0; i <= 100; i++){
		kazu = i;
		var hairetsu = [];
		hairetsu.push(okaeshi(kazu));
		console.log(hairetsu);
		text += "<p>" + kazu + "個もらったら" + hairetsu + "個お返しする。</p>";
		output.innerHTML = text;
	}


	var btn = document.getElementById('button');

	 btn.onclick = function(){
		var moratta = document.getElementById('morau');
 		var kazu = moratta.value;
		var kekka = okaeshi(kazu);
		//console.log(kekka);
		var result = document.getElementsByClassName('result')[0];
		if (kekka === false) {
			result.innerHTML = "";
		}else{
			result.innerHTML = kekka;
		}
	};

	function okaeshi(kazu){
			if(kazu == 0){
				return 1;
			}else{
				return kazu*3;
			}
		}

};