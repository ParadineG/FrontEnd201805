'use strict'
console.log('dom.ts');

const aside = document.getElementById('aside-1');
const asides = document.getElementsByTagName('asides');
// document.getElementsByClassName
// document.getElementsByName
// $('#aside-1'); jquery
const pealkiri = document.querySelector('header > h2'); // ainult esimene leitud element
const pealkirjad = document.querySelectorAll('header > h3'); // kõik leitud elemendid
if (aside && asides.length >= 2) {
    console.log(aside);
    console.log(asides.item(1));
}
if (pealkiri && asides.length >= 1) {
    pealkiri.classList.add('lisa');
    const s6naKlass = pealkiri.getAttribute('class');
    if(s6naKlass) {
        const klassid = s6naKlass.split(' ');
        klassid.push('lisa3');
        //klassid.join('');
        pealkiri.setAttribute('class', klassid.join(' '));
    }
   // pealkiri.setAttribute('class', 'lisa lisa2');

    const syndmus = () => {
        pealkirjad.item(0).classList.add('lisa');
        const nupp = document.createElement('BUTTON');
        nupp.addEventListener('click', () => {alert('Tere nupp')});
        const tekst = document.createElement('Vajuta mind');
        nupp.appendChild(tekst);
        pealkirjad.item(0).appendChild(nupp);
        pealkiri.removeEventListener('click', syndmus);
    };
     pealkiri.addEventListener('click', syndmus);
    //pealkirjad.item(0).outerHTML = pealkiri.outerHTML;
    //pealkiri.outerHTML = pealkirjad.item(0).outerHTML;
    console.log(pealkirjad.item(0));
}



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
/* try {
    throw 'ere';
} catch (error) {
    console.log(typeof(error));
    console.log(error);
}*/
// throw ' ere';




