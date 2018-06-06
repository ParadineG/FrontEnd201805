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
console.log('Hei hei TS');
//Tõene või väär
var kasTehtud = false;
//Numbrid
var kymnend = 6;
var hex = 0xfd02;
var binaar = 10;
var octal = 474;
//Sõned
var lause = 'Täna on ilus ja päikesepaisteline päev.\n' + 'Täna tutvume lähemalt typescriptiga.';
var vanus = 22;
var minuVanus = "Minu vanus on " + vanus + ".\n\nTere tulemast.";
//Massiivid
var massiiv = [1, 4, 7];
var massiiv2 = [1, 3, 7];
var arv = massiiv2[1];
//Tuple(hoiab endas mitu erinevat tüüpi elementi)
var tuple = ['Hei', 15];
var s6ne = tuple[0];
//Loendajad
var V2rv;
//Loendajad
(function (V2rv) {
    V2rv[V2rv["Punane"] = 0] = "Punane";
    V2rv[V2rv["Roheline"] = 1] = "Roheline";
    V2rv[V2rv["Kollane"] = 2] = "Kollane";
    V2rv[V2rv["Sinine"] = 3] = "Sinine";
})(V2rv || (V2rv = {}));
var v2rv = V2rv.Sinine;
// any, void
var poleKindel = 'Any, mis iganes see on';
poleKindel = 5;
var nimekiri = [2, 'Hulahoop', 1.37, 'Hi'];
nimekiri[1] = 'Muhvin on kassi nimi';
var muutuja = nimekiri[1];
var tervitus = nimekiri[3];
function funktsioon() {
    console.log('Funktsioon');
    return;
}
//null, undefined
var un;
var u = undefined;
var n = null; //st ta ei eksisteeri
//never
function l6putuTsykkel() {
    while (true) {
        console.log('aaaaaaaaaaa');
    }
}
//object - kõik ülejäänud elemendid peale eelnevate
var obj = l6putuTsykkel; //loogika on liigutatud objekti sisse
var obj2 = { nimi: 'TuhaJuhan', vanus: 32 };
//var let 
/*for (var i=0; i<10;i++){
    setTimeout(function(){console.log(i);}, 200)
}
for (let i=0; i<10;i++){
    setTimeout(function(){console.log(i);}, 200)
}*/
function varLet() {
    var variable = 17;
    var variable2 = 17;
    if (true) {
        var variable = 27;
        var variable2_1 = 27;
    }
    console.log(variable); // 27 undefines
    console.log(variable2); // 17 error
}
//varLet();
//destruktureerimine (object)
var sisend = [1, 2, 3, 4, 5, 6];
var a = sisend[0], b = sisend[1];
var c = sisend[0];
var esimene = sisend[0], ylejaanud = sisend.slice(1);
console.log(a + b);
console.log(c);
console.log(ylejaanud);
var d = sisend[0], f = sisend[1], ylej22nud = sisend.slice(2);
console.log(d + " " + f + " " + ylej22nud);
var o = {
    a_1: 'ssds ',
    b_1: 1234,
    c_1: 'kar',
    d_1: 323
};
var kar = o.c_1;
var a_1 = o.a_1, b_1 = o.b_1, l6pp = __rest(o, ["a_1", "b_1"]);
console.log(a_1 + b_1 + l6pp.d_1);
function hoiaObjektAlles(terveObjekt) {
    var x = terveObjekt.x, _a = terveObjekt.y, y = _a === void 0 ? 2018 : _a;
    console.log(x + y);
}
hoiaObjektAlles({ x: 'Yo ', y: 2019 });
//spread
var mass = [1, 2];
var mass2 = [5, 3];
var suurMass = [1].concat(mass, mass2, [8]);
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
//ruut.x = 16;
ruut.y = 12;
saaAla(ruut);
var miniFunk = function (sisend) { return false; };
var minimassiiv = ['Bob', 'Mark'];
var bob = minimassiiv[0];
function summa(arv1, arv2) {
    return arv1 + arv2;
}
console.log(summa('Tere ', 'pere!'));
console.log(summa(3, 4));
//anonüümne funktsioon
var minuSumma = function (arv1, arv2) { return arv1 + arv2; };
console.log(minuSumma(8, 7));
(function (arv1, arv2) { return arv1 + arv2; })(3, 4);
var minuSumma1 = function (arv1, arv2) { return arv1 + arv2; }; //noolfunktsioon
console.log(minuSumma1(8, 7));
var visatudT2rn = 1; //Sarnane enumile
var suvaline = 'Tere ';
//m2rk !== m2rk2 | nad ei ole võrdsed, sümbol on alati unikaalne
var m2rk = Symbol('key');
var m2rk2 = Symbol('key');
if (m2rk === m2rk2) {
    console.log('Esimene');
}
else if (m2rk == m2rk2) {
    console.log('Teine');
}
else {
    console.log('Muu');
}
//if else
/*=== !== == != < > <= >=*/
var arv3 = 26;
var arv4 = 10;
if (arv3 + arv4 === 40) {
    console.log('Esimene');
}
else if (2 + 2 === 3) {
    console.log('2+2=3');
}
else {
    console.log('kumbki ei sobinud');
}
var muutujad = arv3 > arv4 ? true : false; //kas arv3 on suurem kui arv4
console.log(muutujad);
//# sourceMappingURL=app.js.map