<!DOCTYPE html>
<html lang="et">
    <Head>
        <meta charset="utf-8">
        <title>Vormid</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
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
        <?php 
                if(isset($_POST['eesnimi']))
                echo '<p>' .$_POST['eesnimi']. '</p>';
            ?>
            <form accept-charset="utf-8" autocomplete="on" method="GET" action="">

                <fieldset>
                    <legend>1.osa</legend>

                        <label for="nimi">Nimi: </label>
                        <input type="text" id="nimi" name="eesnimi" required><br>

                        <label for="hidden">Varjatud: </label>
                        <input type="hidden" id="hidden" name="hidden" value="Peidetud"><br>

                        <label for="search">Otsi: </label>
                        <input type="search" id="search" name="search" value="Tere" readonly><br>

                        <label for="parool">Parool: </label>
                        <input type="password" id="parooli" name="parool" minlength="3" maxlength="6"><br>

                        <label for="email" >E-mail: </label>
                        <input type="email" id="email" name="email" placeholder="nimi@mail.ee" multiple><br>

                </fieldset>
                <fieldset>
                    <legend>2.osa</legend>
                        <label for="date" >Kuupäev: </label>
                        <input type="date" id="date" name="date" min="1979-01-01" max="2012-01-01"><br>

                        <label for="week" >Nädal: </label>
                        <input type="week" id="week" name="week"> <br>

                        <label for="month" >Kuu: </label>
                        <input type="month" id="month" name="month"> <br>

                        <label for="datetime-local">Aeg: </label>
                        <input type="datetime-local" id="datetime-local" name="datetime-local"><br>
                        
                        <label for="time">Kell: </label>
                        <input type="time" id="time" name="time"  ><br>

                        <label for="file" >Fail: </label>
                        <input type="file" id="file" name="file" accept="image/*"> <br>

                        <label for="url" >URL: </label>
                        <input type="url" id="url" name="url" list="kodukad"> <br>
                        

                        <label for="tel" >Telefon: </label>
                        <input type="tel" id="tel" name="tel" pattern="[+0-9]{9}" title="Number and + only"> <br>

                        <label for="range" >Range: </label>
                        <input type="range" id="range" name="range" step="20"> <br>
                </fieldset>

                <label for="color" >Värv: </label>
                <input type="color" id="color" name="color"> <br>

                <label for="checkbox" >Checkbox: </label>
                <input type="checkbox" id="checkbox" name="checkbox"> <br>

                <label for="radio" >Mees: </label>
                <input type="radio" id="radio" name="radio" value="Mees"> <br>
                <label for="radio" >Naine: </label>
                <input type="radio" id="radio" name="radio" value="Naine"> <br>

                <datalist id="kodukad">
                        <option value="http://neti.ee" >Neti</option>
                        <option value="http://google.ee" label="Google">Google</option>
                        <option value="http://delfi.ee">Delfi</option>
                    </datalist>

                <select name="valik" multiple>
                    <optgroup label="1">
                        <option value="http://neti.ee" >Neti</option>
                        <option value="http://google.ee" label="Google" selected>Google</option>
                        <option value="http://delfi.ee" label="delfi" disabled>
                    </optgroup>
                    <optgroup label="2">
                        <option value="http://neti.ee" >Neti</option>
                        <option value="http://google.ee" label="Google" selected>Google</option>
                        <option value="http://delfi.ee" label="delfi">Delfi</option>
                </optgroup>
                </select><br>

                <textarea name="tekstiala" cols="30" rows="5"> 
                    Tere, see tekst siin tuleb tekstiosasse nähtavale..
                </textarea><br>
                
                
                <input type="button" disabled value="Nupp">
                <input type="reset" value="Reset">
                <input type="submit" formmethod="GET" autofocus value="Saada">

                <input type="image" src="/icon/Favicon-32x32.png" alt="Nupuke">
                 
                <button type="button" disabled>Nupp</button>
                <button type="reset">Reset</button>
                <button type="submit" formmethod="GET" autofocus>Saada</button>
                
            </form>

            <form onsubmit="return false" oninput="o.value = a.valueAsNumber + b.valueAsNumber">
                <input name="a" type="number" step="any"> +
                <input name="b" type="number" step="any"> =
                <output name="o" for="a b"></output> 
            </form><br>
            
            <progress value="100" max="200"></progress><br>
            <meter min="0.2" max="2" value="0.6" low="0.7" high="1.2" optimal="1"></meter><br>

            <details open>
                <summary><em>Kokkuvõte detailidest</em></summary>
                <p>tekst ijdgkdsjgosdfg fa gdf df gdfgh dfz bh xcvnhsn </p>
                <p>tekst ijdgkdsjgosdfg fa gdf df gdfgh dfz bh xcvnhsn </p>
            </details>

            <dialog open>
                <h2>Tere dialoog</h2>   
                <p>tekst ijdgkdsjgosdfg fa gdf df gdfgh dfz bh xcvnhsn </p>
                <p>tekst ijdgkdsjgosdfg fa gdf df gdfgh dfz bh xcvnhsn </p> 
            </dialog>

        </main>
        <a href="/Ott/index.html" target="_self">Tagasi</a>
    </body>
</html>