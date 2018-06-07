'use strict';
console.log('klass.ts');

class Klass {
    public avalik: string;
    protected kaitstud: string;
    private privaatne = 'Vaikeväärtus';
    private readonly ainultLugemiseks: string = '';
    constructor(name: string) {
        this.ainultLugemiseks = name; //this tähendab, et tegu on selle klassiga
    }
    public avalikMeetod() {
        // this.ainultLugemiseks = '';
        this.privaatneMeetod();
    }
    public kaitstudMeetod() {
    }
    public privaatneMeetod() {
        console.log(this.privaatne);
    }
}
const minuKlass = new Klass('Tervitus'); 
minuKlass.avalikMeetod();