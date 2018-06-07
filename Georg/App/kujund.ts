'use strict';
console.log('kujund.ts');

interface IKujund {
    avalik: string;
}
abstract class Kujund implements IKujund {
    avalik = 'avalik';
    constructor(protected a: number, protected b: number) {

    }
    protected abstract leiaAla(): number;

    
    public nimeta() {
        console.log('kujund ' + this.leiaAla());
    }
}


class Ruut extends Kujund {
    constructor(a: number){
        super(a, a);
    }
    protected leiaAla() {
        return this.a * this.b;
    }
}

class Ristkylik extends Kujund {
    constructor(a: number, b: number){
        super(a, b);
    }
    protected leiaAla() {
        return this.a * this.b;
    }
}
const ruuduke = new Ruut(12);
const ristkylik = new Ristkylik(12,14)