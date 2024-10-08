"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchUpdateGradingPeriodsGradingPeriodSets = exports.batchUpdateGradingPeriodsCourses = exports.deleteGradingPeriodAccounts = exports.deleteGradingPeriodCourses = exports.updateSingleGradingPeriod = exports.getSingleGradingPeriod = exports.listGradingPeriodsCourses = exports.listGradingPeriodsAccounts = void 0;
//
// Grading Periods
//
// List grading periods
// Returns the paginated list of grading periods for the current course.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods
//
// Example:
// return canvasRequest(list_grading_periods_accounts, {account_id});
exports.listGradingPeriodsAccounts = { type: 'LIST_GRADING_PERIODS_ACCOUNTS', method: 'get', key: 'list_grading_periods_accountslist_grading_periods_accounts_account_id', required: ['account_id'] };
// List grading periods
// Returns the paginated list of grading periods for the current course.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods
//
// Example:
// return canvasRequest(list_grading_periods_courses, {course_id});
exports.listGradingPeriodsCourses = { type: 'LIST_GRADING_PERIODS_COURSES', method: 'get', key: 'list_grading_periods_courseslist_grading_periods_courses_course_id', required: ['course_id'] };
// Get a single grading period
// Returns the grading period with the given id
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}
//
// Example:
// return canvasRequest(get_single_grading_period, {course_id, id});
exports.getSingleGradingPeriod = { type: 'GET_SINGLE_GRADING_PERIOD', method: 'get', key: 'get_single_grading_periodget_single_grading_period_{course_id}_{id}', required: ['course_id', 'id'] };
// Update a single grading period
// Update an existing grading period.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}
//
// Example:
// const body = {
//   grading_periods[start_date] (required)
//   grading_periods[end_date] (required)
//   grading_periods[weight]
// }
// return canvasRequest(update_single_grading_period, {course_id, id}, body);
exports.updateSingleGradingPeriod = { type: 'UPDATE_SINGLE_GRADING_PERIOD', method: 'put', key: 'update_single_grading_periodupdate_single_grading_period_{course_id}_{id}', required: ['course_id', 'id'] };
// Delete a grading period
// <b>204 No Content</b> response code is returned if the deletion was
// successful.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}
//
// Example:
// return canvasRequest(delete_grading_period_courses, {course_id, id});
exports.deleteGradingPeriodCourses = { type: 'DELETE_GRADING_PERIOD_COURSES', method: 'delete', key: 'delete_grading_period_coursesdelete_grading_period_courses_{course_id}_{id}', required: ['course_id', 'id'] };
// Delete a grading period
// <b>204 No Content</b> response code is returned if the deletion was
// successful.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods/{id}
//
// Example:
// return canvasRequest(delete_grading_period_accounts, {account_id, id});
exports.deleteGradingPeriodAccounts = { type: 'DELETE_GRADING_PERIOD_ACCOUNTS', method: 'delete', key: 'delete_grading_period_accountsdelete_grading_period_accounts_{account_id}_{id}', required: ['account_id', 'id'] };
// Batch update grading periods
// Update multiple grading periods
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/batch_update
//
// Example:
// const body = {
//   set_id (required)
//   grading_periods[id]
//   grading_periods[title] (required)
//   grading_periods[start_date] (required)
//   grading_periods[end_date] (required)
//   grading_periods[close_date] (required)
//   grading_periods[weight]
// }
// return canvasRequest(batch_update_grading_periods_courses, {course_id}, body);
exports.batchUpdateGradingPeriodsCourses = { type: 'BATCH_UPDATE_GRADING_PERIODS_COURSES', method: 'patch', key: 'batch_update_grading_periods_coursesbatch_update_grading_periods_courses_course_id', required: ['course_id'] };
// Batch update grading periods
// Update multiple grading periods
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: grading_period_sets/{set_id}/grading_periods/batch_update
//
// Example:
// const body = {
//   grading_periods[id]
//   grading_periods[title] (required)
//   grading_periods[start_date] (required)
//   grading_periods[end_date] (required)
//   grading_periods[close_date] (required)
//   grading_periods[weight]
// }
// return canvasRequest(batch_update_grading_periods_grading_period_sets, {set_id}, body);
exports.batchUpdateGradingPeriodsGradingPeriodSets = { type: 'BATCH_UPDATE_GRADING_PERIODS_GRADING_PERIOD_SETS', method: 'patch', key: 'batch_update_grading_periods_grading_period_setsbatch_update_grading_periods_grading_period_sets_set_id', required: ['set_id'] };
//# sourceMappingURL=grading_periods.js.map