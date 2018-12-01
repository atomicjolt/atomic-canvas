'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Planner
//
// List planner items
// Retrieve the paginated list of objects to be shown on the planner for the
// current user with the associated planner override to override an item's
// visibility if set.
// 
// [
//   {
//     "context_type": "Course",
//     "course_id": 1,
//     "visible_in_planner": true, // Whether or not it is displayed on the student planner
//     "planner_override": { ... planner override object ... }, // Associated PlannerOverride object if user has toggled visibility for the object on the planner
//     "submissions": false, // The statuses of the user's submissions for this object
//     "plannable_id": "123",
//     "plannable_type": "discussion_topic",
//     "plannable": { ... discussion topic object },
//     "html_url": "/courses/1/discussion_topics/8"
//   },
//   {
//     "context_type": "Course",
//     "course_id": 1,
//     "visible_in_planner": true,
//     "planner_override": {
//         "id": 3,
//         "plannable_type": "Assignment",
//         "plannable_id": 1,
//         "user_id": 2,
//         "workflow_state": "active",
//         "marked_complete": true, // A user-defined setting for marking items complete in the planner
//         "dismissed": false, // A user-defined setting for hiding items from the opportunities list
//         "deleted_at": null,
//         "created_at": "2017-05-18T18:35:55Z",
//         "updated_at": "2017-05-18T18:35:55Z"
//     },
//     "submissions": { // The status as it pertains to the current user
//       "excused": false,
//       "graded": false,
//       "late": false,
//       "missing": true,
//       "needs_grading": false,
//       "with_feedback": false
//     },
//     "plannable_id": "456",
//     "plannable_type": "assignment",
//     "plannable": { ... assignment object ...  },
//     "html_url": "http://canvas.instructure.com/courses/1/assignments/1#submit"
//   },
//   {
//     "visible_in_planner": true,
//     "planner_override": null,
//     "submissions": false, // false if no associated assignment exists for the plannable item
//     "plannable_id": "789",
//     "plannable_type": "planner_note",
//     "plannable": {
//       "id": 1,
//       "todo_date": "2017-05-30T06:00:00Z",
//       "title": "hello",
//       "details": "world",
//       "user_id": 2,
//       "course_id": null,
//       "workflow_state": "active",
//       "created_at": "2017-05-30T16:29:04Z",
//       "updated_at": "2017-05-30T16:29:15Z"
//     },
//     "html_url": "http://canvas.instructure.com/api/v1/planner_notes.1"
//   }
// ]
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/items
//
// Example:
// const query = {
//   start_date
//   end_date
//   context_codes
//   filter
// }
// return canvasRequest(list_planner_items, {, ...query});
var listPlannerItems = exports.listPlannerItems = { type: 'LIST_PLANNER_ITEMS', method: 'get', key: 'list_planner_items', required: [] };

// List planner notes
// Retrieve the paginated list of planner notes
// 
// Retrieve planner note for a user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner_notes
//
// Example:
// const query = {
//   start_date
//   end_date
//   context_codes
// }
// return canvasRequest(list_planner_notes, {, ...query});
var listPlannerNotes = exports.listPlannerNotes = { type: 'LIST_PLANNER_NOTES', method: 'get', key: 'list_planner_notes', required: [] };

// Show a PlannerNote
// Retrieve a planner note for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner_notes/{id}
//
// Example:
// return canvasRequest(show_plannernote, {id});
var showPlannernote = exports.showPlannernote = { type: 'SHOW_PLANNERNOTE', method: 'get', key: 'show_plannernoteshow_plannernote_id', required: ['id'] };

// Update a PlannerNote
// Update a planner note for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner_notes/{id}
//
// Example:
// const body = {
//   title
//   details
//   todo_date
//   course_id
// }
// return canvasRequest(update_plannernote, {id}, body);
var updatePlannernote = exports.updatePlannernote = { type: 'UPDATE_PLANNERNOTE', method: 'put', key: 'update_plannernoteupdate_plannernote_id', required: ['id'] };

// Create a planner note
// Create a planner note for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner_notes
//
// Example:
// const body = {
//   title
//   details
//   todo_date
//   course_id
//   linked_object_type
//   linked_object_id
// }
// return canvasRequest(create_planner_note, {}, body);
var createPlannerNote = exports.createPlannerNote = { type: 'CREATE_PLANNER_NOTE', method: 'post', key: 'create_planner_note', required: [] };

// Delete a planner note
// Delete a planner note for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner_notes/{id}
//
// Example:
// return canvasRequest(delete_planner_note, {id});
var deletePlannerNote = exports.deletePlannerNote = { type: 'DELETE_PLANNER_NOTE', method: 'delete', key: 'delete_planner_notedelete_planner_note_id', required: ['id'] };

// List planner overrides
// Retrieve a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/overrides
//
// Example:
// return canvasRequest(list_planner_overrides, {});
var listPlannerOverrides = exports.listPlannerOverrides = { type: 'LIST_PLANNER_OVERRIDES', method: 'get', key: 'list_planner_overrides', required: [] };

// Show a planner override
// Retrieve a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/overrides/{id}
//
// Example:
// return canvasRequest(show_planner_override, {id});
var showPlannerOverride = exports.showPlannerOverride = { type: 'SHOW_PLANNER_OVERRIDE', method: 'get', key: 'show_planner_overrideshow_planner_override_id', required: ['id'] };

// Update a planner override
// Update a planner override's visibilty for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/overrides/{id}
//
// Example:
// const body = {
//   marked_complete
//   dismissed
// }
// return canvasRequest(update_planner_override, {id}, body);
var updatePlannerOverride = exports.updatePlannerOverride = { type: 'UPDATE_PLANNER_OVERRIDE', method: 'put', key: 'update_planner_overrideupdate_planner_override_id', required: ['id'] };

// Create a planner override
// Create a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/overrides
//
// Example:
// const body = {
//   plannable_type
//   plannable_id
//   marked_complete
//   dismissed
// }
// return canvasRequest(create_planner_override, {}, body);
var createPlannerOverride = exports.createPlannerOverride = { type: 'CREATE_PLANNER_OVERRIDE', method: 'post', key: 'create_planner_override', required: [] };

// Delete a planner override
// Delete a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/overrides/{id}
//
// Example:
// return canvasRequest(delete_planner_override, {id});
var deletePlannerOverride = exports.deletePlannerOverride = { type: 'DELETE_PLANNER_OVERRIDE', method: 'delete', key: 'delete_planner_overridedelete_planner_override_id', required: ['id'] };