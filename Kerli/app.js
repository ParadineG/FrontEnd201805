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
var omNumber = 55555.55;
console.log(omNumber.toExponential());
omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON;
omNumber = Number.POSITIVE_INFINITY;
omNumber = 12 / 2;
console.log(Number.isFinite(omNumber));
var massiiv3 = [6, 7, 8, 9, 10];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.shift(); //eemaldab esimese
massiiv3.pop(); //eemaldab viimase
massiiv3.unshift(12);
//massiiv3.push(17); lükkab arvu 17 massiivi
massiiv3.reverse();
massiiv3.sort(function (a, b) { return a - b; }); //suuruse järjekorras numbrid
massiiv3.sort(function (a, b) {
    console.log(a + ' ' + b);
    return a - b;
});
console.log(massiiv3);
var set3 = new Set([6, 7, 8, 9]);
set3.add(13);
set3.delete(8);
console.log(set3.size + '' + set3.has(8));
set3.clear();
var map3 = new Map([[2, 6], [3, 5], [4, 6]]);
map3.set(9, 12); //lisad elemendi
var s6ne3 = 'Jaaniuss Hele Hele';
s6ne3 = s6ne3.toLowerCase();
s6ne3 = s6ne3.replace('hele', 'Juuli');
while (s6ne3.search('hele') !== -1) {
    s6ne3 = s6ne3.replace('hele', 'Juuli');
}
var s6ned = s6ne3.split(' ');
console.log(s6ned);
var komArv = parseFloat('2.44444');
var pi = Math.PI;
omNumber = Math.pow(2, 2);
omNumber = Math.sqrt(16);
omNumber = Math.random() * 10;
var kp = new Date(Date.now());
console.log(kp.getDate());
kp.setDate(21);
console.log('aeg ' + kp.getDay());
try {
    throw 'Kk';
}
catch (error) {
    console.log(error);
}
console.log('klass.ts');
var Klass1 = /** @class */ (function () {
    function Klass1(name) {
        this.ainultLugemiseks = '';
        this.ainultLugemiseks = name; //this - klassi sisene element
    }
    Klass1.prototype.avalikMeetod = function () {
        //this.ainultLugemiseks = '';
        this.privaatneMeetod();
    };
    Klass1.prototype.kaitstudMeetod = function () {
    };
    Klass1.prototype.privaatneMeetod = function () {
        console.log(this.privaatne);
    };
    return Klass1;
}());
var mKlass = new Klass1('Ttt');
mKlass.avalikMeetod();
console.log('kujund.ts');
var Kujund = /** @class */ (function () {
    function Kujund(a, b) {
        this.a = a;
        this.b = b;
        this.avalik = 'avalik';
        this.nimetus = 'Kujund';
    }
    Kujund.prototype.nimeta = function () {
        console.log(this.nimetus + this.leiaAla());
    };
    Kujund.staatiline = function () {
        console.log('Staatiline');
    };
    return Kujund;
}());
Kujund.staatiline();
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
        console.log('MRuut ' + this.leiaAla());
    };
    return Ruut;
}(Kujund));
var Ristkylik = /** @class */ (function (_super) {
    __extends(Ristkylik, _super);
    function Ristkylik(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.nimetus = 'Ristkylik ';
        return _this;
    }
    Ristkylik.prototype.leiaAla = function () {
        return this.a * this.b;
    };
    Ristkylik.prototype.nimeta = function () {
        _super.prototype.nimeta.call(this);
        console.log('MRistkylik ' + this.leiaAla());
    };
    return Ristkylik;
}(Kujund));
var square = new Ruut(4);
square.nimeta(); //kujund 16
console.log(square.avalik);
var ristkylik = new Ristkylik(4, 6);
ristkylik.nimeta(); //kujund 24
console.log('nimeruum.ts');
var Nimeruum;
(function (Nimeruum) {
    console.log('Test');
    var tassNim = 'Tass';
    function tass() {
        console.log(tassNim);
    }
    Nimeruum.tass = tass;
})(Nimeruum || (Nimeruum = {}));
function tass1() {
    console.log('Tass1');
}
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
        //        console.log('v2ljund');
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
//console.log(a + b + l6pp.d);
function cc(terveObjekt) {
    var x = terveObjekt.x, _a = terveObjekt.y, y = _a === void 0 ? 200 : _a;
    //    console.log(x, y);
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
    //   console.log(x * y * z);
}
var ruut = { x: 3, y: 4 };
//ruut.x = 13;
ruut.y = 10;
inter(ruut);
var sak = function (sisend) { return false; };
var s = ['Aa', 'Bb'];
var aa = s[0];
function summa(a, b) {
    return a + b;
}
//console.log(summa(3, 4));
//console.log(summa('Kol', 'lane'));
function sum6(a, b) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 4; }
    return a + b;
}
var mSumma = function (a, b) { return a + b; };
var mmSumma = function (a, b) { return a + b; };
//console.log(mSumma(4, 5));
(function (a, b) { return a + b; })(3, 4);
function summa2(a, b) {
    return a + b;
}
//console.log(summa2(3, 'test'));
var msSumma = function (a, b) { return a + b; };
var mssSumma = function (a, b) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 3; }
    return a + b;
};
var vt2rn = 4;
var suva = false;
//m2rk !== m2rk2; sümbol on alati unikaalne
var m2rk = Symbol('key');
var m2rk2 = Symbol('key');
/*if else*/
var g = 4;
var e = 6;
if (g + e === 9) {
    //    console.log('');
}
else if (g + e === 12) {
    //    console.log('');
}
else {
    //   console.log('');
}
var muutujad = g < e ? true : false;
var key = 'Sinine';
switch (key) {
    case 'Punane':
        //        console.log('punane');
        break;
    case 'Sinine':
        //        console.log('sinine');
        break;
    default:
        console.log('muu');
}
/*for while do while*/
var kordus = true;
var tekst = '';
while (kordus) {
    tekst += 'sS';
    if (tekst.length >= 8) {
        kordus = false;
    }
    if (tekst === 'sSsS') {
        continue; //läheb algusesse
    }
    if (tekst === 'sSsS') {
        break;
    }
}
//console.log(tekst);
do {
    //    console.log('gg');
    kordus = false;
} while (kordus);
tekst = '';
for (var index = 0; index < 10; index += 2) { //index = index + 2
    tekst += index;
}
//console.log(tekst);
var tulemus = 2 + 3;
tulemus = 5 % 2; //1
tulemus = Math.pow(5, 2); //25
--tulemus; //25-1 = 24
tulemus /= 2; //24 / 2 = 12
var list = [4, 5, 6];
for (var key_1 in list) { //elemendi võtmed, asukoht indeksis
    //   console.log(key);
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i_2 = list_1[_i];
    //   console.log(i);
}
var valik = new Set(['kass', 'koer', 'lehm']); //ei saa dubleerida element, peavad olema unikaalsed
var valik2 = new Map([
    ['Kass', 'KassN'],
    ['Koer', 'KoerN'],
    ['Lehm', 'LehmN']
]);
for (var v6ti in valik) { //elemendi võtmed, asukoht indeksis
    if (valik.hasOwnProperty(v6ti)) {
        //        console.log('v6ti' + v6ti);
    }
}
var array = Array.from(valik);
for (var _a = 0, array_1 = array; _a < array_1.length; _a++) {
    var i_3 = array_1[_a];
    //    console.log('array' + i);
}
valik.forEach(function (value, value2) {
    //        console.log(value + ' ' + value2)
});
valik2.forEach(function (value, v6ti) {
    //       console.log(value + ' ' + v6ti)
});
tass1();
Nimeruum.tass();
//# sourceMappingURL=app.js.map