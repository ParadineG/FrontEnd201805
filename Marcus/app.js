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
var omNumber = 5345325.65;
var bNumber = 5.34e+6;
console.log(omNumber.toExponential()); //5.34532565e+6
/* toString()
toExponential(x) - teaduslik,
toFixed(x) - ümardamine (komakohtadega),
toPrecision(x) - mitu arvu ekraanil soovite kuvada */
omNumber = Number.MIN_SAFE_INTEGER; //kõige väiksem väärtus, mis on toetatud.
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON; //väikseim komaarv 0.0....01 - (nt suurim veaühik).
omNumber = Number.POSITIVE_INFINITY;
omNumber = 12 / 0;
omNumber = NaN;
console.log(Number.isFinite(omNumber));
/* isFinite(x); isInteger(x);
isNan(x) -Kas tegu on arvuga või mitte, nt nulliga jagamine, või NaN;
isSafeInteger(x) - (max arv(2 astmes 53 - 1)); */
var massiiv3 = [6, 7, 8, 9];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop(); //eemaldab viimase
massiiv3.shift(); //eemaldab esimese
massiiv3.unshift(12); //lisab esimese
massiiv3.push(17); //lisab lõppu uue elemendi
massiiv3.reverse(); //pöörab ümber
massiiv3.sort(function (a, b) {
    console.log(a + ' ' + b);
    return a - b;
});
console.log(massiiv3);
var set3 = new Set([6, 7, 8, 9]);
set3.add(12);
set3.delete(8);
console.log(set3.size + ' ' + set3.has(8));
set3.clear();
var map3 = new Map([
    [2, 6], [3, 7],
    [4, 8], [5, 9],
]);
console.log('klass.ts');
var Klass = /** @class */ (function () {
    function Klass(name) {
        this.privaatne = 'Vaike väärtus';
        this.ainultLugemiseks = '';
        this.ainultLugemiseks = name;
    }
    Klass.prototype.avalikMeetod = function () {
        // this.ainultLugemiseks = '';
        this.privaatneMeetod();
    };
    Klass.prototype.kaitstudMeetod = function () {
        //this.ainultLugemiseks = '';
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
        this.nimetus = 'nimetus';
    }
    Kujund.prototype.nimeta = function () {
        console.log('Ruut ' + this.leiaAla());
    };
    return Kujund;
}());
var Ruut = /** @class */ (function (_super) {
    __extends(Ruut, _super);
    function Ruut(a) {
        var _this = _super.call(this, a, a) || this;
        _this.nimetus = 'Kujund ';
        return _this;
    }
    Ruut.prototype.leiaAla = function () {
        return this.a * this.b;
    };
    Ruut.prototype.nimeta = function () {
        _super.prototype.nimeta.call(this);
        console.log('Ruut ' + this.leiaAla());
    };
    Ruut.staatiline = function () {
        console.log('Static');
    };
    return Ruut;
}(Kujund));
//Kujund.staatiline();
var Ristkylik = /** @class */ (function (_super) {
    __extends(Ristkylik, _super);
    function Ristkylik(a, b) {
        return _super.call(this, a, b) || this;
    }
    Ristkylik.prototype.leiaAla = function () {
        return this.a * this.b;
    };
    Ristkylik.prototype.nimeta = function () {
        console.log('Kylik ' + this.leiaAla());
    };
    return Ristkylik;
}(Kujund));
var ruut = new Ruut(12);
ruut.nimeta();
console.log(ruut.avalik);
var kylik = new Ristkylik(12, 14);
kylik.nimeta();
console.log('nimeroom.ts');
var Nimeruum;
(function (Nimeruum) {
    console.log('Tere');
    var funkNimetus = 'Funkar';
    function funkar() {
        console.log(funkNimetus);
    }
    Nimeruum.funkar = funkar;
})(Nimeruum || (Nimeruum = {}));
function funkar2() {
    console.log('Funkar2');
}
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
var iruut = { x: 12, y: 16 };
// ruut.x = 134; // readonly keelab ülekirjutamise ära
iruut.y = 10;
saaAla(iruut);
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
var v2rvus = 'Sinine';
switch (v2rvus) {
    case 'Punane':
        console.log('Punane');
        break;
    case 'Sinine':
        console.log('Sinine');
        break;
    default:
        console.log('Amuuuu!');
        break;
}
/* for while do while */
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
/* '+'   '-'   '*'   '/'   '%'   '**'    */
/* '='  '+='  '-='  '*='  '/='  '++'  '--'  '**' '**=' */
for (var index = 0; index < 10; index += 3) {
    tekst += index;
}
var tulemus = 2 + 3;
tulemus = 5 % 2; // 1 <= jääk
tulemus = Math.pow(5, 2); // 25 <= astmes
--tulemus; // 24 <= lahutab viimasest väärtusest ühe
tulemus /= 2; // 12 <= jagab viimase väärtuse kahega
tulemus = 2 + 3 * 4; // 14 <= tehte järjekord loeb
tulemus = (2 + 3) * 4; // 20 <= tehte järjekord loeb
console.log(tekst);
console.log(tulemus);
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
for (var v6ti in valik) {
    if (valik.hasOwnProperty(v6ti)) {
        console.log(v6ti); // ei leia sisu Set'is või Map'is
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