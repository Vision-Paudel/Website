<!DOCTYPE html>
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
		  
			if (!empty($_POST["username"])) {			  
				$username = test_input($_POST["username"]);
				if (!preg_match("/^[a-zA-Z ]*$/",$username)) {
					$nameErr = "Only letters and white space allowed";
				}
			}
			
			if (empty($_POST["password"])) {
				$passwordErr = "Password is required";
		  	} else {
				$password = test_input($_POST["password"]);
		  	}	
				
			if(  empty($nameErr) && empty($passwordErr) ){
				if ($_POST["username"] == "administrator"){
					if ($_POST["password"] == "mynewpassword123"){
					 	$cookie_name = "admin";
						$cookie_value = "accessgranted";
						setcookie($cookie_name, $cookie_value, time() + (3600 * 3), "/"); // 86400 = 1 day, 3600 = 1 hour
					}
				}
			}
		}
			
			
		function test_input($data) {
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		}
		?>
<html>
<link rel="stylesheet" type="text/css" href="../css/custom.css"> <!-- STYLE SHEET -->

	<style type="text/css">

	body {   
    	text-align:center;   
	}
	form {
    	display: inline-block;
	}
	
	</style>
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
		<?php 
		echo 'Login here... Under Construction! <br>';
		?>
		<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
		<table  style= "display: inline-block;">
			<tr>
			<td>Username:</td>
			<td> <input type="text" name="username" value= "<?php echo $username;?>"><br> </td>
		</tr>
		<tr>
			<td>Password:</td>
			<td> <input type="password" name="password" value= "<?php echo $password;?>"><br> </td>
		</tr>
		<tr>
			<td><input type="submit"></td>
			<td></td>
		</tr>
		</table>
		</form>		
		<p> &nbsp;
		
		<hr>
		</div>
	<div>
	<iframe id="myFrame" src="../footer.html"  style='height: 100%; width: 100%;' frameborder="0" border="0" cellspacing="0" scrolling="no"></iframe>	
	</div>
<body>
<html>
