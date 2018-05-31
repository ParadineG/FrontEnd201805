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
      
      <

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
            <form accept-charset="utf-8" autocomplete="on" method="GET" action=""> <!--autocomplete võib olla ka mujal, siin kasutan meetodit POST/GET, novalidate valideerimissüsteemid vaikimisi ei toimi-->
                <fieldset>
                    <legend>1.osa</legend>
                <label for="nimi">Nimi:</label>
                <input type="hidden" id="hidden" name="hidden" value="peidetud"><br>

                <label for="search">Otsing:</label>
                <input type="search" id="search" name="search" value="tere" readonly><br>

                <label for="parool">Password:</label>
                <input type="password" id="parool" name="parool" minlength="3" maxlength="6"><br>
                <!--id peab olema alati unikaalne nimetus, eesnimi tuleb kasti sisse kui saada vajutad-->
                
                <label for="tel">Telefon:</label><!--tel -telefoni nr sisestamiseks, saab määrata max-min suurused, nutiseadmetel annab nr klaviatuuri-->
                <input type="tel" id="tel" name="tel" pattern="[+0-9]{9}" title="Numbers and + only"><br> <!--[+0-9]{9} =regular expression -->
                
                <label for="date">Kuupäev:</label>
                <input type="date" id="date" name="date" min="1979-01-01" max="201-01-01"><br>
                </fieldset>
                <fieldset>
                    <legend>2.osa</legend>
                <label for="month">Kuu:</label>
                <input type="month" id="month" name="month"><br>
                
                <label for="week">Nädal:</label>
                <input type="week" id="week" name="week"><br>
                
                <label for="time">Kell:</label>
                <input type="time" id="time" name="time"><br>
                </fieldset>
                <label for="datetime-local">Aeg:</label>
                <input type="datetime-local" id="datetime-local" name="datetime-local"><br>
                
                <label for="file">Fail:</label> <!--tuleb kasutada POSTiga-->
                <input type="file" id="file" name="file" accept="image/*"><br>

                <label for="url">URL:</label><!--url-käsitleb veebilehe aadressi, vormide täitmiseks, nt lisad kodulehe -->
                <input id="url" name="url" list="kodukad"><br>
                    <datalist id="kodukad">
                        <option value="http://neti.ee">Neti</option><!--võib ka nii label="Neti">-->
                        <option value="http://google.ee">
                        <option value="http://postimees.ee">
                    </datalist>
                    <select name="valik" multiple>
                    <optgroup label="1">    
                        <option value="http://neti.ee">Neti</option>
                        <option value="http://google.ee"selected>Google</option>
                        <option value="http://postimees.ee" label="Postimees" disabled>
                    </optgroup>
                    <optgroup label="2">
                        <option value="http://neti.ee" label="Neti">
                        <option value="http://google.ee" label="Google" selected>
                        <option value="http://postimees.ee" label="Postimees" disabled>
                    </optgroup>
                    </select>
                    
                
                <label for="e-mail">E-mail:</label>
                <input id="e-mail" name="e-mail" placeholder="nimi@mail.ee" multiple><br> <!--multiple laseb mitu e-posti panna-->
                
                <label for="range">Vahemik:</label>
                <input type="range" id="range" name="range" step="20"><br> <!--kasutuses kus vaja helitugevust, seal kasutada kus vaja % nt, et alati 1-100 number, võimalik stepi panna-->
                
                <label for="color">Värv:</label>
                <input type="color"id="color" name="color"><br>
                
                <label for="checkbox">checkbox:</label> <!--kvaikimisi tõene väärtus, et a-la kui linnukest pole siis ikka arvestab-->
                <input type="checkbox"id="checkbox" name="checkbox"><br>

                <label for="radio1">Mees:</label>
                <input type="radio"id="radio1" name="radio">
                <label for="radio2">Naine:</label>
                <input type="radio"id="radio2" name="radio"><br>

                <textarea name="tekstiala" cols="30" rows="7" wrap="hard">Tere!</textarea><br><!--seda saab tõmmata lehitsejas-->

                <input type="button" disabled value="Nupp"> <!--võib ka nii...buttoni puhul inputiga (button allpool)-->
                <input type="reset" value="Uuenda">
                <input type="submit" formmethod="GET" autofocus value="Saada"> 
                <input type="image" src="/icon/Favicon-32x32.png" alt="Nupuke"> 
                <select name="valik">
                        <option value="http://neti.ee" label="Neti">
                        <option value="http://google.ee">
                        <option value="http://postimees.ee">
                </select>
            
                <button type="button" disabled>Nupp</button> <!--muudab nähtamatuks-->
                <button type="reset">Uuenda</button>
                <button type="submit" autofocus>Saada</button> <!--autofocus automaatselt muudab aktiivseks-->
            </form><br>

        <form onsubmit="return false" oninput="o.value = a.valueAsNumber + b.valueAsNumber"> <!--o on muutuja, määrame hiljem ära-->
            <input name="a" type="number"step="any"> +
            <input name="b" type="number"step="any"> =
            <output name="o" for="a b"></output>
        </form><br>

        <progress value="100" max="150" >Teres</progress><!--tekstiosa Teres pole näha, arvud 0-100-->
        <meter min="0.5" max="1.5" value="1.21" low="0.8" high="1.2" optimum="1"></meter> <!--meteri puhul on arvud 0-1 low ja high abil määrad min ja max, et siis tuleb hoiatus-->

        <details open> <!--open kasutades, siis alati avatud vormis-->
            <summary><em>Kokkuvõte detailidest</em></summary>
            <p>dfköldkfldkfl fldklfkd lkldfklfk lfkdldkfd lklje</p>
            <p>dfköldkfldkfl fldklfkd lkldfklfk lfkdldkfd lklje</p>
        </details><br>
        <dialog open>
            <h2>Tere dialoog!</h2>
            <p>dfköldkfldkfl fldklfkd lkldfklfk lfkdldkfd lklje</p>
            <p>dfköldkfldkfl fldklfkd lkldfklfk lfkdldkfd lklje</p>
        </dialog><br>   

        <?php
        if(isset($_POST['eesnimi']))
        echo '<p>'.$_POST['eesnimi'].'</p>';
        ?>
            
        </main>
   </body>
   </html> 
