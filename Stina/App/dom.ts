'use strict';
console.log('dom.ts');
/* dom */ 
const aside = document.getElementById('aside-1');
const asides = document.getElementsByTagName('aside');

// document.getElementsByClassName
// document.getElementsByName
// $('#aside-1'); // Jquery
const pealkiri = document.querySelector('header > h2');  // ainult esimene leitud element
const pealkirjad = document.querySelectorAll('header > h3'); // kõik leitud elemendid
if (aside && asides.length >= 2) {
    console.log(aside);
    console.log(asides.item(1));
}
if (pealkiri && asides.length >= 1) {
    pealkiri.classList.add('lisa');
    const s6neKlass = pealkiri.getAttribute('class');
    if(s6neKlass) {
        const klassid = s6neKlass.split(' ');
        klassid.push('lisa3');
        pealkiri.setAttribute('class', klassid.join(' '));
    }
    const syndmus = () => { 
        pealkirjad.item(0).classList.add('lisa');
        const nupp = document.createElement('BUTTON');
        nupp.addEventListener('click', () => {alert('Tere nupp'); });
        const tekst = document.createTextNode('Vajuta mind');
        nupp.appendChild(tekst);
        pealkirjad.item(0).appendChild(nupp);
        pealkiri.removeEventListener('click',syndmus);
     });
     pealkiri.addEventListener('click', syndmus);
    // pealkirjad.item(0).outerHTML = pealkiri.outerHTML;
    // pealkiri.innerHTML = '<em>Hello Typescript</em>';ˇ
    console.log(pealkirjad.item(0));
    

}

let omBool = true; 
let omNumber = 0.000000012;
console.log(omNumber.toExponential());  // 1.2 * 10 astmes -8

/* toString() toExpontential(x) - teaduslik notatsioon,
 toFixed(x) - ümardamine komakohtadega,
 toPrecision(x) - mitu arvu ekraanil soovite kuvada  */

omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON; // väikseim komaarv 0.0....01
omNumber = Number.POSITIVE_INFINITY;
omNumber = 12 / 0;
omNumber = NaN;
console.log(Number.isFinite(omNumber));

/* isFinite(x)
 isInteger(x) isNan(x) isSafeInteger(x) - (2 astmes 53 - 1) */

let massiiv3 = [6, 7, 8, 9];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop();
massiiv3.shift();
massiiv3.unshift(12);
massiiv3.push(17);
massiiv3.reverse();
massiiv3.sort((a: number, b: number) => {
    console.log(a + ' ' + b);
    return a - b;
});
console.log(massiiv3);
let set3 = new Set ([6, 7, 8, 9]);
set3.add(12);
set3.delete(8);
console.log(set3.size + ' ' + set3.has(8));
set3.clear();

let map3 = new Map([
    [2, 6], [3, 7],
    [4, 8], [5, 9]]);
map3.set(9, 12);

let s6ne3 = 'Tere pere pere';
s6ne3 = s6ne3.toLowerCase();

while (s6ne3.search('pere') !== -1) {
    s6ne3 = s6ne3.replace('pere', 'kere');
}

const s6ned = s6ne3.split(' ');
console.log(s6ned);
const arvuke = parseFloat('2.4567');

/* matemaatika */
const pi = Math.PI;
omNumber = Math.pow(12, 2);
omNumber = Math.sqrt(16);
omNumber = Math.random() * 10;
omNumber = Math.floor(12.7); // round ceil trunc
omNumber = Math.abs(-12.7);
omNumber = Math.sin(3);

/* Kuupäev */
const aeg = new Date(Date.now());
console.log(aeg.getDate());
aeg.setDate(21);
console.log('Aeg: ' + aeg.getDate());

try {
    throw 'ere';
} catch (error) {
    console.log(typeof(error));
    console.log(error);
}

const aside = document.getElementById('aside-1');
if (aside) {
    console.log(aside);
}









