"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePublicJwk = void 0;
//
// Public JWK
//
// Update Public JWK
// Rotate the public key in jwk format when using lti services
//
// API Docs: https://canvas.instructure.com/doc/api/public_jwk.html
// API Url: /lti/developer_key/update_public_jwk
//
// Example:
// const body = {
//   public_jwk (required)
// }
// return canvasRequest(update_public_jwk, {}, body);
exports.updatePublicJwk = { type: 'UPDATE_PUBLIC_JWK', method: 'put', key: 'update_public_jwk', required: [] };
//# sourceMappingURL=public_jwk.js.map