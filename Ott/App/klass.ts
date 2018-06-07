'use strict';
console.log('klass.ts');

class klass {
    public avalik: string;
    protected kaitstud: string;
    private privaatne = 'vaike väärtus';
    private readonly ainultLugemiseks: string = '';

    constructor(name: string) {
        this.ainultLugemiseks = name;
    }

    public avalikMeetod() {
    //this.ainultLugemiseks = '';
    this.privaatneMeetod();

    }

    protected kaitstudMeetod() {
       //
        }

    public privaatneMeetod() {
       console.log(this.privaatne);
        }
}
const minuKlass = new klass('Tervitus');
minuKlass.avalikMeetod();