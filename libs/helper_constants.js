'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// List Accounts
//
// This is a helper method that combines several calls to the Canvas API to
// generate a list of all accounts available to the user
//
//
// Example:
// return canvasRequest(helperListAccounts);
var helperListAccounts = exports.helperListAccounts = { type: 'HELPER_ALL_ACCOUNTS', method: 'get', key: 'list_accounts', required: [] };