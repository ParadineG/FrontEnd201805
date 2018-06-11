///<reference path='page.ts'/>
///<reference path='acquireitems.ts'/>
///<reference path='provideitem.ts'/>
console.log('main.ts');

interface INavLink {
    name: string;
    link: string;
}

class App {

    private _mainNavLinks: INavLink[] = 
    [{name: 'Acquire items', link: '#acquire/items'},
    {name: 'Provide item', link: '#provide/item'},
    {name: 'Acquire services', link: '#acquire/services'},
    {name: 'Provide service', link: '#provide/service'}];
    private _navLinks: INavLink[] = [];
    
    private _page:Page;

    constructor() {
        this._page;
        this._navLinks = [...this._mainNavLinks]
        this._bindEvents();
        this._setup();
    }

    private _bindEvents() {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
        //()=> {}
    }
    private _setup() {
        if (window.location.hash === '') {
            this._page = new AcquireItems();
        }
        this._urlChanged();
    }
    private _urlChanged(){
        console.log(window.location.hash);
        if (window.location.hash === this._mainNavLinks[0].link) {
            this._page = new AcquireItems();
        }
        else if (window.location.hash === this._mainNavLinks[1].link){
            this._page = new ProvideItem();
        }
        //else if (window.location.hash === '') {
          //  this._page = new ProvideItem();
       //}
        //else {
        //    this._page = new ProvideItem
        //}
    }
}

const app = new App();
