'use strict';
console.log('kass.ts')

class Klass {
    public avalik: string;
    protected kaitstud: string;
    private privaatne: string;
    private readonly ainultLugemiseks: string;
    constructor (name: string) {
        this.ainultLugemiseks = name;
    }
    private privaatneMeetod() {
        console.log(this.privaatne)
    }
    protected kaitstudMeetod() {
        this.privaatneMeetod();
    }
    public avalikMeetod() {
        //this.ainultLugemiseks = '';//ei luba muuta sest on type readonly
        this.privaatneMeetod();
    }
}

const minuKlass = new Klass('Tervitus');
minuKlass.avalikMeetod();