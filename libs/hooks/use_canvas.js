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

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = useCanvas;

var _react = require('react');

var _api = require('atomic-fuel/libs/api/api');

var _api2 = _interopRequireDefault(_api);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// parameters:
//   canvasType - The object related to the Canvas api call to be made. ie search_account_domains
//   params     - The params passed to Canvas
//   body       - The body of the request. Used for POST and PUT
//   timeout    - Override the default network timeout for this request
function useCanvas(jwt, settings, canvasType) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var body = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var timeout = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 30000;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  (0, _react.useEffect)(function () {
    var callCanvasProxy = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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

                setResult(res);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function callCanvasProxy() {
        return _ref.apply(this, arguments);
      };
    }();

    callCanvasProxy();
  }, []);

  return result;
}