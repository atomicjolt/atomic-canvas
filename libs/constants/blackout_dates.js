"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateListOfBlackoutDates = exports.updateBlackoutDateCourses = exports.updateBlackoutDateAccounts = exports.newBlackoutDateCourses = exports.newBlackoutDateAccounts = exports.listBlackoutDatesCourses = exports.listBlackoutDatesAccounts = exports.getSingleBlackoutDateCourses = exports.getSingleBlackoutDateAccounts = exports.deleteBlackoutDateCourses = exports.deleteBlackoutDateAccounts = exports.createBlackoutDateCourses = exports.createBlackoutDateAccounts = void 0;
//
// Blackout Dates
//
// List blackout dates
// Returns the list of blackout dates for the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: courses/{course_id}/blackout_dates
//
// Example:
// return canvasRequest(list_blackout_dates_courses, {course_id});
var listBlackoutDatesCourses = {
  type: 'LIST_BLACKOUT_DATES_COURSES',
  method: 'get',
  key: 'list_blackout_dates_courseslist_blackout_dates_courses_course_id',
  required: ['course_id']
};

// List blackout dates
// Returns the list of blackout dates for the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: accounts/{account_id}/blackout_dates
//
// Example:
// return canvasRequest(list_blackout_dates_accounts, {account_id});
exports.listBlackoutDatesCourses = listBlackoutDatesCourses;
var listBlackoutDatesAccounts = {
  type: 'LIST_BLACKOUT_DATES_ACCOUNTS',
  method: 'get',
  key: 'list_blackout_dates_accountslist_blackout_dates_accounts_account_id',
  required: ['account_id']
};

// Get a single blackout date
// Returns the blackout date with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: courses/{course_id}/blackout_dates/{id}
//
// Example:
// return canvasRequest(get_single_blackout_date_courses, {course_id, id});
exports.listBlackoutDatesAccounts = listBlackoutDatesAccounts;
var getSingleBlackoutDateCourses = {
  type: 'GET_SINGLE_BLACKOUT_DATE_COURSES',
  method: 'get',
  key: 'get_single_blackout_date_coursesget_single_blackout_date_courses_{course_id}_{id}',
  required: ['course_id', 'id']
};

// Get a single blackout date
// Returns the blackout date with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: accounts/{account_id}/blackout_dates/{id}
//
// Example:
// return canvasRequest(get_single_blackout_date_accounts, {account_id, id});
exports.getSingleBlackoutDateCourses = getSingleBlackoutDateCourses;
var getSingleBlackoutDateAccounts = {
  type: 'GET_SINGLE_BLACKOUT_DATE_ACCOUNTS',
  method: 'get',
  key: 'get_single_blackout_date_accountsget_single_blackout_date_accounts_{account_id}_{id}',
  required: ['account_id', 'id']
};

// New Blackout Date
// Initialize an unsaved Blackout Date for the given context.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: courses/{course_id}/blackout_dates/new
//
// Example:
// return canvasRequest(new_blackout_date_courses, {course_id});
exports.getSingleBlackoutDateAccounts = getSingleBlackoutDateAccounts;
var newBlackoutDateCourses = {
  type: 'NEW_BLACKOUT_DATE_COURSES',
  method: 'get',
  key: 'new_blackout_date_coursesnew_blackout_date_courses_course_id',
  required: ['course_id']
};

// New Blackout Date
// Initialize an unsaved Blackout Date for the given context.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: accounts/{account_id}/blackout_dates/new
//
// Example:
// return canvasRequest(new_blackout_date_accounts, {account_id});
exports.newBlackoutDateCourses = newBlackoutDateCourses;
var newBlackoutDateAccounts = {
  type: 'NEW_BLACKOUT_DATE_ACCOUNTS',
  method: 'get',
  key: 'new_blackout_date_accountsnew_blackout_date_accounts_account_id',
  required: ['account_id']
};

