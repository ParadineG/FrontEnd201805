<!DOCTYPE html>
<html lang="et">
    <head>
        <meta charset="utf-8">
        <title>Tiitel koolitusele</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        

        <!--Valikuline: -->
        <base href="http://localhost/Stina/" target="_blank">
        <meta name="referrer" content="strict-origin-when-crossorigin">

        <link rel="icon" type="image/png" sizes="32x32 48x48" href="/icon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
        <link rel="icon" type="image/svg+xml" sizes="any" href="/icon/favicon.svg">

        <link rel="stylesheet" href="style.css" type="text/css" title="default">
        <link rel="alternate stylesheet" href="fancy.css" type="text/css" title="fancy">
        <link rel="stylesheet" href="print.css" type="text/css" media="print">
    </head>
    <body>
        <main>
            <form accept-chartset="utf-8" autocomplete="on" 
            method="GET" action="">
                <label for="hidden">Varjatud: </label>
                <input type="hidden" id="hidden" name="hidden" value="peidetud"><br
                <label for="nimi">Nimi: </label>
                <input id="nimi" name="eesnimi" required><br>
                <label for="email">E-mail: </label>
                <input type="email" id="email" name="email" placeholder="nimi@mail.ee" multiple><br>
                <label for="password">Parool: </label>
                <input type="password" id="password" name="password" minlength="5" maxlength="12"><br>
                <label for="month">Kuu: </label>
                <input type="month" id="month" name="month"><br>
                <label for="week">nädal: </label>
                <input type="week" id="week" name="week"><br>


                <label for="date">Aeg: </label>
                <input type="date" id="date" name="date" min="1979-01-01" max="2068-01-01"><br>


                <label for="range">Vahemik: </label>
                <input type="range" id="range" name="range"><br>
                
                
                <label for="time">Aeg: </label>
                <input type="time" id="time" name="time"><br>

                <label for="datetime-local">Aeg kohalik: </label>
                <input type="datetime-local" id="datetime-local" name="datetime-local"><br>
                <label for="file">File: </label>
                <input type="file" id="file" name="file" accept="image/*"><br>

                <label for="tel">Telefon: </label>
                <input type="tel" id="tel" name="tel" pattern="[+0-9]{9}" title="Numbers and + only"><br>
                <label for="url">URL: </label>
                <input type="url" id="url" name="url" list="kodukad"><br>
                <datalist id="kodukad">
                    <option value="http://neti.ee" label="Neti">
                    <option value="http://google.ee" label="Google">
                    <option value="http://net.ee" label="net">NET</option>
                </datalist>   
                
                
                <optgroup label="1">
                <option value="http://neti.ee" label="Neti">
                    <option value="http://google.ee" label="Google">
                    <option value="http://net.ee" label="net">NET</option>
                </optgroup>

                <textarea name="tekstiala" cols="30" rows="7">Kirjuta siia.. </textarea><br>
                <fieldset>
                    <legend>1.osa </legend>
                <label for="color">Värv: </label>
                <input type="color" id="color" value="#ff0000" name="color"><br>
                <label for="checkbox">Checkbox: </label>
                <input type="checkbox" id="checkbox" name="checkbox"><br>
                <label for="checkbox">EI taha: </label>
                <input type="checkbox" id="checkbox" name="checkbox"><br>
                <label for="checkbox">Mida sa tahad?: </label>
                <input type="checkbox" id="checkbox" name="checkbox"><br>
                </fieldset>
                <label for="radio1">Naine </label>
                <input type="radio" id="radio1" name="radio" value="naine"><br>
                <label for="radio2">Mees </label>
                <input type="radio" id="radio2" name="radio" value="mees"><br>
                <label for="radio3">Muu </label>
                <input type="radio" id="radio3" name="radiouni"><br>

                <label for="search">Otsing: </label>
                <input type="search" id="search" name="search" value="siit ei leia midagi" readonly><br>
                
                <!--selectiga kõik labelid alati välja kirjutada-->
                
                
                <select name="valik">
                <datalist id="kodukad">
                    <option value="http://neti.ee" label="Neti">
                    <option value="http://google.ee" label="Google">
                    <option value="http://net.ee" label="Viimane">
                </datalist>   
                </select>


                <input type="button" autofocus value="Nupp">
                <input type="submit" formmethod="GET" autofocus value="Saada">
                <input type="reset" value="Reset">
                <input type="image" src="/icon/Favicon-32x32.png" target="_blank" alt="Nupuke">
            </form>
            <form onsubmit="return false" oninput="o.value = a.valueAsNumber + b.valueAsNumber">
                <input name="a" type="number" step="any"> + 
                <input name="b" type="number" step="any"> =
                <output name="o" for="a b"></output>
            </form><br>

            <progress value="100" max="2000"></progress>
            <meter min="3" max="11" value="11" low="4" high="10" optimum="5">Tere</meter>
           
            <!--interaktiivsed elemendid edges ei tööta-->

            <details open>
                <summary><em>Kokkuvõte detailidest</em></summary>
                <p> ajsfasop aos dksadk     skasoldkas pasdksdkas saoda9 a9sdashndkja 9u dasn </p>
                <p> ajsfasop aos dksadk     skasoldkas pasdksdkas saoda9 a9sdashndkja 9u dasn </p>
                <p> ajsfasop aos dksadk     skasoldkas pasdksdkas saoda9 a9sdashndkja 9u dasn </p>
            </details><br>
            <dialog open>
                <h2>Tere dialoog!</h2>
                <p> ajsfasop aos dksadk     skasoldkas pasdksdkas saoda9 a9sdashndkja 9u dasn </p>
                <p> ajsfasop aos dksadk     skasoldkas pasdksdkas saoda9 a9sdashndkja 9u dasn </p>
                <p> ajsfasop aos dksadk     skasoldkas pasdksdkas saoda9 a9sdashndkja 9u dasn </p>
            </dialog>

            
            
            
            <?php
            if(isset($_POST['eesnimi']))
                echo '<p>'.$_POST['eesnimi'].'<p>';
            ?>
        </main>
    </body>