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
		//console.log($(this).parent().width()); // .thumbsの幅を.thumbs-list*2の4120pxに

		$(this).clone().insertAfter($(this)); // ul.thumbs-listを1個追加
		//console.log($(this)); // ul.thumbs-list
		//console.log($(this).outerWidth()); // 2060px

/* ボタン */

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
			var $thumbnails = $carousel.find(".thumbs");
			//console.log($carousel.width()); // .carouselの幅980-40-40=900px
			//console.log($thumbnails.outerWidth()); // .thumbsの幅4120px ul.thumbs-listの幅4120px 20行目
			//console.log($thumbnails.position().left); // クリックsした時点の.thumbsのposition 900pxずつ動く

			var moveTo = direction * $carousel.width() + $thumbnails.position().left;
			 // 移動量は.thumbsのクリックした時点のposition.leftに.carouselの幅900pxを+-した分

			$thumbnails.filter(":not(:animated)").animate({left: moveTo}, { // .thumbsを900px動かす
				duration: 500,
				progress: function(){ // クリックするたびに
					var $imgList = $(this).find(".thumbs-list").first(); // .clone()したul.thumbs-listのうち1個め
					//console.log($imgList);
					//console.log($imgList.outerWidth()); // 2060px
					//console.log($(this).find(".thumbs-list").outerWidth()); // 2060px
					//console.log($(this).find(".thumbs-list").first().outerWidth()); // 2060px
					//console.log($thumbnails.outerWidth()); // 4120px


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