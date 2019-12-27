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
		Hello. Welcome to my blog- Top of the Hill!<br>
		
		
		..
		<p> &nbsp;
		
		<?php			
			if ($_SERVER["REQUEST_METHOD"] == "GET") {
				
				if($_GET['date'] == "" || $_GET['month'] == "" || $_GET['year'] == ""){
				}				
				else{
					
					if( is_numeric($_GET['date']) && is_numeric($_GET['month']) && is_numeric($_GET['year']) ){
						$date = (int)$_GET['date'];
						$month = (int)$_GET['month'];
						$year = (int)$_GET['year'];
						
						
						if($year >= 2019 && $year < 2021 ){
							if($month >= 0 && $month < 12 &&  $date >= 1){								
									
									if( ( $month == 0 || $month == 2 || $month == 4 || $month == 6 || $month == 7 || $month == 9 || $month == 11 ) && ($date < 32) ){
										
										// Valid 31 day month and date
										echo "Blog Posts for " . $date . "/" . ($month + 1) . "/" . $year . ": ";										
										
										// SQL Query here
									}
									else{
										
										if( ( $month == 3 || $month == 5 || $month == 8 || $month == 10 ) && ($date < 31) ){
											
											// Valid 30 day month and date
											echo "Blog Posts for " . $date . "/" . ($month + 1) . "/" . $year . ": ";										
										
											// SQL Query here
											
										}
										else{
											
											if (  ( $month == 1 && $date <= 29 && (  $year%400 == 0 || ( $year%4 == 0  &&  $year%100 != 0)   ) ) ) {
					
												// Valid leap year, february month and date
												echo "Blog Posts for " . $date . "/" . ($month + 1) . "/" . $year . ": ";										
										
												// SQL Query here													
											
											}
											else{
												
												if ( $month == 1 && $date <= 28 ) {
					
													// Valid normal february month and date
													echo "Blog Posts for " . $date . "/" . ($month + 1) . "/" . $year . ": ";										
										
													// SQL Query here													
												}										
											}								
										}						
									}
								}	
					
						}
					
					}		
				}
			}
		?>		
		
		<hr>
		<div id='myNewCalendar' style="display: inline-block; text-align: center;">
		<script type="text/javascript">
    		init('myNewCalendar');
		</script>
		</div>
		<hr>
	</div>
	<div>
	<iframe id="myFrame" src="../footer.html"  style='height: 100%; width: 100%;' frameborder="0" border="0" cellspacing="0" scrolling="no"></iframe>	
	</div>
<body>
<html>
