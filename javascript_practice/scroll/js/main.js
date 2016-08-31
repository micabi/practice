$(document).ready(function(){
	var timerID = null; // 初期化

	$(window).scroll(function(){ // スクロールしたらイベント発火

		if(timerID !== null){ // timerIDに値が入っていたら
			clearTimeout(timerID); // timerIDを空にする
		}

		timerID = setTimeout(function(){
			//timerID = null;
			console.log($(window).scrollTop()); // 100ミリ秒後にスクロール量をコンソール出力

			setTimeout(function(){
				$(window).scrollTop(0); // 2秒後にスクロール量を0にする（トップにもどす）
			}, 2000);

		}, 100);

	});
});