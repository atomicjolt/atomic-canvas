"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listAssignmentGroups = exports.getAssignmentGroup = exports.editAssignmentGroup = exports.destroyAssignmentGroup = exports.createAssignmentGroup = void 0;
//
// Assignment Groups
//
// List assignment groups
// Returns the paginated list of assignment groups for the current context.
// The returned groups are sorted by their position field.
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups
//
// Example:
// const query = {
//   include
//   assignment_ids
//   exclude_assignment_submission_types
//   override_assignment_dates
//   grading_period_id
//   scope_assignments_to_student
// }
// return canvasRequest(list_assignment_groups, {course_id, ...query});
var listAssignmentGroups = {
  type: 'LIST_ASSIGNMENT_GROUPS',
  method: 'get',
  key: 'list_assignment_groupslist_assignment_groups_course_id',
  required: ['course_id']
}; // Get an Assignment Group
// Returns the assignment group with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups/{assignment_group_id}
//
// Example:
// const query = {
//   include
//   override_assignment_dates
//   grading_period_id
// }
// return canvasRequest(get_assignment_group, {course_id, assignment_group_id, ...query});

exports.listAssignmentGroups = listAssignmentGroups;
var getAssignmentGroup = {
  type: 'GET_ASSIGNMENT_GROUP',
  method: 'get',
  key: 'get_assignment_groupget_assignment_group_{course_id}_{assignment_group_id}',
  required: ['course_id', 'assignment_group_id']
}; // Create an Assignment Group
// Create a new assignment group for this course.
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups
//
// Example:
// const body = {
//   name
//   position
//   group_weight
//   sis_source_id
//   integration_data
// }
// return canvasRequest(create_assignment_group, {course_id}, body);

exports.getAssignmentGroup = getAssignmentGroup;
var createAssignmentGroup = {
  type: 'CREATE_ASSIGNMENT_GROUP',
  method: 'post',
  key: 'create_assignment_groupcreate_assignment_group_course_id',
  required: ['course_id']
}; // Edit an Assignment Group
// Modify an existing Assignment Group.
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups/{assignment_group_id}
//
// Example:
// const body = {
//   name
//   position
//   group_weight
//   sis_source_id
//   integration_data
//   rules
// }
// return canvasRequest(edit_assignment_group, {course_id, assignment_group_id}, body);

exports.createAssignmentGroup = createAssignmentGroup;
var editAssignmentGroup = {
  type: 'EDIT_ASSIGNMENT_GROUP',
  method: 'put',
  key: 'edit_assignment_groupedit_assignment_group_{course_id}_{assignment_group_id}',
  required: ['course_id', 'assignment_group_id']
}; // Destroy an Assignment Group
// Deletes the assignment group with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups/{assignment_group_id}
//
// Example:
// const body = {
//   move_assignments_to
// }
// return canvasRequest(destroy_assignment_group, {course_id, assignment_group_id}, body);

exports.editAssignmentGroup = editAssignmentGroup;
var destroyAssignmentGroup = {
  type: 'DESTROY_ASSIGNMENT_GROUP',
  method: 'delete',
  key: 'destroy_assignment_groupdestroy_assignment_group_{course_id}_{assignment_group_id}',
  required: ['course_id', 'assignment_group_id']
};
exports.destroyAssignmentGroup = destroyAssignmentGroup;