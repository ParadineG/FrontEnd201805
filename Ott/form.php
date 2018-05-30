<!DOCTYPE html>
<html lang="et">
    <Head>
        <meta charset="utf-8">
        <title>Tiitel koolitusele</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!--_blank avab lingi uues tabis/aknas. <base>  on valikuline-->
        <base href="/Ott/" target="_blank">
        <meta name="referrer" content="">
        <!--no-referrer no-refferrer-when-downgrade same-origin origin strict-origin 
        origin-when-crossorigin strict-origin-when-crossorigin unsafe-url -->

        <!--Põhi ikoonid-->
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
        <link rel="icon" type="image/svg+xml" sizes="any" href="/icon/favicon.svg">
        
        <link rel="stylesheet" href="style.css" type="text/css" title="default">
        <link rel="alternate stylesheet" href="fancy.css" type="text/css" title="fancy">
        <link rel="stylesheet" href="print.css" type="text/css" media="print">
    </Head>
    <body>
        <main>
            <form accept-charset="utf-8" autocomplete="on" method="GET" >
                <label for="nimi">Nimi: </label>
                <input id="nimi" name="eesnimi"><br>

                <label for="parool">Parool: </label>
                <input type="password" id="nimi" name="eesnimi"><br>

                <label for="email" >E-mail</label>
                <input type="email" id="email" name="email"><br>

               <label for="date" >Kuupäev: </label>
                <input type="date" id="date" name="date"><br>

                <label for="week" >Nädal </label>
                <input type="week" id="week" name="week"> <br>

                <label for="month" id="month" name="month">Kuu </label>
                <input type="month"> <br>

                <label for="datetime-local">Aeg: </label>
                <input type="datetime-local" id="datetime-local" name="datetime-local"><br>
                
                <label for="time">Kell:</label>
                <input type="time" name="time" id="#time" value="hh:mm:ss"><br>

                <label for="file" >Fail</label>
                <input type="file" id="file" name="file"> <br>

                 <label for="url" >URL </label>
                <input type="url" id="url" name="url"> <br>

                <label for="tel" >Telefon: </label>
                <input type="tel" id="tel" name="tel"> <br>

                <label for="range" >Range:</label>
                <input type="range" id="range" name="range"> <br>

                <label for="color" >Värv </label>
                <input type="color" id="color" name="color"> <br>

                <label for="checkbox" >Checkbox: </label>
                <input type="checkbox" id="checkbox" name="checkbox"> <br>

                <label for="radio" >Mees: </label>
                <input type="radio" id="radio" name="radio" value="Mees"> <br>
                <label for="radio" >Naine: </label>
                <input type="radio" id="radio" name="radio" value="Naine"> <br>

                <button type="button" disabled>Nupp</button>
                <button type="reset">Reset</button>
                <button type="submit" formmethod="POST" autofocus>Saada</button>
                
            </form>
            <?php 
                if(isset($_POST['eesnimi']))
                echo '<p>' .$_POST['eesnimi']. '</p>';
            ?>
        </main>
    </body>
</html>