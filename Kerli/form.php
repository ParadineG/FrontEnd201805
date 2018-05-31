<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Valikuline-->
        <!--base href="http://localhost/Kerli/" target="_blank"-->
        <meta name ="referrer" content="strict-origin-when-cross-origin">
        <title>Teine leht</title>
        <link rel="shortcut icon" type="image/png" sized="32x32" href="../icon/favicon-32x32.png">
        <link rel="shortcut icon" type="image/png" sized="16x16" href="../icon/favicon-16x16.png"> 
        <link rel="shortcut icon" type="svg/xml" sized="any" href="../icon/favicon.svg">       
        <link rel="stylesheet" href="style.css" type="text/css" title="default">
        <link rel="stylesheet" href="print.css" type="text/css" media="print">
        <link rel="alternate stylesheet" href="fancy.css" type="text/css" title="fancy">
    </head>
    <body>
        <main>
            <header>
                <h1>Form katsetused</h1>
            </header>
            <form accept-charset="utf-8" autocomplete="on" method="GET" action="">
                <fieldset>
                    <legend>1 pt</legend>
                <label for="nimi">Nimi: </label>
                <input type="hidden" id="nimi" name="eesnimi" type="text"><br><br>
                <label for="tel">Tel: </label>
                <input id="tel" name="tel" type="tel" pattern="[+0-9]{9}" title="Numbers and + only"><br><br>
                </fieldset>
                <label for="url">Url: </label>
                <input id="url" name="url" type="url" list="kodukad">
                <datalist id="kodukad">
                    <option value="http://neti.ee" label="neti">
                    <option value="http://google.ee">
                    <option value="http://postimees.ee">
                </datalist><br><br>
                <select name="valik" multiple>
                    <optgroup label="1">
                        <option value="http://neti.ee" label="neti">neti</option>
                        <option value="http://google.ee" label="google" selected>google</option>
                        <option value="http://postimees.ee" label="postimees">postimees</option>
                    </optgroup>
                    <optgroup label="2">
                        <option value="http://neti.ee" label="neti">neti</option>
                        <option value="http://google.ee" label="google">google</option>
                        <option value="http://postimees.ee" label="postimees">postimees</option>
                    </optgroup>
                </select><br><br>
                <label for="email">Email: </label>
                <input id="email" name="email" type="email" placeholder="xxx@mail.ee" multiple><br><br>
                <label for="password">PW: </label>
                <input id="password" name="password" type="password" minlength="3" maxlength="8"><br><br>
                <!--sarnased month, week-->
                <label for="date">Kuupäev: </label>
                <input id="date" name="date" type="date" min="1979-01-01" max="2018-30-05">
                <label for="month">Kuu: </label>
                <input id="month" name="month" type="month"><br><br>
                <label for="time">Kell: </label>
                <input id="time" name="time" type="time">
                <label for="datetime-local">Kohalik: </label>
                <input id="datetime-local" name="datetime-local" type="datetime-local"><br><br>
                <label for="file">Fail: </label>
                <input id="file" name="file" type="file" accept="image"><br><br>
                <label for="range">Vahemik: </label>
                <input id="range" name="range" type="range" step="20"><br><br>
                <label for="color">Värv: </label>
                <input id="color" name="color" type="color"><br><br>
                <label for="checkbox">Checkbox: </label>
                <input id="checkbox" name="checkbox" type="checkbox"><br><br>
                <!--label for="radio">Radio: </label>
                <input id="radio" name="radio" type="radio"><br><br-->
                <label for="search">Otsing: </label>
                <input id="search" name="search" type="search" value="peppa"><br><br>
                <textarea name="textarea" cols="30" rows="5" wrap="hard"></textarea><br><br>
                <button type="button" autofocus>XxX</button>
                <button type="submit" formmethod="POST">Submit</button>
                <button type="reset">Reset</button>
                <input type="button" autofocus value="Nupp">
                <input type="image" src="../icon/favicon-16x16.png" alt="nupp"><br><br>
            <?php
                if(isset($_POST['eesnimi']))
                echo '<p>'.$_POST['eesnimi'].'</p>';
            ?>
            </form>
            <form onsubmit="return false" oninput="o.value = a.valueAsNumber + b.valueAsNumber">
                <input name="a" type="number" step="any"> +
                <input name="b" type="number" step="any"> =
                <output name="o" for="a b"></output>
            </form><br>
            <progress value="150" max="200"></progress>
            <meter value="0.7" min="0.5" max="1.5" low="0.8" high="1.2" optimum="1"></meter>
            <details open>
                <summary>Aka dropdown</summary>
                <p>1. The wrap attribute is new for the</p>
                <p>2. The wrap attribute is new for the</p>
            </details>
            <dialog open>
                <h3><AaABbB/h3>
                <p>1. The wrap attribute is new for the</p>
                <p>2. The wrap attribute is new for the</p>
            </dialog>
        </main>
    </body>
</html>