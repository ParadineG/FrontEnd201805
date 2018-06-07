'use strict';
console.log('klass.ts');

class Klass {
    public avalik:string;
    protected kaitstud:string;
    private privaatne:'Vaike väärtus';
    private readonly ainultLugemiseks: string = '';
    constructor(name: string) {
        this.ainultLugemiseks = name;
    }
    public avalikMeetod(){
        //this.ainultlugemiseks = '';
        this.privaatneMeetod();
    }
    private privaatneMeetod(){
        console.log(this.privaatne);
        //this.ainultlugemiseks = '';
    }
    protected kaitstudMeetod(){
        //this.ainultlugemiseks = '';
    }
}

const minuKlass = new Klass('Tervitus');
minuKlass.avalikMeetod();
