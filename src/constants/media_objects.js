//
// Media Objects
//
// List media tracks for a Media Object or Attachment
// List the media tracks associated with a media object or attachment
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: media_objects/{media_object_id}/media_tracks
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_media_tracks_for_media_object_or_attachment_media_objects, {media_object_id, ...query});
export const listMediaTracksForMediaObjectOrAttachmentMediaObjects = { type: 'LIST_MEDIA_TRACKS_FOR_MEDIA_OBJECT_OR_ATTACHMENT_MEDIA_OBJECTS', method: 'get', key: 'list_media_tracks_for_media_object_or_attachment_media_objectslist_media_tracks_for_media_object_or_attachment_media_objects_media_object_id', required: ['media_object_id'] };

// List media tracks for a Media Object or Attachment
// List the media tracks associated with a media object or attachment
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: media_attachments/{attachment_id}/media_tracks
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_media_tracks_for_media_object_or_attachment_media_attachments, {attachment_id, ...query});
export const listMediaTracksForMediaObjectOrAttachmentMediaAttachments = { type: 'LIST_MEDIA_TRACKS_FOR_MEDIA_OBJECT_OR_ATTACHMENT_MEDIA_ATTACHMENTS', method: 'get', key: 'list_media_tracks_for_media_object_or_attachment_media_attachmentslist_media_tracks_for_media_object_or_attachment_media_attachments_attachment_id', required: ['attachment_id'] };

// Update Media Tracks
// Replace the media tracks associated with a media object or attachment with
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
// return canvasRequest(update_media_tracks_media_objects, {media_object_id}, body);
export const updateMediaTracksMediaObjects = { type: 'UPDATE_MEDIA_TRACKS_MEDIA_OBJECTS', method: 'put', key: 'update_media_tracks_media_objectsupdate_media_tracks_media_objects_media_object_id', required: ['media_object_id'] };

// Update Media Tracks
// Replace the media tracks associated with a media object or attachment with
// the array of tracks provided in the body.
// Update will
// delete any existing tracks not listed,
// leave untouched any tracks with no content field,
// and update or create tracks with a content field.
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: media_attachments/{attachment_id}/media_tracks
//
// Example:
// const body = {
//   include
// }
// return canvasRequest(update_media_tracks_media_attachments, {attachment_id}, body);
export const updateMediaTracksMediaAttachments = { type: 'UPDATE_MEDIA_TRACKS_MEDIA_ATTACHMENTS', method: 'put', key: 'update_media_tracks_media_attachmentsupdate_media_tracks_media_attachments_attachment_id', required: ['attachment_id'] };

// List Media Objects
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
export const listMediaObjectsMediaObjects = { type: 'LIST_MEDIA_OBJECTS_MEDIA_OBJECTS', method: 'get', key: 'list_media_objects_media_objects', required: [] };

// List Media Objects
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
// return canvasRequest(list_media_objects_courses_media_objects, {course_id, ...query});
export const listMediaObjectsCoursesMediaObjects = { type: 'LIST_MEDIA_OBJECTS_COURSES_MEDIA_OBJECTS', method: 'get', key: 'list_media_objects_courses_media_objectslist_media_objects_courses_media_objects_course_id', required: ['course_id'] };

// List Media Objects
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
// return canvasRequest(list_media_objects_groups_media_objects, {group_id, ...query});
export const listMediaObjectsGroupsMediaObjects = { type: 'LIST_MEDIA_OBJECTS_GROUPS_MEDIA_OBJECTS', method: 'get', key: 'list_media_objects_groups_media_objectslist_media_objects_groups_media_objects_group_id', required: ['group_id'] };

// List Media Objects
// Returns media objects created by the user making the request. When
// using the second version, returns media objects associated with
// the given course.
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: media_attachments
//
// Example:
// const query = {
//   sort
//   order
//   exclude
// }
// return canvasRequest(list_media_objects_media_attachments, {, ...query});
export const listMediaObjectsMediaAttachments = { type: 'LIST_MEDIA_OBJECTS_MEDIA_ATTACHMENTS', method: 'get', key: 'list_media_objects_media_attachments', required: [] };

// List Media Objects
// Returns media objects created by the user making the request. When
// using the second version, returns media objects associated with
// the given course.
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: courses/{course_id}/media_attachments
//
// Example:
// const query = {
//   sort
//   order
//   exclude
// }
// return canvasRequest(list_media_objects_courses_media_attachments, {course_id, ...query});
export const listMediaObjectsCoursesMediaAttachments = { type: 'LIST_MEDIA_OBJECTS_COURSES_MEDIA_ATTACHMENTS', method: 'get', key: 'list_media_objects_courses_media_attachmentslist_media_objects_courses_media_attachments_course_id', required: ['course_id'] };

// List Media Objects
// Returns media objects created by the user making the request. When
// using the second version, returns media objects associated with
// the given course.
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: groups/{group_id}/media_attachments
//
// Example:
// const query = {
//   sort
//   order
//   exclude
// }
// return canvasRequest(list_media_objects_groups_media_attachments, {group_id, ...query});
export const listMediaObjectsGroupsMediaAttachments = { type: 'LIST_MEDIA_OBJECTS_GROUPS_MEDIA_ATTACHMENTS', method: 'get', key: 'list_media_objects_groups_media_attachmentslist_media_objects_groups_media_attachments_group_id', required: ['group_id'] };

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
// return canvasRequest(update_media_object_media_objects, {media_object_id}, body);
export const updateMediaObjectMediaObjects = { type: 'UPDATE_MEDIA_OBJECT_MEDIA_OBJECTS', method: 'put', key: 'update_media_object_media_objectsupdate_media_object_media_objects_media_object_id', required: ['media_object_id'] };

// Update Media Object
// 
//
// API Docs: https://canvas.instructure.com/doc/api/media_objects.html
// API Url: media_attachments/{attachment_id}
//
// Example:
// const body = {
//   user_entered_title
// }
// return canvasRequest(update_media_object_media_attachments, {attachment_id}, body);
export const updateMediaObjectMediaAttachments = { type: 'UPDATE_MEDIA_OBJECT_MEDIA_ATTACHMENTS', method: 'put', key: 'update_media_object_media_attachmentsupdate_media_object_media_attachments_attachment_id', required: ['attachment_id'] };