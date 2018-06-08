'use strict';
console.log('dom.ts');

/*dom */
const aside = document.getElementById('aside-1');//tagastab kas html elementi või 0
const asides = document.getElementsByTagName('aside');//tagastab massiivi, mitmuses
// document.getElementsByClassName
// document.getElementsByName vormide jaoks
// $('#aside-1');//Jquery
const pealkiri = document.querySelector('header > h2');//tagastab ainult esimese leitud elemendi
const pealkirjad = document.querySelectorAll('header > h2');//tagastab kõik leitud elemendid
if (aside) {
    console.log(aside);
    console.log(asides.item(1));
}
if (pealkiri && asides.length >=1) {
    pealkiri.classList.add('lisa');
    const s6neKlass = pealkiri.getAttribute('class');
    if (s6neKlass) {
        const klassid = s6neKlass.split(' ');
        klassid.push('lisa3');
        pealkiri.setAttribute('class', klassid.join(' '));
    }
    const syndmus = () => {
        pealkirjad.item(0).classList.add('lisa'); 
        const nupp = document.createElement('BUTTON');
        nupp.addEventListener('click', () => { alert ('Tere nupp')});
        const tekst = document.createTextNode('Vajuta mind');
        nupp.appendChild(tekst); //pane see node selle nupu sisse
        pealkirjad.item(0).appendChild(nupp);
        pealkiri.removeEventListener('click', syndmus); 
    };
    pealkiri.addEventListener('click', syndmus);
    //pealkiri.setAttribute('class', 'lisa lisa2');
   // pealkirjad.item(0).outerHTML = pealkiri.outerHTML;
    pealkiri.innerHTML = '<em>Hello Typescript</em>';//muutis pealkirja ära
    console.log(pealkirjad.item(0));
    
}
let omBool = true;
let omNumber = 0.0000000012; 
console.log(omNumber.toExponential());///1.2 * 10 astmes -9
/* toString() toExponential(x)- teaduslik, 
toFixed(x)-ümardamine komakohtadega, 
toPrecision()-mitu arvu ekraanil soovite kuvada, kui näiteks arv 12,57, siis pannes toPrecision(2) annab arvu 12*/
omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON; //väikseim komaarv
omNumber = Number.POSITIVE_INFINITY; 
omNumber = 12 / 0;
omNumber = NaN;
console.log(Number.isFinite(omNumber));
/*isFinite(x)-kas arv on lõpmatus või tavaline arv
 isInteger(x)- kas on täisarv (integer)
 isNaN(x)-kas tegu on arvuga või mitte 
 isSafeInteger(x) -kas täisarv on korrektse suurusega, max arv on 2 astmes 53-1 */

let massiiv3 = [6, 7, 8, 9, 10];
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

let map3 = new Map ([
    [2, 6], [3, 7], 
    [4, 8], [5, 9]]);
map3.set(9, 12);

let s6ne3 = 'Tere pere';
s6ne3 = s6ne3.toLocaleUpperCase(); //muudab tähed suurteks ehk caps lock
s6ne3 = s6ne3.replace('PERE', 'kere'); 
const s6ned = s6ne3.split(' ');
console.log(s6ne3);

const arvuke = parseFloat('2.45633');//tekstist arv vaja kätte saada

/* matemaatika */
const pi = Math.PI;
omNumber = Math.pow(12, 2);// pow tähendab astmeid
omNumber = Math.sqrt(16);// ruutjuur 4
omNumber = Math.random() * 10; //0-10 suvaline arv
omNumber = Math.floor(12.7);//ümardab allapoole ehk vastus 12, ceil=ülespoole, trunc
omNumber = Math.abs(-12.7);//negatiivne väärtus muudetakse positiivseks
omNumber = Math.sin(3);//siia mitte kraadid, vaid radiaanid

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



