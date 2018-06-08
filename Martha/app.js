'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
console.log('dom.ts');
// dom 
var aside = document.getElementById('aside-1');
var asides = document.getElementsByTagName('aside');
// document.getElementsByClassName 
// document.getElementByName
// jQuery $('#aside-1');
var pealkiri = document.querySelector('header > h2'); // esimene element mis ette satub
var pealkirjad = document.querySelectorAll('header > h3'); // kõik elemendid mis selle nimetusega
if (aside && asides.length >= 2) {
    console.log(aside);
    console.log(asides.item(1));
}
if (pealkiri && asides.length >= 1) {
    pealkiri.classList.add('lisa');
    var s6neKlass = pealkiri.getAttribute('class');
    if (s6neKlass) {
        var klassid = s6neKlass.split(' ');
        klassid.push('lisa3');
        pealkiri.setAttribute('class', klassid.join(' '));
    }
    var syndmus_1 = pealkiri.addEventListener('click', function () {
        pealkirjad.item(0).classList.add('lisa');
        var nupp = document.createElement('BUTTON');
        nupp.addEventListener('click', function () { alert('Tere nupp'); });
        var tekst = document.createTextNode('Click me!');
        nupp.appendChild(tekst); //appendChild - pane see textnode nupu sisse
        pealkirjad.item(0).appendChild(nupp);
        pealkiri.removeEventListener('click', syndmus_1);
    });
    pealkiri.addEventListener('click', syndmus_1);
    pealkiri.setAttribute('class', 'lisa lisa2');
    //pealkirjad.item(0).outerHTML = pealkiri.outerHTML;
    //pealkiri.outerHTML = pealkirjad.item(0).outerHTML;
    console.log(pealkirjad.item(0));
}
var omBool = true;
var omNumber = 0.0000000012;
console.log(omNumber.toExponential()); //0.0000000012 * 10 astmes -9
/* toString()
toExponential()<- nö teaduslik versioon
toFixed(s)<- ümardamine komakohtadega
toPrecision<- mitu arvu ekraanil soovite kuvada
*/
omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MIN_VALUE;
omNumber = Number.EPSILON; // väikseim komaarv
omNumber = Number.POSITIVE_INFINITY;
omNumber = 12 / 0;
omNumber = NaN;
console.log(Number.isFinite(omNumber));
var massiiv3 = [6, 7, 8, 9];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop();
massiiv3.shift();
massiiv3.unshift(12);
massiiv3.push(17);
massiiv3.reverse();
massiiv3.sort(function (a, b) {
    console.log(a + ' ' + b);
    return a - b;
});
console.log(massiiv3);
var set3 = new Set([6, 7, 8, 9]);
set3.add(12);
set3.delete(8);
// console.log(set3.size + ' ' set3.has(8));
set3.clear();
var map3 = new Map([
    [2, 6], [3, 7],
    [4, 8], [5, 9]
]);
map3.set(9, 12);
var s6ne3 = 'Tere pere';
s6ne3 = s6ne3.toLowerCase();
while (s6ne3.search('koer') !== -1) {
    s6ne3 = s6ne3.replace('pere', 'koer');
}
var s6ned3 = s6ne3.split(' ');
console.log(s6ned3);
var arvuke = parseFloat('2.45633');
/* matemaatika */
var pi = Math.PI;
omNumber = Math.pow(12, 2);
omNumber = Math.sqrt(16);
omNumber = Math.random() * 10;
omNumber = Math.floor(12.7); //allapoole ümardamine, round, ceil
omNumber = Math.abs(-12.7); //tehakse positiivseks
omNumber = Math.sin(3);
/* kuupäev */
var aeg = new Date(Date.now());
console.log(aeg.getDate());
aeg.setDate(21);
console.log('Aeg: ' + aeg.getDate());
// viga kui arvuti ja kasutaja suhtlusel on tekkinud viga mingisugune
try {
    throw 'tere';
}
catch (error) {
    console.log(typeof (error));
    console.log(error);
}
console.log('klass.ts');
var Klass = /** @class */ (function () {
    function Klass(name) {
        this.privaatne = 'Vaike väärtus';
        this.ainultlugemiseks = '';
        this.ainultlugemiseks = name;
    }
    Klass.prototype.avalikMeetod = function () {
        // this.ainultlugemiseks = '';
        this.privaatneMeetod();
    };
    Klass.prototype.kaitstudMeetod = function () {
    };
    Klass.prototype.privaatneMeetod = function () {
        console.log(this.privaatne);
    };
    return Klass;
}());
var minuKlass = new Klass('Tervitus');
minuKlass.avalikMeetod();
console.log('kujund.ts');
var Kujund = /** @class */ (function () {
    function Kujund(a, b) {
        this.a = a;
        this.b = b;
        this.avalik = 'avalik';
        this.nimetus = 'Kujund ';
    }
    Kujund.prototype.nimeta = function () {
        console.log(this.nimetus + this.leiaAla());
    };
    Kujund.staatiline = function () {
        console.log('Static');
    };
    return Kujund;
}());
Kujund.staatiline();
// const abstrakt = new Kujund();
var Ruut = /** @class */ (function (_super) {
    __extends(Ruut, _super);
    function Ruut(a) {
        var _this = _super.call(this, a, a) || this;
        _this.nimetus = 'Ruut';
        return _this;
    }
    Ruut.prototype.leiaAla = function () {
        return this.a * this.b;
    };
    Ruut.prototype.nimeta = function () {
        _super.prototype.nimeta.call(this);
        console.log('MinuRuut' + this.leiaAla());
    };
    return Ruut;
}(Kujund));
var Ristkylik = /** @class */ (function (_super) {
    __extends(Ristkylik, _super);
    function Ristkylik(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.nimetus = 'Külik ';
        return _this;
    }
    Ristkylik.prototype.leiaAla = function () {
        return this.a * this.b;
    };
    return Ristkylik;
}(Kujund));
var ruutk = new Ruut(12);
ruutk.nimeta();
console.log(ruutk.avalik);
var kylik = new Ristkylik(12, 14);
kylik.nimeta();
console.log('nimeroom.ts');
var Nimeruum;
(function (Nimeruum) {
    console.log('Tere');
    var funkNimetus = 'Funkar';
    console.log('Funkar');
})(Nimeruum || (Nimeruum = {}));
console.log('Funkar2');
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
var v2rvus = 'Sinine';
switch (v2rvus) {
    case 'Punane':
        console.log('Punane');
        break;
    case 'Sinine':
        console.log('Sinine');
        break;
    case 'Roheline':
    default:
        console.log('Muu');
}
/* for while do while foreach */
var kordus = true;
var tekst = '';
while (kordus) {
    tekst += 'ab';
    if (tekst.length >= 7) {
        kordus = false;
    }
    if (tekst === 'abab') {
        continue;
    }
    if (tekst === 'abab') {
        break;
    }
}
console.log(tekst);
do {
    console.log('Tere');
    kordus = false;
} while (kordus);
tekst = '';
// index = index + 2;
for (var index = 0; index < 10; index += 2) {
    tekst += index;
}
console.log(tekst);
/* tehted (expressions) */
/* + - * / % ** */
/* = += -= *= /= **= ++ -- */
var tulemus = 2 + 3;
tulemus = 5 % 2; // 1 - jääk
tulemus = Math.pow(5, 2); // 25 - astet
--tulemus; // 24 (25 - 1)
tulemus /= 2; // 12 (24 / 2)
tulemus = 2 + 3 * 4; // 14
tulemus = (2 + 3) * 4; // 20
var list = [4, 5, 6];
for (var key in list) {
    if (list.hasOwnProperty(key)) {
        console.log(key);
    }
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i);
}
var valik = new Set(['Kass', 'Koer', 'Hamster']);
var valik2 = new Map([
    ['Kass', 'Juku'],
    ['Koer', 'Malle'],
    ['Hamster', 'Paul']
]);
for (var v6ti in valik2) {
    if (valik2.hasOwnProperty(v6ti)) {
        console.log(v6ti); // ei leia sisu Setis või Mapis
    }
}
var array = Array.from(valik);
for (var _a = 0, array_1 = array; _a < array_1.length; _a++) {
    var i = array_1[_a];
    console.log(i);
}
valik.forEach(function (value, value2) {
    console.log(value + ' ' + value2);
});
valik2.forEach(function (value, v6ti) {
    console.log(value + ' ' + v6ti);
});
funkar2();
Nimeruum.funkar();
//# sourceMappingURL=app.js.map