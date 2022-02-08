"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMediaTracks = exports.updateMediaObject = exports.listMediaTracksForMediaObject = exports.listMediaObjectsMediaObjects = exports.listMediaObjectsGroups = exports.listMediaObjectsCourses = void 0;
//
// Media Objects
//
// List media tracks for a Media Object
// List the media tracks associated with a media object
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: media_objects/{media_object_id}/media_tracks
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_media_tracks_for_media_object, {media_object_id, ...query});
var listMediaTracksForMediaObject = {
  type: 'LIST_MEDIA_TRACKS_FOR_MEDIA_OBJECT',
  method: 'get',
  key: 'list_media_tracks_for_media_objectlist_media_tracks_for_media_object_media_object_id',
  required: ['media_object_id']
}; // Update Media Tracks
// Replace the media tracks associated with a media object with
// the array of tracks provided in the body.
// Update will
// delete any existing tracks not listed,
// leave untouched any tracks with no content field,
// and update or create tracks with a content field.
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: media_objects/{media_object_id}/media_tracks
//
// Example:
// const body = {
//   include
// }
// return canvasRequest(update_media_tracks, {media_object_id}, body);

exports.listMediaTracksForMediaObject = listMediaTracksForMediaObject;
var updateMediaTracks = {
  type: 'UPDATE_MEDIA_TRACKS',
  method: 'put',
  key: 'update_media_tracksupdate_media_tracks_media_object_id',
  required: ['media_object_id']
}; // List Media Objects
// Returns media objects created by the user making the request. When
// using the second version, returns media objects associated with
// the given course.
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

exports.updateMediaTracks = updateMediaTracks;
var listMediaObjectsMediaObjects = {
  type: 'LIST_MEDIA_OBJECTS_MEDIA_OBJECTS',
  method: 'get',
  key: 'list_media_objects_media_objects',
  required: []
}; // List Media Objects
// Returns media objects created by the user making the request. When
// using the second version, returns media objects associated with
// the given course.
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

exports.listMediaObjectsMediaObjects = listMediaObjectsMediaObjects;
var listMediaObjectsCourses = {
  type: 'LIST_MEDIA_OBJECTS_COURSES',
  method: 'get',
  key: 'list_media_objects_courseslist_media_objects_courses_course_id',
  required: ['course_id']
}; // List Media Objects
// Returns media objects created by the user making the request. When
// using the second version, returns media objects associated with
// the given course.
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: groups/{group_id}/media_objects
//
// Example:
// const query = {
//   sort
//   order
//   exclude
// }
// return canvasRequest(list_media_objects_groups, {group_id, ...query});

exports.listMediaObjectsCourses = listMediaObjectsCourses;
var listMediaObjectsGroups = {
  type: 'LIST_MEDIA_OBJECTS_GROUPS',
  method: 'get',
  key: 'list_media_objects_groupslist_media_objects_groups_group_id',
  required: ['group_id']
}; // Update Media Object
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

exports.listMediaObjectsGroups = listMediaObjectsGroups;
var updateMediaObject = {
  type: 'UPDATE_MEDIA_OBJECT',
  method: 'put',
  key: 'update_media_objectupdate_media_object_media_object_id',
  required: ['media_object_id']
};
exports.updateMediaObject = updateMediaObject;