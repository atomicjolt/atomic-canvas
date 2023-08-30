"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listExternalFeedsGroups = exports.listExternalFeedsCourses = exports.deleteExternalFeedGroups = exports.deleteExternalFeedCourses = exports.createExternalFeedGroups = exports.createExternalFeedCourses = void 0;
//
// Announcement External Feeds
//
// List external feeds
// Returns the paginated list of External Feeds this course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: courses/{course_id}/external_feeds
//
// Example:
// return canvasRequest(list_external_feeds_courses, {course_id});
var listExternalFeedsCourses = {
  type: 'LIST_EXTERNAL_FEEDS_COURSES',
  method: 'get',
  key: 'list_external_feeds_courseslist_external_feeds_courses_course_id',
  required: ['course_id']
};

// List external feeds
// Returns the paginated list of External Feeds this course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: groups/{group_id}/external_feeds
//
// Example:
// return canvasRequest(list_external_feeds_groups, {group_id});
exports.listExternalFeedsCourses = listExternalFeedsCourses;
var listExternalFeedsGroups = {
  type: 'LIST_EXTERNAL_FEEDS_GROUPS',
  method: 'get',
  key: 'list_external_feeds_groupslist_external_feeds_groups_group_id',
  required: ['group_id']
};

// Create an external feed
// Create a new external feed for the course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: courses/{course_id}/external_feeds
//
// Example:
// const body = {
//   url (required)
//   header_match
//   verbosity
// }
// return canvasRequest(create_external_feed_courses, {course_id}, body);
exports.listExternalFeedsGroups = listExternalFeedsGroups;
var createExternalFeedCourses = {
  type: 'CREATE_EXTERNAL_FEED_COURSES',
  method: 'post',
  key: 'create_external_feed_coursescreate_external_feed_courses_course_id',
  required: ['course_id']
};

// Create an external feed
// Create a new external feed for the course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: groups/{group_id}/external_feeds
//
// Example:
// const body = {
//   url (required)
//   header_match
//   verbosity
// }
// return canvasRequest(create_external_feed_groups, {group_id}, body);
exports.createExternalFeedCourses = createExternalFeedCourses;
var createExternalFeedGroups = {
  type: 'CREATE_EXTERNAL_FEED_GROUPS',
  method: 'post',
  key: 'create_external_feed_groupscreate_external_feed_groups_group_id',
  required: ['group_id']
};

// Delete an external feed
// Deletes the external feed.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: courses/{course_id}/external_feeds/{external_feed_id}
//
// Example:
// return canvasRequest(delete_external_feed_courses, {course_id, external_feed_id});
exports.createExternalFeedGroups = createExternalFeedGroups;
var deleteExternalFeedCourses = {
  type: 'DELETE_EXTERNAL_FEED_COURSES',
  method: 'delete',
  key: 'delete_external_feed_coursesdelete_external_feed_courses_{course_id}_{external_feed_id}',
  required: ['course_id', 'external_feed_id']
};

// Delete an external feed
// Deletes the external feed.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: groups/{group_id}/external_feeds/{external_feed_id}
//
// Example:
// return canvasRequest(delete_external_feed_groups, {group_id, external_feed_id});
exports.deleteExternalFeedCourses = deleteExternalFeedCourses;
var deleteExternalFeedGroups = {
  type: 'DELETE_EXTERNAL_FEED_GROUPS',
  method: 'delete',
  key: 'delete_external_feed_groupsdelete_external_feed_groups_{group_id}_{external_feed_id}',
  required: ['group_id', 'external_feed_id']
};
exports.deleteExternalFeedGroups = deleteExternalFeedGroups;