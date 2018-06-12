console.log("helper.ts");

namespace Helper {
    const _cacheHTML = new Map<string, string>();

    // Fetch API xhr
    export const fetchContent = async (file: string) => {
        // Tasub panna (try & catch) siia ümber
        const response = await fetch(file);
        const templateHTML = await response.text();
        return templateHTML;
    }

    export const getHTMLTemplate = async (name: string) => {
        if (!_cacheHTML.has(name)) {
            const content = await fetchContent(`template/${name}-template.html`);
            if (content) {
                _cacheHTML.set(name, content);
            } else {
                alert("error!");
            }
        }
        return _cacheHTML.get(name);
    };

    export const parseHTMLString = (target: string, mustache: string, content: string) => {
        return target.replace(new RegExp(mustache, "g"), content);
    }
}