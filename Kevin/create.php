<?php
$servername = "localhost";
$username = "root";
$password = "";
// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Create database
$sql = "CREATE DATABASE isikuandmed";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
mysqli_select_db ( $conn , "isikuandmed" );
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql2 = "CREATE TABLE kliendi_andmed(
	`ID` int(10) unsigned NOT NULL auto_increment,
	`eesnimi` varchar(30) NOT NULL,
	`perenimi` varchar(60) NOT NULL,
	`email` varchar(30) NOT NULL, 
	`telefoninr.` int(15) NOT NULL DEFAULT 0,
	PRIMARY KEY (`ID`)
	)";
if ($conn->query($sql2) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

header("Refresh:0; url=kontakt.php");
$conn->close();

?>


