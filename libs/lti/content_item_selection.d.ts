export function contentItems(graph: any): {
    '@context': string;
    '@graph': any;
};
export function embedHtml(html: any): {
    '@context': string;
    '@graph': any;
};
export function embedMultipleHtml(html1: any, html2: any): {
    '@context': string;
    '@graph': any;
};
export function embedImage(text: any, title: any, width: any, height: any, url: any): {
    '@context': string;
    '@graph': any;
};
export function imageLink(title: any, width: any, height: any, url: any): {
    '@context': string;
    '@graph': any;
};
export function ltiLaunch(name: any, launchURL: any): {
    '@context': string;
    '@graph': any;
};
export function ltiLineItem(name: any, launchURL: any): {
    '@context': string;
    '@graph': any;
};
export function embedIframe(iframeURL: any): {
    '@context': string;
    '@graph': any;
};
export function embedLtiIframe(url: any, displayWidth?: string, displayHeight?: string): {
    '@context': string;
    '@graph': any;
};
export function embedLtiIframeWriteBack(label: any, url: any, displayWidth?: string, displayHeight?: string): {
    '@context': (string | {
        lineItem: string;
        res: string;
    })[];
    '@graph': {
        '@type': string;
        mediaType: string;
        title: any;
        url: any;
        lineItem: {
            '@type': string;
            label: any;
            reportingMethod: string;
            scoreConstraints: {
                '@type': string;
                normalMaximum: number;
                extraCreditMaximum: number;
                totalMaximum: number;
            };
        };
        placementAdvice: {
            displayWidth: string;
            displayHeight: string;
            presentationDocumentTarget: string;
        };
    }[];
};
