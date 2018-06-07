'use strict';
console.log('kujund.ts');

interface Ikujund {
    avalik: string;

}

abstract class Kujund implements Ikujund {
    public avalik = 'avalik';
    constructor(protected a: number, protected b: number) {} 
    protected abstract leiaAla(): number;
    protected nimeta(){
        console.log('Kujund ' + this.leiaAla());
    }
    public static staatiline() {
        console.log('Static');
    }
}
//const abstrakt = new Kujund() veateade
Kujund.staatiline();
class Ruut extends Kujund {
    constructor(a: number){
        super(a, a);
    }
    protected leiaAla(){
        return this.a * this.b;
    }
}

class Ristkylik extends Kujund {
    constructor(a: number, b: number){
        super(a, b);
    }
    protected leiaAla(){
        return this.a * this.b;
    }
}
let ruutk = new Ruut(12);
//ruutk.nimeta();
console.log(ruutk.avalik);
const kylik = new Ristkylik(12,14);
//kylik.nimeta();