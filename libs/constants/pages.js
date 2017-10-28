'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Pages
//
// Show front page
// Retrieve the content of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/front_page
//
// Example:
// return canvasRequest(show_front_page_courses, {course_id});
var showFrontPageCourses = exports.showFrontPageCourses = { type: 'SHOW_FRONT_PAGE_COURSES', method: 'get', key: 'show_front_page_coursesshow_front_page_courses_course_id', required: ['course_id'] };

// Show front page
// Retrieve the content of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/front_page
//
// Example:
// return canvasRequest(show_front_page_groups, {group_id});
var showFrontPageGroups = exports.showFrontPageGroups = { type: 'SHOW_FRONT_PAGE_GROUPS', method: 'get', key: 'show_front_page_groupsshow_front_page_groups_group_id', required: ['group_id'] };

// Duplicate page
// Duplicate a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/duplicate
//
// Example:
// return canvasRequest(duplicate_page, {course_id, url});
var duplicatePage = exports.duplicatePage = { type: 'DUPLICATE_PAGE', method: 'post', key: 'duplicate_pageduplicate_page_{course_id}_{url}', required: ['course_id', 'url'] };

// Update/create front page
// Update the title or contents of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/front_page
//
// Example:
// const query = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
// }
// return canvasRequest(update_create_front_page_courses, {course_id}, query);
var updateCreateFrontPageCourses = exports.updateCreateFrontPageCourses = { type: 'UPDATE_CREATE_FRONT_PAGE_COURSES', method: 'put', key: 'update_create_front_page_coursesupdate_create_front_page_courses_course_id', required: ['course_id'] };

// Update/create front page
// Update the title or contents of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/front_page
//
// Example:
// const query = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
// }
// return canvasRequest(update_create_front_page_groups, {group_id}, query);
var updateCreateFrontPageGroups = exports.updateCreateFrontPageGroups = { type: 'UPDATE_CREATE_FRONT_PAGE_GROUPS', method: 'put', key: 'update_create_front_page_groupsupdate_create_front_page_groups_group_id', required: ['group_id'] };

// List pages
// List the wiki pages associated with a course or group
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages
//
// Example:
// const query = {
//   sort
//   order
//   search_term
//   published
// }
// return canvasRequest(list_pages_courses, {course_id}, query);
var listPagesCourses = exports.listPagesCourses = { type: 'LIST_PAGES_COURSES', method: 'get', key: 'list_pages_courseslist_pages_courses_course_id', required: ['course_id'] };

// List pages
// List the wiki pages associated with a course or group
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages
//
// Example:
// const query = {
//   sort
//   order
//   search_term
//   published
// }
// return canvasRequest(list_pages_groups, {group_id}, query);
var listPagesGroups = exports.listPagesGroups = { type: 'LIST_PAGES_GROUPS', method: 'get', key: 'list_pages_groupslist_pages_groups_group_id', required: ['group_id'] };

// Create page
// Create a new wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages
//
// Example:
// const query = {
//   wiki_page[title] (required)
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// }
// return canvasRequest(create_page_courses, {course_id}, query);
var createPageCourses = exports.createPageCourses = { type: 'CREATE_PAGE_COURSES', method: 'post', key: 'create_page_coursescreate_page_courses_course_id', required: ['course_id'] };

// Create page
// Create a new wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages
//
// Example:
// const query = {
//   wiki_page[title] (required)
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// }
// return canvasRequest(create_page_groups, {group_id}, query);
var createPageGroups = exports.createPageGroups = { type: 'CREATE_PAGE_GROUPS', method: 'post', key: 'create_page_groupscreate_page_groups_group_id', required: ['group_id'] };

// Show page
// Retrieve the content of a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}
//
// Example:
// return canvasRequest(show_page_courses, {course_id, url});
var showPageCourses = exports.showPageCourses = { type: 'SHOW_PAGE_COURSES', method: 'get', key: 'show_page_coursesshow_page_courses_{course_id}_{url}', required: ['course_id', 'url'] };

// Show page
// Retrieve the content of a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}
//
// Example:
// return canvasRequest(show_page_groups, {group_id, url});
var showPageGroups = exports.showPageGroups = { type: 'SHOW_PAGE_GROUPS', method: 'get', key: 'show_page_groupsshow_page_groups_{group_id}_{url}', required: ['group_id', 'url'] };

// Update/create page
// Update the title or contents of a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}
//
// Example:
// const query = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// }
// return canvasRequest(update_create_page_courses, {course_id, url}, query);
var updateCreatePageCourses = exports.updateCreatePageCourses = { type: 'UPDATE_CREATE_PAGE_COURSES', method: 'put', key: 'update_create_page_coursesupdate_create_page_courses_{course_id}_{url}', required: ['course_id', 'url'] };

