///<reference path='page.ts' />
///<reference path='acquireItems.ts' />

console.log('main.ts');

class App {
    private _page: Page;

    constructor() {
        this._page;
        this._bindEvents();
        this._setup();
    }

    private _bindEvents() {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    }

    private _setup() {
        if (window.location.hash === '') {
            this._page = new AcquireItems();
        }
        this._urlChanged();
    }
    private _urlChanged() {
        console.log(window.location.hash);
    }
}
const app = new App();