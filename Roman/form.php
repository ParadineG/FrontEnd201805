<!DOCTYPE html>
<html lang="et">
    <head>
        <meta charset="utf-8">
        <title>Tiitel koolitusele</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Põhi ikoonid -->
        <link rel="icon" type="image/png" sizes="32x32 48x48" href="/icon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
        <link rel="icon" type="image/svg+xml" sizes="any" href="/icon/favicon.svg">

        <link rel="stylesheet" href="style.css" type="text/css" title="default">
        <link rel="alternate stylesheet" href="fancy.css" type="text/css" title="fancy">
        <link rel="stylesheet" href="print.css" type="text/css" media="print">
        
    </head>
    <body>
        <main>
            <form accept-charset="utf-8" autocomplete="on" 
                method="GET" action="">
                <label for="hidden">Varjatud: </label>
                <input type="hidden" id="hidden" name="hidden" value="peidetud"><br>
                <label for="nimi">Nimi: </label>
                <input type="text" id="nimi" name="eesnimi" required><br>
                <label for="search">Otsing: </label>
                <input type="search" id="search" name="search" value="tere" readonly><br>
                <label for="parool">Password: </label>
                <input type="password" id="parool" name="parool" minlength="3" maxlength="6"><br>
                <label for="email">E-mail: </label>
                <input type="email" id="email" name="email" placeholder="nimi@mail.ee" multiple><br>
                <label for="date">Kuupäev: </label>
                <input type="date" id="date" name="date" min="1979-01-01" max="2012-01-01"><br>
                <label for="month">Kuu: </label>
                <input type="month" id="month" name="month"><br>
                <label for="week">Nädal: </label>
                <input type="week" id="week" name="week"><br>
                <label for="time">Kell: </label>
                <input type="time" id="time" name="time"><br>
                <label for="datetime-local">Aeg: </label>
                <input type="datetime-local" id="datetime-local" name="datetime-local"><br>
                <label for="file">Fail: </label>
                <input type="file" id="file" name="file" accept="image/*"><br>
                <label for="range">Vahemik: </label>
                <input type="range" id="range" name="range" step="20"><br>
                <label for="color">Värv: </label>
                <input type="color" id="color" name="color"><br>
                <label for="checkbox">Tsekkimine: </label>
                <input type="checkbox" id="checkbox" name="checkbox"><br>
                <label for="radio">Mees: </label>
                <input type="radio" id="radio" name="radio" value="mees"><br>
                <label for="radio1">Naine: </label>
                <input type="radio" id="radio1" name="radio" value="naine"><br>
                <label for="radio2">Muu: </label>
                <input type="radio" id="radio2" name="radiouni"><br>
                <!-- tel url email password date time number
                file range color checkbox radio -->
                <label for="tel">Telefon: </label>
                <input type="tel" id="tel" name="tel" pattern="[+0-9]{9}" title="Numbers and + only" ><br>
                <label for="url">URL: </label>
                <input type="url" id="url" name="url" list="kodukad"><br>
                <datalist id="kodukad">
                    <option value="http://neti.ee" label="Neti">
                    <option value="http://google.ee" label="hi">Google</option>
                    <option value="http://juku.ee">
                </datalist>
                <select name="valik" multiple size="0" title=kkodus width=200>
                    <optgroup label="1">
                        <option value="http://neti.ee">Neti</option>
                        <option value="http://google.ee" label="Google" selected>H1</option>
                        <option value="http://juku.ee" label="Juku" disabled>
                    </optgroup>
                    <optgroup label="2">
                        <option value="http://neti.ee" label="Neti">
                        <option value="http://google.ee" label="Google" selected>
                        <option value="http://juku.ee" label="Juku" disabled>
                    </optgroup>
                </select>
                
                <input type="button" disabled value="Nupp">
                <input type="reset" value="Reset">
                <input type="submit" formmethod="GET" autofocus value="Saada">
                <input type="image" src="/icon/Favicon-32x32.png" alt="Nuppuke">   
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