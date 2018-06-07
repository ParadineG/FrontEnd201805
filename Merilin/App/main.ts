/// <reference path='nimeroom.ts' />
'use strict';

console.log('Hello TS');

/* Tõene ja väär */
const kasTehtud: boolean = false;

/* Numbrid */
const kymnend: number = 6;
const hex = 0xFD02;
const binaar = 0b1010;
let octal = 0o732;
 
/* Sõned */
const lause: string = 'Tere tulemast' + 'koolitusele.\n' + 'Täna on programmeerimine';
const vanus = 29;
const minuVanusLauses = 
    `Minu vanus on ${vanus}.
    
    Tere tulemast`;
/* Massiivid (2 on keerukamatel juhtudel)*/
const massiiv: number[] = [1, 4, 7];
const massiiv2: Array<number> = [1, 5, 9];
const fikseeritud: ReadonlyArray<number> = massiiv2;
const arv = massiiv[2]; //7

/* Tuple -> hoiab rohkem kui ühte tüüpi informatsiooni */
const tuple: [string, number] = ['Tere', 15];
const s6ne = tuple[0];

/* Loendajad (loendaja tüüp)*/
enum V2rv {Punane, Roheline, Sinine}
const v2rv: V2rv = V2rv.Sinine;

/* any void -> ilma tüübita väärtused*/
let poleKindel: any = 'Tere';
poleKindel = 5;
const nimekiri: any[] = [2, 'Hi', 5.32];

nimekiri[0] = 'Tere';
const tervitus = nimekiri[1] as string;
function funktsioon(): void{             //void'iga ütled, et sa ei tagasta antud funktsioonist midagi
    console.log('hello function')
    return;                             //return on tagastamisfunktsioon
} 
/* null (väärtusena kasutatav) undefined (tüübina kasutatav, tuleb vaikimisi kaasa kui algväärtus on määramata)*/
let un: string;
const u: undefined = undefined;
const n: null = null;

/* never -> mine siia tsükli sisse ja ära sealt kunagi välju */
function l6putuTsykkel(): never {
    while (true) {console.log('ddfd'); }
}
/* object -> kõik ülejäänud on seda tüüpi peale eelmiste */
const obj: object = l6putuTsykkel;
const obj2: object = {nimi: 'Juku', vanus: 25};

/* var let const */
/* var ja let erinevus */
 function varLet() {
    var variable = 17;
    let variable2 = 17;
    if (true) {
        var variable = 27;  
        let variable2 = 27;  
    }
    console.log(variable);  // 27
    console.log(variable2);  // 17
};

/* Destruktureerimine */
const sisend = [1, 2, 3, 4, 5];
const [esi, teine, ...ylej22nud] = sisend;
const [c] = sisend;
console.log(esi + teine);
console.log(c);
console.log(ylej22nud);
/* console.log(`${esi} ${teine} ${c} ${ylej22nud}`) */
const o = {
    a: 'ssds',
    b: 1234,
    c: 'kar',
    d: 134
};
const kar = o.c;
const {a, b, ...l6pp} = o;
console.log(a + b + l6pp.d);

function hoiaObjektAlles(terveObjekt:{ x: string, y?: number }) {
    const {x, y = 2018} = terveObjekt;
    console.log(x + y);
}
hoiaObjektAlles({x: 'Tere ', y: 2017});

/* spread -> paneme elemente kokku */
const mass = [1, 2];
const mass2 = [3, 4];
const suurMass = [1, ...mass, ...mass2, 5];
const vaikeV22rtused = {
    toit: 'Terav',              // kui väärtusel on eelnevalt sees funktsioon, siis see funktsioon kaasa ei tule, tekib viga
    hind: 'Kõrvetav',
    keskkond: 'Rahulik',
};
const maheKohvik = {
    ...vaikeV22rtused,  // see rida peab olema enne uue info lisamist, muidu ei kirjutata üle
    toit: 'Mahe'
};
/* interface -> spetsiifilise objekt-tüübi loomiseks */
interface IRuut {
    x: number;   // kui lisad siia rea ette readonly, siis seda üle kirjutada edasi ei saa ruut.x = 134, tuleb veateade;
    y: number;
    z?: number;   //äkki on kolmemõõtmeline, võib aga ei pruugi olla
}
function saaAla({x, y, z = 1}: IKuup) {
    console.log(x * y * z);
}
interface IKuup extends IRuut {
    z?: number;
}
const ruut: IRuut = {x: 12, y: 15};
ruut.y = 10;
saaAla(ruut);
/* saaAla({x: 12, y: 15}); nii kirjutatakse pikalt välja */

