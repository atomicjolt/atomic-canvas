"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlannerOverride = exports.createPlannerOverride = exports.updatePlannerOverride = exports.showPlannerOverride = exports.listPlannerOverrides = void 0;
//
// Planner override
//
// List planner overrides
// Retrieve a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner_override.html
// API Url: planner/overrides
//
// Example:
// return canvasRequest(list_planner_overrides, {});
exports.listPlannerOverrides = { type: 'LIST_PLANNER_OVERRIDES', method: 'get', key: 'list_planner_overrides', required: [] };
// Show a planner override
// Retrieve a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner_override.html
// API Url: planner/overrides/{id}
//
// Example:
// return canvasRequest(show_planner_override, {id});
exports.showPlannerOverride = { type: 'SHOW_PLANNER_OVERRIDE', method: 'get', key: 'show_planner_overrideshow_planner_override_id', required: ['id'] };
// Update a planner override
// Update a planner override's visibilty for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner_override.html
// API Url: planner/overrides/{id}
//
// Example:
// const body = {
//   marked_complete
//   dismissed
// }
// return canvasRequest(update_planner_override, {id}, body);
exports.updatePlannerOverride = { type: 'UPDATE_PLANNER_OVERRIDE', method: 'put', key: 'update_planner_overrideupdate_planner_override_id', required: ['id'] };
// Create a planner override
// Create a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner_override.html
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
exports.createPlannerOverride = { type: 'CREATE_PLANNER_OVERRIDE', method: 'post', key: 'create_planner_override', required: [] };
// Delete a planner override
// Delete a planner override for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/planner_override.html
// API Url: planner/overrides/{id}
//
// Example:
// return canvasRequest(delete_planner_override, {id});
exports.deletePlannerOverride = { type: 'DELETE_PLANNER_OVERRIDE', method: 'delete', key: 'delete_planner_overridedelete_planner_override_id', required: ['id'] };
//# sourceMappingURL=planner_override.js.map