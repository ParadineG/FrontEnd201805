'use strict';
console.log('dom.ts');

let omBool = true;
let omNumber = 0.0000000012;
console.log(omNumber.toExponential()); //0.0000000012 * 10 astmes -9
/* toString()
toExponential()<- nö teaduslik versioon
toFixed(s)<- ümardamine komakohtadega
toPrecision<- mitu arvu ekraanil soovite kuvada
*/
omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MIN_VALUE;
omNumber = Number.EPSILON; // väikseim komaarv
omNumber = Number.POSITIVE_INFINITY;
omNumber = 12 / 0;
omNumber = NaN;
console.log(Number.isFinite(omNumber));


let massiiv3 = [6, 7, 8, 9];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop();
massiiv3.shift();
massiiv3.unshift(12);
massiiv3.push(17);
massiiv3.reverse();
massiiv3.sort((a: number, b:number)=> { 
    console.log(a + ' ' + b);
    return a-b 

});
console.log(massiiv3);
let set3 = new Set([6, 7, 8, 9]);
set3.add(12);
set3.delete(8);
console.log(set3.size + ' ' set3.has(8));
set3.clear();

let map3 = new Map([
    [2, 6], [3, 7],
    [4, 8], [5,9]]);

map3.set(9, 12);

let s6ne3 = 'Tere pere';
s6ne3 = s6ne3.toLowerCase();
while ( s6ne3.search('koer') !== -1) {
    s6ne3 = s6ne3.replace('pere', 'koer');
}
const s6ned3 = s6ne3.split(' ')
console.log(s6ned3);
const arvuke = parseFloat('2.45633');

/* matemaatika */

const pi = Math.PI;
omNumber = Math.pow(12, 2);
omNumber = Math.sqrt(16);
omNumber = Math.random() * 10;
omNumber = Math.floor(12.7); //allapoole ümardamine, round, ceil
omNumber = Math.abs(-12.7); //tehakse positiivseks
omNumber = Math.sin(3);

/* kuupäev */

const aeg = new Date(Date.now());
console.log(aeg.getDate());
aeg.setDate(21);
console.log('Aeg: ' +  aeg.getDate());

// viga kui arvuti ja kasutaja suhtlusel on tekkinud viga mingisugune
try{
    throw 'tere';
}catch (error){
    console.log(typeof(error));
    console.log(error);
}


    
