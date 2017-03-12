window.onload = function(){

	var tsuru, kame;
	var kame_pre_legs = 2;

	function tsurukameZan(total, total_legs){
		var legs_sum = total*2; // 鶴も亀も2本脚だった場合の仮の脚数の合計
		var diff = total_legs - legs_sum; // 実際の脚の数と仮の脚数の差
		kame = diff/kame_pre_legs;
		tsuru = total - kame;
		//console.log("鶴の数は" + tsuru + "匹\n" + "亀の数は" + kame + "匹");
		return "<p>鶴は" + tsuru + "匹。" + "亀は" + kame +"匹。</p>";
	}

	document.getElementsByClassName('result')[0].innerHTML = tsurukameZan(16, 44);

	var seikai = "正解です。";
	var fuseikai = "不正解です。";
	var nyuryoku = "入力して下さい。";

	var one = document.getElementById('one');
	one.onkeyup = function(){
		if (one.value === "") {
			document.getElementById('ans1').innerHTML = nyuryoku;
			console.log("入力して下さい");
		}else if (one.value == 2) {
			document.getElementById('ans1').innerHTML = seikai;
			console.log("正解です");
		}else{
			document.getElementById('ans1').innerHTML = fuseikai;
			console.log("違います");
		}
	};

	var two = document.getElementById('two');
	two.onkeyup = function(){
		if (two.value === "") {
			document.getElementById('ans2').innerHTML = nyuryoku;
			console.log("入力して下さい");
		}else if (two.value == 4) {
			document.getElementById('ans2').innerHTML = seikai;
			console.log("正解です");
		}else{
			document.getElementById('ans2').innerHTML = fuseikai;
			console.log("違います");
		}
	};



};