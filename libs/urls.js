"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextUrl = getNextUrl;
exports.parseParams = parseParams;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getNextUrl(link) {
  if (link) {
    var url = _lodash["default"].find(link.split(','), function (l) {
      var val = _lodash["default"].trim(l.split(';')[1]);

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
    return _lodash["default"].reduce(parts[1].split('&'), function (params, pair) {
      return _objectSpread(_objectSpread({}, params), {}, (0, _defineProperty2["default"])({}, pair.split('=')[0], pair.split('=')[1]));
    }, {});
  }

  return undefined;
}