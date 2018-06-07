<?php
include 'connect.php';

$nimi=$_POST['eesnimi'];
$email=$_POST['email'];
$sonum=$_POST['sonum'];


$sql1 = "INSERT INTO `kliendi_andmed` (`nimi`, , `email`, `sonum`)
VALUES ('$nimi','$email','$sonum')"; 

if ($conn->query($sql1) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}
$conn->close();


header("Location: kontakt.php");
die();
exit;
?>