<!DOCTYPE html>
<html lang="et">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        
        <!--Valikuline-->
        <base href="http://localhost/Georg/" target="_blank">
        <meta name="referrer"content="">
        <!-- no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin
             origin-when-crossorigin, strict-origin-when-crossorigin, unsafe-url -->
        <title>Title</title>
        <!-- Põhi ikoonid -->
        <link rel="icon" type="image/png" sized="32x32" href="/icon/favicon-32x32.png">
        <link rel="icon" type="image/png" sized="16x16" href="/icon/favicon-16x16.png"> 
        <link rel="icon" type="svg/xml" sized="any" href="/icon/favicon.svg">

        <link rel="stylesheet" href="style.css" type="text/css" title="default">
        <link rel="alternate stylesheet" href="fancy.css" type="text/css" title="fancy">
        <link rel="stylesheet" href="print.css" type="text/css" media="print">
    </head>

    <body>
        <main>
            <fieldset>
                <legend>inputs</legend>
                <form accept-charset="utf-8" autocomplete="on" method="GET" action="" target="_self">
                    <!-- (label for) ja (input id) on seoses, (input name) on serveriga seoses-->
                    <label for="username">username: </label>
                    <input id="username" name="username"><br><br>

                    <label for="password">password</label>
                    <input type="password" id="password" name="password"><br><br>

                    <label for="email">email</label>
                    <input type="email" id="email" name="email"><br><br>

                    <label for="tel">tel</label>
                    <input type="tel" id="tel" name="tel"><br><br>

                    <label for="date">date</label>
                    <input type="date" id="date" name="date"><br><br>

                    <label for="month">month</label>
                    <input type="month" id="month" name="month"><br><br>

                    <label for="week">week</label>
                    <input type="week" id="week" name="week"><br><br>

                    <label for="time">time</label>
                    <input type="time" id="time" name="time"><br><br>

                    <label for="url">url</label>
                    <input type="url" id="url" name="url"><br><br>

                    <label for="file"></label>
                    <input type="file" id="file" name="file"><br><br>

                    <label for="range">range</label>
                    <input type="range" id="range" name="range"><br><br>

                    <label for="color">color</label>
                    <input type="color" id="color" name="color"><br><br>

                    <label for="checkbox">checkbox</label>
                    <input type="checkbox" id="checkbox" name="checkbox"><br><br>

                    <label for="radio">Mees</label>
                    <input type="radio" id="radio" name="radio1" value="mees"><br><br>

                    <label for="radio">Naine</label>
                    <input type="radio" id="radio" name="radio2" value="naine"><br><br>

                    <label for="radio">Teletups</label>
                    <input type="radio" id="radio" name="radiouni" value="teletups"><br><br>


                    <button type="submit" formmethod="GET" autofocus>Send</button>
                    <button type="button" disabled>Button</button>
                    <button type="reset">Reset</button>
                </form>
            </fieldset>
        </main>

        <?php
        if(isset($_POST['username']))
            echo '<p>'.$_POST['username'].'</p>';
        ?>
    </body>

</html>