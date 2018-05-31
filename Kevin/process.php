<?php
include 'connect.php';

$eesnimi=$_POST['eesnimi'];
$perenimi=$_POST['perenimi'];
$email=$_POST['email'];
$telefoninr=$_POST['telefoninr'];


$sql1 = "INSERT INTO `kliendi_andmed` (`eesnimi`, `perenimi`, `email`, `telefoninr.`)
VALUES ('$eesnimi','$perenimi','$email','$telefoninr')"; 

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