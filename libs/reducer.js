"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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