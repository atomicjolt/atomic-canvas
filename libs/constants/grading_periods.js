"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSingleGradingPeriod = exports.listGradingPeriodsCourses = exports.listGradingPeriodsAccounts = exports.getSingleGradingPeriod = exports.deleteGradingPeriodCourses = exports.deleteGradingPeriodAccounts = void 0;
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
var listGradingPeriodsAccounts = {
  type: 'LIST_GRADING_PERIODS_ACCOUNTS',
  method: 'get',
  key: 'list_grading_periods_accountslist_grading_periods_accounts_account_id',
  required: ['account_id']
}; // List grading periods
// Returns the paginated list of grading periods for the current course.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods
//
// Example:
// return canvasRequest(list_grading_periods_courses, {course_id});

exports.listGradingPeriodsAccounts = listGradingPeriodsAccounts;
var listGradingPeriodsCourses = {
  type: 'LIST_GRADING_PERIODS_COURSES',
  method: 'get',
  key: 'list_grading_periods_courseslist_grading_periods_courses_course_id',
  required: ['course_id']
}; // Get a single grading period
// Returns the grading period with the given id
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}
//
// Example:
// return canvasRequest(get_single_grading_period, {course_id, id});

exports.listGradingPeriodsCourses = listGradingPeriodsCourses;
var getSingleGradingPeriod = {
  type: 'GET_SINGLE_GRADING_PERIOD',
  method: 'get',
  key: 'get_single_grading_periodget_single_grading_period_{course_id}_{id}',
  required: ['course_id', 'id']
}; // Update a single grading period
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

exports.getSingleGradingPeriod = getSingleGradingPeriod;
var updateSingleGradingPeriod = {
  type: 'UPDATE_SINGLE_GRADING_PERIOD',
  method: 'put',
  key: 'update_single_grading_periodupdate_single_grading_period_{course_id}_{id}',
  required: ['course_id', 'id']
}; // Delete a grading period
// <b>204 No Content</b> response code is returned if the deletion was
// successful.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}
//
// Example:
// return canvasRequest(delete_grading_period_courses, {course_id, id});

exports.updateSingleGradingPeriod = updateSingleGradingPeriod;
var deleteGradingPeriodCourses = {
  type: 'DELETE_GRADING_PERIOD_COURSES',
  method: 'delete',
  key: 'delete_grading_period_coursesdelete_grading_period_courses_{course_id}_{id}',
  required: ['course_id', 'id']
}; // Delete a grading period
// <b>204 No Content</b> response code is returned if the deletion was
// successful.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods/{id}
//
// Example:
// return canvasRequest(delete_grading_period_accounts, {account_id, id});

exports.deleteGradingPeriodCourses = deleteGradingPeriodCourses;
var deleteGradingPeriodAccounts = {
  type: 'DELETE_GRADING_PERIOD_ACCOUNTS',
  method: 'delete',
  key: 'delete_grading_period_accountsdelete_grading_period_accounts_{account_id}_{id}',
  required: ['account_id', 'id']
};
exports.deleteGradingPeriodAccounts = deleteGradingPeriodAccounts;