"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTabForCourse = exports.listAvailableTabsForCourseOrGroupUsers = exports.listAvailableTabsForCourseOrGroupGroups = exports.listAvailableTabsForCourseOrGroupCourses = exports.listAvailableTabsForCourseOrGroupAccounts = void 0;
//
// Tabs
//
// List available tabs for a course or group
// Returns a paginated list of navigation tabs available in the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/tabs.html
// API Url: accounts/{account_id}/tabs
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_available_tabs_for_course_or_group_accounts, {account_id, ...query});
var listAvailableTabsForCourseOrGroupAccounts = {
  type: 'LIST_AVAILABLE_TABS_FOR_COURSE_OR_GROUP_ACCOUNTS',
  method: 'get',
  key: 'list_available_tabs_for_course_or_group_accountslist_available_tabs_for_course_or_group_accounts_account_id',
  required: ['account_id']
}; // List available tabs for a course or group
// Returns a paginated list of navigation tabs available in the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/tabs.html
// API Url: courses/{course_id}/tabs
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_available_tabs_for_course_or_group_courses, {course_id, ...query});

exports.listAvailableTabsForCourseOrGroupAccounts = listAvailableTabsForCourseOrGroupAccounts;
var listAvailableTabsForCourseOrGroupCourses = {
  type: 'LIST_AVAILABLE_TABS_FOR_COURSE_OR_GROUP_COURSES',
  method: 'get',
  key: 'list_available_tabs_for_course_or_group_courseslist_available_tabs_for_course_or_group_courses_course_id',
  required: ['course_id']
}; // List available tabs for a course or group
// Returns a paginated list of navigation tabs available in the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/tabs.html
// API Url: groups/{group_id}/tabs
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_available_tabs_for_course_or_group_groups, {group_id, ...query});

exports.listAvailableTabsForCourseOrGroupCourses = listAvailableTabsForCourseOrGroupCourses;
var listAvailableTabsForCourseOrGroupGroups = {
  type: 'LIST_AVAILABLE_TABS_FOR_COURSE_OR_GROUP_GROUPS',
  method: 'get',
  key: 'list_available_tabs_for_course_or_group_groupslist_available_tabs_for_course_or_group_groups_group_id',
  required: ['group_id']
}; // List available tabs for a course or group
// Returns a paginated list of navigation tabs available in the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/tabs.html
// API Url: users/{user_id}/tabs
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_available_tabs_for_course_or_group_users, {user_id, ...query});

exports.listAvailableTabsForCourseOrGroupGroups = listAvailableTabsForCourseOrGroupGroups;
var listAvailableTabsForCourseOrGroupUsers = {
  type: 'LIST_AVAILABLE_TABS_FOR_COURSE_OR_GROUP_USERS',
  method: 'get',
  key: 'list_available_tabs_for_course_or_group_userslist_available_tabs_for_course_or_group_users_user_id',
  required: ['user_id']
}; // Update a tab for a course
// Home and Settings tabs are not manageable, and can't be hidden or moved
// 
// Returns a tab object
//
// API Docs: https://canvas.instructure.com/doc/api/tabs.html
// API Url: courses/{course_id}/tabs/{tab_id}
//
// Example:
// const body = {
//   position
//   hidden
// }
// return canvasRequest(update_tab_for_course, {course_id, tab_id}, body);

exports.listAvailableTabsForCourseOrGroupUsers = listAvailableTabsForCourseOrGroupUsers;
var updateTabForCourse = {
  type: 'UPDATE_TAB_FOR_COURSE',
  method: 'put',
  key: 'update_tab_for_courseupdate_tab_for_course_{course_id}_{tab_id}',
  required: ['course_id', 'tab_id']
};
exports.updateTabForCourse = updateTabForCourse;