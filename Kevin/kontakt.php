
<html lang="et">
<head>
	<link rel="stylesheet" type="text/css" href="style.css" title="default">
	<link rel="alternate stylesheet" type="text/css" href="style2.css" title="style2">
	<script type="text/javascript" src="java.js"></script>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<base href="/kevin/">
	<meta name="referrer" content=""><!--no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-crossorigin, strict-origin-when-crossorigin, unsafe-url-->
	<link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
	<link rel="icon" type="image/svg+xml" sizes="any" href="/icon/favicon.svg">
	<title>Tarkvaraarenduse Front-end</title>
	<title></title>
</head>
<body class="kontakt">
	<header>
		<div class="navigatisoon">
			<nav id="nav" role='navigation'>
		  		<ul>
		    		<li><a href="index.html">Avaleht</a></li>
		    		<li><a href="/kevin/portfolio.html">Portfoolio</a></li>
		    		<li class="active"><a href="/kevin/kontakt.php">Kontakt</a></li>
		  		</ul>
			</nav>
		</div>
	</header>
<aside>
	
<form action="/kevin/create.php">
    <input class="loo" type="submit" value="loo andmebaas" />
</form>
<form action="/kevin/kustuta2.php">
    <input class="loo2" type="submit" value="kustuta andmebaas" />
</form>
</aside>
<div class="kontaktivorm">
<form action="process.php" method="post" autocomplete="on">
<div class="kliendi_andmed">
<!--Kooli andmed-->
<div class="klient">
<h3>Minu andmed</h3>
	<br />
		<div class="vorm">
			<label >Eesnimi</label>
				<div class="lahter">
					<input type="text" name="eesnimi" />
				</div>
				<br />
			<label>Perenimi</label>
				<div class="lahter">	
					<input type="text" name="perenimi" />
				</div>
				<br />
			<label>E-mail</label>
				<div class="lahter">
					<input type="email" name="email" placeholder="example@example.com" multiple />
				</div>
				<br />
			<label>Telefoni nr.</label>
				<div class="lahter">
					<input type="tel" name="telefoninr" pattern="[+0-9]{9}" title="lma suunakoodita" />
				</div>
				<br />
					
		</div>
	<br>	
</div>
</div>

<div class="sisestanupp">
<input class="sisestus" style="border:none" type="submit" value="Sisesta">
</div>	
</form>
</div>

<h2>Andmete vaatamine</h2>
<div id="data">
<?php
include 'connect.php';


$sql ="SELECT `kliendi_andmed`.ID,`kliendi_andmed`.`eesnimi`,`kliendi_andmed`.`perenimi`,`kliendi_andmed`.`email`,`kliendi_andmed`.`telefoninr.`
FROM `kliendi_andmed`";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table style='text-align:center; margin-left:auto; margin-right:auto'>
        <tr>
            <th>ID</th>
            <th>Eesnimi</th>
            <th>Perenimi</th>
            <th>Email</th>
            <th>Telefoni nr.</th>
            <th>Kustuta</th>
        </tr>";
    echo "<form action='kustuta.php' method='post'>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["ID"].
        "</td><td>".$row["eesnimi"].
        "</td><td>".$row["perenimi"].
        "</td><td>".$row["email"].
        "</td><td>".$row["telefoninr."].
        "</td><td><input type='checkbox' name='kustuta[]' value=". $row["ID"]."/></td></tr>";
    }
    echo "</table>";
	echo "<input type='submit' value='Kinnita'>";
    echo "</form>";
    } else {
    echo "<br>Tulemused puuduvad.";
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


$conn->close();
?>
</div>

 
</body>
</html>

