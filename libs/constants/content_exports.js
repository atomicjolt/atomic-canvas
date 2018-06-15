'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Content Exports
//
// List content exports
// A paginated list of the past and pending content export jobs for a course,
// group, or user. Exports are returned newest first.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: courses/{course_id}/content_exports
//
// Example:
// return canvasRequest(list_content_exports_courses, {course_id});
var listContentExportsCourses = exports.listContentExportsCourses = { type: 'LIST_CONTENT_EXPORTS_COURSES', method: 'get', key: 'list_content_exports_courseslist_content_exports_courses_course_id', required: ['course_id'] };

// List content exports
// A paginated list of the past and pending content export jobs for a course,
// group, or user. Exports are returned newest first.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: groups/{group_id}/content_exports
//
// Example:
// return canvasRequest(list_content_exports_groups, {group_id});
var listContentExportsGroups = exports.listContentExportsGroups = { type: 'LIST_CONTENT_EXPORTS_GROUPS', method: 'get', key: 'list_content_exports_groupslist_content_exports_groups_group_id', required: ['group_id'] };

// List content exports
// A paginated list of the past and pending content export jobs for a course,
// group, or user. Exports are returned newest first.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: users/{user_id}/content_exports
//
// Example:
// return canvasRequest(list_content_exports_users, {user_id});
var listContentExportsUsers = exports.listContentExportsUsers = { type: 'LIST_CONTENT_EXPORTS_USERS', method: 'get', key: 'list_content_exports_userslist_content_exports_users_user_id', required: ['user_id'] };

// Show content export
// Get information about a single content export.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: courses/{course_id}/content_exports/{id}
//
// Example:
// return canvasRequest(show_content_export_courses, {course_id, id});
var showContentExportCourses = exports.showContentExportCourses = { type: 'SHOW_CONTENT_EXPORT_COURSES', method: 'get', key: 'show_content_export_coursesshow_content_export_courses_{course_id}_{id}', required: ['course_id', 'id'] };

// Show content export
// Get information about a single content export.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: groups/{group_id}/content_exports/{id}
//
// Example:
// return canvasRequest(show_content_export_groups, {group_id, id});
var showContentExportGroups = exports.showContentExportGroups = { type: 'SHOW_CONTENT_EXPORT_GROUPS', method: 'get', key: 'show_content_export_groupsshow_content_export_groups_{group_id}_{id}', required: ['group_id', 'id'] };

// Show content export
// Get information about a single content export.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: users/{user_id}/content_exports/{id}
//
// Example:
// return canvasRequest(show_content_export_users, {user_id, id});
var showContentExportUsers = exports.showContentExportUsers = { type: 'SHOW_CONTENT_EXPORT_USERS', method: 'get', key: 'show_content_export_usersshow_content_export_users_{user_id}_{id}', required: ['user_id', 'id'] };

// Export content
// Begin a content export job for a course, group, or user.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the export. The migration's progress is linked to with the
// _progress_url_ value.
// 
// When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
// to retrieve a download URL for the exported content.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: courses/{course_id}/content_exports
//
// Example:
// const body = {
//   export_type (required)
//   skip_notifications
//   select
// }
// return canvasRequest(export_content_courses, {course_id}, body);
var exportContentCourses = exports.exportContentCourses = { type: 'EXPORT_CONTENT_COURSES', method: 'post', key: 'export_content_coursesexport_content_courses_course_id', required: ['course_id'] };

// Export content
// Begin a content export job for a course, group, or user.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the export. The migration's progress is linked to with the
// _progress_url_ value.
// 
// When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
// to retrieve a download URL for the exported content.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: groups/{group_id}/content_exports
//
// Example:
// const body = {
//   export_type (required)
//   skip_notifications
//   select
// }
// return canvasRequest(export_content_groups, {group_id}, body);
var exportContentGroups = exports.exportContentGroups = { type: 'EXPORT_CONTENT_GROUPS', method: 'post', key: 'export_content_groupsexport_content_groups_group_id', required: ['group_id'] };

// Export content
// Begin a content export job for a course, group, or user.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the export. The migration's progress is linked to with the
// _progress_url_ value.
// 
// When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
// to retrieve a download URL for the exported content.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: users/{user_id}/content_exports
//
// Example:
// const body = {
//   export_type (required)
//   skip_notifications
//   select
// }
// return canvasRequest(export_content_users, {user_id}, body);
var exportContentUsers = exports.exportContentUsers = { type: 'EXPORT_CONTENT_USERS', method: 'post', key: 'export_content_usersexport_content_users_user_id', required: ['user_id'] };