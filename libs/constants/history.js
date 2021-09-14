'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// History
//
// List recent history for a user
// Return a paginated list of the user's recent history. History entries are returned in descending order,
// newest to oldest. You may list history entries for yourself (use +self+ as the user_id), for a student you observe,
// or for a user you manage as an administrator. Note that the +per_page+ pagination argument is not supported
// and the number of history entries returned per page will vary.
//
// API Docs: https://canvas.instructure.com/doc/api/history.html
// API Url: users/{user_id}/history
//
// Example:
// return canvasRequest(list_recent_history_for_user, {user_id});
var listRecentHistoryForUser = exports.listRecentHistoryForUser = { type: 'LIST_RECENT_HISTORY_FOR_USER', method: 'get', key: 'list_recent_history_for_userlist_recent_history_for_user_user_id', required: ['user_id'] };