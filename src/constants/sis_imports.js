//
// SIS Imports
//
// Get SIS import list
// Returns the list of SIS imports for an account
// 
// Example:
//   curl https://<canvas>/api/v1/accounts/<account_id>/sis_imports \
//     -H 'Authorization: Bearer <token>'
//
// API Docs: https://canvas.instructure.com/doc/api/sis_imports.html
// API Url: accounts/{account_id}/sis_imports
//
// Example:
// const query = {
//   created_since
//   created_before
//   workflow_state
// }
// return canvasRequest(get_sis_import_list, {account_id, ...query});
export const getSisImportList = { type: 'GET_SIS_IMPORT_LIST', method: 'get', key: 'get_sis_import_listget_sis_import_list_account_id', required: ['account_id'] };

// Get the current importing SIS import
// Returns the SIS imports that are currently processing for an account. If no
// imports are running, will return an empty array.
// 
// Example:
//   curl https://<canvas>/api/v1/accounts/<account_id>/sis_imports/importing \
//     -H 'Authorization: Bearer <token>'
//
// API Docs: https://canvas.instructure.com/doc/api/sis_imports.html
// API Url: accounts/{account_id}/sis_imports/importing
//
// Example:
// return canvasRequest(get_current_importing_sis_import, {account_id});
export const getCurrentImportingSisImport = { type: 'GET_CURRENT_IMPORTING_SIS_IMPORT', method: 'get', key: 'get_current_importing_sis_importget_current_importing_sis_import_account_id', required: ['account_id'] };

// Import SIS data
// Import SIS data into Canvas. Must be on a root account with SIS imports
// enabled.
// 
// For more information on the format that's expected here, please see the
// "SIS CSV" section in the API docs.
//
// API Docs: https://canvas.instructure.com/doc/api/sis_imports.html
// API Url: accounts/{account_id}/sis_imports
//
// Example:
// const body = {
//   import_type
//   attachment
//   extension
//   batch_mode
//   batch_mode_term_id
//   multi_term_batch_mode
//   skip_deletes
//   override_sis_stickiness
//   add_sis_stickiness
//   clear_sis_stickiness
//   update_sis_id_if_login_claimed
//   diffing_data_set_identifier
//   diffing_remaster_data_set
//   diffing_drop_status
//   batch_mode_enrollment_drop_status
//   change_threshold
//   diff_row_count_threshold
// }
// return canvasRequest(import_sis_data, {account_id}, body);
export const importSisData = { type: 'IMPORT_SIS_DATA', method: 'post', key: 'import_sis_dataimport_sis_data_account_id', required: ['account_id'] };

// Get SIS import status
// Get the status of an already created SIS import.
// 
//   Examples:
//     curl https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<sis_import_id> \
//         -H 'Authorization: Bearer <token>'
//
// API Docs: https://canvas.instructure.com/doc/api/sis_imports.html
// API Url: accounts/{account_id}/sis_imports/{id}
//
// Example:
// return canvasRequest(get_sis_import_status, {account_id, id});
export const getSisImportStatus = { type: 'GET_SIS_IMPORT_STATUS', method: 'get', key: 'get_sis_import_statusget_sis_import_status_{account_id}_{id}', required: ['account_id', 'id'] };

// Restore workflow_states of SIS imported items
// This will restore the the workflow_state for all the items that changed
// their workflow_state during the import being restored.
// This will restore states for items imported with the following importers:
// accounts.csv terms.csv courses.csv sections.csv group_categories.csv
// groups.csv users.csv admins.csv
// This also restores states for other items that changed during the import.
// An example would be if an enrollment was deleted from a sis import and the
// group_membership was also deleted as a result of the enrollment deletion,
// both items would be restored when the sis batch is restored.
//
// API Docs: https://canvas.instructure.com/doc/api/sis_imports.html
// API Url: accounts/{account_id}/sis_imports/{id}/restore_states
//
// Example:
// const body = {
//   batch_mode
//   undelete_only
//   unconclude_only
// }
// return canvasRequest(restore_workflow_states_of_sis_imported_items, {account_id, id}, body);
export const restoreWorkflowStatesOfSisImportedItems = { type: 'RESTORE_WORKFLOW_STATES_OF_SIS_IMPORTED_ITEMS', method: 'put', key: 'restore_workflow_states_of_sis_imported_itemsrestore_workflow_states_of_sis_imported_items_{account_id}_{id}', required: ['account_id', 'id'] };

// Abort SIS import
// Abort a SIS import that has not completed.
// 
// Aborting a sis batch that is running can take some time for every process to
// see the abort event. Subsequent sis batches begin to process 10 minutes
// after the abort to allow each process to clean up properly.
//
// API Docs: https://canvas.instructure.com/doc/api/sis_imports.html
// API Url: accounts/{account_id}/sis_imports/{id}/abort
//
// Example:
// return canvasRequest(abort_sis_import, {account_id, id});
export const abortSisImport = { type: 'ABORT_SIS_IMPORT', method: 'put', key: 'abort_sis_importabort_sis_import_{account_id}_{id}', required: ['account_id', 'id'] };

// Abort all pending SIS imports
// Abort already created but not processed or processing SIS imports.
//
// API Docs: https://canvas.instructure.com/doc/api/sis_imports.html
// API Url: accounts/{account_id}/sis_imports/abort_all_pending
//
// Example:
// return canvasRequest(abort_all_pending_sis_imports, {account_id});
export const abortAllPendingSisImports = { type: 'ABORT_ALL_PENDING_SIS_IMPORTS', method: 'put', key: 'abort_all_pending_sis_importsabort_all_pending_sis_imports_account_id', required: ['account_id'] };