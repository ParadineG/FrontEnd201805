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
console.log('klass.ts');
var omBool = true;
var omNumber = 0.000000012;
console.log(omNumber.toExponential()); //1.2 * 10^(-8)
// toString() toExponential() toFixed()-ümardamine, toPrecision() - arvude kuvamine
omNumber = 12 / 0;
omNumber = NaN;
console.log(Number.isFinite(omNumber));
// isFinite() isInteger(), isNaN(), isSafeinteger() 2^53-1,
omNumber = Number.MIN_SAFE_INTEGER;
Number.MAX_VALUE;
Number.EPSILON; //väikseim komaarv 0.0....01
Number.POSITIVE_INFINITY;
// massiivid
var massiiv3 = [6, 7, 8, 9];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop();
massiiv3.shift();
massiiv3.unshift(12);
massiiv3.push(17);
massiiv3.reverse();
massiiv3.sort(function (a, b) { return a - b; });
console.log(massiiv3);
var set3 = new Set([6, 7, 8, 9]);
set3.add(12);
set3.delete(6);
console.log(set3.size + ' ' + set3.has(6));
set3.clear();
set3.has(7);
var map3 = new Map([
    [2, 6], [3, 7],
    [4, 8], [5, 9],
]);
map3.set(9, 12);
console.log(map3);
var s6ne3 = 'Lorem Ipsum Ipsum';
s6ne3 = s6ne3.toLowerCase();
var s6ned = s6ne3.split(' ');
while (s6ne3.search('ipsum') !== -1) {
    s6ne3 = s6ne3.replace('ipsum', 'amet');
}
console.log(s6ned);
var arvuke = parseFloat('2.45678');
// matemaatika
var pi = Math.PI;
omNumber = Math.pow(12, 2);
omNumber = Math.sqrt(16);
omNumber = Math.random() * 10;
omNumber = Math.floor(12.7); //round ceil 
omNumber = Math.abs(-1.2);
omNumber = Math.sin(Math.PI);
//kuupäev
var aeg = new Date(Date.now());
console.log('Aeg: ' + aeg.getDate());
aeg.setDate(21);
console.log('Aeg: ' + aeg.getDate());
// veatuvastus
try {
    throw 'ere';
}
catch (error) {
    console.log(typeof (error));
    console.log(error);
}
console.log('klass.ts');
var Klass = /** @class */ (function () {
    function Klass(name) {
        this.ainultLugemiseks = '';
        this.ainultLugemiseks = name;
    }
    Klass.prototype.avalikMeetod = function () {
        //this.ainultlugemiseks = '';
        this.privaatneMeetod();
    };
    Klass.prototype.privaatneMeetod = function () {
        console.log(this.privaatne);
        //this.ainultlugemiseks = '';
    };
    Klass.prototype.kaitstudMeetod = function () {
        //this.ainultlugemiseks = '';
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
        console.log('Kujund ' + this.leiaAla());
    };
    Kujund.staatiline = function () {
        console.log('Static');
    };
    return Kujund;
}());
//const abstrakt = new Kujund() veateade
Kujund.staatiline();
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
var ruutk = new Ruut(12);
//ruutk.nimeta();
console.log(ruutk.avalik);
var kylik = new Ristkylik(12, 14);
console.log('nimeroom.ts');
var Nimeruum;
(function (Nimeruum) {
    console.log('Tere');
    var funkNimetus = 'Funkar';
    function funkar() {
        console.log('funkar');
    }
    Nimeruum.funkar = funkar;
})(Nimeruum || (Nimeruum = {}));
function funkar2() {
    console.log('funkar2');
}
console.log('Hello TS');
//TÕENE JA VÄÄR - loogikaelement
var kasTehtud = false;
//NUMBRID
var kumnend = 6;
var hex = 0xFD02;
var binaar = 10;
var octal = 474;
octal = 7;
//SÕNED
var lause = 'Tere. \n'
    + 'Täna meil programmeerimine';
