<!DOCTYPE html>
 <html lang= "et">
    <head>
        <meta charset="utf-8">
            <title>Tiitel Koolitusele</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
        <link rel="icon" type="image/svg+xml" sizes="any" href="/icon/favicon.svg">

        <link rel="stylesheet" href="form.css" type="text/css" title="default">
        <link rel="alternate stylesheet" href="fancy.css" type="text/css" title="fancy">
        <link rel="stylesheet" href="print.css" type="text/css" media="print">
    </head>
 
    <body>
        <main>
            <form accept-charset="utf-8" autocomplete="on" method="GET" action="index.html">
                
                <label for="nimi" >Nimi: </label>
                <input id="nimi" name="eesnimi"> <br>

                <label for="password"> Password: </label>
                 <input type="password" id="password" name="password"><br>
               
                 <label for="tel"> Telefoninr: </label>
                 <input type="tel" id="tel" name="tel"><br>

                 <label for="url"> URL: </label>
                 <input type="url" id="url" name="url"><br>

                 <label for="email"> EMAIL: </label>
                 <input type="email" id="email" name="email"><br>

                 <label for="time"> Kellaaeg: </label>
                 <input type="time" id="time" name="time"><br>

                 <label for="file"> Fail: </label>
                 <input type="file" id="file" name="file"><br>


                 

                 
               
               
                <label for="date"> Kuupäev: </label>
                <input id="date" type="date">

                <button type="button" disabled> Nupp</button>
                <button type="reset"> Reset</button>
                <button type="submit" autofocus> Saada</button>

            </form>
            <?php
            if(isset($_POST['eesnimi']))
                echo '<p>'.$_POST['eesnimi'].'</p>';
            ?>
        </main>
</html>