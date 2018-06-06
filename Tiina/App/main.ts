'use strict';
console.log('Hei hei TS');
//Tõene või väär
let kasTehtud: boolean=false;
//Numbrid
const kymnend: number = 6;
const hex = 0xfd02;
const binaar = 0b1010;
let octal = 0o732;
//Sõned
const lause: string = 'Täna on ilus ja päikesepaisteline päev.\n'+'Täna tutvume lähemalt typescriptiga.';
const vanus = 22;
const minuVanus = `Minu vanus on ${vanus}.

Tere tulemast.`;
//Massiivid
const massiiv: number[]=[1,4,7];
const massiiv2: Array<number>=[1,3,7];
const arv = massiiv2[1];
//Tuple(hoiab endas mitu erinevat tüüpi elementi)
const tuple: [string,number]=['Hei',15];
const s6ne = tuple[0];
//Loendajad
enum V2rv{Punane,Roheline,Kollane,Sinine}
const v2rv: V2rv = V2rv.Sinine;
// any, void
let poleKindel: any = 'Any, mis iganes see on';
poleKindel = 5;
const nimekiri: any[]=[2,'Hulahoop', 1.37,'Hi'];
nimekiri[1]='Muhvin on kassi nimi';
let muutuja = nimekiri[1];
const tervitus = nimekiri[3] as string;

function funktsioon(): void {
   console.log('Funktsioon');
   return;
}

//null, undefined
let un: string;
const u: undefined = undefined;
const n: null = null;//st ta ei eksisteeri

//never
function l6putuTsykkel(): never{
    while(true){
        console.log('aaaaaaaaaaa');
    }
}

//object - kõik ülejäänud elemendid peale eelnevate
const obj: object = l6putuTsykkel;//loogika on liigutatud objekti sisse
const obj2: object = {nimi: 'TuhaJuhan', vanus:32}

//var let 
/*for (var i=0; i<10;i++){
    setTimeout(function(){console.log(i);}, 200)
}
for (let i=0; i<10;i++){
    setTimeout(function(){console.log(i);}, 200)
}*/
function varLet(){
    var variable = 17;
    let variable2 =17;
    if(true){
    var variable=27;
    let variable2=27;
    }
    console.log(variable);// 27 undefines
    console.log(variable2);// 17 error
}
//varLet();

//destruktureerimine (object)
const sisend = [1,2,3,4,5,6];
const [a,b] = sisend;
const [c] = sisend;
const [esimene, ...ylejaanud] = sisend;
console.log(a+b);
console.log(c);
console.log(ylejaanud);
const [d,f, ...ylej22nud] = sisend;
console.log(`${d} ${f} ${ylej22nud}`);

const o = {
    a_1: 'ssds ',
    b_1: 1234,
    c_1: 'kar',
    d_1: 323
};
const kar=o.c_1
const {a_1,b_1, ...l6pp} = o;

console.log(a_1+b_1+l6pp.d_1);


function hoiaObjektAlles(terveObjekt:{x: string,/*kui on küsimärk, siis see on valikuline parameeter*/ y?: number}){
    const {x,y=2018}=terveObjekt;
    console.log(x+y);
}
hoiaObjektAlles({x:'Yo ',y:2019});

//spread
const mass = [1,2];
const mass2 = [5,3];
const suurMass = [1, ...mass, ...mass2, 8];

const vaikeV22rtused = {
    toit: 'Terav',
    hind: 'Kõrvetav',
    keskkond: 'Rahulik'
};
const maheKohvik = {
    ...vaikeV22rtused,
    toit: 'Mahe'
}

//interface 
interface IRuut {
    readonly x:number;
    y:number;
    z?:number;
}

interface IKuup extends IRuut {
    z?:number;
}

function saaAla({x,y,z=1}:IKuup){
    console.log(x*y*z);
}
const ruut:IRuut ={x:12,y:15};
//ruut.x = 16;
ruut.y = 12;
saaAla(ruut);

interface miniFunk{
    (sisend: string): boolean;
}
const miniFunk: miniFunk = (sisend: string) => false;
interface miniArray{
    [index: number]: string;
    
}
const minimassiiv: miniArray = ['Bob', 'Mark'];
const bob = minimassiiv[0];

//funktsioonid1
//nimetatud funktsioon
function summa(arv1: string, arv2: string): string;
function summa(arv1:number,arv2:number): number;
function summa(arv1: any, arv2: any): any{
    return arv1 + arv2;
}

console.log(summa('Tere ','pere!'));
console.log(summa(3,4));
//anonüümne funktsioon
const minuSumma:(arv1:number, arv2:number) => number  = function(arv1:number,arv2:number){return arv1+arv2}
console.log(minuSumma(8,7));
(function(arv1:number,arv2:number){return arv1+arv2;})(3,4);
const minuSumma1 = (arv1:number, arv2:number):number => arv1+arv2;//noolfunktsioon
console.log(minuSumma1(8,7))

//types
type Funktsioon = (sisend: string) => boolean;
type T2rn = 1| 2| 3 | 4 | 5 | 6;
const visatudT2rn: T2rn = 1; //Sarnane enumile
type Suvaline = 2 | 'Tere ' | false | undefined | null;
const suvaline: Suvaline = 'Tere ';

//m2rk !== m2rk2 | nad ei ole võrdsed, sümbol on alati unikaalne
const m2rk: symbol = Symbol('key');
const m2rk2: symbol = Symbol('key');

if(m2rk===m2rk2){
    console.log('Esimene');
}
else if(m2rk==m2rk2){
    console.log('Teine');
}
else{
    console.log('Muu');
}

//if else
/*=== !== == != < > <= >=*/
let arv3=26;
let arv4=10;
if(arv3+arv4===40){
    console.log('Esimene');
}
else if(2+2===3){
    console.log('2+2=3');
}
else{
    console.log('kumbki ei sobinud');
}
const  muutujad = arv3 > arv4 ? true : false;//kas arv3 on suurem kui arv4
console.log(muutujad);