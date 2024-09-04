"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var initialState = {};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    if (action.error &&
        action.error.response &&
        action.error.response.text.indexOf('canvas_authorization_required') >= 0) {
        var newState = lodash_1.default.cloneDeep(state);
        newState.canvasReAuthorizationRequired = true;
        return newState;
    }
    return state;
});
//# sourceMappingURL=errors.js.map