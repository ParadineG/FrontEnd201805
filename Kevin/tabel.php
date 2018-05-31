<?php
include 'connect.php';

$sql = "CREATE TABLE kliendi_andmed(
	`ID` int(10) unsigned NOT NULL auto_increment,
	`eesnimi` varchar(30) NOT NULL,
	`perenimi` varchar(60) NOT NULL,
	`email` varchar(30) NOT NULL, 
	`telefoninr.` int(15) NOT NULL DEFAULT 0,
	PRIMARY KEY (`ID`)
	)";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}
header("Location: index.html");
die();
exit;

?>