// Update/create page
// Update the title or contents of a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}
//
// Example:
// const query = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// }
// return canvasRequest(update_create_page_groups, {group_id, url}, query);
var updateCreatePageGroups = exports.updateCreatePageGroups = { type: 'UPDATE_CREATE_PAGE_GROUPS', method: 'put', key: 'update_create_page_groupsupdate_create_page_groups_{group_id}_{url}', required: ['group_id', 'url'] };

// Delete page
// Delete a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}
//
// Example:
// return canvasRequest(delete_page_courses, {course_id, url});
var deletePageCourses = exports.deletePageCourses = { type: 'DELETE_PAGE_COURSES', method: 'delete', key: 'delete_page_coursesdelete_page_courses_{course_id}_{url}', required: ['course_id', 'url'] };

// Delete page
// Delete a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}
//
// Example:
// return canvasRequest(delete_page_groups, {group_id, url});
var deletePageGroups = exports.deletePageGroups = { type: 'DELETE_PAGE_GROUPS', method: 'delete', key: 'delete_page_groupsdelete_page_groups_{group_id}_{url}', required: ['group_id', 'url'] };

// List revisions
// List the revisions of a page. Callers must have update rights on the page in order to see page history.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions
//
// Example:
// return canvasRequest(list_revisions_courses, {course_id, url});
var listRevisionsCourses = exports.listRevisionsCourses = { type: 'LIST_REVISIONS_COURSES', method: 'get', key: 'list_revisions_courseslist_revisions_courses_{course_id}_{url}', required: ['course_id', 'url'] };

// List revisions
// List the revisions of a page. Callers must have update rights on the page in order to see page history.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions
//
// Example:
// return canvasRequest(list_revisions_groups, {group_id, url});
var listRevisionsGroups = exports.listRevisionsGroups = { type: 'LIST_REVISIONS_GROUPS', method: 'get', key: 'list_revisions_groupslist_revisions_groups_{group_id}_{url}', required: ['group_id', 'url'] };

// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions/latest
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_courses_latest, {course_id, url}, query);
var showRevisionCoursesLatest = exports.showRevisionCoursesLatest = { type: 'SHOW_REVISION_COURSES_LATEST', method: 'get', key: 'show_revision_courses_latestshow_revision_courses_latest_{course_id}_{url}', required: ['course_id', 'url'] };

// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions/latest
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_groups_latest, {group_id, url}, query);
var showRevisionGroupsLatest = exports.showRevisionGroupsLatest = { type: 'SHOW_REVISION_GROUPS_LATEST', method: 'get', key: 'show_revision_groups_latestshow_revision_groups_latest_{group_id}_{url}', required: ['group_id', 'url'] };

// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions/{revision_id}
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_courses_revision_id, {course_id, url, revision_id}, query);
var showRevisionCoursesRevisionId = exports.showRevisionCoursesRevisionId = { type: 'SHOW_REVISION_COURSES_REVISION_ID', method: 'get', key: 'show_revision_courses_revision_idshow_revision_courses_revision_id_{course_id}_{url}_{revision_id}', required: ['course_id', 'url', 'revision_id'] };

// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions/{revision_id}
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_groups_revision_id, {group_id, url, revision_id}, query);
var showRevisionGroupsRevisionId = exports.showRevisionGroupsRevisionId = { type: 'SHOW_REVISION_GROUPS_REVISION_ID', method: 'get', key: 'show_revision_groups_revision_idshow_revision_groups_revision_id_{group_id}_{url}_{revision_id}', required: ['group_id', 'url', 'revision_id'] };

// Revert to revision
// Revert a page to a prior revision.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions/{revision_id}
//
// Example:
// return canvasRequest(revert_to_revision_courses, {course_id, url, revision_id});
var revertToRevisionCourses = exports.revertToRevisionCourses = { type: 'REVERT_TO_REVISION_COURSES', method: 'post', key: 'revert_to_revision_coursesrevert_to_revision_courses_{course_id}_{url}_{revision_id}', required: ['course_id', 'url', 'revision_id'] };

// Revert to revision
// Revert a page to a prior revision.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions/{revision_id}
//
// Example:
// return canvasRequest(revert_to_revision_groups, {group_id, url, revision_id});
var revertToRevisionGroups = exports.revertToRevisionGroups = { type: 'REVERT_TO_REVISION_GROUPS', method: 'post', key: 'revert_to_revision_groupsrevert_to_revision_groups_{group_id}_{url}_{revision_id}', required: ['group_id', 'url', 'revision_id'] };