<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
	<meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=yes" />
	<title>Document</title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="author" content="" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
	<link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.ico" />
	<link rel="apple-touch-icon-precomposed" href="/favicon-152.png" />
	<link rel="stylesheet" href="" />
	<script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
<pre>
	<?php
	// 変数の設定
	$db_user = "root";
	$db_pass = "";
	$db_host = "localhost";
	$db_name = "shop";

	// DSNの設定
	$dsn = "mysql: host=$db_host; dbname=$db_name; charset=utf8"; // DSNを組み立てる（ホスト・DB名・文字コード）

	// 接続の実行
	try{
		$pdo = new PDO($dsn, $db_user, $db_pass); // PDOクラス定義
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // エラー属性の設定
		$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false); // プリペアードステートメント属性の設定
		echo "データベース接続に成功しました";
		$pdo = null;
	}catch(PDOException $Exception){
		die("データベース接続に失敗しました。理由:".$Exception->getMessage());
	}

	// $_POSTの受け取り
	$staff_code = $_POST['staffcode'];
	var_dump($staff_code);

 ?>
</pre>
</body>
</html>