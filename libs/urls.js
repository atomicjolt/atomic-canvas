'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.getNextUrl = getNextUrl;
exports.parseParams = parseParams;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNextUrl(link) {
  if (link) {
    var url = _lodash2.default.find(link.split(','), function (l) {
      var val = _lodash2.default.trim(l.split(';')[1]);
      return val === 'rel="next"';
    });
    if (url) {
      return url.split(';')[0].replace(/[<>\s]/g, '');
    }
  }
  return null;
}

function parseParams(url) {
  var parts = url.split('?');
  if (parts.length > 1) {
    return _lodash2.default.reduce(parts[1].split('&'), function (params, pair) {
      return (0, _extends4.default)({}, params, (0, _defineProperty3.default)({}, pair.split('=')[0], pair.split('=')[1]));
    }, {});
  }
  return undefined;
}