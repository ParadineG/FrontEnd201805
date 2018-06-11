console.log('page.ts');

abstract class Page {
    constructor() {

    }
    protected abstract  _cacheDom(): void;

    protected abstract  _bindEvents(): void;
    
    protected abstract  _render(): void;

}