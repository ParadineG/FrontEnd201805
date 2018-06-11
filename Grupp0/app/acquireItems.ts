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
    private _template: string | undefined;
    private _module: HTMLMainElement | null;

    constructor() {
        super();
        console.log('heelo');
        this._cacheDOM();
        // bind events
        // render
    }

    protected async _cacheDOM() {
        this._module = document.querySelector('main');
        this._template = await Helper.getHTMLTemplate('acquire-items');

        if (this._module && this._template) {
            this._module.outerHTML = this._template;
            this._module = document.querySelector('main');
        }
        this._bindEvents();
        this._render();
    }
    protected _bindEvents() {
        // tyhi
    }
    protected async _render() {
        const data = await Helper.fetchContent('/data/featuredPosts.php');
        if (data) {
            this._posts = JSON.parse(data) as IPost[];
            if (this._module) {
                this._module.innerText = this._posts[0].description; 
            }
        }
    }
}