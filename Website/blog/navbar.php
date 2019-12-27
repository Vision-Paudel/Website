<html>
	<link rel="stylesheet" type="text/css" href="../css/custom.css"> <!-- STYLE SHEET -->	 
  <head>
    <title>NavBar</title>
	  <style>
	.NavBarButton {
	  background-color: #0a004d;
	  border: none;
	  color: white;
	  padding: 5px 3px;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 18px;
	  margin: 2px 5px;
	  cursor: pointer;
	}		
	.NavBarButton a{
		color:white;
		 text-decoration: none;
	}
	.NavBarButton a:hover{
		background-color: white;
		color:red;
		border: solid;
	}
	body{
		background-color: #0d0072;
	}
</style>
  </head>		
  <body>
	<button  class="NavBarButton" > <a target="_parent" href="https://www.visionpaudel.ca">&nbsp;Return to Main&nbsp;</a> </button> 
	<button  class="NavBarButton" > <a target="_parent" href="/blog">&nbsp;Blog Home&nbsp;</a> </button>
	<?php 
	  $cookie_name = "admin";
		if(isset($_COOKIE[$cookie_name]) && $_COOKIE[$cookie_name] == "accessgranted") {
   		 echo '<button  class="NavBarButton" > <a target="_parent" href="https://www.visionpaudel.ca/blog/admin.php">Admin Work</a> </button>'; 
		} else {
    	 echo '<button  class="NavBarButton" > <a target="_parent" href="https://www.visionpaudel.ca/blog/login.php">Admin Login</a> </button>';
		}
	?>
	  <br>

  </body>
</html>
