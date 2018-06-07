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
octal = 7;
/* Sõned */
var lause = 'Tere tulemast ' + 'koolitusele.\n'
    + 'Täna meil programeerimine';
var vanus = 29;
var minuVanusLauses = "Minu vanus on " + vanus + ".\n\n    Tere tulemast!";
/* Massiivid */
var massiiv = [1, 4, 7];
var massiiv2 = [1, 5, 9];
var fikseeritud = massiiv2;
var arv = massiiv[2]; // 7
/* Tuple */
var tuple = ['Tere', 15];
var s6ne = tuple[0];
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
    console.log('hello function');
    return;
}
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
/* object - kõik ülejäänud peale eelmiste */
var obj = l6putuTsykkel;
var obj2 = { nimi: 'Juku', vanus: 25 };
/* var let*/
function varLet() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 200);
    }
    var _loop_1 = function (i_1) {
        setTimeout(function () { console.log(i_1); }, 200);
    };
    for (var i_1 = 0; i_1 < 10; i_1++) {
        _loop_1(i_1);
    }
    var variable = 17;
    var variable2 = 17;
    if (true) {
        var variable = 27;
        var variable2_1 = 27;
    }
    console.log(variable); // 27 undefined
    console.log(variable2); // 17 error
}
// varLet();
/* Destruktureerimine  */
var sisend = [1, 2, 3, 4, 5];
var esi = sisend[0], teine = sisend[1], ylej22nud = sisend.slice(2);
console.log(esi + " " + teine + " " + ylej22nud);
var o = {
    a: 'ssds ',
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
/* spread */
var mass = [1, 2];
var mass2 = [3, 4];
var suurMass = [1].concat(mass, mass2, [5]);
var vaikeV22rtused = {
    toit: 'Terav',
    hind: 'Kõrvetav',
    keskkond: 'Rahulik'
};
var maheKohvik = __assign({}, vaikeV22rtused, { toit: 'Mahe' });
function saaAla(_a) {
    var x = _a.x, y = _a.y, _b = _a.z, z = _b === void 0 ? 1 : _b;
    console.log(x * y * z);
}
var ruut = { x: 12, y: 15 };
// ruut.x = 134;
ruut.y = 10;
saaAla(ruut);
var miniFunk = function (sisend) { return false; };
var miniMassiiv = ['Juku', 'Kalle'];
var juku = miniMassiiv[0];
function summa(arv1, arv2) {
    return arv1 + arv2;
}
console.log(summa('Tere', ' pere!'));
console.log(summa(3, 4)); // 7
// console.log(summa(true, false)); // error
var minuSumma = function (arv1, arv2) { return arv1 + arv2; };
console.log(minuSumma(3, 4)); // 7
(function (arv1, arv2) { return arv1 + arv2; })(3, 4); // 7
var minuSumma2 = function (arv1, arv2) {
    if (arv1 === void 0) { arv1 = 2; }
    if (arv2 === void 0) { arv2 = 7; }
    return arv1 + arv2;
};
console.log(minuSumma2(3, 4)); // 7
console.log(minuSumma2()); // 9
var visatudT2rn = 6;
var suvaline = 14;
// m2rk !== m2rk2
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
/* || && */
var arv3 = 26;
var arv4 = 43;
if ((arv3 + arv4 > 30) || (arv3 < arv4)) {
    console.log('Esimene');
}
else if (2 + 2 === 3) {
    console.log('2 + 2 === 3');
}
else {
    console.log('Kumbki ei sobinud');
}
var muutujad = arv3 < arv4 ? true : false;
//# sourceMappingURL=app.js.map