var vanus = 29;
var minuVanus = "Minu vanus on " + vanus + ".\n\n    Tere tulemast!";
//MASSIVID
var massiiv = [1, 4, 7];
var massiiv2 = [1, 5, 9];
var fikseeritud = massiiv2;
var arv = massiiv[0];
//TUPLE
var Tuple = ['tere', 15];
var sone = Tuple[0];
//LOENDAJAD
var V2rv;
//LOENDAJAD
(function (V2rv) {
    V2rv[V2rv["punane"] = 0] = "punane";
    V2rv[V2rv["roheline"] = 1] = "roheline";
    V2rv[V2rv["sinine"] = 2] = "sinine";
})(V2rv || (V2rv = {}));
;
var v2rv = 2;
//ANY VOID
var poleKindel = 'Tere';
poleKindel = 5;
var nimekiri = [2, 'hi', 5.32];
nimekiri[0] = 'tere';
var tervitus = nimekiri[1];
function funktsioon() {
    console.log('hello');
    return;
}
//NULL, UNDEFINED
var u = undefined;
var n = null;
var un;
//NEVER
function tsukkel() {
    while (true) {
        console.log('dfd');
    }
}
//OBJECT - kõik ülejäänud peale eelmiste
var obj = tsukkel;
var obj2 = { nimi: 'Juku', vanus: 25 };
//VAR LET CONST
/*for(var i = 0; i < 10; i++){
    setTimeout(function() { console.log(i); }, 100 * i);
};

for(let i = 0; i < 10; i++){
    setTimeout(function() { console.log(i); }, 100 * i);
};

function varLet() {
    var variable = 17;
    let variable2 = 17;
    if (true) {
        var variable = 27;
        let variable2 = 27;
    }
    console.log(variable);//undefined
    console.log(variable2);//error
};*/
//varLet();
//DESTRUKTUEERIMINE
var sisend = [1, 2, 3, 4, 5];
var esi = sisend[0], teine = sisend[1], ulejaanud = sisend.slice(2);
console.log(esi + " " + teine + " " + ulejaanud + " ");
var o = {
    a: 'ssd',
    b: 950,
    c: 'kar',
    d: 442
};
var Memory = o.c;
var a = o.a, b = o.b, l6pp = __rest(o, ["a", "b"]);
console.log(a + b + l6pp.d);
function hoiaObjektAlles(terveObjekt) {
    var x = terveObjekt.x, _a = terveObjekt.y, y = _a === void 0 ? 2018 : _a;
    console.log(x + y);
}
hoiaObjektAlles({ x: 'Tere', y: 2017 });
//SPREAD
var mass = [1, 2];
var mass2 = [3, 4];
var suurMass = [1].concat(mass, mass2, [5]);
var vaikeVaartused = {
    toit: 'terav',
    hind: 'kõrvetav',
    keskkond: 'Rahulik',
};
var maheKohvik = __assign({}, vaikeVaartused, { toit: 'Mahe' });
function saaAla(_a) {
    var x = _a.x, y = _a.y, _b = _a.z, z = _b === void 0 ? 1 : _b;
    console.log(x * y * z);
}
var ruut = { x: 12, y: 15 };
saaAla(ruut);
var miniFunktsioon = function (sisend) { return false; };
var minimassiiv = ['Juku', 'Kalle'];
var juku = minimassiiv[0];
function summa(arv1, arv2) {
    return arv1 + arv2;
}
console.log(summa(3, 4));
console.log(summa('Tere ', 'pere!'));
//console.log(summa(3,4);
//const minuSumma = function(arv1: number, arv2: number) {return arv1 + arv2; };
//console.log(minuSumma(3,4));
//const minuSumma:(arv1: number, arv2: number) => number
//= function(arv1: number, arv2: number) {return arv1 + arv2; };
//(function(arv1: number, arv2: number) {return arv1 + arv2; })(3,4);
var minuSumma = function (arv1, arv2) { return arv1 + arv2; };
console.log(minuSumma(3, 4));
var visatudtarn = 4;
var suvaline = undefined;
//m2rk !== m2rk2 
var m2rk = Symbol("key");
var m2rk2 = Symbol("key");
//IF, ELSE IFELSE Switch| === == !== != < > <= >= || &&
var arv3 = 26;
var arv4 = 43;
if (arv3 + arv4 === 699) {
    console.log('esimene');
}
else if (arv3 + arv4 === 50) {
    console.log('teine');
}
else {
    console.log('kolmas');
}
var muutujad = arv3 < arv4 ? true : false;
console.log(muutujad);
var v2rvus = 'Sinine;';
switch (v2rvus) {
    case 'Punane':
        console.log('punane');
        break;
    case 'Sinine':
        console.log('sinine');
    default:
        console.log('muu');
}
//FOR WHILE DO WHILE
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
    console.log('tere');
} while (kordus);
tekst = '';
//+ - * / % ** 
// = += -= *= /= ++ -- **= \\
for (var index = 0; index < 10; index++) {
    tekst += index;
}
console.log(tekst);
var tulemus = 2 + 3;
tulemus = 5 % 2; // 1 jääk
tulemus = Math.pow(5, 2); // astmed
--tulemus; //24 (25 -1)
tulemus /= 2; //12 (24/2)
tulemus = 2 + 3 * 4; //14
tulemus = (2 + 3) * 4; //20
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
        console.log(v6ti);
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