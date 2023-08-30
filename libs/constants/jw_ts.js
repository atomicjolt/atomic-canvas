"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshJwt = exports.createJwt = void 0;
//
// JWTs
//
// Create JWT
// Create a unique jwt for using with other Canvas services
// 
// Generates a different JWT each time it's called, each one expires
// after a short window (1 hour)
//
// API Docs: https://canvas.instructure.com/doc/api/jw_ts.html
// API Url: jwts
//
// Example:
// const body = {
//   workflows
//   context_type
//   context_id
//   context_uuid
// }
// return canvasRequest(create_jwt, {}, body);
var createJwt = {
  type: 'CREATE_JWT',
  method: 'post',
  key: 'create_jwt',
  required: []
}; // Refresh JWT
// Refresh a JWT for use with other canvas services
// 
// Generates a different JWT each time it's called, each one expires
// after a short window (1 hour).
//
// API Docs: https://canvas.instructure.com/doc/api/jw_ts.html
// API Url: jwts/refresh
//
// Example:
// const body = {
//   jwt (required)
// }
// return canvasRequest(refresh_jwt, {}, body);

exports.createJwt = createJwt;
var refreshJwt = {
  type: 'REFRESH_JWT',
  method: 'post',
  key: 'refresh_jwt',
  required: []
};
exports.refreshJwt = refreshJwt;