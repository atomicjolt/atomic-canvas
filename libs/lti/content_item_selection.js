"use strict";
// This file contains helper functions for generating a content item response.
// These functions should be used as examples for generating the json required
// to respond to a content item selection request.
// See the specification linked to below for more details.
//
// Content Item specification:
// https://www.imsglobal.org/specs/lticiv1p0/specification
//
// Example content item responses can be found here:
// https://www.imsglobal.org/specs/lticiv1p0/specification-3
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.embedLtiIframeWriteBack = exports.embedLtiIframe = exports.embedIframe = exports.ltiLineItem = exports.ltiLaunch = exports.imageLink = exports.embedImage = exports.embedMultipleHtml = exports.embedHtml = exports.contentItems = void 0;
// Wraps an array of graph items in the ContentItem hash
function contentItems(graph) {
    return {
        '@context': 'http://purl.imsglobal.org/ctx/lti/v1/ContentItem',
        '@graph': graph,
    };
}
exports.contentItems = contentItems;
// Embeds html
function embedHtml(html) {
    return contentItems([
        {
            '@type': 'ContentItem',
            mediaType: 'text/html',
            text: html,
            placementAdvice: {
                presentationDocumentTarget: 'embed',
            },
        },
    ]);
}
exports.embedHtml = embedHtml;
// Embed multiple html items
function embedMultipleHtml(html1, html2) {
    return contentItems([
        {
            '@type': 'ContentItem',
            mediaType: 'text/html',
            text: html1,
            placementAdvice: {
                presentationDocumentTarget: 'embed',
            },
        },
        {
            '@type': 'ContentItem',
            mediaType: 'text/html',
            text: html2,
            placementAdvice: {
                presentationDocumentTarget: 'embed',
            },
        },
    ]);
}
exports.embedMultipleHtml = embedMultipleHtml;
// Embeds an png image
function embedImage(text, title, width, height, url) {
    return contentItems([
        { '@type': 'FileItem', url: url, mediaType: 'image/png', text: text, title: title, placementAdvice: {
                displayWidth: width,
                displayHeight: height,
                presentationDocumentTarget: 'embed'
            } }
    ]);
}
exports.embedImage = embedImage;
// Embeds a thumbnail link as html
function imageLink(title, width, height, url) {
    return contentItems([
        {
            '@type': 'ContentItem',
            url: url,
            mediaType: 'text/html',
            thumbnail: {
                '@id': 'http://developers.imsglobal.org/images/imscertifiedsm.png',
                width: width,
                height: height
            },
            title: title,
            placementAdvice: {
                presentationDocumentTarget: 'window',
                windowTarget: '_blank'
            }
        }
    ]);
}
exports.imageLink = imageLink;
// Adds an lti launch link
function ltiLaunch(name, launchURL) {
    return contentItems([
        {
            '@type': 'LtiLinkItem',
            mediaType: 'application/vnd.ims.lti.v1.ltilink',
            url: launchURL,
            title: name,
        },
    ]);
}
exports.ltiLaunch = ltiLaunch;
function ltiLineItem(name, launchURL) {
    return contentItems([
        {
            '@type': 'LtiLinkItem',
            mediaType: 'application/vnd.ims.lti.v1.ltilink',
            url: launchURL,
            title: name,
            text: name,
            lineItem: {
                '@type': 'LineItem',
                label: name,
                reportingMethod: 'res:totalScore',
                maximumScore: 10,
                scoreConstraints: {
                    '@type': 'NumericLimits',
                    normalMaximum: 10,
                    totalMaximum: 10
                }
            }
        }
    ]);
}
exports.ltiLineItem = ltiLineItem;
// Adds an iframe to the page as html
function embedIframe(iframeURL) {
    var iframe = "<iframe style=\"width: 100%; height: 500px;\" src=\"".concat(iframeURL, "\"></iframe>");
    return contentItems([
        {
            '@type': 'ContentItem',
            mediaType: 'text/html',
            text: iframe,
            placementAdvice: {
                presentationDocumentTarget: 'embed',
            },
        },
    ]);
}
exports.embedIframe = embedIframe;
// Adds an iframe with an LTI launch
function embedLtiIframe(url, displayWidth, displayHeight) {
    if (displayWidth === void 0) { displayWidth = '100%'; }
    if (displayHeight === void 0) { displayHeight = '500px'; }
    return contentItems([
        {
            '@type': 'LtiLinkItem',
            mediaType: 'application/vnd.ims.lti.v1.ltilink',
            url: url,
            placementAdvice: {
                displayWidth: displayWidth,
                displayHeight: displayHeight,
                presentationDocumentTarget: 'iframe',
            },
        },
    ]);
}
exports.embedLtiIframe = embedLtiIframe;
// Adds an iframe with an LTI launch and grade write back
// LineItem specification:
// https://www.imsglobal.org/lti/model/uml/purl.imsglobal.org/vocab/lis/v2/outcomes/index.html#LineItem
function embedLtiIframeWriteBack(label, url, displayWidth, displayHeight) {
    if (displayWidth === void 0) { displayWidth = '100%'; }
    if (displayHeight === void 0) { displayHeight = '500px'; }
    return {
        '@context': [
            'http://purl.imsglobal.org/ctx/lti/v1/ContentItem',
            {
                lineItem: 'http://purl.imsglobal.org/ctx/lis/v2/LineItem',
                res: 'http://purl.imsglobal.org/ctx/lis/v2p1/Result#'
            }
        ],
        '@graph': [
            {
                '@type': 'LtiLinkItem',
                mediaType: 'application/vnd.ims.lti.v1.ltilink',
                title: label,
                url: url,
                lineItem: {
                    '@type': 'LineItem',
                    label: label,
                    reportingMethod: 'res:totalScore',
                    scoreConstraints: {
                        '@type': 'NumericLimits',
                        normalMaximum: 10,
                        extraCreditMaximum: 0,
                        totalMaximum: 10,
                    },
                },
                placementAdvice: {
                    displayWidth: displayWidth,
                    displayHeight: displayHeight,
                    presentationDocumentTarget: 'iframe',
                },
            },
        ],
    };
}
exports.embedLtiIframeWriteBack = embedLtiIframeWriteBack;
//# sourceMappingURL=content_item_selection.js.map