// Create Blackout Date
// Create a blackout date for the given context.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: courses/{course_id}/blackout_dates
//
// Example:
// const body = {
//   start_date
//   end_date
//   event_title
// }
// return canvasRequest(create_blackout_date_courses, {course_id}, body);
exports.newBlackoutDateAccounts = newBlackoutDateAccounts;
var createBlackoutDateCourses = {
  type: 'CREATE_BLACKOUT_DATE_COURSES',
  method: 'post',
  key: 'create_blackout_date_coursescreate_blackout_date_courses_course_id',
  required: ['course_id']
};

// Create Blackout Date
// Create a blackout date for the given context.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: accounts/{account_id}/blackout_dates
//
// Example:
// const body = {
//   start_date
//   end_date
//   event_title
// }
// return canvasRequest(create_blackout_date_accounts, {account_id}, body);
exports.createBlackoutDateCourses = createBlackoutDateCourses;
var createBlackoutDateAccounts = {
  type: 'CREATE_BLACKOUT_DATE_ACCOUNTS',
  method: 'post',
  key: 'create_blackout_date_accountscreate_blackout_date_accounts_account_id',
  required: ['account_id']
};

// Update Blackout Date
// Update a blackout date for the given context.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: courses/{course_id}/blackout_dates/{id}
//
// Example:
// const body = {
//   start_date
//   end_date
//   event_title
// }
// return canvasRequest(update_blackout_date_courses, {course_id, id}, body);
exports.createBlackoutDateAccounts = createBlackoutDateAccounts;
var updateBlackoutDateCourses = {
  type: 'UPDATE_BLACKOUT_DATE_COURSES',
  method: 'put',
  key: 'update_blackout_date_coursesupdate_blackout_date_courses_{course_id}_{id}',
  required: ['course_id', 'id']
};

// Update Blackout Date
// Update a blackout date for the given context.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: accounts/{account_id}/blackout_dates/{id}
//
// Example:
// const body = {
//   start_date
//   end_date
//   event_title
// }
// return canvasRequest(update_blackout_date_accounts, {account_id, id}, body);
exports.updateBlackoutDateCourses = updateBlackoutDateCourses;
var updateBlackoutDateAccounts = {
  type: 'UPDATE_BLACKOUT_DATE_ACCOUNTS',
  method: 'put',
  key: 'update_blackout_date_accountsupdate_blackout_date_accounts_{account_id}_{id}',
  required: ['account_id', 'id']
};

// Delete Blackout Date
// Delete a blackout date for the given context.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: courses/{course_id}/blackout_dates/{id}
//
// Example:
// return canvasRequest(delete_blackout_date_courses, {course_id, id});
exports.updateBlackoutDateAccounts = updateBlackoutDateAccounts;
var deleteBlackoutDateCourses = {
  type: 'DELETE_BLACKOUT_DATE_COURSES',
  method: 'delete',
  key: 'delete_blackout_date_coursesdelete_blackout_date_courses_{course_id}_{id}',
  required: ['course_id', 'id']
};

// Delete Blackout Date
// Delete a blackout date for the given context.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: accounts/{account_id}/blackout_dates/{id}
//
// Example:
// return canvasRequest(delete_blackout_date_accounts, {account_id, id});
exports.deleteBlackoutDateCourses = deleteBlackoutDateCourses;
var deleteBlackoutDateAccounts = {
  type: 'DELETE_BLACKOUT_DATE_ACCOUNTS',
  method: 'delete',
  key: 'delete_blackout_date_accountsdelete_blackout_date_accounts_{account_id}_{id}',
  required: ['account_id', 'id']
};

// Update a list of Blackout Dates
// Create, update, and delete blackout dates to sync the db with the incoming data.
//
// API Docs: https://canvas.instructure.com/doc/api/blackout_dates.html
// API Url: courses/{course_id}/blackout_dates
//
// Example:
// const body = {
//   blackout_dates:
// }
// return canvasRequest(update_list_of_blackout_dates, {course_id}, body);
exports.deleteBlackoutDateAccounts = deleteBlackoutDateAccounts;
var updateListOfBlackoutDates = {
  type: 'UPDATE_LIST_OF_BLACKOUT_DATES',
  method: 'put',
  key: 'update_list_of_blackout_datesupdate_list_of_blackout_dates_course_id',
  required: ['course_id']
};
exports.updateListOfBlackoutDates = updateListOfBlackoutDates;