"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
// parameters:
//   canvas    - The object related to the Canvas api call to be made. ie search_account_domains
//   params    - The params passed to Canvas
//   body      - The body of the request. Used for POST and PUT
//   localData - An object containing data that the action will hold onto for local usage
//               but will not be passed to the server.
//   timeout   - Override the default network timeout for this request
function default_1(canvas, params, body, localData, timeout) {
    if (localData === void 0) { localData = {}; }
    return {
        type: canvas.type,
        canvas: canvas,
        params: params,
        body: body,
        localData: localData,
        timeout: timeout,
    };
}
exports.default = default_1;
//# sourceMappingURL=action.js.map