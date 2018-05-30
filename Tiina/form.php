<!DOCTYPE html>
<html lang="et">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Tiina">
        <!--See on oluline, et ka mobiilis oleks pilt kenasti nähtav-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tiitel koolitusele</title>
       
     
        <!--Ikoonid tabi peal.Ikooni kaust pannakse root domeeni-->
        <link rel="icon" type="image/png" sizes="32x32 48x48" href="/icon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
        <link rel="icon" type="image/svg+xml" sizes="any" href="/icon/favicon.svg">

        <link rel="stylesheet" href="style.css" type="text/css" title="default">
        <link rel="alternate stylesheet" href="fancy.css" type="text/css" title="fancy">
        <link rel="stylesheet" href="print.css" type="text/css" media="print">
    </head>
    <body>
        <main>
            <!--novalidate -valideerimine backendis -->
            <form accept-charset="UTF-8" autocomplete="on" method="GET" action="" >
                <!--for seostatakse id'ga.Id peab olema alati unikaalne. Kui vaja kutsuda rohkem, siis on korrektseks kasutuseks klass.-->
                <!--disabled - nupp ei tööta ja on välja lülitatud. Autofocus - nupp mida vajutatakse kui vajutada enterit-->
                <label for="hidden">Varjatud: </label>
                <input type="hidden" id="hidden" name="hidden" value=""><br>
                <label for="nimi">Nimi: </label>
                <input type="text" id="nimi" name="eesnimi" required><br>
                <label for="search">Otsing: </label>
                <input type="search" id="search" name="search" value="Tere!" readonly><br>
                <!--telephone URL E-mail Password Date Time Number Range Color Checkbox Radio-->
                <label for="tel">Telefon: </label>
                <input type="tel" id="tel" name="tel" pattern="[+0-9]{9}" title="Numbers and + only" /><br>
                
                <label for="URL">URL: </label>
                <input type="URL" id="URL" name="URL" list="kodukad"><br>
                <datalist id="kodukad">
                    <option value="http://neti.ee">
                    <option value="http://google.ee">
                    <option value="http://neti.ee">
                </datalist>
                <select name="valik" multiple>
                    <optgroup label="1">
                    <option value="http://neti.ee" label="neti">
                    <option value="http://google.ee">
                    <option value="http://neti.ee"></optgroup>
                    <optgroup label="2">
                    <option value="http://neti.ee" label="neti">
                    <option value="http://google.ee">
                    <option value="http://neti.ee"></optgroup>
                </select>
                <label for="email">E-mail: </label>
                <input type="email" id="email" name="email" placeholder="nimi@mail.ee"><br>
                <label for="parool">Password: </label>
                <input type="password" id="parool" name="password" minlenght="3" maxlength="6"><br>
                <label for="date">Kuupäev: </label>
                <input type="date" id="date" name="date" min="1999" max="2020"><br>
                <label for="month">Kuu: </label>
                <input type="month" id="month" name="month" ><br>
                <label for="week">Nädal: </label>
                <input type="week" id="week" name="week" ><br>
                <label for="time">Time: </label>
                <input type="time" id="time" name="time" ><br>
                <label for="file">File: </label>
                <input type="file" id="file" name="file" accept="image/*"><br

                <label for="number">Number: </label>
                <input type="number" id="number" name="number" ><br>
                <label for="range">Vahemik: </label>
                <input type="range" id="range" name="range" step="20"><br>
                <label for="color">Värv: </label>
                <input type="color" id="color" name="color" ><br><br>
                
                <label for="radio">Kass: </label>
                <input type="radio" id="radio" name="loom" value="Kass"><br>
                <label for="radio1">Koer: </label>
                <input type="radio" id="radio1" name="loom" value="Koer"><br>
                <label for="checkbox">Kass: </label>
                <input type="checkbox" id="checkbox" name="checkbox"  value="Kass"><br>

                <input type="button" disabled value="Nupp">
                <input type="reset" value="Reset">
                <input type="submit" formmethod="GET" autofocus value="saada">
                <input type="image" src="/icon/favicon-32x32.png" alt="Nupuke">
               
                <button type="button" disabled>Nupp</button>
                <button type="reset">Reset</button>
                <button type="submit" formmethod="GET" autofocus>Saada</button>
            </form>
            <?php
            if(isset($_POST['eesnimi']))
                echo '<p>'.$_POST['eesnimi'].'</p>';
            ?>
        </main>
    </body>
</html>