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
massiiv3.shift()
massiiv3.push(17);

console.log(massiiv3);