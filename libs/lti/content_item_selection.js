'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentItems = contentItems;
exports.embedHtml = embedHtml;
exports.embedMultipleHtml = embedMultipleHtml;
exports.embedImage = embedImage;
exports.imageLink = imageLink;
exports.ltiLaunch = ltiLaunch;
exports.ltiLineItem = ltiLineItem;
exports.embedIframe = embedIframe;
exports.embedLtiIframe = embedLtiIframe;
exports.embedLtiIframeWriteBack = embedLtiIframeWriteBack;
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

// Wraps an array of graph items in the ContentItem hash
function contentItems(graph) {
  return {
    '@context': 'http://purl.imsglobal.org/ctx/lti/v1/ContentItem',
    '@graph': graph
  };
}

// Embeds html
function embedHtml(html) {
  return contentItems([{
    '@type': 'ContentItem',
    mediaType: 'text/html',
    text: html,
    placementAdvice: {
      presentationDocumentTarget: 'embed'
    }
  }]);
}

// Embed multiple html items
function embedMultipleHtml(html1, html2) {
  return contentItems([{
    '@type': 'ContentItem',
    mediaType: 'text/html',
    text: html1,
    placementAdvice: {
      presentationDocumentTarget: 'embed'
    }
  }, {
    '@type': 'ContentItem',
    mediaType: 'text/html',
    text: html2,
    placementAdvice: {
      presentationDocumentTarget: 'embed'
    }
  }]);
}

// Embeds an png image
function embedImage(text, title, width, height, url) {
  return contentItems([{ '@type': 'FileItem',
    url: url,
    mediaType: 'image/png',
    text: text,
    title: title,
    placementAdvice: {
      displayWidth: width,
      displayHeight: height,
      presentationDocumentTarget: 'embed'
    }
  }]);
}

// Embeds a thumbnail link as html
function imageLink(title, width, height, url) {
  return contentItems([{
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
  }]);
}

// Adds an lti launch link
function ltiLaunch(name, launchURL) {
  return contentItems([{
    '@type': 'LtiLinkItem',
    mediaType: 'application/vnd.ims.lti.v1.ltilink',
    url: launchURL,
    title: name
  }]);
}

function ltiLineItem(name, launchURL) {
  return contentItems([{
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
  }]);
}

// Adds an iframe to the page as html
function embedIframe(iframeURL) {
  var iframe = '<iframe style="width: 100%; height: 500px;" src="' + iframeURL + '"></iframe>';
  return contentItems([{
    '@type': 'ContentItem',
    mediaType: 'text/html',
    text: iframe,
    placementAdvice: {
      presentationDocumentTarget: 'embed'
    }
  }]);
}

// Adds an iframe with an LTI launch
function embedLtiIframe(url) {
  var displayWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '100%';
  var displayHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '500px';

  return contentItems([{
    '@type': 'LtiLinkItem',
    mediaType: 'application/vnd.ims.lti.v1.ltilink',
    url: url,
    placementAdvice: {
      displayWidth: displayWidth,
      displayHeight: displayHeight,
      presentationDocumentTarget: 'iframe'
    }
  }]);
}

// Adds an iframe with an LTI launch and grade write back
// LineItem specification:
// https://www.imsglobal.org/lti/model/uml/purl.imsglobal.org/vocab/lis/v2/outcomes/index.html#LineItem
function embedLtiIframeWriteBack(label, url) {
  var displayWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '100%';
  var displayHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '500px';

  return {
    '@context': ['http://purl.imsglobal.org/ctx/lti/v1/ContentItem', {
      lineItem: 'http://purl.imsglobal.org/ctx/lis/v2/LineItem',
      res: 'http://purl.imsglobal.org/ctx/lis/v2p1/Result#'
    }],
    '@graph': [{
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
          totalMaximum: 10
        }
      },
      placementAdvice: {
        displayWidth: displayWidth,
        displayHeight: displayHeight,
        presentationDocumentTarget: 'iframe'
      }
    }]
  };
}