<?php
ini_set('display_errors','0');
session_start();
<<<<<<< HEAD

$mysqli = mysqli_connect('localhost','root','','tradent');

$global = mysqli_query($mysqli,"SELECT * FROM items ");
$result = mysqli_fetch_array($global);
$row = mysqli_fetch_row ($global);
$myArray = array();
foreach($global as $row)
{
	$myObj = new \stdClass();
	$myObj->name = $row['name'];
	$myObj->description = $row['description'];
	$myObj->photo = $row['photo'];
	$myObj->price = $row['price'];
	array_push($myArray, $myObj);
}
header('Content-type: application/json;charset=utf-8'); //Setting the page Content-type
$myJSON = json_encode($myArray);
echo $myJSON;
=======

    $mysqli = mysqli_connect('localhost','root','','tradent');

    $global = mysqli_query($mysqli,"SELECT * FROM items ");
    $result = mysqli_fetch_array($global);
    $row = mysqli_fetch_row ($global);
    $myArray = array();
    foreach($global as $row)
    {
        $myObj = new \stdClass();
        $myObj->name = $row['name'];
        $myObj->description = $row['description'];
        $myObj->photo = $row['photo'];
        $myObj->price = $row['price'];
        array_push($myArray, $myObj);
    }
    header('Content-type: application/json;charset=utf-8'); //Setting the page Content-type
    $myJSON = json_encode($myArray);
    echo $myJSON;
>>>>>>> cadc91af7bfc0ea358e8ef90b4cc6eff6fd154a1

?>