$(document).ready(function(){
	var wrapOffsetTop = $('#board-wrapper').offset().top;
	var wrapOffsetLeft = $('#board-wrapper').offset().left; // #board-wrapperのX座標を取得
	var wrapWidth = $('#board-wrapper').width(); // #board-wrapperのwidth
	console.log(wrapWidth);

	$('#board').offset({// #boardをX座標178pxにセット
		top: wrapOffsetTop,
		left: wrapOffsetLeft + wrapWidth
	});

	setInterval(scroll, 250);

	function scroll(){
		var boardLeft = $('#board').offset().left; // #boardのX座標を取得

		var boardWidth = $('#board > p').width(); // #board pのwidth
		console.log(boardWidth);

		if(boardLeft >= -boardWidth){ // #boardのX座標が#boardWidthの幅になrまで
			$('#board').offset({top: wrapOffsetTop, left: boardLeft - 30});
				//console.log("#boardのX座標：" + boardLeft);
				//console.log("#board-wrapperのX座標：" + wrapOffsetLeft);
		}else{
			$('#board').offset({// #boardを元のX座標にセット
				top: wrapOffsetTop,
				left: wrapOffsetLeft + wrapWidth
			});
		}
	}

});