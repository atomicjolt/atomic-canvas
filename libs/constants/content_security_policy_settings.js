"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDomainFromAccount = exports.retrieveReportedCspViolationsForAccount = exports.addMultipleAllowedDomainsToAccount = exports.addAllowedDomainToAccount = exports.lockOrUnlockCurrentCspSettingsForSubAccountsAndCourses = exports.enableDisableOrClearExplicitCspSettingAccounts = exports.enableDisableOrClearExplicitCspSettingCourses = exports.getCurrentSettingsForAccountOrCourseAccounts = exports.getCurrentSettingsForAccountOrCourseCourses = void 0;
//
// Content Security Policy Settings
//
// Get current settings for account or course
// Update multiple modules in an account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: courses/{course_id}/csp_settings
//
// Example:
// return canvasRequest(get_current_settings_for_account_or_course_courses, {course_id});
exports.getCurrentSettingsForAccountOrCourseCourses = { type: 'GET_CURRENT_SETTINGS_FOR_ACCOUNT_OR_COURSE_COURSES', method: 'get', key: 'get_current_settings_for_account_or_course_coursesget_current_settings_for_account_or_course_courses_course_id', required: ['course_id'] };
// Get current settings for account or course
// Update multiple modules in an account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_settings
//
// Example:
// return canvasRequest(get_current_settings_for_account_or_course_accounts, {account_id});
exports.getCurrentSettingsForAccountOrCourseAccounts = { type: 'GET_CURRENT_SETTINGS_FOR_ACCOUNT_OR_COURSE_ACCOUNTS', method: 'get', key: 'get_current_settings_for_account_or_course_accountsget_current_settings_for_account_or_course_accounts_account_id', required: ['account_id'] };
// Enable, disable, or clear explicit CSP setting
// Either explicitly sets CSP to be on or off for courses and sub-accounts,
// or clear the explicit settings to default to those set by a parent account
// 
// Note: If "inherited" and "settings_locked" are both true for this account or course,
// then the CSP setting cannot be modified.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: courses/{course_id}/csp_settings
//
// Example:
// const body = {
//   status (required)
// }
// return canvasRequest(enable_disable_or_clear_explicit_csp_setting_courses, {course_id}, body);
exports.enableDisableOrClearExplicitCspSettingCourses = { type: 'ENABLE_DISABLE_OR_CLEAR_EXPLICIT_CSP_SETTING_COURSES', method: 'put', key: 'enable_disable_or_clear_explicit_csp_setting_coursesenable_disable_or_clear_explicit_csp_setting_courses_course_id', required: ['course_id'] };
// Enable, disable, or clear explicit CSP setting
// Either explicitly sets CSP to be on or off for courses and sub-accounts,
// or clear the explicit settings to default to those set by a parent account
// 
// Note: If "inherited" and "settings_locked" are both true for this account or course,
// then the CSP setting cannot be modified.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_settings
//
// Example:
// const body = {
//   status (required)
// }
// return canvasRequest(enable_disable_or_clear_explicit_csp_setting_accounts, {account_id}, body);
exports.enableDisableOrClearExplicitCspSettingAccounts = { type: 'ENABLE_DISABLE_OR_CLEAR_EXPLICIT_CSP_SETTING_ACCOUNTS', method: 'put', key: 'enable_disable_or_clear_explicit_csp_setting_accountsenable_disable_or_clear_explicit_csp_setting_accounts_account_id', required: ['account_id'] };
// Lock or unlock current CSP settings for sub-accounts and courses
// Can only be set if CSP is explicitly enabled or disabled on this account (i.e. "inherited" is false).
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_settings/lock
//
// Example:
// const body = {
//   settings_locked (required)
// }
// return canvasRequest(lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses, {account_id}, body);
exports.lockOrUnlockCurrentCspSettingsForSubAccountsAndCourses = { type: 'LOCK_OR_UNLOCK_CURRENT_CSP_SETTINGS_FOR_SUB_ACCOUNTS_AND_COURSES', method: 'put', key: 'lock_or_unlock_current_csp_settings_for_sub_accounts_and_courseslock_or_unlock_current_csp_settings_for_sub_accounts_and_courses_account_id', required: ['account_id'] };
// Add an allowed domain to account
// Adds an allowed domain for the current account. Note: this will not take effect
// unless CSP is explicitly enabled on this account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_settings/domains
//
// Example:
// const body = {
//   domain (required)
// }
// return canvasRequest(add_allowed_domain_to_account, {account_id}, body);
exports.addAllowedDomainToAccount = { type: 'ADD_ALLOWED_DOMAIN_TO_ACCOUNT', method: 'post', key: 'add_allowed_domain_to_accountadd_allowed_domain_to_account_account_id', required: ['account_id'] };
// Add multiple allowed domains to an account
// Adds multiple allowed domains for the current account. Note: this will not take effect
// unless CSP is explicitly enabled on this account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_settings/domains/batch_create
//
// Example:
// const body = {
//   domains (required)
// }
// return canvasRequest(add_multiple_allowed_domains_to_account, {account_id}, body);
exports.addMultipleAllowedDomainsToAccount = { type: 'ADD_MULTIPLE_ALLOWED_DOMAINS_TO_ACCOUNT', method: 'post', key: 'add_multiple_allowed_domains_to_accountadd_multiple_allowed_domains_to_account_account_id', required: ['account_id'] };
// Retrieve reported CSP Violations for account
// Must be called on a root account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_log
//
// Example:
// return canvasRequest(retrieve_reported_csp_violations_for_account, {account_id});
exports.retrieveReportedCspViolationsForAccount = { type: 'RETRIEVE_REPORTED_CSP_VIOLATIONS_FOR_ACCOUNT', method: 'get', key: 'retrieve_reported_csp_violations_for_accountretrieve_reported_csp_violations_for_account_account_id', required: ['account_id'] };
// Remove a domain from account
// Removes an allowed domain from the current account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_settings/domains
//
// Example:
// const body = {
//   domain (required)
// }
// return canvasRequest(remove_domain_from_account, {account_id}, body);
exports.removeDomainFromAccount = { type: 'REMOVE_DOMAIN_FROM_ACCOUNT', method: 'delete', key: 'remove_domain_from_accountremove_domain_from_account_account_id', required: ['account_id'] };
//# sourceMappingURL=content_security_policy_settings.js.map