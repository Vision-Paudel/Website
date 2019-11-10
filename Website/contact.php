<html>	
<link rel="stylesheet" type="text/css" href="css/custom.css"> <!-- STYLE SHEET -->
<head>
<title>Contact Form</title>
<body style="background-color:white">
<div id="main-Content">
<div style="display: inline-block; text-align: left;">
	<?php
		$nameErr = $emailErr = $commentErr = $websiteErr = "";
		$name = $email = $comment = $website = "";
		$submitted = "";
	
		if ($_SERVER["REQUEST_METHOD"] == "POST") {
		  if (empty($_POST["name"])) {
			$nameErr = "Name is required";
		  } else {
			$name = test_input($_POST["name"]);
			
			if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
  				$nameErr = "Only letters and white space allowed";
			}
			  
		  }

		  if (empty($_POST["email"])) {
			$emailErr = "Email is required";
		  } else {
			$email = test_input($_POST["email"]);
			
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  				$emailErr = "Invalid email format";
			}
		  }

		  if (empty($_POST["website"])) {
			$website = "";
		  } else {
			$website = test_input($_POST["website"]);
			 
			if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
 			 	$websiteErr = "Invalid URL";
			}
			  
		  }

		  if (empty($_POST["comment"])) {
			$commentErr = "Message is required";
		  } else {
			$comment = test_input($_POST["comment"]);
		  }
		
			if(  empty($commentErr) && empty($nameErr) && empty($websiteErr) && empty($emailErr)  ){

				$to = 'visionpaudel@gmail.com';
				$subject = 'Website contact by ' . $name . ' on ' . date("Y/m/d") . " at " . date("h:i:sa") . " Server Time ";
				$headers = "From: " . $name . " <contact@visionpaudel.ca>" . "\r\n";	
				
				$message = "From: " . $name . " " . $email . " " . $website . " \n";
				$message .= $comment;
				$message = wordwrap($message,70);
				mail($to,$subject,$message,$headers);			
				$submitted = "Your message has been sent!";
				$nameErr = $emailErr = $commentErr = $websiteErr = "";
				$name = $email = $comment = $website = "";
			}
		}
	
		function test_input($data) {
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		}
	
	?>
		<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
		<table style="width:100%" >
			<span style="color:red"> <?php echo "* Is required";?> </span>
		<tr>
			<td>Name:</td>
			<td> <input type="text" name="name" value= "<?php echo $name;?>"><span style="color:red">* <?php echo $nameErr;?></span><br> </td>
		</tr>
		<tr>
			<td>E-mail:</td>
			<td> <input type="text" name="email" value= "<?php echo $email;?>"><span style="color:red">* <?php echo $emailErr;?></span><br> </td>
		</tr>
		<tr>
			<td>Website:</td> 
			<td><input type="text" name="website" value= "<?php echo $website;?>"><span style="color:red"> <?php echo $websiteErr;?></span><br> </td> 
		</tr>
		<tr>
			<td>Comment:</td>
			<td><textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea><span style="color:red">* <?php echo $commentErr;?></span><br> </td> 
		</tr>
		<tr>
			<td><input type="submit"></td>
			<td><span style="color:red"><?php echo $submitted;?></span><br></td>
		</tr>
		</table>
		</form>		
	</div>
</div>
</body>
	
