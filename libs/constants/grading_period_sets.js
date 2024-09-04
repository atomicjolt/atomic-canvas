"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGradingPeriodSet = exports.updateGradingPeriodSet = exports.createGradingPeriodSet = exports.listGradingPeriodSets = void 0;
//
// Grading Period Sets
//
// List grading period sets
// Returns the paginated list of grading period sets
//
// API Docs: https://canvas.instructure.com/doc/api/grading_period_sets.html
// API Url: accounts/{account_id}/grading_period_sets
//
// Example:
// return canvasRequest(list_grading_period_sets, {account_id});
exports.listGradingPeriodSets = { type: 'LIST_GRADING_PERIOD_SETS', method: 'get', key: 'list_grading_period_setslist_grading_period_sets_account_id', required: ['account_id'] };
// Create a grading period set
// Create and return a new grading period set
//
// API Docs: https://canvas.instructure.com/doc/api/grading_period_sets.html
// API Url: accounts/{account_id}/grading_period_sets
//
// Example:
// const body = {
//   enrollment_term_ids
//   grading_period_set[title] (required)
//   grading_period_set[weighted]
//   grading_period_set[display_totals_for_all_grading_periods]
// }
// return canvasRequest(create_grading_period_set, {account_id}, body);
exports.createGradingPeriodSet = { type: 'CREATE_GRADING_PERIOD_SET', method: 'post', key: 'create_grading_period_setcreate_grading_period_set_account_id', required: ['account_id'] };
// Update a grading period set
// Update an existing grading period set
// 
// <b>204 No Content</b> response code is returned if the update was
// successful.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_period_sets.html
// API Url: accounts/{account_id}/grading_period_sets/{id}
//
// Example:
// const body = {
//   enrollment_term_ids
//   grading_period_set[title] (required)
//   grading_period_set[weighted]
//   grading_period_set[display_totals_for_all_grading_periods]
// }
// return canvasRequest(update_grading_period_set, {account_id, id}, body);
exports.updateGradingPeriodSet = { type: 'UPDATE_GRADING_PERIOD_SET', method: 'patch', key: 'update_grading_period_setupdate_grading_period_set_{account_id}_{id}', required: ['account_id', 'id'] };
// Delete a grading period set
// <b>204 No Content</b> response code is returned if the deletion was
// successful.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_period_sets.html
// API Url: accounts/{account_id}/grading_period_sets/{id}
//
// Example:
// return canvasRequest(delete_grading_period_set, {account_id, id});
exports.deleteGradingPeriodSet = { type: 'DELETE_GRADING_PERIOD_SET', method: 'delete', key: 'delete_grading_period_setdelete_grading_period_set_{account_id}_{id}', required: ['account_id', 'id'] };
//# sourceMappingURL=grading_period_sets.js.map