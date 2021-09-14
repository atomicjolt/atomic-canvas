'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.proxyCanvas = proxyCanvas;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _api = require('atomic-fuel/libs/api/api');

var _api2 = _interopRequireDefault(_api);

var _wrapper = require('atomic-fuel/libs/constants/wrapper');

var _urls = require('./urls');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkRequired(action) {
  if (action.canvas.required.length > 0) {
    var missing = _lodash2.default.difference(action.canvas.required, _lodash2.default.keys(action.params));
    if (missing.length > 0) {
      throw new Error('Missing required parameter(s): ' + missing.join(', '));
    }
  }
}

function proxyCanvas(store, action, params) {
  var state = store.getState();

  checkRequired(action);

  var promise = _api2.default.execRequest(action.canvas.method, _constants.canvasProxyUrl, state.settings.api_url, state.jwt, state.settings.csrf_token, (0, _extends3.default)({}, action.params, params, {
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
    }).catch(function (error) {
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

exports.default = CanvasApi;