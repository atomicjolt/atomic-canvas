'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Accounts
//
// List accounts
// A paginated list of accounts that the current user can view or manage.
// Typically, students and even teachers will get an empty list in response,
// only account admins can view the accounts that they are in.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_accounts, {, ...query});
var listAccounts = exports.listAccounts = { type: 'LIST_ACCOUNTS', method: 'get', key: 'list_accounts', required: [] };

// List accounts for course admins
// A paginated list of accounts that the current user can view through their
// admin course enrollments. (Teacher, TA, or designer enrollments).
// Only returns "id", "name", "workflow_state", "root_account_id" and "parent_account_id"
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: course_accounts
//
// Example:
// return canvasRequest(list_accounts_for_course_admins, {});
var listAccountsForCourseAdmins = exports.listAccountsForCourseAdmins = { type: 'LIST_ACCOUNTS_FOR_COURSE_ADMINS', method: 'get', key: 'list_accounts_for_course_admins', required: [] };

// Get a single account
// Retrieve information on an individual account, given by id or sis
// sis_account_id.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{id}
//
// Example:
// return canvasRequest(get_single_account, {id});
var getSingleAccount = exports.getSingleAccount = { type: 'GET_SINGLE_ACCOUNT', method: 'get', key: 'get_single_accountget_single_account_id', required: ['id'] };

// Permissions
// Returns permission information for the calling user and the given account.
// You may use `self` as the account id to check permissions against the domain root account.
// The caller must have an account role or admin (teacher/TA/designer) enrollment in a course
// in the account.
// 
// See also the {api:CoursesController#permissions Course} and {api:GroupsController#permissions Group}
// counterparts.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/permissions
//
// Example:
// const query = {
//   permissions
// }
// return canvasRequest(permissions, {account_id, ...query});
var permissions = exports.permissions = { type: 'PERMISSIONS', method: 'get', key: 'permissionspermissions_account_id', required: ['account_id'] };

// Get the sub-accounts of an account
// List accounts that are sub-accounts of the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/sub_accounts
//
// Example:
// const query = {
//   recursive
// }
// return canvasRequest(get_sub_accounts_of_account, {account_id, ...query});
var getSubAccountsOfAccount = exports.getSubAccountsOfAccount = { type: 'GET_SUB_ACCOUNTS_OF_ACCOUNT', method: 'get', key: 'get_sub_accounts_of_accountget_sub_accounts_of_account_account_id', required: ['account_id'] };

// Get the Terms of Service
// Returns the terms of service for that account
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/terms_of_service
//
// Example:
// return canvasRequest(get_terms_of_service, {account_id});
var getTermsOfService = exports.getTermsOfService = { type: 'GET_TERMS_OF_SERVICE', method: 'get', key: 'get_terms_of_serviceget_terms_of_service_account_id', required: ['account_id'] };

// Get help links
// Returns the help links for that account
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/help_links
//
// Example:
// return canvasRequest(get_help_links, {account_id});
var getHelpLinks = exports.getHelpLinks = { type: 'GET_HELP_LINKS', method: 'get', key: 'get_help_linksget_help_links_account_id', required: ['account_id'] };

// List active courses in an account
// Retrieve a paginated list of courses in this account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/courses
//
// Example:
// const query = {
//   with_enrollments
//   enrollment_type
//   published
//   completed
//   blueprint
//   blueprint_associated
//   by_teachers
//   by_subaccounts
//   hide_enrollmentless_courses
//   state
//   enrollment_term_id
//   search_term
//   include
//   sort
//   order
//   search_by
// }
// return canvasRequest(list_active_courses_in_account, {account_id, ...query});
var listActiveCoursesInAccount = exports.listActiveCoursesInAccount = { type: 'LIST_ACTIVE_COURSES_IN_ACCOUNT', method: 'get', key: 'list_active_courses_in_accountlist_active_courses_in_account_account_id', required: ['account_id'] };

// Update an account
// Update an existing account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{id}
//
// Example:
// const body = {
//   account[name]
//   account[sis_account_id]
//   account[default_time_zone]
//   account[default_storage_quota_mb]
//   account[default_user_storage_quota_mb]
//   account[default_group_storage_quota_mb]
//   account[settings][restrict_student_past_view][value]
//   account[settings][restrict_student_past_view][locked]
//   account[settings][restrict_student_future_view][value]
//   account[settings][restrict_student_future_view][locked]
//   account[settings][lock_all_announcements][value]
//   account[settings][lock_all_announcements][locked]
//   account[settings][usage_rights_required][value]
//   account[settings][usage_rights_required][locked]
//   account[settings][restrict_student_future_listing][value]
//   account[settings][restrict_student_future_listing][locked]
//   account[services]
// }
// return canvasRequest(update_account, {id}, body);
var updateAccount = exports.updateAccount = { type: 'UPDATE_ACCOUNT', method: 'put', key: 'update_accountupdate_account_id', required: ['id'] };

// Delete a user from the root account
// Delete a user record from a Canvas root account. If a user is associated
// with multiple root accounts (in a multi-tenant instance of Canvas), this
// action will NOT remove them from the other accounts.
// 
// WARNING: This API will allow a user to remove themselves from the account.
// If they do this, they won't be able to make API calls or log into Canvas at
// that account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/users/{user_id}
//
// Example:
// return canvasRequest(delete_user_from_root_account, {account_id, user_id});
var deleteUserFromRootAccount = exports.deleteUserFromRootAccount = { type: 'DELETE_USER_FROM_ROOT_ACCOUNT', method: 'delete', key: 'delete_user_from_root_accountdelete_user_from_root_account_{account_id}_{user_id}', required: ['account_id', 'user_id'] };

// Create a new sub-account
// Add a new sub-account to a given account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/sub_accounts
//
// Example:
// const body = {
//   account[name] (required)
//   account[sis_account_id]
//   account[default_storage_quota_mb]
//   account[default_user_storage_quota_mb]
//   account[default_group_storage_quota_mb]
// }
// return canvasRequest(create_new_sub_account, {account_id}, body);
var createNewSubAccount = exports.createNewSubAccount = { type: 'CREATE_NEW_SUB_ACCOUNT', method: 'post', key: 'create_new_sub_accountcreate_new_sub_account_account_id', required: ['account_id'] };

// Delete a sub-account
// Cannot delete an account with active courses or active sub_accounts.
// Cannot delete a root_account
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/sub_accounts/{id}
//
// Example:
// return canvasRequest(delete_sub_account, {account_id, id});
var deleteSubAccount = exports.deleteSubAccount = { type: 'DELETE_SUB_ACCOUNT', method: 'delete', key: 'delete_sub_accountdelete_sub_account_{account_id}_{id}', required: ['account_id', 'id'] };