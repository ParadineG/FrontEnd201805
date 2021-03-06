'use strict';
console.log('dom.ts');
// dom 
const aside = document.getElementById('aside-1');
const asides = document.getElementsByTagName('aside');
// document.getElementsByClassName 
// document.getElementByName
// jQuery $('#aside-1');
const pealkiri = document.querySelector('header > h2') // esimene element mis ette satub
const pealkirjad =  document.querySelectorAll('header > h3') // kõik elemendid mis selle nimetusega
if (aside && asides.length >= 2) {
    console.log(aside);
    console.log(asides.item(1));
}
if(pealkiri && asides.length >= 1) {
    pealkiri.classList.add('lisa');
    const s6neKlass = pealkiri.getAttribute('class');
    if(s6neKlass) {
        const klassid = s6neKlass.split(' ');
        klassid.push('lisa3');
        pealkiri.setAttribute('class', klassid.join(' '));
    }

    const syndmus = pealkiri.addEventListener('click', () => {
        pealkirjad.item(0).classList.add('lisa')
        const nupp = document.createElement('BUTTON');
        nupp.addEventListener('click', ()=> {alert('Tere nupp')});
        const tekst = document.createTextNode('Click me!');
        nupp.appendChild(tekst); //appendChild - pane see textnode nupu sisse
        pealkirjad.item(0).appendChild(nupp);
        pealkiri.removeEventListener('click', syndmus);
     });
    pealkiri.addEventListener('click', syndmus);
    pealkiri.setAttribute('class', 'lisa lisa2');
    //pealkirjad.item(0).outerHTML = pealkiri.outerHTML;
    //pealkiri.outerHTML = pealkirjad.item(0).outerHTML;
    console.log(pealkirjad.item(0));
    
    }

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
// console.log(set3.size + ' ' set3.has(8));
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


    
