"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listConferencesGroups = exports.listConferencesForCurrentUser = exports.listConferencesCourses = void 0;
//
// Conferences
//
// List conferences
// Retrieve the paginated list of conferences for this context
// 
// This API returns a JSON object containing the list of conferences,
// the key for the list of conferences is "conferences"
//
// API Docs: https://canvas.instructure.com/doc/api/conferences.html
// API Url: courses/{course_id}/conferences
//
// Example:
// return canvasRequest(list_conferences_courses, {course_id});
var listConferencesCourses = {
  type: 'LIST_CONFERENCES_COURSES',
  method: 'get',
  key: 'list_conferences_courseslist_conferences_courses_course_id',
  required: ['course_id']
}; // List conferences
// Retrieve the paginated list of conferences for this context
// 
// This API returns a JSON object containing the list of conferences,
// the key for the list of conferences is "conferences"
//
// API Docs: https://canvas.instructure.com/doc/api/conferences.html
// API Url: groups/{group_id}/conferences
//
// Example:
// return canvasRequest(list_conferences_groups, {group_id});

exports.listConferencesCourses = listConferencesCourses;
var listConferencesGroups = {
  type: 'LIST_CONFERENCES_GROUPS',
  method: 'get',
  key: 'list_conferences_groupslist_conferences_groups_group_id',
  required: ['group_id']
}; // List conferences for the current user
// Retrieve the paginated list of conferences for all courses and groups
// the current user belongs to
// 
// This API returns a JSON object containing the list of conferences.
// The key for the list of conferences is "conferences".
//
// API Docs: https://canvas.instructure.com/doc/api/conferences.html
// API Url: conferences
//
// Example:
// const query = {
//   state
// }
// return canvasRequest(list_conferences_for_current_user, {, ...query});

exports.listConferencesGroups = listConferencesGroups;
var listConferencesForCurrentUser = {
  type: 'LIST_CONFERENCES_FOR_CURRENT_USER',
  method: 'get',
  key: 'list_conferences_for_current_user',
  required: []
};
exports.listConferencesForCurrentUser = listConferencesForCurrentUser;