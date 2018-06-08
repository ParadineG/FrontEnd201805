/// <referance path='nimeroom.ts'/>
'use strict';

console.log('Hello TS');
/* Tõene ja väär */
const KasTehtud: boolean = false;

/*  Numbrid */
const kymnend: number = 6;
const hex = 0xFD02;
const binaar = 0b1010;
let octal = 0o732;
octal = 10;
/* Sõnad */
const lause: string = 'Tere tulemast' + 'koolitusele.\n' + 
    'Täna on meil programeerimine';
const vanus = 25;
const minuVanusLauses = 
    `Minu vanus on ${vanus}.
    Tere tulemast!`;

/* massiivid */
const massiiv: number[] = [1,4,7];
const massiiv2: Array<number> = [1, 5, 9,];
const arv = massiiv[0]; 
const fikseeritud: ReadonlyArray<number> = massiiv2;

//* alternatiivne võimalus kommentaarideks 
/* Tuple */
const tuple: [string, number] = ['Tere', 15];
const s6na = tuple[0];

/* Loendajad */
enum V2rv {Punane, Roheline = 2, Sinine}
const v2rv: V2rv = V2rv.Sinine;

/* any void */
let poleKindel: any = 'Tere';
poleKindel = 5;
const nimekiri: any[] = [2, 'Hi', 5.32];
nimekiri [0] = 'Tere';
const tervitus = nimekiri[1] as string;
function funktsioon(): void { 
    console.log('hello');
    return; 
};
/* null undefined */
let un: string;
const u: undefined = undefined;
const n: null = null;

/* never */
function l6putuTsykkel(): never {
    while (true) {console.log('ddfd');}
};

/* object - kõik ülejäänud peale eelmiste*/
const obj: object = l6putuTsykkel;
const obj2: object = {nimi: 'Juku', vanus: 25};

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
const sisend = [1, 2, 3, 4, 5];
const [a, b] = sisend;
const [c] = sisend;
const [esimene, ,...ylej22nud] = sisend;
console.log(a + b);
console.log(c);
console.log(ylej22nud);
console.log(`${a} ${b} ${ylej22nud}`);
const o = {
    a1: 'ssds',
    b2: 1234,
    c3: 'kar',
    d4: 134
};
const kar = o.c3;
const {a1, b2, ...l6pp} = o;
console.log(a1 + b2 + l6pp.d4);

function hoiaObjektAlles(terveObjekt: {x: string, y?: number }) {
    const {x, y = 2018} = terveObjekt;
    console.log(x + y);
}
hoiaObjektAlles({x: 'Tere ', y: 2017});

/* spread */
const mass = [1, 2];
const mass2 = [3, 4];
const suurMass = [1, ...mass, ...mass2, 5];
console.log(suurMass);

const vaikeV22rtused = {
    toit:'Terav',
    hind: 'Kõrvetav',
    keskkond: 'Rahulik',
};
const maheKohvik = {
    ...vaikeV22rtused,
    toit: 'Mahe' // (hilisem) kirjutab vaikeväärtuse üle
};
console.log(maheKohvik);

/* interface */
interface IRuut { 
    readonly x: number; 
    y: number;
    z?: number;
}
interface IKuup extends IRuut {
    z?: number;
}
function saaAla({x, y, z=1}: IRuut) {
    console.log(x * y * z);    
}
const ruut: IRuut = {x: 12, y: 16};
// ruut.x = 134; // readonly keelab ülekirjutamise ära
ruut.y = 10;
saaAla (ruut);


interface miniFunk{
    (sisend: string): boolean;
}
const miniFunk: miniFunk = (_sisend: string) => false ;
interface miniArray {
    [index: number]: string;
}

const minimassiiv: miniArray =  ['Juku', 'Kalle'];
const juku = minimassiiv [0];

/* funktsioonid */
function summa(ax:number, bx:number):number;
function summa(ax:string, bx:string):string;
function summa(ax:any, bx:any):any {
    return ax + bx;
}
console.log(summa('Tere', 'pere!'));
console.log(summa(3,4));
// console.log(summa(true, false)); // -töötab booleaniga
const minuSumma: (ax:number, bx: number) => number
     = function(ax: number, bx: number) {return ax + bx;}
console.log(minuSumma(3,5));
const minuSumma2 = (ax:number, bx: number) => ax + bx;
console.log(minuSumma2(6,6));

/* types */
type Funktsioon = (sisend: string) => boolean;
type T2rn = 1 | 2 | 3 | 4 | 5 | 6;
const visatudT2rn: T2rn = 4;
type Suvaline = 2 | 'Tere' | false | undefined | null;
const Suvaline: Suvaline = false;

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
let arv5 = 26;
let arv6 = 43;
if((arv5 + arv6 === 79) || (arv5 < arv6)) { //üks või teine täidetud
    console.log('36 + 43 === 79');
} 
else if (arv5/arv6>1) {
    console.log('2 + 2 === 16')
}
else{
    console.log('Kumbki ei sobinud')
}
const muutujad = arv5 < arv6 ? true : false;

let key = "Sinine"
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

let kordus = true;
let tekst = '';

do {
    console.log(`do jookseb alati ühe korra olenemata while konditsioonist`)
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

for (let i = 0; i < 10; i++) {
    tekst += i;
}
console.log(tekst)

//TEHTED
let tulemus = 2 + 3;
tulemus = 5 % 2; //jääk: 1
tulemus = 5 ** 2; //25 
tulemus **= 2 // tulemus = tulemus ** 2
--tulemus; // tulemus = tulemus - 1
tulemus /= 2; // tulemus = tulemus / 2

let list = [4,5,6]
for (const key in list) {
    console.log(key);//[0,1,2] annab iga key indexi arrays
}
for (const i of list) {
    console.log(i); // [4,5,6]
}

// korduvaid elemente ei saa olla Set([array])
let set = new Set(['Kass', 'Koer', 'Hamster', 'Kass']);
//console.log(set) = 'Kass', 'Koer', 'Hamster'
/*
let map = new Map([
    [Kass: 'Oss'],
    [Koer: 'Muki'],
    [Hamster: 'rotike']
]);*/
for (const x in set) {
    console.log(x);
}
for (const i of Array.from(set)) {
    console.log(i); 
}
set.forEach( (value: string, value2: string) => {
    console.log(`${value}  ${value2}`);
});

//map.forEach( (value: string, value2: string) => {
//    console.log(`${value}  ${value2}`);
//});

funkar2();
Nimeruum.funkar();