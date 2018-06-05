<?php
include 'connect.php';

foreach($_POST['kustuta'] as $item){
	$sql = "DELETE FROM `kliendi_andmed` WHERE ID='$item';";
		if ($conn->query($sql) === TRUE) {
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
}
mysqli_select_db ( $conn , "isikuandmed" );
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql2 = "ALTER TABLE `kliendi_andmed` AUTO_INCREMENT = 1;";
		if ($conn->query($sql2) === TRUE) {
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
header("Refresh:0; url=kontakt.php");
$conn->close();
?>