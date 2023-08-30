"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePlannerOverride = exports.updatePlannerNote = exports.showPlannerOverride = exports.showPlannerNote = exports.listPlannerOverrides = exports.listPlannerNotes = exports.listPlannerItemsUsers = exports.listPlannerItemsPlanner = exports.deletePlannerOverride = exports.deletePlannerNote = exports.createPlannerOverride = exports.createPlannerNote = void 0;
//
// Planner
//
// List planner items
// Retrieve the paginated list of objects to be shown on the planner for the
// current user with the associated planner override to override an item's
// visibility if set.
// 
// Planner items for a student may also be retrieved by a linked observer. Use
// the path that accepts a user_id and supply the student's id.
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/items
//
// Example:
// const query = {
//   start_date
//   end_date
//   context_codes
//   observed_user_id
//   filter
// }
// return canvasRequest(list_planner_items_planner, {, ...query});
var listPlannerItemsPlanner = {
  type: 'LIST_PLANNER_ITEMS_PLANNER',
  method: 'get',
  key: 'list_planner_items_planner',
  required: []
};

// List planner items
// Retrieve the paginated list of objects to be shown on the planner for the
// current user with the associated planner override to override an item's
// visibility if set.
// 
// Planner items for a student may also be retrieved by a linked observer. Use
// the path that accepts a user_id and supply the student's id.
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: users/{user_id}/planner/items
//
// Example:
// const query = {
//   start_date
//   end_date
//   context_codes
//   observed_user_id
//   filter
// }
// return canvasRequest(list_planner_items_users, {user_id, ...query});
exports.listPlannerItemsPlanner = listPlannerItemsPlanner;
var listPlannerItemsUsers = {
  type: 'LIST_PLANNER_ITEMS_USERS',
  method: 'get',
  key: 'list_planner_items_userslist_planner_items_users_user_id',
  required: ['user_id']
};

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
exports.listPlannerItemsUsers = listPlannerItemsUsers;
var listPlannerNotes = {
  type: 'LIST_PLANNER_NOTES',
  method: 'get',
  key: 'list_planner_notes',
  required: []
};

// Show a planner note
// Retrieve a planner note for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner_notes/{id}
//
// Example:
// return canvasRequest(show_planner_note, {id});
exports.listPlannerNotes = listPlannerNotes;
var showPlannerNote = {
  type: 'SHOW_PLANNER_NOTE',
  method: 'get',
  key: 'show_planner_noteshow_planner_note_id',
  required: ['id']
};

// Update a planner note
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
// return canvasRequest(update_planner_note, {id}, body);
exports.showPlannerNote = showPlannerNote;
var updatePlannerNote = {
  type: 'UPDATE_PLANNER_NOTE',
  method: 'put',
  key: 'update_planner_noteupdate_planner_note_id',
  required: ['id']
};

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
exports.updatePlannerNote = updatePlannerNote;
var createPlannerNote = {
  type: 'CREATE_PLANNER_NOTE',
  method: 'post',
  key: 'create_planner_note',
  required: []
};

// Delete a planner note
// Delete a planner note for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner_notes/{id}
//
// Example:
// return canvasRequest(delete_planner_note, {id});
exports.createPlannerNote = createPlannerNote;
var deletePlannerNote = {
  type: 'DELETE_PLANNER_NOTE',
  method: 'delete',
  key: 'delete_planner_notedelete_planner_note_id',
  required: ['id']
};

// List planner overrides
// Retrieve a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/overrides
//
// Example:
// return canvasRequest(list_planner_overrides, {});
exports.deletePlannerNote = deletePlannerNote;
var listPlannerOverrides = {
  type: 'LIST_PLANNER_OVERRIDES',
  method: 'get',
  key: 'list_planner_overrides',
  required: []
};

// Show a planner override
// Retrieve a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/overrides/{id}
//
// Example:
// return canvasRequest(show_planner_override, {id});
exports.listPlannerOverrides = listPlannerOverrides;
var showPlannerOverride = {
  type: 'SHOW_PLANNER_OVERRIDE',
  method: 'get',
  key: 'show_planner_overrideshow_planner_override_id',
  required: ['id']
};

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
exports.showPlannerOverride = showPlannerOverride;
var updatePlannerOverride = {
  type: 'UPDATE_PLANNER_OVERRIDE',
  method: 'put',
  key: 'update_planner_overrideupdate_planner_override_id',
  required: ['id']
};

// Create a planner override
// Create a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/overrides
//
// Example:
// const body = {
//   plannable_type (required)
//   plannable_id (required)
//   marked_complete
//   dismissed
// }
// return canvasRequest(create_planner_override, {}, body);
exports.updatePlannerOverride = updatePlannerOverride;
var createPlannerOverride = {
  type: 'CREATE_PLANNER_OVERRIDE',
  method: 'post',
  key: 'create_planner_override',
  required: []
};

// Delete a planner override
// Delete a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner.html
// API Url: planner/overrides/{id}
//
// Example:
// return canvasRequest(delete_planner_override, {id});
exports.createPlannerOverride = createPlannerOverride;
var deletePlannerOverride = {
  type: 'DELETE_PLANNER_OVERRIDE',
  method: 'delete',
  key: 'delete_planner_overridedelete_planner_override_id',
  required: ['id']
};
exports.deletePlannerOverride = deletePlannerOverride;