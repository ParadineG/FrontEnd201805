"use strict";
console.log("\ndom.ts");


let omBool = true;
let omNumber = 5.126513;
console.log("\nNumber:");
console.log(omNumber.toFixed(2));
console.log(omNumber.toPrecision(4));
console.log(omNumber.toString().length);

omNumber = 12 / 0;
console.log(Number.isNaN(omNumber));

console.log(Number.isInteger(omNumber));

omNumber = 2.54540;

console.log(Number.isInteger(omNumber));
console.log(Number.isFinite(omNumber));


console.log("\nMassiiv:");
const massiiv3 = [6, 7, 8, 9, 10];
console.log(massiiv3.concat(massiiv3));
console.log(massiiv3.length);
massiiv3.push(11);
console.log(massiiv3.slice(2, 4));
console.log(massiiv3.reverse());


console.log("\nSet:");
let set2 = new Set([6, 4, 2, 7, 10, 20]);
console.log(set2.size);
console.log(set2.has(20));


console.log("\nMap:");
let map2 = new Map([
    [2, 5],
    [2, 10],
    [4, 10],
    [55, 10]
]);

console.log(map2);


console.log("\nSõne:");
let sone = "             Tervist! Hei!    ";
console.log(sone.trim());
console.log(sone.toLowerCase());
console.log(sone.toUpperCase());
console.log(sone.split("!"));
while (sone.search(" ") !== -1) {
    sone = sone.replace(" ", "");
}
console.log(sone);

console.log(parseInt("22.544"));
console.log(parseFloat("22.544"));


console.log("\nMatemaatika:");
console.log(Math.PI);
console.log((Math.random() * 20).toFixed(0));
console.log(Math.sqrt(25));
console.log(Math.floor(12.5));
console.log(Math.round(12.5));
console.log(Math.ceil(12.3));
console.log(Math.abs(-55));


console.log("\nKuupäev:");
const aeg = new Date();
console.log(aeg);
console.log(aeg.getDate());
console.log(aeg.getMonth());
console.log(aeg.getDay());
console.log(aeg.getHours());
console.log(aeg.getFullYear());

/* Veatuvastus
try {
} catch (error) {
    console.log(typeof(error));
    console.log(error);
}
throw "jama";
*/

const aside = document.getElementsByClassName("aside-1");

if (aside) {
    console.log(aside);
}

const asides = document.getElementsByTagName("aside");

if (asides.length !== 0) {
    console.log(asides.item(1));
}

// $("#aside-1"); //Jquery

const pealkiri = document.querySelector("header > h2"); // Ainult esimene leitud element
const pealkirjad = document.querySelectorAll("header > h3"); // Kõik leitud elemendid

if (pealkiri) {
    //pealkiri.classList.add("lisa");
    const s6neKlassid = pealkiri.getAttribute("class");
    if (s6neKlassid) {
        const klassid = s6neKlassid.split(" ");
        klassid.push("lisa3");
        pealkiri.setAttribute("class", klassid.join(" "));
    }
    const nupp = document.createElement("button");
    const syndmus = () => {
        pealkiri.classList.add("lisa");
        nupp.addEventListener("click", () => {
            alert("Vajutasid nuppu!");
        });
        const tekst = document.createTextNode("Vajuta mind!");
        nupp.appendChild(tekst); // Pane see asi nupu sisse
        pealkirjad.item(0).appendChild(nupp);
        pealkiri.removeEventListener("click", syndmus);
    }
    pealkiri.addEventListener("click", syndmus);
    nupp.addEventListener("click", () => {
        pealkirjad.item(0).removeChild(nupp);
    });
    //pealkirjad.item(0).outerHTML = pealkiri.outerHTML;
    pealkiri.innerHTML = "<em>Hello TypeScript!</em>";
}