<?php
	include('array.php');
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
	<meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=yes" />
	<title>php output</title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
	<link rel="stylesheet" href="style.css" />
	<script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
	<div class="wrap">
	<?php for ($i=0; $i < $max; $i++) :?>
		<div class="box">
			<h3><?php echo $title[$i]; ?></h3>
			<img src="<?php echo $images[$i]; ?>" alt="<?php echo $title[$i]; ?>">
			<p><?php echo $comments[$i]; ?></p>
		</div><!-- /.box -->
	<?php endfor; ?>
	</div><!-- /.wrap -->
</body>
</html>
