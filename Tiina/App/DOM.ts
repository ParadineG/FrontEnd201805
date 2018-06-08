'use strict';
console.log('dom.ts');
//dom
const aside = document.getElementById('aside-1');
const asides = document.getElementsByTagName('aside');
//$('#aside-1');//jQuery
const pealkiri = document.querySelector('header > h2');//Tagasatb esimese elemendi, mille leiab
const pealkirjad = document.querySelectorAll('header > h3');//Tagastab kõik elemendid, mille leiab
if (aside && asides.length !== 0) {
    console.log(aside);
    console.log(asides.item(1));
}
if (pealkiri) {
    pealkiri.classList.add('lisa');
    const soneklass = pealkiri.getAttribute('class');
    if (soneklass){
        const klassid = soneklass.split('');
        klassid.push('lisa3');
        klassid.join(' ');
        pealkiri.setAttribute('class', klassid.join(' '));
    }
    const syndmus = () =>{ pealkirjad.item(0).classList.add('lisa');
    const nupp = document.createElement('BUTTON');
    nupp.addEventListener('click', () => {alert('mistoimub');});
    const tekst = document.createTextNode('vajuta mind');
    nupp.appendChild(tekst);
    pealkirjad.item(0).appendChild(nupp);
    pealkiri.removeEventListener('click', syndmus);
};
    pealkiri.addEventListener('click',syndmus );
    //pealkiri.addEventListener('click', () => pealkiri.classList.remove('lisa'));
    //pealkiri.addEventListener('click', () => {alert('It is me, Mario'); });
    //pealkirjad.item(0).outerHTML = pealkiri.outerHTML;
    //pealkiri.innerHTML = "Hello Typescript";
    
}


let omBool = true;
let omNumber = 0.00000018;
console.log(omNumber.toExponential());//1.8*10^-7
/*toString() | toExponential() | 
toFixed(x)[ümardab koma kohti kindla kohani]| toPrecision [mitu arvu ekraanil]*/
omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON;//väikseim koma arv 0.0.......01
omNumber = Number.POSITIVE_INFINITY;
omNumber=12/0;
omNumber=NaN;
console.log(Number.isFinite(omNumber));
/*isFinite(x) kas lõplik arv| isInteger(x) | isNaN(x) | isSafeInteger(x) [max arv(2^53-1)]*/

let massiiv3 = [6,7,8,9 ];
massiiv3 = massiiv3.concat(massiiv3);
massiiv3.pop();
massiiv3.shift();
massiiv3.unshift(12);
massiiv3.push(13);
massiiv3.reverse();
massiiv3.sort((a:number,b:number)=> a-b);//paneb järjekorda
console.log(massiiv3);

let set3 = new Set([6,7,8,9 ]);
set3.add(11);
set3.delete(8);
console.log(set3.size + ' ' + set3.has(8));
set3.clear();

let map3 = new Map ([
    [2,4], [3,8],
    [4,3], [6,9]
])
map3.set(9,11);

let sone3 = 'Tere vana kere';
sone3 = sone3.toLowerCase();
sone3 = sone3.replace('kere', 'kass');
const soned = sone3.split(' ');
console.log(soned);

const arvuke = parseFloat('2.45633')
console.log(arvuke);

const pi = Math.PI;
omNumber = Math.pow(12,2);
omNumber = Math.sqrt(16);
omNumber = Math.random() * 10;
omNumber = Math.floor(12.2);//round |ceil |trunc
omNumber = Math.abs(-12.2);
omNumber = Math.cos(-12.2);//Mõõdetakse rad'ides

//Kuupäev
const aeg = new Date(Date.now());
console.log(aeg.getDate());
aeg.setDate(21);
console.log('Kuupäev: ' + aeg.getDate());

//vea tuvastus
try {
    throw 'Try!!!!!';
} catch (error) {
    console.log(typeof(error));
    console.log(error);
}


