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

    private _microTemplate: string;

    private _module: HTMLMainElement | null;

    private _list: HTMLUListElement | null;

    protected async _cacheDOM() {
        this._module = document.querySelector('main');
        this._template = await Helper.getHTMLTemplate('acquire-items');
        
        if (this._module && this._template) {
            this._module.outerHTML = this._template;
            this._module = document.querySelector('main');
            if (this._module) {
                const temp = this._module.querySelector('template');
                if (temp) {
                    this._microTemplate = temp.innerHTML;
                }
                this._list = this._module.querySelector('#main-item-list');
                console.log(temp);
            }
        }
        this._bindEvents();
        this._render();
    }
    protected _bindEvents() {
        // tyhi

    }
    protected async _render() {
        const data = await Helper.fetchContent('/data/featuredPosts.php');
        console.log(data);
        if (data && this._list) {
            this._posts = JSON.parse(data) as IPost[];
            
            let dataHTML = '';
            this._posts.forEach(
                (value: IPost) => {
                    const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{cardTitle}}', value.name);
                    const parsePass2 = Helper.parseHTMLString(parsePass1, '{{cardDescription}}', value.description);
                    const parsePass3 = Helper.parseHTMLString(parsePass2, '{{cardLink}}', `/data/${value.photo}`);
                    const parsePass4 = Helper.parseHTMLString(parsePass3, '{{cardPrice}}', `${value.price}€`);
                    dataHTML += parsePass4;
                    console.log(dataHTML);
                }
            ); 
            this._list.innerHTML = dataHTML; 
        }
    }
}