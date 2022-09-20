<?php

    if ($_POST['password'] != $_POST['password2']) {
        echo "<script>alert('Passwords do not match. Please try again')</script>";
        echo "<script> window.history.back(); </script>";
        exit();
    } else {
        runRegistration();
    }

    
    function runRegistration() {
                
        if (!isset($_POST['address'])) {
            $_POST['address'] = " ";
        }
        if (!isset($_POST['city'])) {
            $_POST['city'] = " ";
        }
        if (!isset($_POST['state'])) {
            $_POST['state'] = " ";
        }
        if (!isset($_POST['zip'])) {
            $_POST['zip'] = " ";
        }
        if (!isset($_POST['phone'])) {
            $_POST['phone'] = " ";
        }
        
        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $dbname = "hyperion_database";

        $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
        
        $user = $_POST['username'];
        $pass = $_POST['password'];
        $email = $_POST['email'];
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $addr = $_POST['address'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $zip = $_POST['zip'];
        $phone = $_POST['phone'];
        
        $sqlOne = "INSERT INTO user_information (username, userEmail, firstName, lastName, userAddress, userCity, userState, userZipcode, userPhone) VALUES ('$user','$email','$fname','$lname','$addr','$city','$state','$zip','$phone')";
        $sqlTwo = "INSERT INTO login_information (username, userEmail, password) VALUES ('$user','$email','$pass')";

        if (mysqli_query($conn, $sqlOne) && mysqli_query($conn, $sqlTwo)) {
            header("Location: ../../Welcome.php");
        } else {
            echo "Data storage failed. The Username or password are already in user and cannot be duplicates";
            echo "<script> window.history.back(); </script>";
        }
    }
?>