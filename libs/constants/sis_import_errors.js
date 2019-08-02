'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// SIS Import Errors
//
// Get SIS import error list
// Returns the list of SIS import errors for an account or a SIS import. Import
// errors are only stored for 30 days.
// 
// Example:
//   curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<id>/sis_import_errors' \
//     -H "Authorization: Bearer <token>"
// 
// Example:
//   curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_import_errors' \
//     -H "Authorization: Bearer <token>"
//
// API Docs: https://canvas.instructure.com/doc/api/sis_import_errors.html
// API Url: accounts/{account_id}/sis_imports/{id}/errors
//
// Example:
// const query = {
//   failure
// }
// return canvasRequest(get_sis_import_error_list_sis_imports, {account_id, id, ...query});
var getSisImportErrorListSisImports = exports.getSisImportErrorListSisImports = { type: 'GET_SIS_IMPORT_ERROR_LIST_SIS_IMPORTS', method: 'get', key: 'get_sis_import_error_list_sis_importsget_sis_import_error_list_sis_imports_{account_id}_{id}', required: ['account_id', 'id'] };

// Get SIS import error list
// Returns the list of SIS import errors for an account or a SIS import. Import
// errors are only stored for 30 days.
// 
// Example:
//   curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<id>/sis_import_errors' \
//     -H "Authorization: Bearer <token>"
// 
// Example:
//   curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_import_errors' \
//     -H "Authorization: Bearer <token>"
//
// API Docs: https://canvas.instructure.com/doc/api/sis_import_errors.html
// API Url: accounts/{account_id}/sis_import_errors
//
// Example:
// const query = {
//   failure
// }
// return canvasRequest(get_sis_import_error_list_sis_import_errors, {account_id, ...query});
var getSisImportErrorListSisImportErrors = exports.getSisImportErrorListSisImportErrors = { type: 'GET_SIS_IMPORT_ERROR_LIST_SIS_IMPORT_ERRORS', method: 'get', key: 'get_sis_import_error_list_sis_import_errorsget_sis_import_error_list_sis_import_errors_account_id', required: ['account_id'] };