"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlannerNote = exports.createPlannerNote = exports.updatePlannernote = exports.showPlannernote = exports.listPlannerNotes = void 0;
//
// Planner Note
//
// List planner notes
// Retrieve the paginated list of planner notes
// 
// Retrieve planner note for a user
//
// API Docs: https://canvas.instructure.com/doc/api/planner_note.html
// API Url: planner_notes
//
// Example:
// const query = {
//   start_date
//   end_date
//   context_codes
// }
// return canvasRequest(list_planner_notes, {, ...query});
exports.listPlannerNotes = { type: 'LIST_PLANNER_NOTES', method: 'get', key: 'list_planner_notes', required: [] };
// Show a PlannerNote
// Retrieve a planner note for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner_note.html
// API Url: planner_notes/{id}
//
// Example:
// return canvasRequest(show_plannernote, {id});
exports.showPlannernote = { type: 'SHOW_PLANNERNOTE', method: 'get', key: 'show_plannernoteshow_plannernote_id', required: ['id'] };
// Update a PlannerNote
// Update a planner note for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner_note.html
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
exports.updatePlannernote = { type: 'UPDATE_PLANNERNOTE', method: 'put', key: 'update_plannernoteupdate_plannernote_id', required: ['id'] };
// Create a planner note
// Create a planner note for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner_note.html
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
exports.createPlannerNote = { type: 'CREATE_PLANNER_NOTE', method: 'post', key: 'create_planner_note', required: [] };
// Delete a planner note
// Delete a planner note for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner_note.html
// API Url: planner_notes/{id}
//
// Example:
// return canvasRequest(delete_planner_note, {id});
exports.deletePlannerNote = { type: 'DELETE_PLANNER_NOTE', method: 'delete', key: 'delete_planner_notedelete_planner_note_id', required: ['id'] };
//# sourceMappingURL=planner_note.js.map