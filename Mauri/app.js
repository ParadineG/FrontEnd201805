"use strict";
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
console.log("\ndom.ts");
var omBool = true;
var omNumber = 5.126513;
console.log("\nNumber:");
console.log(omNumber.toFixed(2));
console.log(omNumber.toPrecision(4));
console.log(omNumber.toString().length);
omNumber = 12 / 0;
console.log(Number.isNaN(omNumber));
console.log(Number.isInteger(omNumber));
omNumber = 2.54540;
console.log(Number.isInteger(omNumber));
console.log(Number.isFinite(omNumber));
console.log("\nMassiiv:");
var massiiv3 = [6, 7, 8, 9, 10];
console.log(massiiv3.concat(massiiv3));
console.log(massiiv3.length);
massiiv3.push(11);
console.log(massiiv3.slice(2, 4));
console.log(massiiv3.reverse());
console.log("\nSet:");
var set2 = new Set([6, 4, 2, 7, 10, 20]);
console.log(set2.size);
console.log(set2.has(20));
console.log("\nMap:");
var map2 = new Map([
    [2, 5],
    [2, 10],
    [4, 10],
    [55, 10]
]);
console.log(map2);
console.log("\nSõne:");
var sone = "             Tervist! Hei!    ";
console.log(sone.trim());
console.log(sone.toLowerCase());
console.log(sone.toUpperCase());
console.log(sone.split("!"));
while (sone.search(" ") !== -1) {
    sone = sone.replace(" ", "");
}
console.log(sone);
console.log(parseInt("22.544"));
console.log(parseFloat("22.544"));
console.log("\nMatemaatika:");
console.log(Math.PI);
console.log((Math.random() * 20).toFixed(0));
console.log(Math.sqrt(25));
console.log(Math.floor(12.5));
console.log(Math.round(12.5));
console.log(Math.ceil(12.3));
console.log(Math.abs(-55));
console.log("\nKuupäev:");
var aeg = new Date();
console.log(aeg);
console.log(aeg.getDate());
console.log(aeg.getMonth());
console.log(aeg.getDay());
console.log(aeg.getHours());
console.log(aeg.getFullYear());
console.log("\nklass.ts");
var Klass = /** @class */ (function () {
    function Klass(name) {
        this.privaatne = "Vaike väärtus";
        this.ainultLugemiseks = "";
        this.ainultLugemiseks = name;
    }
    Klass.prototype.avalikMeetod = function () {
        this.privaatneMeetod();
    };
    Klass.prototype.kaitstudMeetod = function () {
    };
    Klass.prototype.privaatneMeetod = function () {
        console.log(this.privaatne);
    };
    return Klass;
}());
var minuKlass = new Klass("Tervitus!");
minuKlass.avalikMeetod();
console.log("\nkujund.ts");
var Kujund = /** @class */ (function () {
    function Kujund(a, b) {
        this.a = a;
        this.b = b;
        this.avalik = "avalik";
        this.nimetus = "Kujund ";
    }
    Kujund.prototype.nimeta = function () {
        console.log(this.nimetus + this.leiaAla());
    };
    Kujund.staatiline = function () {
        console.log("Static!");
    };
    return Kujund;
}());
Kujund.staatiline();
var Ruut = /** @class */ (function (_super) {
    __extends(Ruut, _super);
    function Ruut(a) {
        var _this = _super.call(this, a, a) || this;
        _this.nimetus = "Ruut ";
        return _this;
    }
    Ruut.prototype.leiaAla = function () {
        return this.a * this.b;
    };
    Ruut.prototype.nimeta = function () {
        _super.prototype.nimeta.call(this);
        console.log("Minu ruut " + this.leiaAla());
    };
    return Ruut;
}(Kujund));
var Ristkylik = /** @class */ (function (_super) {
    __extends(Ristkylik, _super);
    function Ristkylik(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.nimetus = "Ristkülik ";
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
console.log("\nnimetuum.ts");
var Nimeruum;
(function (Nimeruum) {
    console.log("Tere!");
    var funkNimetus = "Funkar";
    function funkar() {
        console.log(funkNimetus);
    }
    Nimeruum.funkar = funkar;
})(Nimeruum || (Nimeruum = {}));
function funkar2() {
    console.log("\nFunkar2");
}
console.log("\nHello TS!");
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
/* Switch */
var key = "Punane";
switch (key) {
    case "Punane":
        console.log("Värv on punane!");
        break;
    case "Sinine":
        console.log("Värv on sinine!");
        break;
    default:
        console.log("Muu värv!");
        break;
}
/* for, while, do while */
var kordus = true;
var tekst = "";
console.log("\nWhile tsükkel:");
while (kordus) {
    tekst += "a";
    console.log(tekst);
    if (tekst.length >= 7) {
        kordus = false;
    }
    if (tekst === "aaaa") {
        continue;
    }
    if (tekst === "aaaa") {
        break;
    }
}
var doWhile = 1;
console.log("\nDo while tsükkel:");
do {
    console.log(doWhile + " Tere!");
    doWhile++;
} while (doWhile <= 4);
console.log("\nFor tsükkel:");
tekst = "";
for (var i = 0; i < 10; i++) {
    console.log(tekst += i);
}
console.log("\nPaarisarvud:");
for (var i = 10; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("\nPaaritud:");
for (var i = 10; i >= 0; i--) {
    if ((i % 3 === 0 || i === 1) && (i != 0)) {
        console.log(i);
    }
}
var list = [4, 5, 6];
console.log("\n\nList: " + list);
console.log("\nListi indeksid:");
for (var key_1 in list) {
    console.log(key_1);
}
console.log("\nListi indeksi väärtused:");
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var key_2 = list_1[_i];
    console.log(key_2);
}
// Kõik elemendid on unikaalsed. Kaks kassi on ikka üks kass. Set ei ole massiiv.
console.log("\nSet:");
var set = new Set(["Kass", "Koer", "Hamster", "Kass"]);
var array = Array.from(set);
for (var _a = 0, array_1 = array; _a < array_1.length; _a++) {
    var key_3 = array_1[_a];
    console.log(key_3);
}
for (var key_4 in set) {
    if (set.hasOwnProperty(key_4)) {
        console.log(key_4); // Ei leia sisu, ei toimi Seti puhul
    }
}
console.log("\nFor each tsükkel:");
set.forEach(function (item) {
    console.log(item);
});
var map = new Map([
    ["Kass", "Juku"],
    ["Koer", "Sergio"],
    ["Hamster", "Piiks"]
]);
console.log("\nMap:");
console.log(map);
map.forEach(function (value, key) {
    console.log(key + ": " + value);
});
console.log("\nSama asi teistsuguselt:");
// Alternatiiv
map.forEach(function (key, value) {
    console.log(value + ": " + key);
});
funkar2();
Nimeruum.funkar();
//# sourceMappingURL=app.js.map