interface IMiniFunk {
    (sisend: string): boolean;
}
const miniFunk: IMiniFunk = (sisend: string) => false;

interface IMiniArray {
    [index: number]: string;
}
const minimassiiv: IMiniArray = ['Juku', 'Kalle'];
    const juku = minimassiiv[0];

/* funktsioonid 
function summa(arv1 = 2, arv2 = 4) {     // function summa(arv1: number, arv2: number)
    return arv1 + arv2; 
} */

function summa(arv1: string, arv2: string) : string;
function summa(arv1: number, arv2: number) : number;
function summa(arv1: boolean, arv2: boolean) : boolean;
function summa(arv1: any, arv2: any) : any {
    return arv1 + arv2;
}

console.log(summa('Tere', ' pere'));
console.log(summa(3, 4));   // vastus 7
// console.log(summa(true, false))        // error
const minuSumma: (arv1: number, arv2: number) => number
 = function(arv1: number, arv2: number) {return arv1 + arv2; };  //see on anonüümne funktsioon
console.log(minuSumma(3, 4));  // vastus 7
(function(arv1: number, arv2: number) {return arv1 + arv2; })(3, 4);  // vastus 7
const minuSumma2 = (arv1 = 2, arv2 = 7) => arv1 + arv2;
console.log(minuSumma2(3, 4));  // vastus 7
console.log(minuSumma2()); // vastus 9

/* types */
type Funktsioon = (sisend: string) => boolean;
type T2rn = 1 | 2 | 3 | 4 | 5 | 6;
const visatudT2rn: T2rn = 4;
type Suvaline = number | 'Tere' | false | undefined | null;
const suvaline: Suvaline = 14;

// m2rk !== m2rk2 (ei ole võrdväärne), symbol on alati unikaalne, pole kunagi teisega võrdne 
const m2rk: symbol = Symbol("key");
const m2rk2: symbol = Symbol("key");
if (m2rk === m2rk2) {
        console.log('Esimene');
}   else if (m2rk == m2rk2) {
        console.log('Teine');
}   else {
        console.log('Muu');
}

/* if else switch */
/* === !== == != < > <= >= */
/* || (üks tingimustest on täidetud)  && (mõlemad tingimused peavad olema täidetud)  */
const arv3 = 26;
const arv4 = 43;
if (arv3 + arv4 === 30) {
        console.log('Esimene');
}   else if (2 + 2 === 3) {
        console.log('2 + 2 = 3');
}   else {
        console.log('Kumbki ei sobinud');
}
const muutujad = arv3 < arv4 ? true : false;  // kui arv3 on väiksem kui arv4, kui see on tõsi, siis tuleb väärtus enne koolonit (true), kui ei, siis väärtus peale koolonit (false)

let v2rvus = 'Sinine';
switch (v2rvus) {
    case 'Punane':
        console.log('Punane');
        break;
    case 'Sinine':
        console.log('Sinine');
    default:
        console.log('Muu');
}

/* for while do while -> tsüklid */

let kordus = true;
let tekst = '';
while (kordus) {
    tekst += 'ab'; 
    if(tekst.length >= 7) {
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
// nii on pikemalt välja kirjutatud   index = index + 2; 
for (let index = 0; index < 10; index++) {  // index++ ütleb, et suurenda arvu 1 võrra, index += 2 on suurenda 2 võrra
    tekst += index;
}
console.log(tekst);
    
/* tehted */
/*    +  -  *  /  %  **    */
/*    *  =  +=  -=  *=  /=  **=  ++  --    */
let tulemus = 2 + 3;
tulemus = 5 % 2;  // 1 - jääk
tulemus = 5 ** 2 // 25 - astmes 2
--tulemus; // 24 (see on 25 - 1) 
tulemus /= 2; // 12 (24 / 2)
tulemus = 2 + 3 * 4; // 14
tulemus = (2 + 3) * 4; // 20

let list = [4, 5, 6];
for (const key in list) {
    console.log(key);
}
for (const i of list) {
    console.log(i);
}
let valik = new Set(['Kass', 'Koer', 'Hamster', 'Kass']);
let valik2 = new Map([
    ['Kass', 'Juku'],
    ['Koer', 'Malle'], 
    ['Hamster', 'Paul']
]);
for (const v6ti in valik) {
    if (valik.hasOwnProperty(v6ti)) {
        console.log(v6ti);    // ei leia sisu Setis või Mapis
    }  
}
const array = Array.from(valik);
for (const i of array) {
    console.log(i);
}
valik.forEach((value: string, value2: string) => {console.log(value + ' ' + value2);});
valik2.forEach((value: string, v6ti: string) => {console.log(value + ' ' + v6ti);});

funkar2();
Nimeruum.funkar();