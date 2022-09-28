<?php
    session_start();
    session_unset();
    session_destroy();
    echo "You have successfully logged out";
    header("refresh:2; url=../../index.html");
?>