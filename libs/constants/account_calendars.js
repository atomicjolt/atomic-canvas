"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSeveralCalendars = exports.updateCalendar = exports.listAvailableAccountCalendars = exports.listAllAccountCalendars = exports.getSingleAccountCalendar = exports.countOfAllVisibleAccountCalendars = void 0;
//
// Account Calendars
//
// List available account calendars
// Returns a paginated list of account calendars available to the current user.
// Includes visible account calendars where the user has an account association.
//
// API Docs: https://canvas.instructure.com/doc/api/account_calendars.html
// API Url: account_calendars
//
// Example:
// const query = {
//   search_term
// }
// return canvasRequest(list_available_account_calendars, {, ...query});
var listAvailableAccountCalendars = {
  type: 'LIST_AVAILABLE_ACCOUNT_CALENDARS',
  method: 'get',
  key: 'list_available_account_calendars',
  required: []
}; // Get a single account calendar
// Get details about a specific account calendar.
//
// API Docs: https://canvas.instructure.com/doc/api/account_calendars.html
// API Url: account_calendars/{account_id}
//
// Example:
// return canvasRequest(get_single_account_calendar, {account_id});

exports.listAvailableAccountCalendars = listAvailableAccountCalendars;
var getSingleAccountCalendar = {
  type: 'GET_SINGLE_ACCOUNT_CALENDAR',
  method: 'get',
  key: 'get_single_account_calendarget_single_account_calendar_account_id',
  required: ['account_id']
}; // Update a calendar
// Set an account calendar's visibility and auto_subscribe values. Requires the
// `manage_account_calendar_visibility` permission on the account.
//
// API Docs: https://canvas.instructure.com/doc/api/account_calendars.html
// API Url: account_calendars/{account_id}
//
// Example:
// const body = {
//   visible
//   auto_subscribe
// }
// return canvasRequest(update_calendar, {account_id}, body);

exports.getSingleAccountCalendar = getSingleAccountCalendar;
var updateCalendar = {
  type: 'UPDATE_CALENDAR',
  method: 'put',
  key: 'update_calendarupdate_calendar_account_id',
  required: ['account_id']
}; // Update several calendars
// Set visibility and/or auto_subscribe on many calendars simultaneously. Requires
// the `manage_account_calendar_visibility` permission on the account.
// 
// Accepts a JSON array of objects containing 2-3 keys each: `id`
// (the account's id, required), `visible` (a boolean indicating whether
// the account calendar is visible), and `auto_subscribe` (a boolean indicating
// whether users should see these events in their calendar without manually
// subscribing).
// 
// Returns the count of updated accounts.
//
// API Docs: https://canvas.instructure.com/doc/api/account_calendars.html
// API Url: accounts/{account_id}/account_calendars
//
// Example:
// return canvasRequest(update_several_calendars, {account_id});

exports.updateCalendar = updateCalendar;
var updateSeveralCalendars = {
  type: 'UPDATE_SEVERAL_CALENDARS',
  method: 'put',
  key: 'update_several_calendarsupdate_several_calendars_account_id',
  required: ['account_id']
}; // List all account calendars
// Returns a paginated list of account calendars for the provided account and
// its first level of sub-accounts. Includes hidden calendars in the response.
// Requires the `manage_account_calendar_visibility` permission.
//
// API Docs: https://canvas.instructure.com/doc/api/account_calendars.html
// API Url: accounts/{account_id}/account_calendars
//
// Example:
// const query = {
//   search_term
//   filter
// }
// return canvasRequest(list_all_account_calendars, {account_id, ...query});

exports.updateSeveralCalendars = updateSeveralCalendars;
var listAllAccountCalendars = {
  type: 'LIST_ALL_ACCOUNT_CALENDARS',
  method: 'get',
  key: 'list_all_account_calendarslist_all_account_calendars_account_id',
  required: ['account_id']
}; // Count of all visible account calendars
// Returns the number of visible account calendars.
//
// API Docs: https://canvas.instructure.com/doc/api/account_calendars.html
// API Url: accounts/{account_id}/visible_calendars_count
//
// Example:
// return canvasRequest(count_of_all_visible_account_calendars, {account_id});

exports.listAllAccountCalendars = listAllAccountCalendars;
var countOfAllVisibleAccountCalendars = {
  type: 'COUNT_OF_ALL_VISIBLE_ACCOUNT_CALENDARS',
  method: 'get',
  key: 'count_of_all_visible_account_calendarscount_of_all_visible_account_calendars_account_id',
  required: ['account_id']
};
exports.countOfAllVisibleAccountCalendars = countOfAllVisibleAccountCalendars;