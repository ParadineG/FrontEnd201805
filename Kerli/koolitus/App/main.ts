/// <reference path='nimeruum.ts'/>
'use strict';
console.log('main ts ss');
/* true false*/
const kasTehtud: boolean = false;
/*numbrid*/
const kümnend: number = 6;
const kümnend2 = 6;
const hex = 3E8;
const binaar = 0b1010;
let octal = 0o732;
octal = 7;
/*sõned*/
const lause: string = 'test' + 'jne...\n' + 'veel üks lause';
const vanus = 15;
const minuVanus = `Vanus ${vanus}.`;
const minuVanus2 = 
    `Vanus ${vanus}.
    
    Seega...`;
/*massiivid*/
const massiiv: number[] = [1, 4, 7];
const massiiv2: Array<number> = [2, 5, 9];
const arv = massiiv[0];
/*tuple*/
const tuple: [string, number] = ['Test', 15];
const s6ne = tuple[0];
/*enum - loendajad*/
enum V2rv {Punane, Roheline = 2, Kollane};
const v2rv: V2rv = V2rv.Kollane;
/*any void*/
let suvaline: any = 'Tere';
suvaline = 5;
const nimekiri: any[] = [2, 'Ee', 2.2];
//let muutuja = nimekiri[0];
nimekiri[0] = 'Eeee';
const terv = nimekiri[1] as string;
function funktsioon(): void {
    console.log('Miskit');
    return;
}
/*null undefined*/
let un: string;
const u: undefined = undefined; //pole väärtust andnud
const n: null = null;
/*never*/
function l6putuTsykkel(): never { //ei välju kunagi tsüklist
    while(true) {
//        console.log('v2ljund');
    }
}
/*object - kõik ülejäänud*/
const obj: object = l6putuTsykkel;
const obj2: object = {nimi: 'Kkk', vanus: 22};
/*var let const*/
for (var i = 0; i < 10; i++){
   // setTimeout(function(){console.log(i);}, 200);
}
for (let i = 0; i < 10; i++){
    //setTimeout(function(){console.log(i);}, 200);
}
function ffs2() {
    //console.log('test');
    var variable = 15;
    let variable2 = 12;
    if (true) {
        var variable = 50;
        //let variable2 = 55;
    }
    //console.log(variable); //undefined
    //console.log(variable2);//error
}
ffs2();
/*destruktureerimine*/
const sisend = [1, 2, 3, 4, 5];
const [esi, tei, ...ylej] = sisend;
//console.log(esi + tei);
//console.log(`${esi} ${tei} ${ylej}`);
const o = {
    a: 'ssds',
    b: 222,
    c: 'hh',
    d: 44
};
const kk = o.c;
const {a, b, ...l6pp} = o;
//console.log(a + b + l6pp.d);
function cc (terveObjekt: {x: string, y?: number}) {
    const {x, y = 200} = terveObjekt;
//    console.log(x, y);
}
cc({x: 'Test'}); //, y: 201
const mass = [1, 2];
const mass2 = [3, 4];
const mass3 = [1, mass, ...mass2, 5];
const vaikeV22rtused = {
    toit: 'terav',
    hind: 'kuum',
    keskkond: 'talutav'
};
const kohvik = {
    ...vaikeV22rtused,
    toit: 'mahe'
};

/*interface*/
interface IRuut {
    readonly x: number; 
    y: number;
}
interface IKuup extends IRuut{
    z?: number;
}
function inter ({x, y, z = 1}: IKuup){
 //   console.log(x * y * z);
}
const ruut: IRuut = {x: 3, y: 4};
//ruut.x = 13;
ruut.y = 10;
inter(ruut);

interface funkts {
    (sisend: string): boolean;
}
const sak: funkts = (sisend: string) => false;
interface funktsArray {
    [index: number]: string;
}
const s: funktsArray = ['Aa', 'Bb'];
const aa = s[0];

/*funktsioonid*/
function summa(a: string, b: string): string;
function summa(a: number, b: number): number;
function summa(a: any, b: any): any {
    return a + b;
}
//console.log(summa(3, 4));
//console.log(summa('Kol', 'lane'));
function sum6(a = 2, b = 4) {
    return a + b;
}
const mSumma = function(a: number, b: number){return a + b;};
const mmSumma: (a: number, b: number) => number
 = function(a: number, b: number){return a + b;};
//console.log(mSumma(4, 5));
(function(a: number, b: number){return a + b;})(3, 4);
function summa2 (a: number, b: string) {
    return a + b;
}
//console.log(summa2(3, 'test'));
const msSumma = (a: number, b: number) => a + b;
const mssSumma = (a = 2, b = 3) => a + b;
//console.log(mssSumma());
//console.log(mssSumma(3, 4));

/*tüübid*/
type Func = (sisend: string) => boolean;
type T2rn = 1 | 2 | 3 | 4 | 5;
const vt2rn: T2rn = 4;
type Suva = 2 | 'smth' | false | undefined;
const suva: Suva = false;
//m2rk !== m2rk2; sümbol on alati unikaalne
const m2rk: symbol = Symbol('key');
const m2rk2: symbol = Symbol('key');

/*if else*/
const g = 4;
const e = 6;
if (g + e === 9) {
//    console.log('');
} else if (g + e === 12){
//    console.log('');
} else {
 //   console.log('');
}
const muutujad = g < e ? true : false;
let key = 'Sinine';
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
let kordus = true;
let tekst = '';
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
for (let index = 0; index < 10; index+=2) { //index = index + 2
    tekst += index;
}
//console.log(tekst);
let tulemus = 2 + 3;
tulemus = 5 % 2; //1
tulemus = 5 ** 2; //25
--tulemus; //25-1 = 24
tulemus /= 2; //24 / 2 = 12

let list = [4, 5, 6];
for (const key in list) {//elemendi võtmed, asukoht indeksis
 //   console.log(key);
}
for (const i of list) {
 //   console.log(i);
}
let valik = new Set(['kass', 'koer','lehm']); //ei saa dubleerida element, peavad olema unikaalsed
let valik2 = new Map([
    ['Kass', 'KassN'],
    ['Koer', 'KoerN'],
    ['Lehm', 'LehmN']
]);
for (const v6ti in valik) {//elemendi võtmed, asukoht indeksis
    if(valik.hasOwnProperty(v6ti)) {
//        console.log('v6ti' + v6ti);
    }
}
const array = Array.from(valik);
for (const i of array) {
//    console.log('array' + i);
}
valik.forEach(
    (value: string, value2: string) => {
//        console.log(value + ' ' + value2)
});
valik2.forEach(
    (value: string, v6ti: string) => {
 //       console.log(value + ' ' + v6ti)
});
tass1();
Nimeruum.tass();