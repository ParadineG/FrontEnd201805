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
             <?php
                     if(isset($_POST['eesnimi']))
                    echo '<p>'.$_POST['eesnimi'].'</p>';
                    ?>
             <form accept-charset="utf-8" autocomplete="on" method="GET" action="">
                 <fieldset>
                     <legend> 1.osa</legend>
                <label for="nimi" >Nimi: </label>
                <input id="nimi" name="eesnimi" required> <br><br>

                <label for="password"> Password: </label>
                 <input type="password" id="password" name="password" minlength="3" maxlength="6"><br><br>

                 <label for="search"> Otsing: </label>
                 <input type="search" id="search" name="search" value="hallo" readonly><br><br>
          
                 <label for="tel"> Telefoninr: </label>
                 <input type="tel" id="tel" name="tel" pattern="[+0-9]{9}" title="Numbers and + only"><br><br>

                 <label for="url"> URL: </label>
                 <input type="url" id="url" name="url" list="kodulehed"><br><br>
                 </fieldset>
                 <datalist id="kodulehed">
                     <option value="http://neti.ee" label="Neti">Neti</option>
                     <option value="http://Google.ee" label="hi"> Google</option>
                     <option value="http://juku.ee">Juku
                 </datalist>

                 <select name="valik" multiple size="0" title="kkodus" width="200">
                     <optgroup label="1">
                        <option value="http://neti.ee"> Neti</option>
                        <option value="http://google.ee" selected>Google </option>
                        <option value="http://juku.ee" label="Juku" disabled> Juku</option>
                        </optgroup>
                        
                    <optgroup label="2">
                     <option value="http://neti.ee" label="Neti">Neti</option>
                     <option value="http://google.ee" label="Google" selected>Google</option>
                     <option value="http://juku.ee" label="Juku" disabled>Juku</option>
                     </optgroup>
                </select><br>
                <textarea name="tekstiala" cols="30" rows="7">Tere....</textarea><br><br>

                 <label for="email"> EMAIL: </label>
                 <input type="email" id="email" name="email" placeholder="nimi@gmail.com" multiple> <br><br>

                 <label for="time"> Kellaaeg: </label>
                 <input type="time" id="time" name="time"><br><br>

                 <label for="file"> Fail: </label>
                 <input type="file" id="file" name="file"><br> <br>          
               
                <label for="date"> Kuupäev: </label>
                <input type="date" id="date" name="date" min="1979-01-01" max="2019-01-01">

                <input type="button" disabled value="Nupp">
                <input type="reset" value="Reset">
                <input type="submit" formmethod="GET" autofocus value="Saada">
                <input type="image" src="/icon/favicon-32x32.png" alt="Nupp">

                <button type="button" disabled>Nupp</button>
                <button type="reset">Reset</button>
                <button type="submit">Saada</button formmethod="GET" autofocus value="Saada">
            </form><br>


            <form onsubmit="return false" oninput="o.value = a.valueAsNumber + b.valueAsNumber">
                <input name="a" type="number" step="any"> +
                <input name="b" type="number" step="any"> =
                <output name="o" for="a b"></output>
            </form>  
            <progress value="100" max="100"></progress>  
            <meter min="0.2" max="1.5" value="0.8" low="0.7" high="1.2" optimum="1"></meter> 
            <details>
                <summary>Kokkuvõte sogast</summary>
                    <p>djisaojdoisajdasjaidjsaiodjsioaj ijs oaidjisoajdisjd as</p>
                    <p>djisaojdoisajdasjaidjsaiodjsioaj ijs oaidjisoajdisjd as</p>
            </details><br>
            <dialog open>
                <h2>Dialoog</h2>
                <p>djisaojdoisajdasjaidjsaiodjsioaj ijs oaidjisoajdisjd as</p>
                <p>djisaojdoisajdasjaidjsaiodjsioaj ijs oaidjisoajdisjd as</p>
            </dialog>
        </main>            
    </body>
        
</html>