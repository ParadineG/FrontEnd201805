<?php
include 'connect.php';

foreach($_POST['kustuta'] as $item){
	$sql = "DELETE FROM `kliendi_andmed` WHERE ID='$item';";
		if ($conn->query($sql) === TRUE) {
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
}
header("Refresh:0; url=kontakt.php");
$conn->close();
?>