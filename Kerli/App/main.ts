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
        console.log('v2ljund');
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
console.log(a + b + l6pp.d);
function cc (terveObjekt: {x: string, y?: number}) {
    const {x, y = 200} = terveObjekt;
    console.log(x, y);
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
    console.log(x * y * z);
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

