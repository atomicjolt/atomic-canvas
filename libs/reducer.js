'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];


  if (action.canvas) {
    var newState = state.get(action.canvas.key);

    if (_lodash2.default.endsWith(action.type, '_DONE')) {

      switch (action.canvas.method) {
        case 'get':
          {
            var mapped = _lodash2.default.reduce(action.payload, function (result, as) {
              return (0, _extends4.default)({}, result, (0, _defineProperty3.default)({}, as.id, as));
            }, {});
            return newState.merge(mapped);
          }
        case 'post':
          {
            newState = _lodash2.default.deepClone(newState);
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
}; // Note. This reducer doesn't work and will need a fair amount