/// <reference path='helper.ts'/>
/// <reference path='page.ts'/>
console.log('acquireItems.ts');

interface IPost {
    name: string;
    description: string;
    price: number;
    photo: string;
}

class AcquireItems extends Page {

    private _posts: IPost[] = [];
    constructor() {
        super();
        this._cacheDOM();
        // bind events
        // render
    }
    private _template: string | undefined;

    private _module: HTMLMainElement | null;

    protected async _cacheDOM() {
        this._module = document.querySelector('main');
        this._template = await Helper.getHTMLTemplate('acquire-items');
        
        if (this._module && this._template) {
            this._module.outerHTML = this._template;
        }
        this._bindEvents();
        this._render();
    }
    protected _bindEvents() {

    }
    protected _render() {

    }
}