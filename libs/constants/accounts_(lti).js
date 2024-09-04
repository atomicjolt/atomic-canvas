"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = void 0;
//
// Accounts (LTI)
//
// Get account
// Retrieve information on an individual account, given by local or global ID.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts_(lti).html
// API Url: /lti/accounts/{account_id}
//
// Example:
// return canvasRequest(get_account, {account_id});
exports.getAccount = { type: 'GET_ACCOUNT', method: 'get', key: 'get_accountget_account_account_id', required: ['account_id'] };
//# sourceMappingURL=accounts_(lti).js.map