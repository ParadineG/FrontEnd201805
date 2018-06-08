'use strict';
console.log('klass.ts');

class Klass {

    public avalik: string;

    protected kaitstud: string;

    private privaatne = 'Vaike väärtus';

    private readonly ainultlugemiseks: string = '';


    constructor(name: string) {
        this.ainultlugemiseks = name;

    }
    public avalikMeetod() {
        // this.ainultlugemiseks = '';
        this.privaatneMeetod();
    }
    protected kaitstudMeetod() {
       
    }
    private privaatneMeetod() {
        console.log(this.privaatne);
        
    }
}
const minuKlass = new Klass('Tervitus');
minuKlass.avalikMeetod();

