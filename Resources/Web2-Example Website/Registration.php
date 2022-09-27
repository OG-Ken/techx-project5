<!doctype html>
<html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="vendors/css/normalize.css">
	<link rel="stylesheet" type="text/css" href="vendors/css/Grid.css">
	<link rel="stylesheet" type="text/css" href="resources/css/registration-style.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet">
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
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
                <h2 style="text-align: center">Hyperion Arts Registration Form</h2>
                <br>
                <br>
                <br>

				<form name="myform" method="post" action="resources/data/database-registration.php"> <br>			
					<input type="text" placeholder="Enter username" name="username" required maxlength="24"> <br>
					<input type="password" placeholder="Enter password" name="password"  required maxlength="64"> <br>
					<input type="password" placeholder="Re-enter password" name="password2"  required maxlength="64"> <br>
					<input type="email" placeholder="Email Address" name="email" required maxlength="50"> <br> 
					<input type="text" placeholder="First Name" name="fname" required maxlength="50"> <br>                   
					<input type="text" placeholder="Last Name" name="lname" required maxlength="50"> <br>  
                    <p style="text-align: center">--- All fields above are required ---</p>
					<input type="text" placeholder="Address" name="address" maxlength="200"> <br>                    
					<input type="text" placeholder="City" name="city"maxlength="50"> <br>                    
					<input type="text" placeholder="State" name="state" maxlength="25"> <br>                    
					<input type="text" placeholder="Zipcode" name="zip" maxlength="25"> <br>                    
					<input type="tel" placeholder="Phone" name="phone" maxlength="25"> <br>
					<button type="submit" name="submit">Sign Up</button>
				</form>
				 <div class="container" style="background-color: rgba(255,255,255,0.70)">
					<button type="button" onClick="goBack()" class="cancelbtn">Cancel</button>
					<span class="psw"><p>Already a member? <a href="login.php">Login</a></p></span>
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