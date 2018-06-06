'use strict';

console.log('Hello TS');
/* Tõene ja väär*/ 
const kasTehtud: boolean = false;
/* Numbrid */
const kymnend: number = 6;
const hex = 0xFD02;
const binaar = 0b1010;
let octal = 0o732;
octal = 7;
/* Sõnad */
const lause: string = 'Tere tulemast' + ' koolitusele\n' 
                    + 'Täna meil programmeerimine';
const vanus = 29;
const minuVanus = 
    `Minu vanus on ${vanus}.
    
    Tere tulemast!`;

/* Massiivid */
const massiiv: number[] = [1, 4, 7];
const massiiv2: Array<number> = [1,5, 9];
const fikseeritud: ReadonlyArray<number> = massiiv;
const arv = massiiv[3]; // 7

/* Tuple */
const tuple: [string, number] = ['Tere', 15];
const sona = tuple[0];

/* Loendajad */
enum V2rv {Punane, Roheline, Sinine}
const v2rv: V2rv = V2rv.Sinine;

/* any void */
let poleKindel: any = 'Tere';
poleKindel = 5;
const nimekiri: any[] = [2, 'Hi', 5.32];
nimekiri[0] = 'Tere';
const tervitus = nimekiri[1] as string;

function funktsioon(): void {
     console.log('Hello function');

     return; 
}
/* null undefined */
let un: string;
const u: undefined = undefined;
const n: null = null;

/* nver */
function l6pututsykkel(): never {
    while(true) {console.log('ddfd'); }
}

/* object - kõik ülejäänud peale eelmiste */
const obj: object = l6pututsykkel;
const obj2: object = {nimi: 'Juku', vanus:25};

/* var let */
function varLet() {
for (var i = 0; i > 10; i++) {
    setTimeout(function() { console.log(i); }, 200);
}

for (var i = 0; i > 10; i++) {
    setTimeout(function() { console.log(i); }, 200);
}


    var variable = 15;
    let variable2 = 15;
    if (false) {
        var variable = 27;
        let variable2 = 27;
    }
     console.log(variable); //27 undefined
     console.log(variable2); // 17 error
}
//varLet();


/*Destruktureerimine */
const sisend = [1, 2, 3, 4, 5];
//const [a, b] = sisend;
//const [c] = sisend;
const [esi, teine, ...ylej22nud] = sisend;
//console.log(a + b);
//console.log(c);
console.log(`${esi} ${teine} ${ylej22nud}`);

const o = {
    a: 'abc',
    b: 1234,
    c: 'kar',
    d: 321
};
const kar = o.c;
const {a, b, ...l6pp} = o;
console.log(a + b + l6pp.d);

function hoiaObjektAlles(terveObjekt:  {x: string, y?: number }) {
    const {x, y = 2018} = terveObjekt;
    console.log(x + y);
}
hoiaObjektAlles({x: 'Tere ', y: 2017});

/* spread (eelmise abil võtsime lahti, selle abil paneme kokku) */
const mass = [1, 2];
const mass2 = [3, 4];
const suurMass = [1, ...mass, ...mass2, 5];

const vaikeV22rtused = {
    toit: 'Terav',
    hind: 'kõrvetav',
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
 //ruut.x = 134;
 ruut.y = 10;
 saaAla(ruut);


 interface MiniFunk {
    (sisend: string): boolean;
 }
 const miniFunk: MiniFunk = (sisend: string) => false;

 interface MiniArray {
    [index: number]: string;
    
 }
 const minimassiiv: MiniArray = ['Juku', 'Kalle'];
 const juku = minimassiiv[0];