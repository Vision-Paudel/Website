<!DOCTYPE html>
<html>
<link rel="stylesheet" type="text/css" href="../css/custom.css"> <!-- STYLE SHEET -->
<head>
  <title>Vision Paudel - Blog</title>
	<link rel="icon" type="image/png" href="/icon.ico">
	<meta name="viewport" content="width=600 height=100">
	<meta name="keywords" content="Vision Paudel, vision paudel, vision, paudel, computer science, computer, science, biology, ottawa, canada, ontario, on, ca, sault ste. marie, sault, soo, java, c++, resume, professional " />
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-139625793-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-139625793-1');
	</script>

	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>
	  (adsbygoogle = window.adsbygoogle || []).push({
		google_ad_client: "ca-pub-3617206566414661",
		enable_page_level_ads: true
	  });
	</script>
<script type="text/javascript" src="../blog/JS/Calendar.js"></script>
<head>
<body>
<h1 style="backgroundColor:#0d0072;">Top Of The Hill
<div>
	<iframe id="myFrame" src="navbar.php"  style='height:1em; width: 100%;' frameborder="0" border="0" cellspacing="0" scrolling="no"></iframe>	
</div>
	</h1>
	<div id="main-Content">
		<hr>
		<!-- Vision Paudel -->
		Administration Work <br>
		<?php 
		$cookie_name = "admin";
		if(!isset($_COOKIE[$cookie_name])) {
    			echo "Please login!";
		} else {
			if($_COOKIE[$cookie_name] == "accessgranted"){
    			echo "Welcome. Under Construction";
			}else{
				echo "Welcome. Your credential does not match!";
			}
		}		
		?>		
		..
		<p> &nbsp;
		
		<hr>
		</div>
	<div>
	<iframe id="myFrame" src="../footer.html"  style='height: 100%; width: 100%;' frameborder="0" border="0" cellspacing="0" scrolling="no"></iframe>	
	</div>
<body>
<html>
