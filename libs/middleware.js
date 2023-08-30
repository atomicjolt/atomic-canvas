"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.proxyCanvas = proxyCanvas;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _lodash = _interopRequireDefault(require("lodash"));
var _api = _interopRequireDefault(require("atomic-fuel/libs/api/api"));
var _wrapper = require("atomic-fuel/libs/constants/wrapper");
var _urls = require("./urls");
var _constants = require("./constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
      }

      // call the next middleWare
      next(action);
    };
  };
};
exports["default"] = CanvasApi;