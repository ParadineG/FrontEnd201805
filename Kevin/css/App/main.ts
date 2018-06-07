/// <reference path='nimeroom.ts'/>
'use strict';

console.log('Hello TS');
//TÕENE JA VÄÄR - loogikaelement
const kasTehtud: boolean = false;
//NUMBRID
const kumnend: number = 6;
const hex = 0xFD02;
const binaar = 0b1010;
let octal = 0o732;
octal = 7
//SÕNED
const lause: string = 'Tere. \n'
                    + 'Täna meil programmeerimine';
const vanus = 29;
const minuVanus = 
    `Minu vanus on ${vanus}.

    Tere tulemast!`;
//MASSIVID
const massiiv: number[] = [1, 4, 7];
const massiiv2: Array<number> = [1, 5, 9];
const fikseeritud: ReadonlyArray<number> = massiiv2;
const arv = massiiv[0];

//TUPLE
const Tuple: [string, number] = ['tere', 15];
const sone = Tuple[0];

//LOENDAJAD
enum V2rv{punane,roheline, sinine};
const v2rv: V2rv = 2;
//ANY VOID
let poleKindel: any = 'Tere';
poleKindel = 5;
const nimekiri: any[] = [2,'hi', 5.32];
nimekiri[0] = 'tere';
const tervitus = nimekiri[1] as string;

function funktsioon(): void {
    console.log('hello');
    return;
}

//NULL, UNDEFINED
const u: undefined = undefined;
const n: null = null;
let un: string;

//NEVER
function tsukkel(): never{
    while (true) {console.log('dfd');}
}
//OBJECT - kõik ülejäänud peale eelmiste
const obj: object = tsukkel;
const obj2: object = {nimi: 'Juku', vanus: 25};

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
const sisend = [1, 2, 3, 4, 5];

const [esi, teine, ...ulejaanud] = sisend;

console.log(`${esi} ${teine} ${ulejaanud} `);

const o ={
    a: 'ssd',
    b: 950,
    c: 'kar',
    d: 442
};

const Memory = o.c;
const {a, b, ...l6pp} = o;

console.log(a + b + l6pp.d);

function hoiaObjektAlles(terveObjekt:{x: string, y?:number}) {
   const {x, y = 2018} = terveObjekt;
   console.log(x+y); 
}
hoiaObjektAlles({x: 'Tere', y: 2017});

//SPREAD
const mass = [1, 2];
const mass2 = [3, 4];
const suurMass = [1,...mass, ...mass2, 5];

const vaikeVaartused = {
    toit: 'terav',
    hind: 'kõrvetav',
    keskkond: 'Rahulik',
};
const maheKohvik = {
    ...vaikeVaartused,
    toit: 'Mahe',
};

//INTERFACE
interface IRuut{
    readonly x:number; 
    y: number;
    z?: number;
}
interface IKuup extends IRuut {
    z?: number;
}
function saaAla({x, y, z = 1}:IKuup) {
    console.log(x * y * z);
    
}
const ruut: IRuut = {x:12, y:15}
saaAla(ruut);

interface  IMiniFunktsioon { 
    (sisend: string): boolean;
}
const miniFunktsioon: IMiniFunktsioon = (sisend: string) =>  false ;


interface IminiArray {
    readonly [index: number]: string;
}
const minimassiiv: IminiArray = ['Juku', 'Kalle'];
const juku = minimassiiv[0];

//FUNKTSIOONID
function summa(arv1: number, arv2: number): number;
function summa(arv1: string, arv2: string): string;
function summa(arv1: any, arv2: any) {
    return arv1 + arv2;
}
console.log(summa(3,4))
console.log(summa('Tere ','pere!'))
//console.log(summa(3,4);
//const minuSumma = function(arv1: number, arv2: number) {return arv1 + arv2; };
//console.log(minuSumma(3,4));
//const minuSumma:(arv1: number, arv2: number) => number
//= function(arv1: number, arv2: number) {return arv1 + arv2; };
//(function(arv1: number, arv2: number) {return arv1 + arv2; })(3,4);
const minuSumma = (arv1: number, arv2: number) => arv1 +arv2; 
console.log(minuSumma(3,4))

//TYPES

type Funktsioon = (sisend: string) => boolean;
type tarn = 1 | 2 | 3 | 4 | 5 | 6;
const visatudtarn: tarn = 4;
type Suvaline = 2 | 'Tere' | false | undefined | null;
const suvaline: Suvaline = undefined;
//m2rk !== m2rk2 
const m2rk: symbol = Symbol("key");
const m2rk2: symbol = Symbol("key");

//IF, ELSE IFELSE Switch| === == !== != < > <= >= || &&
let arv3 = 26;
let arv4 = 43;
if (arv3 + arv4 === 699) {
    console.log('esimene');
} else if (arv3 + arv4 === 50) {
    console.log('teine');
} else {
    console.log('kolmas');
}

const muutujad = arv3 < arv4 ? true : false;
console.log(muutujad);
let v2rvus = 'Sinine;'
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

let kordus = true;
let tekst = '';
while (kordus) {
    tekst += 'ab';
    if(tekst.length >= 7){
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
}
while (kordus);
tekst = '';
//+ - * / % ** 
// = += -= *= /= ++ -- **= \\
for (let index = 0; index < 10; index++) {
    tekst += index;
    
}
console.log(tekst);
let tulemus = 2 + 3;
tulemus = 5 % 2; // 1 jääk
tulemus = 5 ** 2; // astmed
--tulemus; //24 (25 -1)
tulemus /= 2; //12 (24/2)
tulemus = 2 + 3 * 4; //14
tulemus = (2 + 3) * 4;//20
let list = [4, 5, 6]
for (const key in list) {
    if (list.hasOwnProperty(key)){
        console.log(key);
    }
}
for (const i of list) {
    console.log(i);
}
let valik = new Set (['Kass', 'Koer', 'Hamster']);
let valik2 = new Map ([
    ['Kass', 'Juku'],
    ['Koer', 'Malle'],
    ['Hamster', 'Paul']
]);
for (const v6ti in valik) {
    if (valik.hasOwnProperty(v6ti)){
    console.log(v6ti);
    }
}
const array = Array.from(valik)
for (const i of array ) {
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