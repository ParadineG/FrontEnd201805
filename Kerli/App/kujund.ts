'use strict';
console.log('kujund.ts');
interface IKujund {
    avalik: string;
}

abstract class Kujund implements IKujund{
    public avalik = 'avalik';
    protected nimetus = 'Kujund';
    constructor(protected a: number, protected b: number) {
    }
    protected abstract leiaAla(): number;
    public nimeta(){
        console.log(this.nimetus+ this.leiaAla());
    }
    public static staatiline() {
        console.log('Staatiline');
    }
}
Kujund.staatiline();
class Ruut extends Kujund {
    constructor(a: number) {
        super(a, a);
        this.nimetus = 'Ruut';
    }
    protected leiaAla() {
        return this.a * this.b;
    }
    public nimeta(){
        console.log('MRuut '+ this.leiaAla());
    }
}
class Ristkylik extends Kujund {
    constructor(a: number, b: number){
        super(a, b);
        this.nimetus = 'Ristkylik ';
    }
    protected leiaAla() {
        return this.a * this.b;
    }
    public nimeta(){
        super.nimeta();
        console.log('MRistkylik '+ this.leiaAla());
    }
}
const square = new Ruut(4);
square.nimeta(); //kujund 16
console.log(square.avalik);
const ristkylik = new Ristkylik(4, 6);
ristkylik.nimeta(); //kujund 24