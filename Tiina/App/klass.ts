'use strict';
console.log('klass.ts');

class Klass {
    public avalik: string;//Kõik kes tema poole pöörduvad, saavad ligi
    protected kaitstud: string;//
    private privaatne: string='Privaatne klass/Vaike väärtus'; //Ainult klassi siseselt
    private readonly ainultLugemiseks: string;
    constructor(name: string) {
        this.ainultLugemiseks=name;
    }
    public avalikMeetod(){
        //this.ainultLugemiseks = '';
        this.privaatneMeetod();
    }
    protected kaitstudMeetod(){
        
    }
    private privaatneMeetod() {
        console.log(this.privaatne)   
    }
}
const minuKlass = new Klass('Tervitus');
minuKlass.avalikMeetod();