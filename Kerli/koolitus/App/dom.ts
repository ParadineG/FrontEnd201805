'use strict';
console.log('dom.ts');

let omBool = true;
let omNumber = 55555.55;
console.log(omNumber.toExponential());
omNumber= Number.MIN_SAFE_INTEGER;
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON;
omNumber = Number.POSITIVE_INFINITY;
omNumber= 12 / 2;
//console.log(Number.isFinite(omNumber));
let massiiv3 = [6, 7, 8, 9, 10];
massiiv3 = massiiv3.concat(massiiv3);

massiiv3.shift(); //eemaldab esimese
massiiv3.pop(); //eemaldab viimase
massiiv3.unshift(12);
//massiiv3.push(17); lükkab arvu 17 massiivi
massiiv3.reverse();
massiiv3.sort((a: number, b: number) => a - b); //suuruse järjekorras numbrid
massiiv3.sort((a: number, b: number) =>
{ //console.log(a + ' ' +  b)
return a- b});
//console.log(massiiv3);
let set3 = new Set([6, 7, 8, 9]);
set3.add(13);
set3.delete(8);
//console.log(set3.size + '' + set3.has(8));
set3.clear();

let map3 = new Map([[2, 6], [3, 5], [4, 6]]);
map3.set(9, 12); //lisad elemendi

let s6ne3 = 'Jaaniuss Hele Hele';
s6ne3 = s6ne3.toLowerCase();
s6ne3 = s6ne3.replace('hele', 'Juuli');
while (s6ne3.search('hele') !== -1) {
    s6ne3 = s6ne3.replace('hele', 'Juuli');
}
const s6ned = s6ne3.split(' ');
//console.log(s6ned);
const komArv = parseFloat('2.44444');

const pi = Math.PI;
omNumber = Math.pow(2, 2);
omNumber = Math.sqrt(16);
omNumber = Math.random() * 10;

let kp = new Date(Date.now());
//onsole.log(kp.getDate());
kp.setDate(21)
//console.log('aeg ' + kp.getDay());

try {
    throw'Kk';
} catch (error) {
    console.log(error)
}

const aside2 = document.getElementById('aside2');
const aside = document.getElementsByTagName('aside');
const pealkiri = document.querySelector('header > h2'); //tagastab esimese elemendi
const pealkirjad = document.querySelectorAll('header > h2'  ) //tagastab kõik elemendid
if (aside2 && aside.length >= 2) {
    console.log(aside2);
    console.log(aside.item(1));
}
if (pealkiri && aside.length >=1) {
    pealkiri.classList.add('lisa');
     //pealkiri.classList.add('lisa');
     //peakiri.setAttribute('class', 'lisa');
     const klassid = pealkiri.getAttribute('class');
     if (klassid) {
        const kl = klassid.split(' ');
        kl.push('lisa3');
       pealkiri.setAttribute('class', kl.join(' '));

     }
     const syndmus = () => {
        pealkirjad.item(0).classList.add('lisa');
        const nupp = document.createElement('BUTTON');
        nupp.addEventListener('click', () => {alert('Juust');});
        const tekst = document.createTextNode('Klikk');
        nupp.appendChild(tekst); //pane element sisse
        pealkirjad.item(0).appendChild(nupp);
        pealkiri.removeEventListener('click', syndmus);
    };
        pealkiri.addEventListener('click', syndmus);
    // pealkirjad.item(0).outerHTML = pealkiri.outerHTML;
    // pealkiri.outerHTML = pealkirjad.item(0).outerHTML;
     console.log(pealkirjad.item(0));
}
