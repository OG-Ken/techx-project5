<?php
    session_start();
    if (!isset($_SESSION["username"])) {
        echo "Invalid Access Detected. Please loging with your user credentials to visit the members page";
        header("refresh:2; url=login.php");
        exit();
    } 
    $user = $_SESSION["username"];
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
	<title>HyperionArts</title>
	<link rel="shortcut icon" type="image/png" href="resources/img/H logo.png">


</head>
<body>
	<header>
		<nav>
			<div class="row">
				<img src="resources/img/H logo.png" alt="Hyperion Arts Logo" class="logo" href="index.html">
				<ul class="navbar">
					<li><a href="#" class="current">Home</a></li>
					<li><a href="#">Music</a></li>
					<li><a href="#">Art</a></li>
					<li><a href="#">Our Services</a></li>
					<li><a href="resources/data/logout.php">Log Out</a></li>
				</ul>
			</div>
		</nav>
		<div class="forest-text-box">
			<h1>Welcome Back <?php echo $user ?>!</h1>
		</div>
	</header>

	<section class="section-overview">
		<div class="row">
			<h2>We make ideas and concepts a reality &mdash; all in one package.</h2>
			<p class="long-copy">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
			</p>
		</div>

		<div class="row">
			<div class="col span-1-of-3 box">
				<ion-icon name="brush-outline" class="icon-big"></ion-icon>
				<h3>63</h3>
				<h3>Concept Art</h3>
				<p>
					Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
				</p>
			</div>
			<div class="col span-1-of-3 box">
				<ion-icon name="musical-notes-outline" class="icon-big"></ion-icon>
				<h3>Music</h3>
				<p>
					Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
				</p>
			</div>
			<div class="col span-1-of-3 box">
				<ion-icon name="cube-outline" class="icon-big"></ion-icon>
				<h3>All-in-One</h3>
				<p>
					Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
				</p>
			</div>
		</div>
	</section>

	<section class="art">
		<h2>Explore our art</h2>
		<ul class="a-examples">
			<li>
				<figure class="artpic">
					<img src="resources/img/rossdraws.jpg" alt="Image by RossDraws from DeviantArt">
				</figure>
			</li>
			<li>
				<figure class="artpic">
					<img src="resources/img/kuvshinov.jpg" alt="Image by Ilya Kuvshinov from DeviantArt">
				</figure>
			</li>
			<li>
				<figure class="artpic">
					<img src="resources/img/wlop lion.jpg" alt="Image by WLOP from DeviantArt">
				</figure>
			</li>
			<li>
				<figure class="artpic">
					<img src="resources/img/ganev.png" alt="Image by Angel Ganev from DeviantArt">
				</figure>
			</li>
		</ul>
		<ul class="a-examples">
			<li>
				<figure class="artpic">
					<img src="resources/img/wlop2.jpg" alt="Image by WLOP from DeviantArt">
				</figure>
			</li>
			<li>
				<figure class="artpic">
					<img src="resources/img/rossdraws2.jpg" alt="Image by RossDraws from DeviantArt">
				</figure>
			</li>
			<li>
				<figure class="artpic">
					<img src="resources/img/beautiful.jpg" alt="Image by ArtTower from PixelArt">
				</figure>
			</li>
			<li>
				<figure class="artpic">
					<img src="resources/img/zhong.jpg" alt="Image by fengua-zhong from DeviantArt">
				</figure>
			</li>
		</ul>
	</section>
	<script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
	<footer>
		<p> All data in this page was created by Kentyiro Lopez for the FIT Class CIS4026 with Professor Vincent Tran 2020. </p>
	</footer>
</body>

</html>
