"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.proxyCanvas = proxyCanvas;

var _lodash = _interopRequireDefault(require("lodash"));

var _api = _interopRequireDefault(require("atomic-fuel/libs/api/api"));

var _wrapper = require("atomic-fuel/libs/constants/wrapper");

var _urls = require("./urls");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function checkRequired(action) {
  if (action.canvas.required.length > 0) {
    var missing = _lodash["default"].difference(action.canvas.required, _lodash["default"].keys(action.params));

    if (missing.length > 0) {
      throw new Error("Missing required parameter(s): ".concat(missing.join(', ')));
    }
  }
}

function proxyCanvas(store, action, params) {
  var state = store.getState();
  checkRequired(action);

  var promise = _api["default"].execRequest(action.canvas.method, _constants.canvasProxyUrl, state.settings.api_url, state.jwt, state.settings.csrf_token, _objectSpread(_objectSpread(_objectSpread({}, action.params), params), {}, {
    lms_proxy_call_type: action.canvas.type,
    context_id: state.settings.context_id,
    oauth_consumer_key: state.settings.oauth_consumer_key
  }), action.body, undefined, action.timeout);

  if (promise) {
    promise.then(function (response) {
      var lastPage = false;

      if (action.canvas.method === 'get' && response.header) {
        var nextUrl = (0, _urls.getNextUrl)(response.headers.link);

        if (nextUrl) {
          var newParams = (0, _urls.parseParams)(nextUrl);

          if (newParams) {
            proxyCanvas(store, action, newParams);
          }
        } else {
          lastPage = true;
        }
      }

      store.dispatch({
        type: action.canvas.type + _wrapper.DONE,
        payload: response.body,
        original: action,
        lastPage: lastPage,
        response: response
      }); // Dispatch the new data
    })["catch"](function (error) {
      store.dispatch({
        type: action.canvas.type + _wrapper.DONE,
        original: action,
        error: error
      });
    });
  }

  return promise;
}

var CanvasApi = function CanvasApi(store) {
  return function (next) {
    return function (action) {
      if (action.canvas) {
        proxyCanvas(store, action, {});
      } // call the next middleWare


      next(action);
    };
  };
};

exports["default"] = CanvasApi;