"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = callCanvasProxy;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _api = _interopRequireDefault(require("atomic-fuel/libs/api/api"));
var _constants = require("./constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function callCanvasProxy(_x) {
  return _callCanvasProxy.apply(this, arguments);
}
function _callCanvasProxy() {
  _callCanvasProxy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(canvasType) {
    var params,
      body,
      timeout,
      settings,
      jwt,
      res,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          body = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          timeout = _args.length > 3 && _args[3] !== undefined ? _args[3] : 30000;
          settings = _args.length > 4 ? _args[4] : undefined;
          jwt = _args.length > 5 ? _args[5] : undefined;
          _context.next = 7;
          return _api["default"].execRequest(canvasType.method, _constants.canvasProxyUrl, settings.api_url, jwt, settings.csrf_token, _objectSpread(_objectSpread({}, params), {}, {
            lms_proxy_call_type: canvasType.type,
            context_id: settings.context_id,
            oauth_consumer_key: settings.oauth_consumer_key
          }), body, undefined, timeout);
        case 7:
          res = _context.sent;
          return _context.abrupt("return", res);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _callCanvasProxy.apply(this, arguments);
}