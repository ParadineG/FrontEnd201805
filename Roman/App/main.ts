/// <reference path="nimeroom.ts"/>
'use strict';
console.log('Hello TS');

/* Tõene ja väär */
const kasTehtud: boolean = false;
/* Numbrid */
const kymnend: number = 6;
const hex = 0xFD02;
const binaar = 0b1010;
let octal = 0o732;
octal = 7;
/* Sõned */
const lause: string = 'Tere tulemast ' + 'koolitusele.\n'
                    + 'Täna meil programeerimine';
const vanus = 29;
const minuVanusLauses =
    `Minu vanus on ${vanus}.

    Tere tulemast!`;
/* Massiivid */
const massiiv: number[] = [1, 4, 7];
const massiiv2: Array<number> = [1, 5, 9];
const fikseeritud: ReadonlyArray<number> = massiiv2;
const arv = massiiv[2]; // 7
/* Tuple */
const tuple: [string, number] = ['Tere', 15];
const s6ne = tuple[0];
/* Loendajad */
enum V2rv {Punane, Roheline = 2, Sinine}
const v2rv: V2rv = V2rv.Sinine;
/* any void */
let poleKindel: any = 'Tere';
poleKindel = 5;
const nimekiri: any[] = [2, 'Hi', 5.32];
nimekiri[0] = 'Tere';
const tervitus = nimekiri[1] as string;
function funktsioon(): void {
    console.log('hello function');

    return;
}
/* null undefined */
let un: string;
const u: undefined = undefined;
const n: null = null;

/* never */
function l6putuTsykkel(): never {
    while (true) { console.log('ddfd'); }
}

/* object - kõik ülejäänud peale eelmiste */
const obj: object = l6putuTsykkel;
const obj2: object = {nimi: 'Juku', vanus: 25};

/* var let*/
function varLet() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function() { console.log(i); }, 200);
    }
    for (let i = 0; i < 10; i++) {
        setTimeout(function() { console.log(i); }, 200);
    }
    var variable = 17;
    let variable2 = 17;
    if (true) {
        var variable = 27;
        let variable2 = 27;
    }
    console.log(variable); // 27 undefined
    console.log(variable2); // 17 error
}
// varLet();

/* Destruktureerimine  */
const sisend = [1, 2, 3, 4, 5];
const [esi, teine, ...ylej22nud] = sisend;
console.log(`${esi} ${teine} ${ylej22nud}`);
const o = {
    a: 'ssds ',
    b: 1234,
    c: 'kar',
    d: 134
};
const kar = o.c;
const {a, b, ...l6pp} = o;
console.log(a + b + l6pp.d);

function hoiaObjektAlles(terveObjekt: { readonly x: string; y?: number }) {
    const {x, y = 2018} = terveObjekt;
    console.log(x + y);
}
hoiaObjektAlles({x: 'Tere ', y: 2017});

/* spread */
const mass = [1, 2];
const mass2 = [3, 4];
const suurMass = [1, ...mass, ...mass2, 5];

const vaikeV22rtused = {
    toit: 'Terav',
    hind: 'Kõrvetav',
    keskkond: 'Rahulik'
};
const maheKohvik = {
    ...vaikeV22rtused,
    toit: 'Mahe'
};

/* interface */
interface IRuut {
    readonly x: number;
    y: number;
}
interface IKuup extends IRuut {
    z?: number;
}
function saaAla({x, y, z = 1}: IKuup) {
    console.log(x * y * z);
}
const ruut: IRuut = {x: 12, y: 15};
// ruut.x = 134;
ruut.y = 10;
saaAla(ruut);

interface IMiniFunk {
    (sisend: string): boolean;
}
const miniFunk: IMiniFunk = (sisend: string) => false;
interface IMiniArray {
    readonly [index: number]: string;
}
const miniMassiiv: IMiniArray = ['Juku', 'Kalle'];
const juku = miniMassiiv[0];

/* funktsioonid */
function summa(arv1: string, arv2: string): string;
function summa(arv1: number, arv2: number): number;
function summa(arv1: any, arv2: any): any {
    return arv1 + arv2;
}
console.log(summa('Tere', ' pere!'));
console.log(summa(3, 4)); // 7
// console.log(summa(true, false)); // error
const minuSumma: (arv1: number, arv2: number) => number
    = function(arv1: number, arv2: number) {return arv1 + arv2; };
console.log(minuSumma(3, 4)); // 7
(function(arv1: number, arv2: number) {return arv1 + arv2; })(3, 4); // 7
const minuSumma2 = (arv1 = 2, arv2 = 7) => arv1 + arv2;
console.log(minuSumma2(3, 4)); // 7
console.log(minuSumma2()); // 9

/* types */
type Funktsioon = (sisend: string) => boolean;
type T2rn = 1 | 2 | 3 | 4 | 5 | 6;
const visatudT2rn: T2rn = 6;
type Suvaline = number | 'Tere' | false | undefined | null;
const suvaline: Suvaline = 14;

// m2rk !== m2rk2
const m2rk: symbol = Symbol("key");
const m2rk2: symbol = Symbol("key");
if (m2rk === m2rk2){
    console.log('Esimene');
} else if (m2rk == m2rk2) {
    console.log('Teine');
} else {
    console.log('Muu');
}

/* if else switch */
/* === !== == != < > <= >= */
/* || && */
const arv3 = 26;
const arv4 = 43;
if ((arv3 + arv4 > 30) || (arv3 < arv4)) {
    console.log('Esimene');
} else if (2 + 2 === 3) {
    console.log('2 + 2 === 3');
} else {
    console.log('Kumbki ei sobinud');
}
const muutujad = arv3 < arv4 ? true : false;
let v2rvus = 'Sinine';
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
let kordus = true;
let tekst = '';
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
for (let index = 0; index < 10; index += 2) {
    tekst += index;
}
console.log(tekst);
/* tehted (expressions) */
/* + - * / % ** */
/* = += -= *= /= **= ++ -- */
let tulemus = 2 + 3;
tulemus = 5 % 2; // 1 - jääk
tulemus = 5 ** 2; // 25 - astet
--tulemus; // 24 (25 - 1)
tulemus /= 2; // 12 (24 / 2)
tulemus = 2 + 3 * 4; // 14
tulemus = (2 + 3) * 4; // 20

let list = [4, 5, 6];
for (const key in list) {
    if (list.hasOwnProperty(key)) {
        console.log(key);
    }
}
for (const i of list) {
    console.log(i);
}
let valik = new Set(['Kass', 'Koer', 'Hamster']);
let valik2 = new Map([
    ['Kass', 'Juku'],
    ['Koer', 'Malle'],
    ['Hamster', 'Paul']
]);
for (const v6ti in valik2) {
    if (valik2.hasOwnProperty(v6ti)) {
        console.log(v6ti); // ei leia sisu Setis või Mapis
    }
}
const array = Array.from(valik);
for (const i of array) {
    console.log(i);
}
valik.forEach(
    (value: string, value2: string) => {
        console.log(value + ' ' + value2);
    });
valik2.forEach(
    (value: string, v6ti: string) => {
        console.log(value + ' ' + v6ti);
    });

funkar2();
Nimeruum.funkar();
