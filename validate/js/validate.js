$(document).ready(function(){

	// お名前
	$('[name=name]').on('blur', function(){
		var alertName = "お名前は入力必須項目です。";
		var yourName = $(this).val();
		if (yourName === "") {
			$(this).prev('span.alert').text(alertName);
		}else{
			$(this).prev('span.alert').text("");
		}
	});

	// フリガナ
	$('[name=kana]').on('blur', function(){
		var alertKana = "全角カタカナで記入して下さい。";
		var yourKana = $(this).val();
		yourKana = yourKana.replace(/[\n\s ]/g, '');

		if (yourKana === "") {
			$(this).prev('span.alert').text("記入して下さい。");
		}else if(!yourKana.match(/^[ァ-ン]*$/)) {
			$(this).prev('span.alert').text(alertKana);
		}else{
			$(this).prev('span.alert').text("");
		}
	});

	// 電話番号
	$('[name="tel"]').on('blur', function(){
		var alertTel = "電話番号は10桁または11桁の数字で記入して下さい。";
		var yourTel = $(this).val();
		yourTel = yourTel.replace(/[\n\s ]/g, '');
		yourTel = yourTel.replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,'');
		var formatTel = yourTel.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0);});
		formatTel = $.trim(formatTel);

		if (formatTel.length < 10 || formatTel.length > 11 || formatTel === "") {
			$(this).prev('span.alert').text(alertTel);
		}else{
			$(this).val(formatTel);
			$(this).prev('span.alert').text("");
		}
	});

	// メールアドレス
	$('[name=mail]').on('blur', function(){
		var alertMail = "メールアドレスの形式ではありません。入力必須項目です。";
		var yourMail = $(this).val();
		yourMail = yourMail.replace(/[\n\s ]/g, '');

		if (!yourMail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
			$(this).prev('span.alert').text(alertMail);
		}else{
			$(this).prev('span.alert').text("");
		}
	});

	// 郵便番号
	$('[name=zip]').on('blur', function(){
		var alertZip = "郵便番号は7桁の数字で記入して下さい。";
		var yourZip = $(this).val();
		yourZip = yourZip.replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,'');
		yourZip = yourZip.replace(/[\n\s ]/g, ''); // スペース、改行を除去
		var formatZip = yourZip.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0);});

		if (formatZip.length != 7) {
			$(this).prev('span.alert').text(alertZip);
		}else{
			$(this).val(formatZip);
			$(this).prev('span.alert').text("");
		}
	});

	// 性別
	$('[name=sex]').on('blur', function(){
		var alertSex = "1つ選択して下さい。";
		var yourSex = $('[name=sex]:checked').val();
		if (yourSex === undefined) {
			$(this).prev('span.alert').text(alertSex);
		}else{
			$(this).prev('span.alert').text("");
		}
	});

	// 年代
	$('[name=old]').on('blur', function(){
		var alertOld = "1つ選択して下さい。";
		var yourOld = $(this).val();
		if (yourOld === null) {
			$(this).prev('span.alert').text(alertOld);
		}else if(yourOld === ""){
			$(this).prev('span.alert').text(alertOld);
		}else{
			$(this).prev('span.alert').text("");
		}
	});

		// テキストエリア文字数カウント
		$('p.length').text('0');

		$('[name=comment]').on('keyup', function(){
			var text = $('[name=comment]').val();
			var textlength = text.length;

			$('p.length').text(textlength);

			if (textlength >= 50) {
				$('p.length').css({
					'color': 'red'
				});
			}
		});

		$('[name=comment]').on('blur', function(){

			$('p.length').css({
				'color': '#000'
			});
			var alertComment = "コメントは入力必須項目です。";
				if ($(this).val() === "") {
					$(this).prev('span.alert').text(alertComment);
				}else{
					$(this).prev('span.alert').text("");
				}

				if ($(this).val().length > 50) {
					$(this).prev('span.alert').text("50文字以内で記入して下さい。");
				}
		});

		$('form#form').on('submit', function(event){
			event.preventDefault();

			// ここでスタックオーバーフローを起こしている。
			if(!nameCheck || !kanaCheck || !telCheck || !mailCheck || !zipCheck || !sexCheck || !oldCheck || !commentCheck){
				alert("未記入の項目、または形式が適切でない項目があります。");
				$(this).off('submit');
				return false;
			}

			$('form#form').submit();
		});

