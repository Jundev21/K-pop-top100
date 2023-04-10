interface HTMLIFrameElement extends HTMLElement, GetSVGDocument {
    align: string;
    allowFullscreen: boolean;
    allowPaymentRequest: boolean;
    border: string;
    readonly contentDocument: Document;
    readonly contentWindow: Window;
    frameBorder: string;
    frameSpacing: any;
    height: string;
    hspace: number;
    longDesc: string;
    marginHeight: string;
    marginWidth: string;
    name: string;
    noResize: boolean;
    onload: (this: HTMLIFrameElement, ev: Event) => any;
    readonly sandbox: DOMSettableTokenList;
    scrolling: string;
    src: string;
    vspace: number;
    width: string;
    addEventListener<K extends keyof HTMLIFrameElementEventMap>(
        type: K,
        listener: (this: HTMLIFrameElement, ev: HTMLIFrameElementEventMap[K]) => any,
        useCapture?: boolean
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        useCapture?: boolean
    ): void;
}
