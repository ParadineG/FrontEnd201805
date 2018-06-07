'use strict'
console.log('dom.ts');

let omBool = true;
let omNumber = 0.000012;
console.log(omNumber.toExponential()); //1.2 * 10^(-5)
//toString() toExponential(num) toFixed(num) toPrecision()
omNumber = Number.MIN_SAFE_INTEGER;
omNumber = Number.MAX_VALUE;
omNumber = Number.EPSILON; //väikseim komaarv
omNumber = Number.POSITIVE_INFINITY;
omNumber = 12/ 0;
console.log(Number.isFinite(12));
// isFinite(x) isInteger(x) isNan(x) isSafeInteger(x)

//ARRAY
let masiiv1 = [6,7,8,9,10];
let masiiv2 = [1,2,3,4,5];
let masiiv3 = masiiv1.concat(masiiv2);//concat ühendab kaks arrayt kokku
console.log(masiiv3); //[6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
masiiv3.push(17); //lisab array lõppu antud sisendi
masiiv3.pop(); //eemaldab viimase elemendi arrayst
masiiv3.shift(); //eemaldab esimese elemendi arrayst
masiiv3.unshift(27); //lisab antud sisendi array algusesse
masiiv3.reverse(); //muudab array elementide järjekorra vastupidiseks
masiiv1.sort((a: number, b: number) => a-b);//sorteerib array väike-suur(a-b) või suur-väike(b-a) 

//SET
let set3 = new Set([6,7,8,9]);
set3.add(12);
set3.delete(8);
console.log(set3.size);
set3.clear;

//MAP
let map3 = new Map([
    [2, 6], [3, 7],
    [4, 8], [5, 9]
]);
map3.set(9, 12); //lisab sisendi

//STRING
let stringike = 'See On On On String';
stringike.toLocaleLowerCase()//kõik tähed väikseks
stringike.toLocaleUpperCase()//kõik tähed suureks
stringike.replace('String', 'Asendus')//input1: asendatav input2: asendus (asendab ainult esimese ettejuhtva)
/*while (stringike.search('On') !== -1) { //asendab kõik 
    stringike.replace('On', 'Asendus');
}*/
const string = stringike.split(' ')//muudab stringy arrayks antud inputi järgi
parseFloat('2'); //Muudab stringi floatiks ehk 2.0
parseInt('2') //Muubab stringi integeriks ehk 2

//MATH
const pi = Math.PI;
let someNumber = Math.pow(12, 2);
someNumber = Math.random() * 10; //suvaline arv 1-10 vahel
someNumber = Math.sqrt(16)// ruutjuur arvust
someNumber = Math.floor(12.7) //ümardab numbri ehk 12
someNumber = Math.abs(-13) //muudab positiivseks ehk 13

// DATE/TIME
const aeg = new Date(Date.now());
console.log(aeg.getDay());
aeg.setDate(21);
console.log(aeg.getDay());


try {
    throw 'mkaaaaay';
} catch (error) {
    console.log(typeof(error));
    console.log(error);
}

