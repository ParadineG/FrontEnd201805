'use strict';

console.log('Hello TS');
//tõene ja väär
const kasTehtud: boolean = false;
//numbrid
const kumnend: number = 6;
const hex = 0xFD02;
const binaar = 0b1010;
let octal = 0o732;
octal = 7
//sõned
const lause: string = 'Tere. \n'
                    + 'Täna meil programmeerimine';
const vanus = 29;
const minuVanus = 
    `Minu vanus on ${vanus}.

    Tere tulemast!`;
//massiivid
const massiiv: number[] = [1, 4, 7];
const massiiv2: Array<number> = [1, 5, 9];
const fikseeritud: ReadonlyArray<number> = massiiv2;
const arv = massiiv[0];

//Tuple
const Tuple: [string, number] = ['tere', 15];
const sone = Tuple[0];

//Loendajad
enum Varv{punane,roheline, sinine};
const varv: Varv = 2;
//any void
let poleKindel: any = 'Tere';
poleKindel = 5;
const nimekiri: any[] = [2,'hi', 5.32];
nimekiri[0] = 'tere';
const tervitus = nimekiri[1] as string;

function funktsioon(): void {
    console.log('hello');
    return;
}

//null, undefined
const u: undefined = undefined;
const n: null = null;
let un: string;

//never
function tsukkel(): never{
    while (true) {console.log('dfd');}
}
//object - kõik ülejäänud peale eelmiste
const obj: object = tsukkel;
const obj2: object = {nimi: 'Juku', vanus: 25};

//var let const
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


//Destruktureerimine
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

//spread
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

//interface
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