$(document).ready(function(){

	// お名前
	$('[name=name]').on('blur', function(){
		var alertName = "お名前は入力必須項目です。";
		var yourName = $.trim($(this).val());
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
		if (!yourKana.match(/^[ァ-ロワヲンー \r\n\t] + $/)) {
			console.log(alertKana);
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
		//console.log(formatTel);
		console.log(formatTel.length);

		if (formatTel.length > 11 || formatTel === "") {
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
		console.log(yourMail);

		if (!yourMail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
			$(this).prev('span.alert').text(alertMail);
		}else{
			$(this).prev('span.alert').text("");
			console.log(yourMail);
		}
	});

	// 郵便番号
	$('[name=zip]').on('blur', function(){
		var alertZip = "郵便番号は7桁の数字で記入して下さい。";
		var yourZip = $(this).val();
		yourZip = yourZip.replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,'');
		yourZip = yourZip.replace(/[\n\s ]/g, ''); // スペース、改行を除去
		//console.log(yourZip);
		var formatZip = yourZip.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0);});
		//console.log(formatZip);
		console.log(formatZip.length);

		if (formatZip.length != 7) {
			$(this).prev('span.alert').text(alertZip);
		}else{
			$(this).val(formatZip);
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

});