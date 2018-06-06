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
var KasTehtud = false;
/*  Numbrid */
var kymnend = 6;
var hex = 0xFD02;
var binaar = 10;
var octal = 474;
octal = 10;
/* Sõnad */
var lause = 'Tere tulemast' + 'koolitusele.\n' +
    'Täna on meil programeerimine';
var vanus = 25;
var minuVanusLauses = "Minu vanus on " + vanus + ".\n\n    Tere tulemast!";
/* massiivid */
var massiiv = [1, 4, 7];
var massiiv2 = [1, 5, 9,];
var arv = massiiv[0];
var fikseeritud = massiiv2;
//* alternatiivne võimalus kommentaarideks 
/* Tuple */
var tuple = ['Tere', 15];
var s6na = tuple[0];
/* Loendajad */
var V2rv;
/* Loendajad */
(function (V2rv) {
    V2rv[V2rv["Punane"] = 0] = "Punane";
    V2rv[V2rv["Roheline"] = 2] = "Roheline";
    V2rv[V2rv["Sinine"] = 3] = "Sinine";
})(V2rv || (V2rv = {}));
var v2rv = V2rv.Sinine;
/* any void */
var poleKindel = 'Tere';
poleKindel = 5;
var nimekiri = [2, 'Hi', 5.32];
nimekiri[0] = 'Tere';
var tervitus = nimekiri[1];
function funktsioon() {
    console.log('hello');
    return;
}
;
/* null undefined */
var un;
var u = undefined;
var n = null;
/* never */
function l6putuTsykkel() {
    while (true) {
        console.log('ddfd');
    }
}
;
/* object - kõik ülejäänud peale eelmiste*/
var obj = l6putuTsykkel;
var obj2 = { nimi: 'Juku', vanus: 25 };
/* var let const */
/* for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 200);
}
for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 200);
}
*/
/* function varlet() {
    var variable = 17;
    let variable2 = 17;
    if (false) {
        var variable = 27;
        let variable2 = 27;
    }
     console.log(variable); //undefined
     console.log(variable2); //error
}; */
// varlet ();
/* Destrukureerimine */
var sisend = [1, 2, 3, 4, 5];
var a = sisend[0], b = sisend[1];
var c = sisend[0];
var esimene = sisend[0], ylej22nud = sisend.slice(2);
console.log(a + b);
console.log(c);
console.log(ylej22nud);
console.log(a + " " + b + " " + ylej22nud);
var o = {
    a1: 'ssds',
    b2: 1234,
    c3: 'kar',
    d4: 134
};
var kar = o.c3;
var a1 = o.a1, b2 = o.b2, l6pp = __rest(o, ["a1", "b2"]);
console.log(a1 + b2 + l6pp.d4);
function hoiaObjektAlles(terveObjekt) {
    var x = terveObjekt.x, _a = terveObjekt.y, y = _a === void 0 ? 2018 : _a;
    console.log(x + y);
}
hoiaObjektAlles({ x: 'Tere ', y: 2017 });
/* spread */
var mass = [1, 2];
var mass2 = [3, 4];
var suurMass = [1].concat(mass, mass2, [5]);
console.log(suurMass);
var vaikeV22rtused = {
    toit: 'Terav',
    hind: 'Kõrvetav',
    keskkond: 'Rahulik',
};
var maheKohvik = __assign({}, vaikeV22rtused, { toit: 'Mahe' // (hilisem) kirjutab vaikeväärtuse üle
 });
console.log(maheKohvik);
function saaAla(_a) {
    var x = _a.x, y = _a.y, _b = _a.z, z = _b === void 0 ? 1 : _b;
    console.log(x * y * z);
}
var ruut = { x: 12, y: 16 };
// ruut.x = 134; // readonly keelab ülekirjutamise ära
ruut.y = 10;
saaAla(ruut);
var miniFunk = function (sisend) { return false; };
var minimassiiv = ['Juku', 'Kalle'];
var juku = minimassiiv[0];
function summa(ax, bx) {
    return ax + bx;
}
console.log(summa('Tere', 'pere!'));
console.log(summa(3, 4));
// console.log(summa(true, false)); // -töötab booleaniga
var minuSumma = function (ax, bx) { return ax + bx; };
console.log(minuSumma(3, 5));
var minuSumma2 = function (ax, bx) { return ax + bx; };
console.log(minuSumma2(6, 6));
var visatudT2rn = 4;
var Suvaline = false;
// m2rk !== m2rk2
var m2rk = Symbol("key");
var m2rk2 = Symbol("key");
if (m2rk === m2rk2) {
    console.log('esimene');
}
else if (m2rk == m2rk2) {
    console.log('Teine');
}
else {
    console.log('muu');
}
;
/* if else switch*/
/* === !== == != < > <= >= */
/* || && */ // && puhul mõlemad täidetud
var arv5 = 26;
var arv6 = 43;
if ((arv5 + arv6 === 79) || (arv5 < arv6)) { //üks või teine täidetud
    console.log('36 + 43 === 79');
}
else if (arv5 / arv6 > 1) {
    console.log('2 + 2 === 16');
}
else {
    console.log('Kumbki ei sobinud');
}
var muutujad = arv5 < arv6 ? true : false;
//# sourceMappingURL=app.js.map