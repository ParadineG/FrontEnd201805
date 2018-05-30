<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Valikuline-->
        <!--base href="http://localhost/Kerli/" target="_blank"-->
        <meta name ="referrer" content="strict-origin-when-cross-origin">
        <title>Teine leht</title>
        <link rel="shortcut icon" type="image/png" sized="32x32" href="../icon/favicon-32x32.png">
        <link rel="shortcut icon" type="image/png" sized="16x16" href="../icon/favicon-16x16.png"> 
        <link rel="shortcut icon" type="svg/xml" sized="any" href="../icon/favicon.svg">       
        <link rel="stylesheet" href="style.css" type="text/css" title="default">
        <link rel="stylesheet" href="print.css" type="text/css" media="print">
        <link rel="alternate stylesheet" href="fancy.css" type="text/css" title="fancy">
    </head>
    <body>
        <main>
            <header>
                <h1>Form katsetused</h1>
            </header>
            <form accept-charset="utf-8" autocomplete="on" method="GET" action="">
                <label for="nimi">Nimi: </label>
                <input id="nimi" name="eesnimi">
                <button type="button" autofocus>XxX</button>
                <button type="submit" formmethod="POST">Submit</button>
                <button type="reset" disabled>Reset</button>
            </form>
            <?php
                if(isset($_POST['eesnimi']))
                echo '<p>'.$_POST['eesnimi'].'</p>';
            ?>
            <br>
            <form>
                <label for="tel">Tel: </label>
                <input id="tel" name="tel" type="tel"><br><br>
                <label for="url">Url: </label>
                <input id="url" name="url" type="url"><br><br>
                <label for="email">Email: </label>
                <input id="email" name="email" type="email" placeholder="xxx@mail.ee"><br><br>
                <label for="password">PW: </label>
                <input id="password" name="password" type="password"><br><br>
                <!--sarnased month, week-->
                <label for="date">Kuupäev: </label>
                <input id="date" name="date" type="date">
                <label for="month">Kuu: </label>
                <input id="month" name="month" type="month"><br><br>
                <label for="time">Kell: </label>
                <input id="time" name="time" type="time">
                <label for="datetime-local">Kohalik: </label>
                <input id="datetime-local" name="datetime-local" type="datetime-local"><br><br>
                <label for="file">Fail: </label>
                <input id="file" name="file" type="file"><br><br>
                <label for="range">Vahemik: </label>
                <input id="range" name="range" type="range"><br><br>
                <label for="color">Värv: </label>
                <input id="color" name="color" type="color"><br><br>
                <label for="checkbox">Checkbox: </label>
                <input id="checkbox" name="checkbox" type="checkbox"><br><br>
                <label for="radio">Radio: </label>
                <input id="radio" name="radio" type="radio"><br><br>
            </form>
        </main>
    </body>
</html>