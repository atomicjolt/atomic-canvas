'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Media Objects
//
// List Media Objects
// Returns Media Objects created by the user making the request. When
// using the second version, returns
// only those Media Objects associated with the given course.
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: media_objects
//
// Example:
// const query = {
//   sort
//   order
//   exclude
// }
// return canvasRequest(list_media_objects_media_objects, {, ...query});
var listMediaObjectsMediaObjects = exports.listMediaObjectsMediaObjects = { type: 'LIST_MEDIA_OBJECTS_MEDIA_OBJECTS', method: 'get', key: 'list_media_objects_media_objects', required: [] };

// List Media Objects
// Returns Media Objects created by the user making the request. When
// using the second version, returns
// only those Media Objects associated with the given course.
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: courses/{course_id}/media_objects
//
// Example:
// const query = {
//   sort
//   order
//   exclude
// }
// return canvasRequest(list_media_objects_courses, {course_id, ...query});
var listMediaObjectsCourses = exports.listMediaObjectsCourses = { type: 'LIST_MEDIA_OBJECTS_COURSES', method: 'get', key: 'list_media_objects_courseslist_media_objects_courses_course_id', required: ['course_id'] };

// Update Media Object
// 
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: media_objects/{media_object_id}
//
// Example:
// const body = {
//   user_entered_title
// }
// return canvasRequest(update_media_object, {media_object_id}, body);
var updateMediaObject = exports.updateMediaObject = { type: 'UPDATE_MEDIA_OBJECT', method: 'put', key: 'update_media_objectupdate_media_object_media_object_id', required: ['media_object_id'] };