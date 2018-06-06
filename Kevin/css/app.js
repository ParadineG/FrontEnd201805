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
var Varv;
//LOENDAJAD
(function (Varv) {
    Varv[Varv["punane"] = 0] = "punane";
    Varv[Varv["roheline"] = 1] = "roheline";
    Varv[Varv["sinine"] = 2] = "sinine";
})(Varv || (Varv = {}));
;
var varv = 2;
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
//# sourceMappingURL=app.js.map