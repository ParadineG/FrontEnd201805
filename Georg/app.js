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
var omNumber = 0.000012;
console.log(omNumber.toExponential()); //1.2 * 10^(-5)
//toString() toExponential(num) toFixed(num) toPrecision()
omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON; //väikseim komaarv
omNumber = Number.POSITIVE_INFINITY;
omNumber = 12 / 0;
console.log(Number.isFinite(12));
// isFinite(x) isInteger(x) isNan(x) isSafeInteger(x)
//ARRAY
var masiiv1 = [6, 7, 8, 9, 10];
var masiiv2 = [1, 2, 3, 4, 5];
var masiiv3 = masiiv1.concat(masiiv2); //concat ühendab kaks arrayt kokku
console.log(masiiv3); //[6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
masiiv3.push(17); //lisab array lõppu antud sisendi
masiiv3.pop(); //eemaldab viimase elemendi arrayst
masiiv3.shift(); //eemaldab esimese elemendi arrayst
masiiv3.unshift(27); //lisab antud sisendi array algusesse
masiiv3.reverse(); //muudab array elementide järjekorra vastupidiseks
masiiv1.sort(function (a, b) { return a - b; }); //sorteerib array väike-suur(a-b) või suur-väike(b-a) 
//SET
var set3 = new Set([6, 7, 8, 9]);
set3.add(12);
set3.delete(8);
console.log(set3.size);
set3.clear;
//MAP
var map3 = new Map([
    [2, 6], [3, 7],
    [4, 8], [5, 9]
]);
map3.set(9, 12); //lisab sisendi
//STRING
var stringike = 'See On On On String';
stringike.toLocaleLowerCase(); //kõik tähed väikseks
stringike.toLocaleUpperCase(); //kõik tähed suureks
stringike.replace('String', 'Asendus'); //input1: asendatav input2: asendus (asendab ainult esimese ettejuhtva)
/*while (stringike.search('On') !== -1) { //asendab kõik
    stringike.replace('On', 'Asendus');
}*/
var string = stringike.split(' '); //muudab stringy arrayks antud inputi järgi
parseFloat('2'); //Muudab stringi floatiks ehk 2.0
parseInt('2'); //Muubab stringi integeriks ehk 2
//MATH
var pi = Math.PI;
var someNumber = Math.pow(12, 2);
someNumber = Math.random() * 10; //suvaline arv 1-10 vahel
someNumber = Math.sqrt(16); // ruutjuur arvust
someNumber = Math.floor(12.7); //ümardab numbri ehk 12
someNumber = Math.abs(-13); //muudab positiivseks ehk 13
// DATE/TIME
var aeg = new Date(Date.now());
console.log(aeg.getDay());
aeg.setDate(21);
console.log(aeg.getDay());
try {
    throw 'mkaaaaay';
}
catch (error) {
    console.log(typeof (error));
    console.log(error);
}
console.log('kass.ts');
var Klass = /** @class */ (function () {
    function Klass(name) {
        this.ainultLugemiseks = name;
    }
    Klass.prototype.privaatneMeetod = function () {
        console.log(this.privaatne);
    };
    Klass.prototype.kaitstudMeetod = function () {
        this.privaatneMeetod();
    };
    Klass.prototype.avalikMeetod = function () {
        //this.ainultLugemiseks = '';//ei luba muuta sest on type readonly
        this.privaatneMeetod();
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
    }
    Kujund.prototype.nimeta = function () {
        console.log('kujund ' + this.leiaAla());
    };
    return Kujund;
}());
var Ruut = /** @class */ (function (_super) {
    __extends(Ruut, _super);
    function Ruut(a) {
        return _super.call(this, a, a) || this;
    }
    Ruut.prototype.leiaAla = function () {
        return this.a * this.b;
    };
    return Ruut;
}(Kujund));
var Ristkylik = /** @class */ (function (_super) {
    __extends(Ristkylik, _super);
    function Ristkylik(a, b) {
        return _super.call(this, a, b) || this;
    }
    Ristkylik.prototype.leiaAla = function () {
        return this.a * this.b;
    };
    return Ristkylik;
}(Kujund));
var ruuduke = new Ruut(12);
var ristkylik = new Ristkylik(12, 14);
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
var minuVanusLauses = "Minu vanus on " + vanus + ".\n    Tere tulemast!";
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
var miniFunk = function (_sisend) { return false; };
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
/*const m2rk: symbol = Symbol("key");
const m2rk2: symbol = Symbol("key");
if (m2rk === m2rk2){
    console.log('esimene')
}
else if (m2rk == m2rk2) {
    console.log('Teine')
}
else {
    console.log('muu')
};
*/
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
var key = "Sinine";
switch (key) {
    case "Punane":
        console.log("Punane");
        break;
    case "Sinine":
        console.log("Sinine");
        break;
    default:
        console.log('default');
        break;
}
var kordus = true;
var tekst = '';
do {
    console.log("do jookseb alati \u00FChe korra olenemata while konditsioonist");
    tekst += 'a';
    if (tekst === 'aaaaaaaa') {
        kordus = false;
    }
    //continue command jätab selle vahele mis continue all on ja alustab uut ringi
    if (tekst.length === 4) {
        continue;
    }
    if (tekst.length > 5) {
        break;
    }
} while (kordus);
console.log('kordus: ' + kordus);
for (var i = 0; i < 10; i++) {
    tekst += i;
}
console.log(tekst);
//TEHTED
var tulemus = 2 + 3;
tulemus = 5 % 2; //jääk: 1
tulemus = Math.pow(5, 2); //25 
tulemus = Math.pow(//25 
tulemus, 2); // tulemus = tulemus ** 2
--tulemus; // tulemus = tulemus - 1
tulemus /= 2; // tulemus = tulemus / 2
var list = [4, 5, 6];
for (var key_1 in list) {
    console.log(key_1); //[0,1,2] annab iga key indexi arrays
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i); // [4,5,6]
}
// korduvaid elemente ei saa olla Set([array])
var set = new Set(['Kass', 'Koer', 'Hamster', 'Kass']);
//console.log(set) = 'Kass', 'Koer', 'Hamster'
/*
let map = new Map([
    [Kass: 'Oss'],
    [Koer: 'Muki'],
    [Hamster: 'rotike']
]);*/
for (var x in set) {
    console.log(x);
}
for (var _a = 0, _b = Array.from(set); _a < _b.length; _a++) {
    var i = _b[_a];
    console.log(i);
}
set.forEach(function (value, value2) {
    console.log(value + "  " + value2);
});
//map.forEach( (value: string, value2: string) => {
//    console.log(`${value}  ${value2}`);
//});
funkar2();
console.log('nimeruum.ts');
var Nimeruum;
(function (Nimeruum) {
    console.log('in namespace');
    var funkNimetus = 'funkNimetus';
    function funkar() {
        console.log('Funkar');
    }
    Nimeruum.funkar = funkar;
})(Nimeruum || (Nimeruum = {}));
function funkar2() {
    console.log('Funkar2');
}
//# sourceMappingURL=app.js.map