<!DOCTYPE html>
<html lang="et">
   <head>
      <meta charset="utf-8">

      <title>Tiitel koolitusele</title>  
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      

      <!--Valikuline: -->
      <base href="http://localhost/Tuuli/" target="_blank">
      <meta name="referrer" content=" strict-origin-when-crossorigin">
      <!-- no-referrer (teised lehed ei saa sinu sisenemisest või väljumisest infot kätte, sinu lehe piires) no-referrer-when-downgrade same-origin (veebisisene liikumine on lubatud) origin (tagastab info, tagastab domeeni nime, see isik tuli lehelt neti.ee aga täpsemat infot pole) strict-origin (tsgastab info, tuleb turvaliselt lehelt)
      origin-when-crossorigin (enda kodulehe piires tyäispikke url, kui väljaspool saadab domeeni nimesid) strict-origin-when-crossorigin (kõige parem valik, ei lase infot läbi kui lähed ebaturvalisele lehele) unsafe-url(vastupidine no referrerile) -->
      <!--Põhi ikoonid-->
      <link rel="icon" type="image/png" sizes="32x32 48x48" href="/icon/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
      <link rel="icon" type="image/svg+xml" sizes="any" href="/icon/favicon.svg">
    

      <link rel="stylesheet" href="style.css" type="text/css"title="default">
      <link rel="alternate stylesheet" href="fancy.css" type="text/css"title="fancy">
      <link rel="stylesheet" href="print.css" type="text/css" media="print">     
      
      
    </head> 
   <!-- onoffline="update(false)" -->

   </body>
   <body>
        <main>
            <form accept-charset="utf-8" autocomplete="on" method="GET" action="index.html"> <!--siin kasutan meetodit POST/GET, novalidate valideerimissüsteemid vaikimisi ei toimi-->
                <label for="nimi">Nimi:</label>
                <input id="nimi" name="eesnimi"><br> 
                <label for="parool">Password:</label>
                <input type="password" id="parool" name="parool"><br>
                <!--id peab olema alati unikaalne nimetus, eesnimi tuleb kasti sisse kui saada vajutad-->
                
                <label for="tel">Telefon:</label><!--tel -telefoni nr sisestamiseks, saab määrata max-min suurused, nutiseadmetel annab nr klaviatuuri-->
                <input type="tel" id="tel" name="tel"><br>
                
                <label for="date">Date:</label>
                <input type="date" id="date" name="date"><br>
                
                <label for="month">Kuu:</label>
                <input type="month" id="month" name="month"><br>
                
                <label for="week">Nädal:</label>
                <input type="week" id="week" name="week"><br>
                
                <label for="time">Kell:</label>
                <input type="time" id="time" name="time"><br>
                
                <label for="datetime-local">Aeg:</label>
                <input type="datetime-local" id="datetime-local" name="datetime-local"><br>
                
                <label for="file">Fail:</label> <!--tuleb kasutada POSTiga-->
                <input type="file" id="file" name="file"><br>

                <label for="url">URL:</label><!--url-käsitleb veebilehe aadressi, vormide täitmiseks, nt lisad kodulehe -->
                <input id="url" name="url"><br>
                
                <label for="e-mail">E-mail:</label>
                <input id="e-mail" name="e-mail"><br>
                
                <label for="range">Vahemik:</label>
                <input type="range" id="range" name="range"><br> <!--kasutuses kus vaja helitugevust, seal kasutada kus vaja % nt, et alati 1-100 number, võimalik stepi panna-->
                
                <label for="color">Värv:</label>
                <input type="color"id="color" name="color"><br>
                
                <label for="checkbox">checkbox:</label> <!--kvaikimisi tõene väärtus, et a-la kui linnukest pole siis ikka arvestab-->
                <input type="checkbox"id="checkbox" name="checkbox"><br>

                <label for="radio1">Mees:</label>
                <input type="radio"id="radio1" name="radio">
                <label for="radio2">Naine:</label>
                <input type="radio"id="radio2" name="radio"><br>

                <button type="button" disabled>Nupp</button> <!--muudab nähtamatuks-->
                <button type="reset">Uuenda</button>
                <button type="submit" autofocus>Saada</button> <!--autofocus automaatselt muudab aktiivseks-->
            </form>
       
        <?php
        if(isset($_POST['eesnimi']))
        echo '<p>'.$_POST['eesnimi'].'</p>';
        ?>
            
        </main>
   </body>
   </html> 
