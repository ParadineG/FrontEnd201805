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