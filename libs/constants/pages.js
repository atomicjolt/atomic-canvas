"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revertToRevisionGroups = exports.revertToRevisionCourses = exports.showRevisionGroupsRevisionId = exports.showRevisionCoursesRevisionId = exports.showRevisionGroupsLatest = exports.showRevisionCoursesLatest = exports.listRevisionsGroups = exports.listRevisionsCourses = exports.deletePageGroups = exports.deletePageCourses = exports.updateCreatePageGroups = exports.updateCreatePageCourses = exports.showPageGroups = exports.showPageCourses = exports.createPageGroups = exports.createPageCourses = exports.listPagesGroups = exports.listPagesCourses = exports.updateCreateFrontPageGroups = exports.updateCreateFrontPageCourses = exports.duplicatePage = exports.showFrontPageGroups = exports.showFrontPageCourses = void 0;
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
exports.showFrontPageCourses = { type: 'SHOW_FRONT_PAGE_COURSES', method: 'get', key: 'show_front_page_coursesshow_front_page_courses_course_id', required: ['course_id'] };
// Show front page
// Retrieve the content of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/front_page
//
// Example:
// return canvasRequest(show_front_page_groups, {group_id});
exports.showFrontPageGroups = { type: 'SHOW_FRONT_PAGE_GROUPS', method: 'get', key: 'show_front_page_groupsshow_front_page_groups_group_id', required: ['group_id'] };
// Duplicate page
// Duplicate a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url_or_id}/duplicate
//
// Example:
// return canvasRequest(duplicate_page, {course_id, url_or_id});
exports.duplicatePage = { type: 'DUPLICATE_PAGE', method: 'post', key: 'duplicate_pageduplicate_page_{course_id}_{url_or_id}', required: ['course_id', 'url_or_id'] };
// Update/create front page
// Update the title or contents of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/front_page
//
// Example:
// const body = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
// }
// return canvasRequest(update_create_front_page_courses, {course_id}, body);
exports.updateCreateFrontPageCourses = { type: 'UPDATE_CREATE_FRONT_PAGE_COURSES', method: 'put', key: 'update_create_front_page_coursesupdate_create_front_page_courses_course_id', required: ['course_id'] };
// Update/create front page
// Update the title or contents of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/front_page
//
// Example:
// const body = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
// }
// return canvasRequest(update_create_front_page_groups, {group_id}, body);
exports.updateCreateFrontPageGroups = { type: 'UPDATE_CREATE_FRONT_PAGE_GROUPS', method: 'put', key: 'update_create_front_page_groupsupdate_create_front_page_groups_group_id', required: ['group_id'] };
// List pages
// A paginated list of the wiki pages associated with a course or group
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
//   include
// }
// return canvasRequest(list_pages_courses, {course_id, ...query});
exports.listPagesCourses = { type: 'LIST_PAGES_COURSES', method: 'get', key: 'list_pages_courseslist_pages_courses_course_id', required: ['course_id'] };
// List pages
// A paginated list of the wiki pages associated with a course or group
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
//   include
// }
// return canvasRequest(list_pages_groups, {group_id, ...query});
exports.listPagesGroups = { type: 'LIST_PAGES_GROUPS', method: 'get', key: 'list_pages_groupslist_pages_groups_group_id', required: ['group_id'] };
// Create page
// Create a new wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages
//
// Example:
// const body = {
//   wiki_page[title] (required)
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
//   wiki_page[publish_at]
// }
// return canvasRequest(create_page_courses, {course_id}, body);
exports.createPageCourses = { type: 'CREATE_PAGE_COURSES', method: 'post', key: 'create_page_coursescreate_page_courses_course_id', required: ['course_id'] };
// Create page
// Create a new wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages
//
// Example:
// const body = {
//   wiki_page[title] (required)
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
//   wiki_page[publish_at]
// }
// return canvasRequest(create_page_groups, {group_id}, body);
exports.createPageGroups = { type: 'CREATE_PAGE_GROUPS', method: 'post', key: 'create_page_groupscreate_page_groups_group_id', required: ['group_id'] };
// Show page
// Retrieve the content of a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url_or_id}
//
// Example:
// return canvasRequest(show_page_courses, {course_id, url_or_id});
exports.showPageCourses = { type: 'SHOW_PAGE_COURSES', method: 'get', key: 'show_page_coursesshow_page_courses_{course_id}_{url_or_id}', required: ['course_id', 'url_or_id'] };
// Show page
// Retrieve the content of a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url_or_id}
//
// Example:
// return canvasRequest(show_page_groups, {group_id, url_or_id});
exports.showPageGroups = { type: 'SHOW_PAGE_GROUPS', method: 'get', key: 'show_page_groupsshow_page_groups_{group_id}_{url_or_id}', required: ['group_id', 'url_or_id'] };
// Update/create page
// Update the title or contents of a wiki page
// 
// NOTE: You cannot specify the ID when creating a page. If you pass a numeric value
// as the page identifier and that does not represent a page ID that already
// exists, it will be interpreted as a URL.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url_or_id}
//
// Example:
// const body = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[publish_at]
//   wiki_page[front_page]
// }
// return canvasRequest(update_create_page_courses, {course_id, url_or_id}, body);
exports.updateCreatePageCourses = { type: 'UPDATE_CREATE_PAGE_COURSES', method: 'put', key: 'update_create_page_coursesupdate_create_page_courses_{course_id}_{url_or_id}', required: ['course_id', 'url_or_id'] };
// Update/create page
// Update the title or contents of a wiki page
// 
// NOTE: You cannot specify the ID when creating a page. If you pass a numeric value
// as the page identifier and that does not represent a page ID that already
// exists, it will be interpreted as a URL.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url_or_id}
//
// Example:
// const body = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[publish_at]
//   wiki_page[front_page]
// }
// return canvasRequest(update_create_page_groups, {group_id, url_or_id}, body);
exports.updateCreatePageGroups = { type: 'UPDATE_CREATE_PAGE_GROUPS', method: 'put', key: 'update_create_page_groupsupdate_create_page_groups_{group_id}_{url_or_id}', required: ['group_id', 'url_or_id'] };
// Delete page
// Delete a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url_or_id}
//
// Example:
// return canvasRequest(delete_page_courses, {course_id, url_or_id});
exports.deletePageCourses = { type: 'DELETE_PAGE_COURSES', method: 'delete', key: 'delete_page_coursesdelete_page_courses_{course_id}_{url_or_id}', required: ['course_id', 'url_or_id'] };
// Delete page
// Delete a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url_or_id}
//
// Example:
// return canvasRequest(delete_page_groups, {group_id, url_or_id});
exports.deletePageGroups = { type: 'DELETE_PAGE_GROUPS', method: 'delete', key: 'delete_page_groupsdelete_page_groups_{group_id}_{url_or_id}', required: ['group_id', 'url_or_id'] };
// List revisions
// A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url_or_id}/revisions
//
// Example:
// return canvasRequest(list_revisions_courses, {course_id, url_or_id});
exports.listRevisionsCourses = { type: 'LIST_REVISIONS_COURSES', method: 'get', key: 'list_revisions_courseslist_revisions_courses_{course_id}_{url_or_id}', required: ['course_id', 'url_or_id'] };
// List revisions
// A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url_or_id}/revisions
//
// Example:
// return canvasRequest(list_revisions_groups, {group_id, url_or_id});
exports.listRevisionsGroups = { type: 'LIST_REVISIONS_GROUPS', method: 'get', key: 'list_revisions_groupslist_revisions_groups_{group_id}_{url_or_id}', required: ['group_id', 'url_or_id'] };
// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url_or_id}/revisions/latest
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_courses_latest, {course_id, url_or_id, ...query});
exports.showRevisionCoursesLatest = { type: 'SHOW_REVISION_COURSES_LATEST', method: 'get', key: 'show_revision_courses_latestshow_revision_courses_latest_{course_id}_{url_or_id}', required: ['course_id', 'url_or_id'] };
// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url_or_id}/revisions/latest
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_groups_latest, {group_id, url_or_id, ...query});
exports.showRevisionGroupsLatest = { type: 'SHOW_REVISION_GROUPS_LATEST', method: 'get', key: 'show_revision_groups_latestshow_revision_groups_latest_{group_id}_{url_or_id}', required: ['group_id', 'url_or_id'] };
// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url_or_id}/revisions/{revision_id}
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_courses_revision_id, {course_id, url_or_id, revision_id, ...query});
exports.showRevisionCoursesRevisionId = { type: 'SHOW_REVISION_COURSES_REVISION_ID', method: 'get', key: 'show_revision_courses_revision_idshow_revision_courses_revision_id_{course_id}_{url_or_id}_{revision_id}', required: ['course_id', 'url_or_id', 'revision_id'] };
// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url_or_id}/revisions/{revision_id}
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_groups_revision_id, {group_id, url_or_id, revision_id, ...query});
exports.showRevisionGroupsRevisionId = { type: 'SHOW_REVISION_GROUPS_REVISION_ID', method: 'get', key: 'show_revision_groups_revision_idshow_revision_groups_revision_id_{group_id}_{url_or_id}_{revision_id}', required: ['group_id', 'url_or_id', 'revision_id'] };
// Revert to revision
// Revert a page to a prior revision.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url_or_id}/revisions/{revision_id}
//
// Example:
// return canvasRequest(revert_to_revision_courses, {course_id, url_or_id, revision_id});
exports.revertToRevisionCourses = { type: 'REVERT_TO_REVISION_COURSES', method: 'post', key: 'revert_to_revision_coursesrevert_to_revision_courses_{course_id}_{url_or_id}_{revision_id}', required: ['course_id', 'url_or_id', 'revision_id'] };
// Revert to revision
// Revert a page to a prior revision.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url_or_id}/revisions/{revision_id}
//
// Example:
// return canvasRequest(revert_to_revision_groups, {group_id, url_or_id, revision_id});
exports.revertToRevisionGroups = { type: 'REVERT_TO_REVISION_GROUPS', method: 'post', key: 'revert_to_revision_groupsrevert_to_revision_groups_{group_id}_{url_or_id}_{revision_id}', required: ['group_id', 'url_or_id', 'revision_id'] };
//# sourceMappingURL=pages.js.map