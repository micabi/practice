	$(window).scroll(function () { // スクロールしたら
		//console.log(this);
		//console.log($(this).scrollTop());
		//console.log("windowの高さ: " + $(window).height() + "px");
		//console.log($("div").eq(1).offset().top);

		var windowBottom = $(this).scrollTop() + $(window).height() - 100;
		console.log("windowBottom: " + windowBottom + "px");

		var div2Top = $("div").eq(1).offset().top;
		var div3Top = $("div").eq(2).offset().top;
		var div4Top = $("div").eq(3).offset().top;

			console.log("windowの高さ：" + $(window).height());
			console.log("div2のY座標：" + div2Top);
			console.log("div3のY座標：" + div3Top);
			console.log("div4のY座標：" + div4Top);

			if (div2Top <= windowBottom) { // windowBottomのY座標数値がdiv2のY座標数値を超えたら
				$("div").eq(1).animate({"right" : 0}, "fast");
			}

			if (div3Top <= windowBottom) {
				$("div").eq(2).animate({"left" : 0}, 1000);
			}

			if (div4Top <= windowBottom) {
				$("div").eq(3).animate({"right" : 0}, "nomal");
			}
	});