'use strict';
//kaasaegsem viis oleks kasutada mooduleid - alguses on tülikas.
console.log('nimeroom.ts');
namespace Nimeruum {
    console.log('Namespaci tervitus');
    let funkNimetus='Funkar';
    export function funkar(){
        console.log(funkNimetus);
    }
}

function funkar2(){
    console.log('Funkar2');
}