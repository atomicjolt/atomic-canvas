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
export const getCurrentSettingsForAccountOrCourseCourses = { type: 'GET_CURRENT_SETTINGS_FOR_ACCOUNT_OR_COURSE_COURSES', method: 'get', key: 'get_current_settings_for_account_or_course_coursesget_current_settings_for_account_or_course_courses_course_id', required: ['course_id'] };

// Get current settings for account or course
// Update multiple modules in an account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_settings
//
// Example:
// return canvasRequest(get_current_settings_for_account_or_course_accounts, {account_id});
export const getCurrentSettingsForAccountOrCourseAccounts = { type: 'GET_CURRENT_SETTINGS_FOR_ACCOUNT_OR_COURSE_ACCOUNTS', method: 'get', key: 'get_current_settings_for_account_or_course_accountsget_current_settings_for_account_or_course_accounts_account_id', required: ['account_id'] };

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
export const enableDisableOrClearExplicitCspSettingCourses = { type: 'ENABLE_DISABLE_OR_CLEAR_EXPLICIT_CSP_SETTING_COURSES', method: 'put', key: 'enable_disable_or_clear_explicit_csp_setting_coursesenable_disable_or_clear_explicit_csp_setting_courses_course_id', required: ['course_id'] };

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
export const enableDisableOrClearExplicitCspSettingAccounts = { type: 'ENABLE_DISABLE_OR_CLEAR_EXPLICIT_CSP_SETTING_ACCOUNTS', method: 'put', key: 'enable_disable_or_clear_explicit_csp_setting_accountsenable_disable_or_clear_explicit_csp_setting_accounts_account_id', required: ['account_id'] };

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
export const lockOrUnlockCurrentCspSettingsForSubAccountsAndCourses = { type: 'LOCK_OR_UNLOCK_CURRENT_CSP_SETTINGS_FOR_SUB_ACCOUNTS_AND_COURSES', method: 'put', key: 'lock_or_unlock_current_csp_settings_for_sub_accounts_and_courseslock_or_unlock_current_csp_settings_for_sub_accounts_and_courses_account_id', required: ['account_id'] };

// Add a domain to account whitelist
// Adds a domain to the whitelist for the current account. Note: this will not take effect
// unless CSP is explicitly enabled on this account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_settings/domains
//
// Example:
// const body = {
//   domain (required)
// }
// return canvasRequest(add_domain_to_account_whitelist, {account_id}, body);
export const addDomainToAccountWhitelist = { type: 'ADD_DOMAIN_TO_ACCOUNT_WHITELIST', method: 'post', key: 'add_domain_to_account_whitelistadd_domain_to_account_whitelist_account_id', required: ['account_id'] };

// Add multiple domains to account whitelist
// Adds multiple domains to the whitelist for the current account. Note: this will not take effect
// unless CSP is explicitly enabled on this account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_settings/domains/batch_create
//
// Example:
// const body = {
//   domains (required)
// }
// return canvasRequest(add_multiple_domains_to_account_whitelist, {account_id}, body);
export const addMultipleDomainsToAccountWhitelist = { type: 'ADD_MULTIPLE_DOMAINS_TO_ACCOUNT_WHITELIST', method: 'post', key: 'add_multiple_domains_to_account_whitelistadd_multiple_domains_to_account_whitelist_account_id', required: ['account_id'] };

// Retrieve reported CSP Violations for account
// Must be called on a root account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_log
//
// Example:
// return canvasRequest(retrieve_reported_csp_violations_for_account, {account_id});
export const retrieveReportedCspViolationsForAccount = { type: 'RETRIEVE_REPORTED_CSP_VIOLATIONS_FOR_ACCOUNT', method: 'get', key: 'retrieve_reported_csp_violations_for_accountretrieve_reported_csp_violations_for_account_account_id', required: ['account_id'] };

// Remove a domain from account whitelist
// Removes a domain from the whitelist for the current account.
//
// API Docs: https://canvas.instructure.com/doc/api/content_security_policy_settings.html
// API Url: accounts/{account_id}/csp_settings/domains
//
// Example:
// const body = {
//   domain (required)
// }
// return canvasRequest(remove_domain_from_account_whitelist, {account_id}, body);
export const removeDomainFromAccountWhitelist = { type: 'REMOVE_DOMAIN_FROM_ACCOUNT_WHITELIST', method: 'delete', key: 'remove_domain_from_account_whitelistremove_domain_from_account_whitelist_account_id', required: ['account_id'] };