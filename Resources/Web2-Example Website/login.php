<!doctype html>
<html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="vendors/css/normalize.css">
	<link rel="stylesheet" type="text/css" href="vendors/css/Grid.css">
	<link rel="stylesheet" type="text/css" href="resources/css/login-style.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet">
	<title>HyperionLogin</title>
   	<link rel="shortcut icon" type="image/png" href="resources/img/H logo.png">
</head>
<body>
		<section class="login-modal">
		<div class="modal" style = "display='block'">
			<div class="modal-content animate">
				<div class="imgcontainer">
					<img src="resources/img/H logo.png" alt="Hyperion Arts Logo" class="inv-logo">
				</div>
				<form name="myform" method="post" action="resources/data/database-login.php">			
					<label for="username"><b>Username</b></label>
					<input type="text" placeholder="Enter username" name="username" required maxlength="24">
					<label for="pass"><b>Password</b></label>
					<input type="password" placeholder="Enter password" name="password" required maxlength="64">
       
					<button type="submit" name="submit">Login</button>
				</form>

				 <div class="container" style="background-color: rgba(255,255,255,0.70)">
					<button type="button" onClick="goBack()" class="cancelbtn">Cancel</button>
					<span class="psw"><p>Not a Member? <a href="registration.php">Sign Up</a></p></span>
					<script>
						function goBack() {
							window.history.back();
						}
					</script>
				</div>
			</div>
		</div>

</body>
</html>