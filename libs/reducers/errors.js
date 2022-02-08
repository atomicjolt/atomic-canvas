"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.error && action.error.response && action.error.response.text.indexOf('canvas_authorization_required') >= 0) {
    var newState = _lodash["default"].cloneDeep(state);

    newState.canvasReAuthorizationRequired = true;
    return newState;
  }

  return state;
};

exports["default"] = _default;