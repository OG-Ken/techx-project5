<?php
    session_start();
    if (!isset($_SESSION["username"])) {
        echo "Invalid Login Detected. Please loging with your user credentials to visit the members page";
        header("refresh:2; url=login.php");
        exit();
    } 
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="vendors/css/normalize.css">
	<link rel="stylesheet" type="text/css" href="vendors/css/Grid.css">
	<link rel="stylesheet" type="text/css" href="resources/css/style.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet">
	<link rel="shortcut icon" type="image/png" href="resources/img/H logo.png">
</head>
<body>
    <script type="text/javascript">
        function countdown() {
            var i = document.getElementById('timer');
            if (parseInt(i.innerHTML)<=0) {
                location.href = 'login.php';
            }
        if (parseInt(i.innerHTML)!=0) {
            i.innerHTML = parseInt(i.innerHTML)-1;
        }
        }
        setInterval(function(){ countdown(); },1000);
    </script>
	<header>
		<nav>
			<div class="row">
				<img src="resources/img/H logo.png" alt="Hyperion Arts Logo" class="logo" href="index.html">
			</div>
		</nav>
		<div class="forest-text-box">
            <h2 style=color:#FFFFFF>Welcome <?php echo $_SESSION["username"] ?> </h2>
			<h2 style=color:#FFFFFF>You have successfully logged in. Redirecting in <span id="timer">5</span></h2>
		</div>
</body>
</html>
	
	<?php
		header("refresh:5; url=member.php");
	?>
