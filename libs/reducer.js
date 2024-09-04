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
// Note. This reducer doesn't work and will need a fair amount
var lodash_1 = __importDefault(require("lodash"));
exports.default = (function (state, action) {
    if (state === void 0) { state = {}; }
    if (action.canvas) {
        var newState = state.get(action.canvas.key);
        if (lodash_1.default.endsWith(action.type, '_DONE')) {
            switch (action.canvas.method) {
                case 'get': {
                    var mapped = lodash_1.default.reduce(action.payload, function (result, as) {
                        var _a;
                        return (__assign(__assign({}, result), (_a = {}, _a[as.id] = as, _a)));
                    }, {});
                    return newState.merge(mapped);
                }
                case 'post': {
                    newState = lodash_1.default.deepClone(newState);
                    newState[action.payload.id] = action.payload;
                    return newState;
                }
                case 'put': {
                    return newState;
                }
                case 'delete': {
                    return newState;
                }
                default: {
                    break;
                }
            }
        }
        else {
            // Optimistic updates
            switch (action.canvas.method) {
                case 'post': {
                    return newState;
                }
                case 'put': {
                    return newState;
                }
                case 'delete': {
                    return newState;
                }
                default: {
                    break;
                }
            }
        }
    }
    return state;
});
//# sourceMappingURL=reducer.js.map