/******************************
関数定義
******************************/

		function nameCheck(){
			var alertName = "お名前は入力必須項目です。";
			var yourName = $('[name=name]').val();
			if (yourName === "") {
				$('[name=name]').prev('span.alert').text(alertName);
				return false;
			}else{
				$('[name=name]').prev('span.alert').text("");

			}
		}

		function kanaCheck(){
				var alertKana = "全角カタカナで記入して下さい。";
				var yourKana = $('[name=kana]').val();
				yourKana = yourKana.replace(/[\n\s ]/g, '');

				if (yourKana === "") {
					$('[name=kana]').prev('span.alert').text("記入して下さい。");
					return false;
				}else if(!yourKana.match(/^[ァ-ン]*$/)) {
					$('[name=kana]').prev('span.alert').text(alertKana);
					return false;
				}else{
					$('[name=kana]').prev('span.alert').text("");

				}
			}

		function telCheck(){
				var alertTel = "電話番号は10桁または11桁の数字で記入して下さい。";
				var yourTel = $('[name="tel"]').val();
				yourTel = yourTel.replace(/[\n\s ]/g, '');
				yourTel = yourTel.replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,'');
				var formatTel = yourTel.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0);});
				formatTel = $.trim(formatTel);

				if (formatTel.length < 10 || formatTel.length > 11 || formatTel === "") {
					$('[name="tel"]').prev('span.alert').text(alertTel);
					return false;
				}else{
					$('[name="tel"]').val(formatTel);
					$('[name="tel"]').prev('span.alert').text("");

				}
			}

		function mailCheck(){
				var alertMail = "メールアドレスの形式ではありません。入力必須項目です。";
				var yourMail = $('[name=mail]').val();
				yourMail = yourMail.replace(/[\n\s ]/g, '');

				if (!yourMail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
					$('[name=mail]').prev('span.alert').text(alertMail);
					return false;
				}else{
					$('[name=mail]').prev('span.alert').text("");
				}
			}

		function zipCheck(){
				var alertZip = "郵便番号は7桁の数字で記入して下さい。";
				var yourZip = $('[name=zip]').val();
				yourZip = yourZip.replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,'');
				yourZip = yourZip.replace(/[\n\s ]/g, ''); // スペース、改行を除去
				var formatZip = yourZip.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0);});

				if (formatZip.length != 7) {
					$('[name=zip]').prev('span.alert').text(alertZip);
					return false;
				}else{
					$('[name=zip]').val(formatZip);
					$('[name=zip]').prev('span.alert').text("");

				}
			}

		function sexCheck(){
				var alertSex = "1つ選択して下さい。";
				var yourSex = $('[name=sex]:checked').val();
				if (yourSex === undefined) {
					$('.alertsex').text(alertSex);
					return false;
				}else{
					$('.alertsex').text("");
				}
			}

		function oldCheck(){
				var alertOld = "1つ選択して下さい。";
				var yourOld = $('[name=old]').val();
				if (yourOld === null) {
					$('[name=old]').prev('span.alert').text(alertOld);
					return false;
				}else if(yourOld === ""){
					$('[name=old]').prev('span.alert').text(alertOld);
					return false;
				}else{
					$('[name=old]').prev('span.alert').text("");
				}
			}

		function commentCheck(){
				var alertComment = "コメントは入力必須項目です。";
					if ($('[name=comment]').val() === "") {
						$('[name=comment]').prev('span.alert').text(alertComment);
						return false;
					}else{
						$('[name=comment]').prev('span.alert').text("");
					}

					if ($('[name=comment]').val().length > 50) {
						$('[name=comment]').prev('span.alert').text("50文字以内で記入して下さい。");
						return false;
					}
			}
});