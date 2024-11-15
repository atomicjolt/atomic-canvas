"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.proxyCanvas = void 0;
var lodash_1 = __importDefault(require("lodash"));
var api_1 = __importDefault(require("@atomicjolt/atomic-fuel/libs/api/api"));
var wrapper_1 = require("@atomicjolt/atomic-fuel/libs/constants/wrapper");
var urls_1 = require("./urls");
var constants_1 = require("./constants");
function checkRequired(action) {
    if (action.canvas.required.length > 0) {
        var missing = lodash_1.default.difference(action.canvas.required, lodash_1.default.keys(action.params));
        if (missing.length > 0) {
            throw new Error("Missing required parameter(s): ".concat(missing.join(', ')));
        }
    }
}
function proxyCanvas(store, action, params) {
    var state = store.getState();
    checkRequired(action);
    var promise = api_1.default.execRequest(action.canvas.method, constants_1.canvasProxyUrl, state.settings.api_url, state.jwt, state.settings.csrf_token, __assign(__assign(__assign({}, action.params), params), { lms_proxy_call_type: action.canvas.type, context_id: state.settings.context_id, oauth_consumer_key: state.settings.oauth_consumer_key }), action.body, undefined, action.timeout);
    if (promise) {
        promise.then(function (response) {
            var lastPage = false;
            if (action.canvas.method === 'get' && response.header) {
                var nextUrl = (0, urls_1.getNextUrl)(response.headers.link);
                if (nextUrl) {
                    var newParams = (0, urls_1.parseParams)(nextUrl);
                    if (newParams) {
                        proxyCanvas(store, action, newParams);
                    }
                }
                else {
                    lastPage = true;
                }
            }
            store.dispatch({
                type: action.canvas.type + wrapper_1.DONE,
                payload: response.body,
                original: action,
                lastPage: lastPage,
                response: response,
            }); // Dispatch the new data
        }).catch(function (error) {
            store.dispatch({
                type: action.canvas.type + wrapper_1.DONE,
                original: action,
                error: error,
            });
        });
    }
    return promise;
}
exports.proxyCanvas = proxyCanvas;
var CanvasApi = function (store) { return function (next) { return function (action) {
    if (action.canvas) {
        proxyCanvas(store, action, {});
    }
    // call the next middleWare
    next(action);
}; }; };
exports.default = CanvasApi;
//# sourceMappingURL=middleware.js.map