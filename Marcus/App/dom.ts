'use strict';
console.log('dom.ts');

let omBool = true;
let omNumber = 5345325.65;
let bNumber = 5.34e+6;
console.log(omNumber.toExponential()); //5.34532565e+6
/* toString() 
toExponential(x) - teaduslik, 
toFixed(x) - ümardamine (komakohtadega), 
toPrecision(x) - mitu arvu ekraanil soovite kuvada */

omNumber = Number.MIN_SAFE_INTEGER; //kõige väiksem väärtus, mis on toetatud.
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON; //väikseim komaarv 0.0....01 - (nt suurim veaühik).
omNumber = Number.POSITIVE_INFINITY;
omNumber = 12 / 0;
omNumber = NaN;

console.log(Number.isFinite(omNumber))
/* isFinite(x); isInteger(x); 
isNan(x) -Kas tegu on arvuga või mitte, nt nulliga jagamine, või NaN;
isSafeInteger(x) - (max arv(2 astmes 53 - 1)); */

let massiiv3 = [6, 7, 8, 9];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop(); //eemaldab viimase
massiiv3.shift(); //eemaldab esimese
massiiv3.unshift(12); //lisab esimese
massiiv3.push(17); //lisab lõppu uue elemendi
massiiv3.reverse(); //pöörab ümber
massiiv3.sort((a:number, b:number) => { //sorteerib
    console.log(a + ' ' + b);
    return a - b;
}); 

console.log(massiiv3);

let set3 = new Set ([6, 7, 8, 9]);
set3.add(12);
set3.delete(8);
console.log(set3.size+ ' ' + set3.has(8));
set3.clear();

let map3 = new Map([
    [2, 6], [3, 7],
    [4, 8], [5, 9],]
);
// 14.19