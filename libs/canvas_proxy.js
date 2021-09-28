'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _api = require('atomic-fuel/libs/api/api');

var _api2 = _interopRequireDefault(_api);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(canvasType) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30000;
    var settings = arguments[4];
    var jwt = arguments[5];
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _api2.default.execRequest(canvasType.method, _constants.canvasProxyUrl, settings.api_url, jwt, settings.csrf_token, (0, _extends3.default)({}, params, {
              lms_proxy_call_type: canvasType.type,
              context_id: settings.context_id,
              oauth_consumer_key: settings.oauth_consumer_key
            }), body, undefined, timeout);

          case 2:
            res = _context.sent;
            return _context.abrupt('return', res);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function callCanvasProxy(_x) {
    return _ref.apply(this, arguments);
  }

  return callCanvasProxy;
}();