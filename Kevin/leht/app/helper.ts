console.log('helper.ts')

namespace Helper { 
    const _cacheHTML = new Map < string, string > ();
    export const fetchContent =  async (file: string) => {
        const response  = await fetch(file);
        const templateHTML = await response.text();
        return templateHTML;
    }
    export const getHTMLTemplate = async (name: string) => {
        if (!_cacheHTML.has(name)) {
            const content = await fetchContent(`templates/${name}-template.html`);
            if(content) {
                _cacheHTML.set(name, content);
            } else {
                alert('error');
            }
        }
        return _cacheHTML.get(name);
    }
}