"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCanvas;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _reactRedux = require("react-redux");

var _canvas_proxy = _interopRequireDefault(require("../canvas_proxy"));

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
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var settings = (0, _reactRedux.useSelector)(function (state) {
    return state.settings;
  });
  var jwt = (0, _reactRedux.useSelector)(function (state) {
    return state.jwt;
  });
  (0, _react.useEffect)(function () {
    function send() {
      return _send.apply(this, arguments);
    }

    function _send() {
      _send = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _canvas_proxy["default"])(canvasType, params, body, timeout, settings, jwt);

              case 3:
                res = _context.sent;
                setResult(res);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setError(_context.t0);

              case 10:
                setLoading(false);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _send.apply(this, arguments);
    }

    send();
  }, []);
  return {
    result: result,
    error: error,
    loading: loading
  };
}