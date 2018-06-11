/// <reference path="page.ts"/>
/// <reference path="acquireItems.ts"/>
/// <reference path="provideItem.ts"/>
console.log("main.ts");

interface INavLink {
    name: string;
    link: string;
}

class App {

    private _mainNavLinks: INavLink[] =
        [{ name: "Acquire item", link: "#acquire/item" },
        { name: "Provide item", link: "#provide/item" },
        { name: "Acquire service", link: "#acquire/service" },
        { name: "Provide service", link: "#provide/service" }];

    private _page: Page;
    private _navLinks: INavLink[] = [];

    constructor() {
        this._page;
        this._navLinks = [...this._mainNavLinks]; // ", ...this._footerNavLinks, ...this._mainNavLinks"
        this._bindEvents();
        this._setup();
    }

    private _bindEvents() {
        window.addEventListener("hashchange", this._urlChanged.bind(this)); // () => {} Noolfunktsiooniga tehakse bind automaatselt
    }

    private _setup() {
        this._urlChanged();
    }

    private _urlChanged() {
        console.log(window.location.hash);
        if (window.location.hash === this._mainNavLinks[0].link) {
            this._page = new AcquireItems();
        } else if (window.location.hash === this._mainNavLinks[1].link) {
            this._page = new ProvideItem();
        } else if (window.location.hash === "") {
            this._page = new ProvideItem();
        } else {
            this._page = new ProvideItem();
        }
    }
}

const app = new App();