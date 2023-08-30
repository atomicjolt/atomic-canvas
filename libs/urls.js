"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextUrl = getNextUrl;
exports.parseParams = parseParams;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _lodash = _interopRequireDefault(require("lodash"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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