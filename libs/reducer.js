"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _lodash = _interopRequireDefault(require("lodash"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } // Note. This reducer doesn't work and will need a fair amount
var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (action.canvas) {
    var newState = state.get(action.canvas.key);
    if (_lodash["default"].endsWith(action.type, '_DONE')) {
      switch (action.canvas.method) {
        case 'get':
          {
            var mapped = _lodash["default"].reduce(action.payload, function (result, as) {
              return _objectSpread(_objectSpread({}, result), {}, (0, _defineProperty2["default"])({}, as.id, as));
            }, {});
            return newState.merge(mapped);
          }
        case 'post':
          {
            newState = _lodash["default"].deepClone(newState);
            newState[action.payload.id] = action.payload;
            return newState;
          }
        case 'put':
          {
            return newState;
          }
        case 'delete':
          {
            return newState;
          }
        default:
          {
            break;
          }
      }
    } else {
      // Optimistic updates
      switch (action.canvas.method) {
        case 'post':
          {
            return newState;
          }
        case 'put':
          {
            return newState;
          }
        case 'delete':
          {
            return newState;
          }
        default:
          {
            break;
          }
      }
    }
  }
  return state;
};
exports["default"] = _default;