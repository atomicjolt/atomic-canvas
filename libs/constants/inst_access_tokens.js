'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// InstAccess tokens
//
// Create InstAccess token
// Create a unique, encrypted InstAccess token.
// 
// Generates a different InstAccess token each time it's called, each one expires
// after a short window (1 hour).
//
// API Docs: https://canvas.instructure.com/doc/api/inst_access_tokens.html
// API Url: inst_access_tokens
//
// Example:
// return canvasRequest(create_instaccess_token, {});
var createInstaccessToken = exports.createInstaccessToken = { type: 'CREATE_INSTACCESS_TOKEN', method: 'post', key: 'create_instaccess_token', required: [] };