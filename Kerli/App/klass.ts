'use strict';
console.log('klass.ts');

class Klass1 {
    public avalik: string;
    protected kaitstud: string;
    private privaatne: 'V22rtusstring';
    private readonly ainultLugemiseks: string ='';
    constructor(name: string) {
        this.ainultLugemiseks = name; //this - klassi sisene element

    }
    public avalikMeetod(){
        //this.ainultLugemiseks = '';
        this.privaatneMeetod();
    }
    protected kaitstudMeetod(){

    }
    private privaatneMeetod(){
      console.log(this.privaatne);
    }
}
const mKlass = new Klass1('Ttt');
mKlass.avalikMeetod();