'use strict'
console.log('dom.ts');

let omBool = true;
let omNumber = 0.000000012;
console.log(omNumber.toExponential()); //1.2 * 10 astmes -8
/* tostring() toExponential() - teaduslik notatsioon,
 tofixed(x)- ümardamine komakohtadega,
 toPrecision() - mitu arvu ekraanil soovite kuvada */

omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON; // Väikseim komaarv 0.00.....01
omNumber = Number.POSITIVE_INFINITY;
omNumber = 12 / 0;
omNumber= NaN;
console.log(Number.isFinite(omNumber));
/* isFinite(a), isInteger(a), isNan(a), isSafeInteger(a) (2 astmes 53-1 on maksimaalne arv)*/

let massiiv3 = [6, 7, 8, 9];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop(); //võtab viimase elemendi ära
massiiv3.shift(); //eemaldab esimese elemendi
massiiv3.unshift(12); //lisab elemendi algusesse
massiiv3.push(17); // lisab elemendi lõppu
massiiv3.reverse(); 
massiiv3.sort((a: number, b: number) => {
    console.log(a + ' ' + b);
    return a - b
}); // järjekorda (väiksemast suuremani)
console.log(massiiv3);

let set3 = new Set([6, 7, 8, 9]);
set3.add(12);
set3.delete(8);
console.log(set3.size + ' ' + set3.has(8));
set3.clear();

let map3 = new Map([
    [2, 6], [3, 7],
     [4, 8], [5, 9]]);

map3.set(9, 12);

let s6na3 = 'Tere pere pere';
s6na3 = s6na3.toLowerCase();

while (s6na3.search('pere') !== -1) {
    s6na3 = s6na3.replace('pere', 'kere');
}
const s6nad = s6na3.split(' ');
console.log(s6nad);
const arvuke = parseFloat('2.4567');

//matemaatika */
const pi = Math.PI;
omNumber = Math.pow(12, 2); //pow == astmed
omNumber = Math.sqrt(16); //ruutjuur
omNumber = Math.random() * 10; // random nr nullist 10ni
omNumber = Math.floor(12.7); // ümardatakse allapoole | round cell trunc
omNumber = Math.abs(-12); // muudab positiivseks
omNumber = Math.sin(3); // siinuse puhul mõõdetakse nurka radiaanides

/* kuupäev*/
const aeg = new Date(Date.now());
console.log(aeg.getDate);
aeg.setDate(21);
console.log('Aeg: ' + aeg.getDate());

/* vea tuvastus*/
try {
    throw 'ere';
} catch (error) {
    console.log(typeof(error));
    console.log(error);
}
throw ' ere';


