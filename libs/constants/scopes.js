"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listScopes = void 0;
//
// Scopes
//
// List scopes
// A list of scopes that can be applied to developer keys and access tokens.
//
// API Docs: https://canvas.instructure.com/doc/api/scopes.html
// API Url: accounts/{account_id}/scopes
//
// Example:
// const query = {
//   group_by
// }
// return canvasRequest(list_scopes, {account_id, ...query});
exports.listScopes = { type: 'LIST_SCOPES', method: 'get', key: 'list_scopeslist_scopes_account_id', required: ['account_id'] };
//# sourceMappingURL=scopes.js.map