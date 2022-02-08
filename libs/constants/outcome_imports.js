'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Outcome Imports
//
// Import Outcomes
// Import outcomes into Canvas.
// 
// For more information on the format that's expected here, please see the
// "Outcomes CSV" section in the API docs.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_imports.html
// API Url: accounts/{account_id}/outcome_imports
//
// Example:
// const body = {
//   import_type
//   attachment
//   extension
// }
// return canvasRequest(import_outcomes_accounts, {account_id}, body);
var importOutcomesAccounts = exports.importOutcomesAccounts = { type: 'IMPORT_OUTCOMES_ACCOUNTS', method: 'post', key: 'import_outcomes_accountsimport_outcomes_accounts_account_id', required: ['account_id'] };

// Import Outcomes
// Import outcomes into Canvas.
// 
// For more information on the format that's expected here, please see the
// "Outcomes CSV" section in the API docs.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_imports.html
// API Url: courses/{course_id}/outcome_imports
//
// Example:
// const body = {
//   import_type
//   attachment
//   extension
// }
// return canvasRequest(import_outcomes_courses, {course_id}, body);
var importOutcomesCourses = exports.importOutcomesCourses = { type: 'IMPORT_OUTCOMES_COURSES', method: 'post', key: 'import_outcomes_coursesimport_outcomes_courses_course_id', required: ['course_id'] };

// Get Outcome import status
// Get the status of an already created Outcome import. Pass 'latest' for the outcome import id
// for the latest import.
// 
//   Examples:
//     curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>' \
//         -H "Authorization: Bearer <token>"
//     curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>' \
//         -H "Authorization: Bearer <token>"
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_imports.html
// API Url: accounts/{account_id}/outcome_imports/{id}
//
// Example:
// return canvasRequest(get_outcome_import_status_accounts, {account_id, id});
var getOutcomeImportStatusAccounts = exports.getOutcomeImportStatusAccounts = { type: 'GET_OUTCOME_IMPORT_STATUS_ACCOUNTS', method: 'get', key: 'get_outcome_import_status_accountsget_outcome_import_status_accounts_{account_id}_{id}', required: ['account_id', 'id'] };

// Get Outcome import status
// Get the status of an already created Outcome import. Pass 'latest' for the outcome import id
// for the latest import.
// 
//   Examples:
//     curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>' \
//         -H "Authorization: Bearer <token>"
//     curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>' \
//         -H "Authorization: Bearer <token>"
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_imports.html
// API Url: courses/{course_id}/outcome_imports/{id}
//
// Example:
// return canvasRequest(get_outcome_import_status_courses, {course_id, id});
var getOutcomeImportStatusCourses = exports.getOutcomeImportStatusCourses = { type: 'GET_OUTCOME_IMPORT_STATUS_COURSES', method: 'get', key: 'get_outcome_import_status_coursesget_outcome_import_status_courses_{course_id}_{id}', required: ['course_id', 'id'] };

// Get IDs of outcome groups created after successful import
// Get the IDs of the outcome groups created after a successful import.
// Pass 'latest' for the outcome import id for the latest import.
// 
//   Examples:
//     curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/outcomes_group_ids/<outcome_import_id>' \
//         -H "Authorization: Bearer <token>"
//     curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/outcome_group_ids/<outcome_import_id>' \
//         -H "Authorization: Bearer <token>"
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_imports.html
// API Url: accounts/{account_id}/outcome_imports/{id}/created_group_ids
//
// Example:
// return canvasRequest(get_ids_of_outcome_groups_created_after_successful_import_accounts, {account_id, id});
var getIdsOfOutcomeGroupsCreatedAfterSuccessfulImportAccounts = exports.getIdsOfOutcomeGroupsCreatedAfterSuccessfulImportAccounts = { type: 'GET_IDS_OF_OUTCOME_GROUPS_CREATED_AFTER_SUCCESSFUL_IMPORT_ACCOUNTS', method: 'get', key: 'get_ids_of_outcome_groups_created_after_successful_import_accountsget_ids_of_outcome_groups_created_after_successful_import_accounts_{account_id}_{id}', required: ['account_id', 'id'] };

// Get IDs of outcome groups created after successful import
// Get the IDs of the outcome groups created after a successful import.
// Pass 'latest' for the outcome import id for the latest import.
// 
//   Examples:
//     curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/outcomes_group_ids/<outcome_import_id>' \
//         -H "Authorization: Bearer <token>"
//     curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/outcome_group_ids/<outcome_import_id>' \
//         -H "Authorization: Bearer <token>"
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_imports.html
// API Url: courses/{course_id}/outcome_imports/{id}/created_group_ids
//
// Example:
// return canvasRequest(get_ids_of_outcome_groups_created_after_successful_import_courses, {course_id, id});
var getIdsOfOutcomeGroupsCreatedAfterSuccessfulImportCourses = exports.getIdsOfOutcomeGroupsCreatedAfterSuccessfulImportCourses = { type: 'GET_IDS_OF_OUTCOME_GROUPS_CREATED_AFTER_SUCCESSFUL_IMPORT_COURSES', method: 'get', key: 'get_ids_of_outcome_groups_created_after_successful_import_coursesget_ids_of_outcome_groups_created_after_successful_import_courses_{course_id}_{id}', required: ['course_id', 'id'] };