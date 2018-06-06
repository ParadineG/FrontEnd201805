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
console.log('main ts ss');
/* true false*/
var kasTehtud = false;
/*numbrid*/
var kümnend = 6;
var kümnend2 = 6;
var hex = 3E8;
var binaar = 10;
var octal = 474;
octal = 7;
/*sõned*/
var lause = 'test' + 'jne...\n' + 'veel üks lause';
var vanus = 15;
var minuVanus = "Vanus " + vanus + ".";
var minuVanus2 = "Vanus " + vanus + ".\n    \n    Seega...";
/*massiivid*/
var massiiv = [1, 4, 7];
var massiiv2 = [2, 5, 9];
var arv = massiiv[0];
/*tuple*/
var tuple = ['Test', 15];
var s6ne = tuple[0];
/*enum - loendajad*/
var V2rv;
/*enum - loendajad*/
(function (V2rv) {
    V2rv[V2rv["Punane"] = 0] = "Punane";
    V2rv[V2rv["Roheline"] = 2] = "Roheline";
    V2rv[V2rv["Kollane"] = 3] = "Kollane";
})(V2rv || (V2rv = {}));
;
var v2rv = V2rv.Kollane;
/*any void*/
var suvaline = 'Tere';
suvaline = 5;
var nimekiri = [2, 'Ee', 2.2];
//let muutuja = nimekiri[0];
nimekiri[0] = 'Eeee';
var terv = nimekiri[1];
function funktsioon() {
    console.log('Miskit');
    return;
}
/*null undefined*/
var un;
var u = undefined; //pole väärtust andnud
var n = null;
/*never*/
function l6putuTsykkel() {
    while (true) {
        console.log('v2ljund');
    }
}
/*object - kõik ülejäänud*/
var obj = l6putuTsykkel;
var obj2 = { nimi: 'Kkk', vanus: 22 };
/*var let const*/
for (var i = 0; i < 10; i++) {
    // setTimeout(function(){console.log(i);}, 200);
}
for (var i_1 = 0; i_1 < 10; i_1++) {
    //setTimeout(function(){console.log(i);}, 200);
}
function ffs2() {
    //console.log('test');
    var variable = 15;
    var variable2 = 12;
    if (true) {
        var variable = 50;
        //let variable2 = 55;
    }
    //console.log(variable); //undefined
    //console.log(variable2);//error
}
ffs2();
/*destruktureerimine*/
var sisend = [1, 2, 3, 4, 5];
var esi = sisend[0], tei = sisend[1], ylej = sisend.slice(2);
//console.log(esi + tei);
//console.log(`${esi} ${tei} ${ylej}`);
var o = {
    a: 'ssds',
    b: 222,
    c: 'hh',
    d: 44
};
var kk = o.c;
var a = o.a, b = o.b, l6pp = __rest(o, ["a", "b"]);
console.log(a + b + l6pp.d);
function cc(terveObjekt) {
    var x = terveObjekt.x, _a = terveObjekt.y, y = _a === void 0 ? 200 : _a;
    console.log(x, y);
}
cc({ x: 'Test' }); //, y: 201
var mass = [1, 2];
var mass2 = [3, 4];
var mass3 = [1, mass].concat(mass2, [5]);
var vaikeV22rtused = {
    toit: 'terav',
    hind: 'kuum',
    keskkond: 'talutav'
};
var kohvik = __assign({}, vaikeV22rtused, { toit: 'mahe' });
function inter(_a) {
    var x = _a.x, y = _a.y, _b = _a.z, z = _b === void 0 ? 1 : _b;
    console.log(x * y * z);
}
var ruut = { x: 3, y: 4 };
//ruut.x = 13;
ruut.y = 10;
inter(ruut);
var sak = function (sisend) { return false; };
var s = ['Aa', 'Bb'];
var aa = s[0];
//# sourceMappingURL=app.js.map