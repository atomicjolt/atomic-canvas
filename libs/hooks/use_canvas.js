'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = useCanvas;

var _react = require('react');

var _reactRedux = require('react-redux');

var _canvas_proxy = require('../canvas_proxy');

var _canvas_proxy2 = _interopRequireDefault(_canvas_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// parameters:
//   canvasType - The object related to the Canvas api call to be made. ie search_account_domains
//   params     - The params passed to Canvas
//   body       - The body of the request. Used for POST and PUT
//   timeout    - Override the default network timeout for this request
function useCanvas(canvasType) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30000;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var settings = (0, _reactRedux.useSelector)(function (state) {
    return state.settings;
  });
  var jwt = (0, _reactRedux.useSelector)(function (state) {
    return state.jwt;
  });

  (0, _react.useEffect)(function () {
    var send = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  res = (0, _canvas_proxy2.default)(canvasType, params, body, timeout, settings, jwt);

                  setResult(res);
                } catch (err) {
                  setError(err);
                }
                setLoading(false);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function send() {
        return _ref.apply(this, arguments);
      };
    }();

    send();
  }, []);

  return {
    result: result,
    error: error,
    loading: loading
  };
}