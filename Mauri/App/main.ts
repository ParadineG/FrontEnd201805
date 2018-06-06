"use strict";

console.log("Hello TS!");

/* Boolean: tõene ja väär */
let kasTehtud: boolean = false;

/* Numbrid */
let kymend: number = 6;
let hex = 0xFD002;
let binaar = 0b1010;
const octal = 0o732;
binaar = 10;

/* Sõned */
let lause: string = "Tere tulemast koolitusele!\n" + "Täna me programmeerime! :D";
let vanus = 30;
let minuVanus =
    `Minu vanus on ${vanus}.

Tere tulemast!`;

/* Massiivid */
const massiiv: number[] = [1, 4, 7];
const massiiv2: Array<number> = [1, 5, 9];
const fikseeritud: ReadonlyArray<number> = massiiv2;
const arv = massiiv[0];

/* Tuple */
const tuple: [string, number] = ["Tere", 15];
const s6ne = tuple[0];

/* Loendajad */
enum V2rv { Punane, Roheline, Sinine };
const v2rv: V2rv = V2rv.Sinine;

/* any void */
let poleKindel: any = "Tere";
poleKindel = 5;
const nimekiri: any[] = [2, "Hi", 5.32];
// Const ei takista elemendi sisu muutmist vaid elemendi endi muutmist
let muutuja = nimekiri[0];
const tervitus = nimekiri[1] as string;

function funktsioon(): void {
    console.log("Hello function!");
}

/* null, undefined */
let k: string;
const u: undefined = undefined;
const n: null = null;

/* Never */
function l6putuTsykkel(): never {
    while (true) {
        console.log("Jama");
    }
}

/* Object - kõik ülejäänud */
const obj: object = l6putuTsykkel;
const obj2: object = { nimi: 'Juku', vanus: 25 };

/* var, let, const */

/*
for (let i = 0; 1 < 10; i++) {
    setTimeout(function () { console.log(i); }, 200);
}
*/

/* Destructureerimine */
const sisend = [1, 2, 3, 4, 5];
const [c] = sisend;
const [esimene, teine, ...ylej22nud] = sisend;
console.log(esimene + teine);
console.log(c);
console.log(`${esimene} ${teine} ${ylej22nud}`);

const o = {
    a: "tekstA ",
    b: 1234,
    c: "kar",
    d: 154
};
const kar = o.c;
const { a, b, ...l6pp } = o;

console.log(kar);
console.log(a + b + " " + l6pp.d);

// Kui muutuja taga on '?' (nagu y?:), siis see muutuja on valikuline ja ei pea seda funtiooni kutsudes kaasa andma.
function hoiaObjektAlles(terveObjekt: { x: string, y?: number }) {
    const { x, y = 2018 } = terveObjekt;
    console.log(x + y);
}

hoiaObjektAlles({ x: "Tere ", y: 2017 });

/* spread */
const mass = [1, 2];
const mass2 = [3, 4];
const suurMass = [1, ...mass, ...mass2, 5];

console.log(suurMass);

const vaikeV22rtused = {
    toit: "Terav",
    hind: "K6rvetav",
    keskkond: "Rahulik"
};

const maheKohvik = {
    ...vaikeV22rtused,
    toit: "Mahe",
};

console.log(maheKohvik);

/* Interface */
interface IRuut {
    x: number;
    y: number;
}

interface IKuup extends IRuut {
    z?: number;
}

function saaAla({ x, y, z = 1 }: IKuup) {
    console.log(x * y * z);
}
const ruut: IRuut = { x: 15, y: 15 };
saaAla({ x: 12, y: 15, z: 20 });
saaAla(ruut);

interface IMiniFunk {
    (sisend: string): boolean;
}

const miniFunk: IMiniFunk = (sisend: string) => false;

interface IMiniArray {
    [index: number]: string;
}

const miniMassiiv: IMiniArray = ["Juku", "Mari"];
const juku = miniMassiiv[0];
console.log(juku);

/* Funktsioonid */
function summa(arv1: number, arv2: number) {
    return (arv1 + arv2);
}

console.log("Summa on: " + summa(5, 20));
console.log("Summa on: " + summa(55, 20));


const minuSumma = function (arv1: number, arv2: number) { return arv1 + arv2; };
console.log("Minu summa on: " + minuSumma(25, 10));
console.log("Minu summa on: " + minuSumma(60, 10));
console.log((function (arv1: number, arv2: number) { return arv1 + arv2; })(10, 20));

const minuSummaTeine = (arv1: number, arv2: number) => {
    return arv1 + arv2;
}
console.log("Minu summa teine: " + minuSummaTeine(20, 55));

const minuSummaKolmas = (arv1: number, arv2: number) => arv1 + arv2;
console.log("Minu summa kolmas: " + minuSummaKolmas(50, 55));

/* Tüübid */
type Funktsioon = (sisend: string) => boolean;
// Lubab ainult määratud numbreid
type T2rn = 1 | 2 | 3 | 4 | 5 | 6;
// "T2rn = 7" ei töötaks
const visatudT2rn: T2rn = 4;
console.log(visatudT2rn);

type Suvaline = number | "Tere" | false | undefined | null;
const suvaline: Suvaline = 20;

// m2rk !== m2rk2
const m2rk: symbol = Symbol("key");
const m2rk2: symbol = Symbol("key");

/* if else */
if (m2rk === m2rk2) {
    console.log("Tõene");
} else {
    console.log("Väär");
}

// ===, ==, !==, !=, <, <=, >, >=
// || &&
let arv3 = 66;
let arv4 = 47;
if (arv3 + arv4 > 113 || 20 > 10) {
    console.log("Tõsi");
} else if (arv3 === arv4) {
    console.log("Väär");
} else {
    console.log("Jama");
}

// Kiire if lause
const muutujad = arv3 < arv4 ? "arv3 on väiksem" : "arv3 on suurem";
console.log(muutujad);