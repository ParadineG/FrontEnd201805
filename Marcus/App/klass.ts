'use strict';
console.log('klass.ts');

class Klass {

    //spetsiifilised omadused, määrab kas avalik või mitte
    public avalik: string;
    protected kaitstud: string;
    private privaatne = 'Vaike väärtus';
    private readonly ainultLugemiseks: string= '';
    constructor(name: string) {
        this.ainultLugemiseks = name; 
    }
    public avalikMeetod() {
        // this.ainultLugemiseks = '';
        this.privaatneMeetod();
    }
    protected kaitstudMeetod() {
       //this.ainultLugemiseks = '';
    }
    private privaatneMeetod() {
        console.log(this.privaatne);
    }
}
const minuKlass = new Klass('Tervitus');
minuKlass.avalikMeetod();
