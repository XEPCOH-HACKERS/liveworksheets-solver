export function injectScript(path: string): void {
    const script: HTMLScriptElement = document.createElement("script");
    script.src = chrome.runtime.getURL(path);
    document.head.append(script);
}

export function getElementsArray(classNames: string[]): Element[] {
    const elements = classNames.flatMap((className) =>
        Array.from(document.querySelectorAll(`.${className}`))
    );

    return elements;
}
