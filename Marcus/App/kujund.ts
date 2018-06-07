'use strict';
console.log('kujund.ts');

interface IKujund {
   avalik:string;
}

abstract class Kujund implements IKujund {
    constructor(protected a:number, protected b:number) {
    }
    protected abstract leiaAla(): number;
    public avalik = 'avalik';
    protected nimetus = 'nimetus';
    public nimeta() {
        console.log('Ruut ' + this.leiaAla());
    }
} 
class Ruut extends Kujund {
    constructor(a:number){
        super(a, a);
    }
    protected leiaAla() {
        return this.a * this.b;
    }
    protected nimetus = 'Kujund ';
    public nimeta() {
        super.nimeta();
        console.log('Ruut ' + this.leiaAla());
    }
    public static staatiline(){
        console.log('Static');
    }
   
}
//Kujund.staatiline();
class Ristkylik extends Kujund {
    constructor(a:number, b:number){
        super(a, b);
    }
    protected leiaAla() {
        return this.a * this.b;
    }
    public nimeta() {
        console.log('Kylik ' + this.leiaAla());
    }
}
const ruut = new Ruut(12);
ruut.nimeta();
console.log(ruut.avalik);
const kylik = new Ristkylik(12, 14);
kylik.nimeta();

