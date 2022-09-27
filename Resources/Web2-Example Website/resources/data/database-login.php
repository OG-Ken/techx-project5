<?php
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "hyperion_database";
    
    $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
    
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $sql = "SELECT * FROM login_information WHERE username='$user' AND password= '$pass'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);

    if ($row['username'] == $user && $row['password'] = $pass) {
        session_start();
        $_SESSION["username"] = $user;
        echo "Welcome ".$user." you have successfuly logged in!";
        header("Location: ../../success.php");
    } else {
        echo "<script>alert('Username or Password not found. Please try again')</script>";
        echo "<script> location.replace('../../login.php')</script>";
    }
?>