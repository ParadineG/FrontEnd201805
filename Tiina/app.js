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
var omBool = true;
var omNumber = 0.00000018;
console.log(omNumber.toExponential()); //1.8*10^-7
/*toString() | toExponential() |
toFixed(x)[ümardab koma kohti kindla kohani]| toPrecision [mitu arvu ekraanil]*/
omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON; //väikseim koma arv 0.0.......01
omNumber = Number.POSITIVE_INFINITY;
omNumber = 12 / 0;
omNumber = NaN;
console.log(Number.isFinite(omNumber));
/*isFinite(x) kas lõplik arv| isInteger(x) | isNaN(x) | isSafeInteger(x) [max arv(2^53-1)]*/
var massiiv3 = [6, 7, 8, 9];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop();
massiiv3.shift();
massiiv3.unshift(12);
massiiv3.push(13);
massiiv3.reverse();
massiiv3.sort(function (a, b) { return a - b; }); //paneb järjekorda
console.log(massiiv3);
var set3 = new Set([6, 7, 8, 9]);
set3.add(11);
set3.delete(8);
console.log(set3.size + ' ' + set3.has(8));
set3.clear();
var map3 = new Map([
    [2, 4], [3, 8],
    [4, 3], [6, 9]
]);
map3.set(9, 11);
var sone3 = 'Tere vana kere';
sone3 = sone3.toLowerCase();
sone3 = sone3.replace('kere', 'kass');
var soned = sone3.split(' ');
console.log(soned);
var arvuke = parseFloat('2.45633');
console.log(arvuke);
var pi = Math.PI;
omNumber = Math.pow(12, 2);
omNumber = Math.sqrt(16);
omNumber = Math.random() * 10;
omNumber = Math.floor(12.2); //round |ceil |trunc
omNumber = Math.abs(-12.2);
omNumber = Math.cos(-12.2); //Mõõdetakse rad'ides
//Kuupäev
var aeg = new Date(Date.now());
console.log(aeg.getDate());
aeg.setDate(21);
console.log('Kuupäev: ' + aeg.getDate());
try {
    throw 'Try!!!!!';
}
catch (error) {
    console.log(typeof (error));
    console.log(error);
}
console.log('klass.ts');
var Klass = /** @class */ (function () {
    function Klass(name) {
        this.privaatne = 'Privaatne klass/Vaike väärtus'; //Ainult klassi siseselt
        this.ainultLugemiseks = name;
    }
    Klass.prototype.avalikMeetod = function () {
        //this.ainultLugemiseks = '';
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
/*const abstrakt = new Kujund();--- ei saa kutsuda abstraktset klassi*/
/*extends - pärib omadused, mis ei ole privaatsed/ei saa lapses muut privaatseid omadusi
| implement - interface'idega...*/
var Ruut = /** @class */ (function (_super) {
    __extends(Ruut, _super);
    function Ruut(a) {
        var _this = _super.call(this, a, a) || this;
        _this.nimetus = 'Ruut ';
        return _this;
    }
    Ruut.prototype.leiaAla = function () {
        return this.a * this.b;
    };
    Ruut.prototype.nimeta = function () {
        _super.prototype.nimeta.call(this);
        console.log('MinuRuut ' + this.leiaAla());
    };
    return Ruut;
}(Kujund));
var Ristkylik = /** @class */ (function (_super) {
    __extends(Ristkylik, _super);
    function Ristkylik(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.nimetus = 'Ristkülik ';
        return _this;
    }
    Ristkylik.prototype.leiaAla = function () {
        return this.a * this.b;
    };
    return Ristkylik;
}(Kujund));
var ruutk = new Ruut(5);
ruutk.nimeta();
console.log(ruutk.avalik);
var kylik = new Ristkylik(4, 5);
kylik.nimeta();
//kaasaegsem viis oleks kasutada mooduleid - alguses on tülikas.
console.log('nimeroom.ts');
var Nimeruum;
(function (Nimeruum) {
    console.log('Namespaci tervitus');
    var funkNimetus = 'Funkar';
    function funkar() {
        console.log(funkNimetus);
    }
    Nimeruum.funkar = funkar;
})(Nimeruum || (Nimeruum = {}));
function funkar2() {
    console.log('Funkar2');
}
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
var v2rvus = 'Sinine';
switch (v2rvus) {
    case 'Kollane':
        console.log('Kollane');
        break;
    case 'Sinine':
        console.log('Sinine');
        break;
    default:
        console.log('Muu');
}
//for |while| do while
var kordus = true;
var tekst = '';
while (kordus) {
    tekst += 'ab';
    if (tekst.length >= 9) {
        kordus = false;
    }
    if (tekst === 'ababab') {
        continue;
    }
    if (tekst === 'ababab') {
        break;
    }
}
console.log(tekst);
//do while
do {
    console.log('Tere');
    kordus = false;
} while (kordus);
tekst = '';
// index = index +2;
for (var index = 0; index < 10; index += 2) {
    tekst += index;
}
console.log(tekst);
/* tehted (expressions)
+|-|*|/|%|**
=|+=|-=|*=|/=| **=|++|-- */
var tulemus = 2 + 3;
tulemus = 5 % 2; // 1 - jääk
tulemus = Math.pow(5, 2); // 25 - astendamine
--tulemus; // vasatus on 24 kuna lahutab eelmisest tulemust 1 arvu
tulemus /= 2; //12 (24/2)
var list = [4, 5, 6, 8];
for (var key in list) {
    console.log(key);
} //tagastab asukohta indeksist
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i);
} //otsib spetsiifilist elementi
var valik = new Set(['Kass', 'Koer', 'Metssiga']); //kõik set elemendid peavad olema unikaalsed, Sama elementi ta mitu korda ei loe
var valik2 = new Map([
    ['Kass', 'Miisu'],
    ['Koer', 'Muki'],
    ['Metssiga', 'Roosi']
]);
for (var v6ti in valik) {
    if (valik.hasOwnProperty(v6ti)) {
        console.log(v6ti); //ei leia sisu Setis või Mapis
    }
}
var array = Array.from(valik);
for (var _a = 0, array_1 = array; _a < array_1.length; _a++) {
    var i = array_1[_a];
    console.log(i);
}
valik2.forEach(function (value, value2) { console.log(value + ' ' + value2); });
funkar2();
Nimeruum.funkar();
//# sourceMappingURL=app.js.map