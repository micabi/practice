$(document).ready(function(){
	//console.log("load");

/************************
.carouselを固定して.thumbsを動かす
************************/

	var imagesList = $(".carousel").find(".thumbs-list");

	imagesList.each(function(){
		//console.log($(this)); // .thumbs-list

		var listWidth = $(this).outerWidth();
		//console.log(listWidth); // ul.thumbs-listの幅2060px

		var doubleListWidth = listWidth * 2;
		//console.log(doubleListWidth); // 4120px
		//console.log($(this).parent()); // .thumbs

		$(this).parent().width(doubleListWidth);
		//console.log($(this).parent().width()); // .thumbsの幅4120px

		$(this).clone().insertAfter($(this)); // ul.thumbs-listを1個追加
		//console.log($(this));
		//console.log($(this).outerWidth()); // insertAfterしたことによりul.thumbs-listの幅は4120pxに

		$("a.prev").on('click', function(event){ // クリックイベント
			event.preventDefault();
			//console.log("click prev");
			moveCarousel($(this), 1); // 関数を実行 $(this)はa.prev
		});

		$("a.next").on('click', function(event){
			event.preventDefault();
			//console.log("click next");
			moveCarousel($(this), -1); // 関数を実行 $(this)はa.next
		});

		//console.log($(".thumbs").position().left); // 0

/****************************
ここから関数
****************************/

		function moveCarousel(btn, direction){ // 関数
			var $btn = btn;
			var $carousel = $btn.closest(".carousel");
			var $thmbnails = $carousel.find(".thumbs");
			//console.log($carousel.width()); // .carouselの幅980-40-40=900px
			//console.log($thmbnails.outerWidth()); // .thumbsの幅4120px ul.thumbs-listの幅に依存している
			//console.log($thmbnails.position().left); // クリックsした時点の.thumbsのposition 900pxずつ動く

			var moveTo = direction * $carousel.width() + $thmbnails.position().left;
			 // 移動量は.thumbsのクリックした時点のpositionに.carouselの幅900pxを+-した分

			$thmbnails.filter(":not(:animated)").animate({left: moveTo}, { // thumbsを動かす
				duration: 500,
				progress: function(){
					var $imgList = $(this).find(".thumbs-list"); // .clone()したul.thumbs-listのうち1個め
					//console.log($imgList);
					//console.log($imgList.outerWidth());
					//console.log($(this).find(".thumbs-list").first().outerWidth()); // 4120px
					//console.log($(this).find(".thumbs-list").last().outerWidth()); // 4120px

					var $rePosition;

					//console.log($(this).position().left); // .thumbsのクリックした時点のposition

					if (direction === 1 && $(this).position().left >= 0) { // 「前へ」をクリックした時点でul.thumbsの位置が0以上になった場合
						//console.log("true");
						$rePosition = $(this).position().left - $imgList.outerWidth(); // .thumbsの位置をul.thumbs-listの幅4120px分マイナス（左へ移動）する
						//console.log($imgList.outerWidth()); // thumbsの幅4120px
						//console.log($rePosition);
						$(this).css({"left": $rePosition});
					} // end of if

					if (direction === -1 && $imgList.outerWidth() <= Math.abs($(this).position().left)) { //「次へ」をクリックした時点でul.thumsのpositionが-4120px以上になった場合
						//console.log(Math.abs($(this).position().left));
						$rePosition = $(this).position().left + $imgList.outerWidth(); // .thumbsの位置をul.thumbs-listの幅4120px分プラス（右へ移動）する
						//console.log($rePosition);
						$(this).css({"left": $rePosition});
					} // end of if

											} // end of progress:function
										}); // end of animate()
									} // end of moveCarousel
								}); // end of imagesList.each function
});