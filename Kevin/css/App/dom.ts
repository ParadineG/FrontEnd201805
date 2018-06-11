'use strict';
console.log('klass.ts');

let omBool = true;
let omNumber = 0.000000012;
console.log(omNumber.toExponential());//1.2 * 10^(-8)
// toString() toExponential() toFixed()-ümardamine, toPrecision() - arvude kuvamine
omNumber = 12/0
omNumber = NaN;
console.log(Number.isFinite(omNumber));
// isFinite() isInteger(), isNaN(), isSafeinteger() 2^53-1,
omNumber = Number.MIN_SAFE_INTEGER;
Number.MAX_VALUE;
Number.EPSILON; //väikseim komaarv 0.0....01
Number.POSITIVE_INFINITY

// massiivid
let massiiv3 = [6, 7, 8, 9];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop();
massiiv3.shift();
massiiv3.unshift(12);
massiiv3.push(17);
massiiv3.reverse();
massiiv3.sort((a: number, b: number)=> a-b );

console.log(massiiv3);

let set3 = new Set ([6, 7, 8, 9]);
set3.add(12);
set3.delete(6);

console.log(set3.size + ' ' + set3.has(6));
set3.clear();
set3.has(7);

let map3 = new Map ([
    [2, 6],[3, 7],
    [4, 8],[5, 9],
]);
map3.set(9, 12);

console.log(map3);

let s6ne3 = 'Lorem Ipsum Ipsum';
s6ne3 = s6ne3.toLowerCase();
const s6ned = s6ne3.split(' ')
while (s6ne3.search('ipsum')!== -1) {
    s6ne3 = s6ne3.replace('ipsum', 'amet');
}
console.log(s6ned);
let arvuke = parseFloat('2.45678');
// matemaatika
const pi = Math.PI;
omNumber = Math.pow(12,2);
omNumber = Math.sqrt(16);
omNumber = Math.random() * 10;
omNumber = Math.floor(12.7);//round ceil 
omNumber = Math.abs(-1.2);
omNumber = Math.sin(Math.PI);
//kuupäev
const aeg = new Date(Date.now());
console.log('Aeg: ' + aeg.getDate());
aeg.setDate(21);
console.log('Aeg: ' + aeg.getDate());
// veatuvastus
try {
    throw 'ere';
} catch (error) {
    console.log(typeof(error))
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
