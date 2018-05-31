<?php
include 'connect.php';

$sql = 'DROP DATABASE isikuandmed';
if ($conn->query($sql) === TRUE) {
    echo "Database my_db was successfully dropped\n";
} else {
    echo 'Error dropping database: ' . mysql_error() . "\n";
}
header("Refresh:0; url=kontakt.php");
$conn->close();
?>