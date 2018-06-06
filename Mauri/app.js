"use strict";
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
console.log("Hello TS!");
/* Boolean: tõene ja väär */
var kasTehtud = false;
/* Numbrid */
var kymend = 6;
var hex = 0xFD002;
var binaar = 10;
var octal = 474;
binaar = 10;
/* Sõned */
var lause = "Tere tulemast koolitusele!\n" + "Täna me programmeerime! :D";
var vanus = 30;
var minuVanus = "Minu vanus on " + vanus + ".\n\nTere tulemast!";
/* Massiivid */
var massiiv = [1, 4, 7];
var massiiv2 = [1, 5, 9];
var fikseeritud = massiiv2;
var arv = massiiv[0];
/* Tuple */
var tuple = ["Tere", 15];
var s6ne = tuple[0];
/* Loendajad */
var V2rv;
/* Loendajad */
(function (V2rv) {
    V2rv[V2rv["Punane"] = 0] = "Punane";
    V2rv[V2rv["Roheline"] = 1] = "Roheline";
    V2rv[V2rv["Sinine"] = 2] = "Sinine";
})(V2rv || (V2rv = {}));
;
var v2rv = V2rv.Sinine;
/* any void */
var poleKindel = "Tere";
poleKindel = 5;
var nimekiri = [2, "Hi", 5.32];
// Const ei takista elemendi sisu muutmist vaid elemendi endi muutmist
var muutuja = nimekiri[0];
var tervitus = nimekiri[1];
function funktsioon() {
    console.log("Hello function!");
}
/* null, undefined */
var k;
var u = undefined;
var n = null;
/* Never */
function l6putuTsykkel() {
    while (true) {
        console.log("Jama");
    }
}
/* Object - kõik ülejäänud */
var obj = l6putuTsykkel;
var obj2 = { nimi: 'Juku', vanus: 25 };
/* var, let, const */
/*
for (let i = 0; 1 < 10; i++) {
    setTimeout(function () { console.log(i); }, 200);
}
*/
/* Destructureerimine */
var sisend = [1, 2, 3, 4, 5];
var c = sisend[0];
var esimene = sisend[0], teine = sisend[1], ylej22nud = sisend.slice(2);
console.log(esimene + teine);
console.log(c);
console.log(esimene + " " + teine + " " + ylej22nud);
var o = {
    a: "tekstA ",
    b: 1234,
    c: "kar",
    d: 154
};
var kar = o.c;
var a = o.a, b = o.b, l6pp = __rest(o, ["a", "b"]);
console.log(kar);
console.log(a + b + " " + l6pp.d);
// Kui muutuja taga on '?' (nagu y?:), siis see muutuja on valikuline ja ei pea seda funtiooni kutsudes kaasa andma.
function hoiaObjektAlles(terveObjekt) {
    var x = terveObjekt.x, _a = terveObjekt.y, y = _a === void 0 ? 2018 : _a;
    console.log(x + y);
}
hoiaObjektAlles({ x: "Tere ", y: 2017 });
/* spread */
var mass = [1, 2];
var mass2 = [3, 4];
var suurMass = [1].concat(mass, mass2, [5]);
console.log(suurMass);
var vaikeV22rtused = {
    toit: "Terav",
    hind: "K6rvetav",
    keskkond: "Rahulik"
};
var maheKohvik = __assign({}, vaikeV22rtused, { toit: "Mahe" });
console.log(maheKohvik);
function saaAla(_a) {
    var x = _a.x, y = _a.y, _b = _a.z, z = _b === void 0 ? 1 : _b;
    console.log(x * y * z);
}
var ruut = { x: 15, y: 15 };
saaAla({ x: 12, y: 15, z: 20 });
saaAla(ruut);
var miniFunk = function (sisend) { return false; };
var miniMassiiv = ["Juku", "Mari"];
var juku = miniMassiiv[0];
console.log(juku);
/* Funktsioonid */
function summa(arv1, arv2) {
    return (arv1 + arv2);
}
console.log("Summa on: " + summa(5, 20));
console.log("Summa on: " + summa(55, 20));
var minuSumma = function (arv1, arv2) { return arv1 + arv2; };
console.log("Minu summa on: " + minuSumma(25, 10));
console.log("Minu summa on: " + minuSumma(60, 10));
console.log((function (arv1, arv2) { return arv1 + arv2; })(10, 20));
var minuSummaTeine = function (arv1, arv2) {
    return arv1 + arv2;
};
console.log("Minu summa teine: " + minuSummaTeine(20, 55));
var minuSummaKolmas = function (arv1, arv2) { return arv1 + arv2; };
console.log("Minu summa kolmas: " + minuSummaKolmas(50, 55));
// "T2rn = 7" ei töötaks
var visatudT2rn = 4;
console.log(visatudT2rn);
var suvaline = 20;
// m2rk !== m2rk2
var m2rk = Symbol("key");
var m2rk2 = Symbol("key");
/* if else */
if (m2rk === m2rk2) {
    console.log("Tõene");
}
else {
    console.log("Väär");
}
// ===, ==, !==, !=, <, <=, >, >=
// || &&
var arv3 = 66;
var arv4 = 47;
if (arv3 + arv4 > 113 || 20 > 10) {
    console.log("Tõsi");
}
else if (arv3 === arv4) {
    console.log("Väär");
}
else {
    console.log("Jama");
}
// Kiire if lause
var muutujad = arv3 < arv4 ? "arv3 on väiksem" : "arv3 on suurem";
console.log(muutujad);
//# sourceMappingURL=app.js.map