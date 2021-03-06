'use strict';
console.log('dom.ts');
/* dom */
const aside = document.getElementById('aside-1');
const asides = document.getElementsByTagName('aside');
// document.getElementsByClassName
// document.getElementsByName
// $('#aside-1'); - sellega sai Jquery's kasutada
const pealkiri = document.querySelector('header > h2'); // - tagastab ainult esimese elemendi, mille ta leiab
const pealkirjad = document.querySelectorAll('header > h3'); // - tagastab kõik elemendid, mille ta leiab
if (aside) {
    console.log(aside);
    console.log(asides.item(1));
}    
if (pealkiri && asides.length >= 1) {
    pealkiri.classList.add('lisa');
    const s6neKlass = pealkiri.getAttribute('class');
    if (s6neKlass) {
        const klassid = s6neKlass.split(' ');
        klassid.push('lisa3');
        pealkiri.setAttribute('class', klassid.join(' '));
    }
    
const syndmus = () => {
    pealkirjad.item(0).classList.add('lisa')
    const nupp = document.createElement('BUTTON');
    nupp.addEventListener('click', () => { alert('Tere nupp');});
    const tekst = document.createTextNode('Vajuta mind');
    nupp.appendChild(tekst);
    pealkirjad.item(0).appendChild(nupp);
    pealkiri.removeEventListener('click', syndmus);
};
pealkiri.addEventListener('click', syndmus);

    //pealkirjad.item(0).outerHTML = pealkiri.outerHTML;
    //pealkiri.innerHTML = '<em>Hello Typescript</em>';
    console.log(pealkirjad.item(0));
}


let omBool = true;
let omNumber = 0.000000012;
console.log(omNumber.toExponential());  // 1,2 * 10 astmes -8
/* toString() - prindib tavalist sisu välja; toExponential(x) - teaduslik notatsioon; 
toFixed(x) - ümardamine (komakohtadega); toPrecision() - mitu arvu ekraanile kuvatakse */

omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON; // väikseim komaarv 0.000....01
omNumber = Number.POSITIVE_INFINITY; 
omNumber = 12 / 0;
omNumber = NaN;
console.log(Number.isFinite(omNumber));
/* isFinite() - kontrollib, kas arvu väärtus on lõpmatus või on see lõplik arv (positive_infinity); isInteger() - kas arv on täisarv; 
isNan() isSafeInteger() - max on 2 astmes 53 - 1  */

let massiiv3 = [6, 7, 8, 9, 10];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop();
massiiv3.shift();
massiiv3.unshift(12);
massiiv3.push(17);
massiiv3.reverse();
massiiv3.sort((a: number, b: number) => a - b);
console.log(massiiv3);

let set3 = new Set ([6, 7, 8, 9]);
set3.add(12);
set3.delete(8);
console.log(set3.size + ' ' + set3.has(8));
set3.clear(); // kustutab kõik ära

let map3 = new Map([
    [2, 6], [3, 7],
    [4, 8], [5, 9]]);
map3.set(9, 12);

let s6ne3 = 'Tere pere';
s6ne3 = s6ne3.toLowerCase();
s6ne3 = s6ne3.replace('pere', 'kere');
const s6ned = s6ne3.split(' ');
console.log(s6ne3);
const arvuke = parseFloat('2.45633');

/* matemaatika */
const pi = Math.PI;
omNumber = Math.pow(12, 2); 
omNumber = Math.sqrt(16);
omNumber = Math.random() * 10;
omNumber = Math.floor(12.7);  // ümardab 12; veel on round, ceil ja trunc
omNumber = Math.abs(-12.7);  // absoluutväärtus, arv muudetakse positiivseks
omNumber = Math.sin(3);   // siinus, nurga mõõtmine radiaanides (Math.sin(Math.PI) - oleks poolring

/* Kuupäev */
const aeg = new Date(Date.now());
console.log(aeg.getDate());
aeg.setDate(21);
console.log('Aeg: ' + aeg.getDate());

/* vea tuvastus */ 
try {
    throw 'ere';
} catch (error) {
    console.log(typeof(error));
    console.log(error);
}

