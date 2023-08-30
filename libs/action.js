"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
//
// parameters:
//   canvas    - The object related to the Canvas api call to be made. ie search_account_domains
//   params    - The params passed to Canvas
//   body      - The body of the request. Used for POST and PUT
//   localData - An object containing data that the action will hold onto for local usage
//               but will not be passed to the server.
//   timeout   - Override the default network timeout for this request
function _default(canvas, params, body) {
  var localData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var timeout = arguments.length > 4 ? arguments[4] : undefined;
  return {
    type: canvas.type,
    canvas: canvas,
    params: params,
    body: body,
    localData: localData,
    timeout: timeout
  };
}