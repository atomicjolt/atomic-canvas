"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserLogin = exports.editUserLogin = exports.createUserLogin = exports.kickoffPasswordRecoveryFlow = exports.listUserLoginsUsers = exports.listUserLoginsAccounts = void 0;
//
// Logins
//
// List user logins
// Given a user ID, return a paginated list of that user's logins for the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: accounts/{account_id}/logins
//
// Example:
// return canvasRequest(list_user_logins_accounts, {account_id});
exports.listUserLoginsAccounts = { type: 'LIST_USER_LOGINS_ACCOUNTS', method: 'get', key: 'list_user_logins_accountslist_user_logins_accounts_account_id', required: ['account_id'] };
// List user logins
// Given a user ID, return a paginated list of that user's logins for the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: users/{user_id}/logins
//
// Example:
// return canvasRequest(list_user_logins_users, {user_id});
exports.listUserLoginsUsers = { type: 'LIST_USER_LOGINS_USERS', method: 'get', key: 'list_user_logins_userslist_user_logins_users_user_id', required: ['user_id'] };
// Kickoff password recovery flow
// Given a user email, generate a nonce and email it to the user
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: users/reset_password
//
// Example:
// return canvasRequest(kickoff_password_recovery_flow, {});
exports.kickoffPasswordRecoveryFlow = { type: 'KICKOFF_PASSWORD_RECOVERY_FLOW', method: 'post', key: 'kickoff_password_recovery_flow', required: [] };
// Create a user login
// Create a new login for an existing user in the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: accounts/{account_id}/logins
//
// Example:
// const body = {
//   user[id] (required)
//   login[unique_id] (required)
//   login[password]
//   login[sis_user_id]
//   login[integration_id]
//   login[authentication_provider_id]
//   login[declared_user_type]
// }
// return canvasRequest(create_user_login, {account_id}, body);
exports.createUserLogin = { type: 'CREATE_USER_LOGIN', method: 'post', key: 'create_user_logincreate_user_login_account_id', required: ['account_id'] };
// Edit a user login
// Update an existing login for a user in the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: accounts/{account_id}/logins/{id}
//
// Example:
// const body = {
//   login[unique_id]
//   login[password]
//   login[sis_user_id]
//   login[integration_id]
//   login[authentication_provider_id]
//   login[workflow_state]
//   login[declared_user_type]
//   override_sis_stickiness
// }
// return canvasRequest(edit_user_login, {account_id, id}, body);
exports.editUserLogin = { type: 'EDIT_USER_LOGIN', method: 'put', key: 'edit_user_loginedit_user_login_{account_id}_{id}', required: ['account_id', 'id'] };
// Delete a user login
// Delete an existing login.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: users/{user_id}/logins/{id}
//
// Example:
// return canvasRequest(delete_user_login, {user_id, id});
exports.deleteUserLogin = { type: 'DELETE_USER_LOGIN', method: 'delete', key: 'delete_user_logindelete_user_login_{user_id}_{id}', required: ['user_id', 'id'] };
//# sourceMappingURL=logins.js.map