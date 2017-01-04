<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
	<meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=yes" />
	<title>アップロード後</title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
</head>
<body>
	<?php
	// 画像のアップロードには3つの値が必要。
		$pic_name = $_FILES['upload']['name']; // ['name属性']['ファイル名']
		$tmp = $_FILES['upload']['tmp_name']; // ['name属性']['一時ファイル名']
		$type = $_FILES['upload']['type']; // ['name属性']['ファイル拡張子']


		if (empty($pic_name) || empty($tmp) || empty($type)) { // 空だったら
			echo "値がありません。<br />";
			echo "<a href='./index.php'>戻る</a>";
			exit();
		}else{

			if ($type == "image/jpeg" || $type == "image/jpg" || $type == "image/png") { // 形式が違ったら
				echo "nameは：".$pic_name."。tmp_nameは：".$tmp."。typeは：".$type."。<br />";
				$filename = $pic_name;
				move_uploaded_file($tmp, "./images/$filename"); // move_uploaded_file(一時ファイル名, 保管ディレクトリ/ファイル名)
				echo "アップロードされました。";
			}else{
				echo "形式はjpegかjpgかpngでアップロードして下さい。<br />";
				echo "<a href='./index.php'>戻る</a>";
				exit();
			}
		}
	?>

	<h2>アップロード後</h2>
	<pre>

		// 画像のアップロードには3つの値が必要。
			$pic_name = $_FILES['upload']['name']; // ['name属性']['ファイル名']
			$tmp = $_FILES['upload']['tmp_name']; // ['name属性']['一時ファイル名']
			$type = $_FILES['upload']['type']; // ['name属性']['ファイル拡張子']


			if (empty($pic_name) || empty($tmp) || empty($type)) { // 空だったら
				echo "値がありません。";
				exit();
			}else{

				if ($type == "image/jpeg" || $type == "image/jpg" || $type == "image/png") { // 形式が違ったら
					echo "nameは：".$pic_name."。tmp_nameは：".$tmp."。typeは：".$type."。<br />";
					$filename = $pic_name;
					move_uploaded_file($tmp, "./images/$filename"); // move_uploaded_file(一時ファイル名, 保管ディレクトリ/ファイル名)
					echo "アップロードされました。";
				}else{
					echo "形式はjpegかjpgかpngでアップロードして下さい。";
					exit();
				}
			}

	</pre>
	<p>フォルダを移動するだけで取り出しにはデータベースが必要。</p>
</body>
</html>
