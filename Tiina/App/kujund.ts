'use strict';
console.log('kujund.ts');

interface IKujund{
    avalik:string;
}

abstract class Kujund implements IKujund {
    public avalik = 'avalik';

    protected nimetus= 'Kujund ';
    constructor(protected a: number, protected b: number) {
        
    }
    protected abstract leiaAla(): number;
    public nimeta(){
        console.log(this.nimetus + this.leiaAla());
    }
    public static staatiline(){
        console.log('Static');
    }
}
Kujund.staatiline();
/*const abstrakt = new Kujund();--- ei saa kutsuda abstraktset klassi*/
/*extends - pärib omadused, mis ei ole privaatsed/ei saa lapses muut privaatseid omadusi
| implement - interface'idega...*/
class Ruut extends Kujund {
    
    constructor(a: number){
        super(a, a);
        this.nimetus='Ruut ';
    }
    protected leiaAla(){
        return this.a * this.b;
    }
    public nimeta(){
        super.nimeta();
        console.log('MinuRuut ' + this.leiaAla());
    }
}
class Ristkylik extends Kujund {
    constructor(a: number,b: number){
        super(a, b);
        this.nimetus='Ristkülik ';
    }
    protected leiaAla(){
        return this.a * this.b;
    }
}
const ruutk = new Ruut (5);
ruutk.nimeta();
console.log(ruutk.avalik);
const kylik = new Ristkylik(4,5);
kylik.nimeta();
