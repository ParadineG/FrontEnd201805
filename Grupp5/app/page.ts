console.log('page.ts');

abstract class Page {
    constructor() {
        // tyhi
    }

    protected abstract _cacheDOM(): void;
    protected abstract _bindEvents(): void;
    protected abstract _render(): void;
}