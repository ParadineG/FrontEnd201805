'use strict';
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
console.log('Hello TS');
/* Tõene ja väär */
var kasTehtud = false;
/* Numbrid */
var kymnend = 6;
var hex = 0xFD02;
var binaar = 10;
var octal = 474;
/* Sõned */
var lause = 'Tere tulemast' + 'koolitusele.\n' + 'Täna on programmeerimine';
var vanus = 29;
var minuVanusLauses = "Minu vanus on " + vanus + ".\n    \n    Tere tulemast";
/* Massiivid (2 on keerukamatel juhtudel)*/
var massiiv = [1, 4, 7];
var massiiv2 = [1, 5, 9];
var fikseeritud = massiiv2;
var arv = massiiv[2]; //7
/* Tuple -> hoiab rohkem kui ühte tüüpi informatsiooni */
var tuple = ['Tere', 15];
var s6ne = tuple[0];
/* Loendajad (loendaja tüüp)*/
var V2rv;
/* Loendajad (loendaja tüüp)*/
(function (V2rv) {
    V2rv[V2rv["Punane"] = 0] = "Punane";
    V2rv[V2rv["Roheline"] = 1] = "Roheline";
    V2rv[V2rv["Sinine"] = 2] = "Sinine";
})(V2rv || (V2rv = {}));
var v2rv = V2rv.Sinine;
/* any void -> ilma tüübita väärtused*/
var poleKindel = 'Tere';
poleKindel = 5;
var nimekiri = [2, 'Hi', 5.32];
nimekiri[0] = 'Tere';
var tervitus = nimekiri[1];
function funktsioon() {
    console.log('hello function');
    return; //return on tagastamisfunktsioon
}
/* null (väärtusena kasutatav) undefined (tüübina kasutatav, tuleb vaikimisi kaasa kui algväärtus on määramata)*/
var un;
var u = undefined;
var n = null;
/* never -> mine siia tsükli sisse ja ära sealt kunagi välju */
function l6putuTsykkel() {
    while (true) {
        console.log('ddfd');
    }
}
/* object -> kõik ülejäänud on seda tüüpi peale eelmiste */
var obj = l6putuTsykkel;
var obj2 = { nimi: 'Juku', vanus: 25 };
/* var let const */
/* var ja let erinevus */
function varLet() {
    var variable = 17;
    var variable2 = 17;
    if (true) {
        var variable = 27;
        var variable2_1 = 27;
    }
    console.log(variable); // 27
    console.log(variable2); // 17
}
;
/* Destruktureerimine */
var sisend = [1, 2, 3, 4, 5];
var esi = sisend[0], teine = sisend[1], ylej22nud = sisend.slice(2);
var c = sisend[0];
console.log(esi + teine);
console.log(c);
console.log(ylej22nud);
/* console.log(`${esi} ${teine} ${c} ${ylej22nud}`) */
var o = {
    a: 'ssds',
    b: 1234,
    c: 'kar',
    d: 134
};
var kar = o.c;
var a = o.a, b = o.b, l6pp = __rest(o, ["a", "b"]);
console.log(a + b + l6pp.d);
function hoiaObjektAlles(terveObjekt) {
    var x = terveObjekt.x, _a = terveObjekt.y, y = _a === void 0 ? 2018 : _a;
    console.log(x + y);
}
hoiaObjektAlles({ x: 'Tere ', y: 2017 });
/* spread -> paneme elemente kokku */
var mass = [1, 2];
var mass2 = [3, 4];
var suurMass = [1].concat(mass, mass2, [5]);
var vaikeV22rtused = {
    toit: 'Terav',
    hind: 'Kõrvetav',
    keskkond: 'Rahulik',
};
var maheKohvik = __assign({}, vaikeV22rtused, { toit: 'Mahe' });
function saaAla(_a) {
    var x = _a.x, y = _a.y, _b = _a.z, z = _b === void 0 ? 1 : _b;
    console.log(x * y * z);
}
var ruut = { x: 12, y: 15 };
ruut.y = 10;
saaAla(ruut);
var miniFunk = function (sisend) { return false; };
var minimassiiv = ['Juku', 'Kalle'];
var juku = minimassiiv[0];
function summa(arv1, arv2) {
    return arv1 + arv2;
}
console.log(summa('Tere', ' pere'));
console.log(summa(3, 4)); // vastus 7
// console.log(summa(true, false))        // error
var minuSumma = function (arv1, arv2) { return arv1 + arv2; }; //see on anonüümne funktsioon
console.log(minuSumma(3, 4)); // vastus 7
(function (arv1, arv2) { return arv1 + arv2; })(3, 4); // vastus 7
var minuSumma2 = function (arv1, arv2) {
    if (arv1 === void 0) { arv1 = 2; }
    if (arv2 === void 0) { arv2 = 7; }
    return arv1 + arv2;
};
console.log(minuSumma2(3, 4)); // vastus 7
console.log(minuSumma2()); // vastus 9
var visatudT2rn = 4;
var suvaline = 14;
// m2rk !== m2rk2 (ei ole võrdväärne), symbol on alati unikaalne, pole kunagi teisega võrdne 
var m2rk = Symbol("key");
var m2rk2 = Symbol("key");
if (m2rk === m2rk2) {
    console.log('Esimene');
}
else if (m2rk == m2rk2) {
    console.log('Teine');
}
else {
    console.log('Muu');
}
/* if else switch */
/* === !== == != < > <= >= */
/* || (üks tingimustest on täidetud)  && (mõlemad tingimused peavad olema täidetud)  */
var arv3 = 26;
var arv4 = 43;
if (arv3 + arv4 === 30) {
    console.log('Esimene');
}
else if (2 + 2 === 3) {
    console.log('2 + 2 = 3');
}
else {
    console.log('Kumbki ei sobinud');
}
var muutujad = arv3 < arv4 ? true : false; // kui arv3 on väiksem kui arv4, kui see on tõsi, siis tuleb väärtus enne koolonit (true), kui ei, siis väärtus peale koolonit (false)
//# sourceMappingURL=app.js.map