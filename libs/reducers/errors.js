'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.error && action.error.response && action.error.response.status == 401 && action.error.response.text.indexOf('canvas_authorization_required') >= 0) {
    var newState = _lodash2.default.cloneDeep(state);
    newState.canvasReAuthorizationRequired = true;
    return newState;
  }
  return state;
};