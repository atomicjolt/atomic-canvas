'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Assignments
//
// Delete an assignment
// Delete the given assignment.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{id}
//
// Example:
// return canvasRequest(delete_assignment, {course_id, id});
var deleteAssignment = exports.deleteAssignment = { type: 'DELETE_ASSIGNMENT', method: 'delete', key: 'delete_assignmentdelete_assignment_{course_id}_{id}', required: ['course_id', 'id'] };

// List assignments
// Returns the paginated list of assignments for the current course or assignment group.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments
//
// Example:
// const query = {
//   include
//   search_term
//   override_assignment_dates
//   needs_grading_count_by_section
//   bucket
//   assignment_ids
//   order_by
//   post_to_sis
// }
// return canvasRequest(list_assignments_assignments, {course_id, ...query});
var listAssignmentsAssignments = exports.listAssignmentsAssignments = { type: 'LIST_ASSIGNMENTS_ASSIGNMENTS', method: 'get', key: 'list_assignments_assignmentslist_assignments_assignments_course_id', required: ['course_id'] };

// List assignments
// Returns the paginated list of assignments for the current course or assignment group.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignment_groups/{assignment_group_id}/assignments
//
// Example:
// const query = {
//   include
//   search_term
//   override_assignment_dates
//   needs_grading_count_by_section
//   bucket
//   assignment_ids
//   order_by
//   post_to_sis
// }
// return canvasRequest(list_assignments_assignment_groups, {course_id, assignment_group_id, ...query});
var listAssignmentsAssignmentGroups = exports.listAssignmentsAssignmentGroups = { type: 'LIST_ASSIGNMENTS_ASSIGNMENT_GROUPS', method: 'get', key: 'list_assignments_assignment_groupslist_assignments_assignment_groups_{course_id}_{assignment_group_id}', required: ['course_id', 'assignment_group_id'] };

// List assignments for user
// Returns the paginated list of assignments for the specified user if the current user has rights to view.
// See {api:AssignmentsApiController#index List assignments} for valid arguments.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: users/{user_id}/courses/{course_id}/assignments
//
// Example:
// return canvasRequest(list_assignments_for_user, {user_id, course_id});
var listAssignmentsForUser = exports.listAssignmentsForUser = { type: 'LIST_ASSIGNMENTS_FOR_USER', method: 'get', key: 'list_assignments_for_userlist_assignments_for_user_{user_id}_{course_id}', required: ['user_id', 'course_id'] };

// Duplicate assignnment
// Duplicate an assignment and return a json based on result_type argument.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/duplicate
//
// Example:
// const body = {
//   result_type
// }
// return canvasRequest(duplicate_assignnment, {course_id, assignment_id}, body);
var duplicateAssignnment = exports.duplicateAssignnment = { type: 'DUPLICATE_ASSIGNNMENT', method: 'post', key: 'duplicate_assignnmentduplicate_assignnment_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };

// Get a single assignment
// Returns the assignment with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{id}
//
// Example:
// const query = {
//   include
//   override_assignment_dates
//   needs_grading_count_by_section
//   all_dates
// }
// return canvasRequest(get_single_assignment, {course_id, id, ...query});
var getSingleAssignment = exports.getSingleAssignment = { type: 'GET_SINGLE_ASSIGNMENT', method: 'get', key: 'get_single_assignmentget_single_assignment_{course_id}_{id}', required: ['course_id', 'id'] };

// Create an assignment
// Create a new assignment for this course. The assignment is created in the
// active state.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments
//
// Example:
// const body = {
//   assignment[name] (required)
//   assignment[position]
//   assignment[submission_types]
//   assignment[allowed_extensions]
//   assignment[turnitin_enabled]
//   assignment[vericite_enabled]
//   assignment[turnitin_settings]
//   assignment[integration_data]
//   assignment[integration_id]
//   assignment[peer_reviews]
//   assignment[automatic_peer_reviews]
//   assignment[notify_of_update]
//   assignment[group_category_id]
//   assignment[grade_group_students_individually]
//   assignment[external_tool_tag_attributes]
//   assignment[points_possible]
//   assignment[grading_type]
//   assignment[due_at]
//   assignment[lock_at]
//   assignment[unlock_at]
//   assignment[description]
//   assignment[assignment_group_id]
//   assignment[assignment_overrides]
//   assignment[only_visible_to_overrides]
//   assignment[published]
//   assignment[grading_standard_id]
//   assignment[omit_from_final_grade]
//   assignment[quiz_lti]
//   assignment[moderated_grading]
//   assignment[grader_count]
//   assignment[final_grader_id]
//   assignment[grader_comments_visible_to_graders]
//   assignment[graders_anonymous_to_graders]
//   assignment[graders_names_visible_to_final_grader]
//   assignment[anonymous_grading]
//   assignment[allowed_attempts]
//   assignment[annotatable_attachment_id]
// }
// return canvasRequest(create_assignment, {course_id}, body);
var createAssignment = exports.createAssignment = { type: 'CREATE_ASSIGNMENT', method: 'post', key: 'create_assignmentcreate_assignment_course_id', required: ['course_id'] };

// Edit an assignment
// Modify an existing assignment.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{id}
//
// Example:
// const body = {
//   assignment[name]
//   assignment[position]
//   assignment[submission_types]
//   assignment[allowed_extensions]
//   assignment[turnitin_enabled]
//   assignment[vericite_enabled]
//   assignment[turnitin_settings]
//   assignment[sis_assignment_id]
//   assignment[integration_data]
//   assignment[integration_id]
//   assignment[peer_reviews]
//   assignment[automatic_peer_reviews]
//   assignment[notify_of_update]
//   assignment[group_category_id]
//   assignment[grade_group_students_individually]
//   assignment[external_tool_tag_attributes]
//   assignment[points_possible]
//   assignment[grading_type]
//   assignment[due_at]
//   assignment[lock_at]
//   assignment[unlock_at]
//   assignment[description]
//   assignment[assignment_group_id]
//   assignment[assignment_overrides]
//   assignment[only_visible_to_overrides]
//   assignment[published]
//   assignment[grading_standard_id]
//   assignment[omit_from_final_grade]
//   assignment[moderated_grading]
//   assignment[grader_count]
//   assignment[final_grader_id]
//   assignment[grader_comments_visible_to_graders]
//   assignment[graders_anonymous_to_graders]
//   assignment[graders_names_visible_to_final_grader]
//   assignment[anonymous_grading]
//   assignment[allowed_attempts]
//   assignment[annotatable_attachment_id]
//   assignment[submission_types]
// }
// return canvasRequest(edit_assignment, {course_id, id}, body);
var editAssignment = exports.editAssignment = { type: 'EDIT_ASSIGNMENT', method: 'put', key: 'edit_assignmentedit_assignment_{course_id}_{id}', required: ['course_id', 'id'] };

// Bulk update assignment dates
// Update due dates and availability dates for multiple assignments in a course.
// 
// Accepts a JSON array of objects containing two keys each: +id+, the assignment id,
// and +all_dates+, an array of +AssignmentDate+ structures containing the base and/or override
// dates for the assignment, as returned from the {api:AssignmentsApiController#index List assignments}
// endpoint with +include[]=all_dates+.
// 
// This endpoint cannot create or destroy assignment overrides; any existing assignment overrides
// that are not referenced in the arguments will be left alone. If an override is given, any dates
// that are not supplied with it will be defaulted. To clear a date, specify null explicitly.
// 
// All referenced assignments will be validated before any are saved. A list of errors will
// be returned if any provided dates are invalid, and no changes will be saved.
// 
// The bulk update is performed in a background job, use the {api:ProgressController#show Progress API}
// to check its status.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/bulk_update
//
// Example:
// return canvasRequest(bulk_update_assignment_dates, {course_id});
var bulkUpdateAssignmentDates = exports.bulkUpdateAssignmentDates = { type: 'BULK_UPDATE_ASSIGNMENT_DATES', method: 'put', key: 'bulk_update_assignment_datesbulk_update_assignment_dates_course_id', required: ['course_id'] };

// List assignment overrides
// Returns the paginated list of overrides for this assignment that target
// sections/groups/students visible to the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides
//
// Example:
// return canvasRequest(list_assignment_overrides, {course_id, assignment_id});
var listAssignmentOverrides = exports.listAssignmentOverrides = { type: 'LIST_ASSIGNMENT_OVERRIDES', method: 'get', key: 'list_assignment_overrideslist_assignment_overrides_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };

// Get a single assignment override
// Returns details of the the override with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides/{id}
//
// Example:
// return canvasRequest(get_single_assignment_override, {course_id, assignment_id, id});
var getSingleAssignmentOverride = exports.getSingleAssignmentOverride = { type: 'GET_SINGLE_ASSIGNMENT_OVERRIDE', method: 'get', key: 'get_single_assignment_overrideget_single_assignment_override_{course_id}_{assignment_id}_{id}', required: ['course_id', 'assignment_id', 'id'] };

// Redirect to the assignment override for a group
// Responds with a redirect to the override for the given group, if any
// (404 otherwise).
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: groups/{group_id}/assignments/{assignment_id}/override
//
// Example:
// return canvasRequest(redirect_to_assignment_override_for_group, {group_id, assignment_id});
var redirectToAssignmentOverrideForGroup = exports.redirectToAssignmentOverrideForGroup = { type: 'REDIRECT_TO_ASSIGNMENT_OVERRIDE_FOR_GROUP', method: 'get', key: 'redirect_to_assignment_override_for_groupredirect_to_assignment_override_for_group_{group_id}_{assignment_id}', required: ['group_id', 'assignment_id'] };

// Redirect to the assignment override for a section
// Responds with a redirect to the override for the given section, if any
// (404 otherwise).
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: sections/{course_section_id}/assignments/{assignment_id}/override
//
// Example:
// return canvasRequest(redirect_to_assignment_override_for_section, {course_section_id, assignment_id});
var redirectToAssignmentOverrideForSection = exports.redirectToAssignmentOverrideForSection = { type: 'REDIRECT_TO_ASSIGNMENT_OVERRIDE_FOR_SECTION', method: 'get', key: 'redirect_to_assignment_override_for_sectionredirect_to_assignment_override_for_section_{course_section_id}_{assignment_id}', required: ['course_section_id', 'assignment_id'] };

// Create an assignment override
// One of student_ids, group_id, or course_section_id must be present. At most
// one should be present; if multiple are present only the most specific
// (student_ids first, then group_id, then course_section_id) is used and any
// others are ignored.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides
//
// Example:
// const body = {
//   assignment_override[student_ids]
//   assignment_override[title]
//   assignment_override[group_id]
//   assignment_override[course_section_id]
//   assignment_override[due_at]
//   assignment_override[unlock_at]
//   assignment_override[lock_at]
// }
// return canvasRequest(create_assignment_override, {course_id, assignment_id}, body);
var createAssignmentOverride = exports.createAssignmentOverride = { type: 'CREATE_ASSIGNMENT_OVERRIDE', method: 'post', key: 'create_assignment_overridecreate_assignment_override_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };

// Update an assignment override
// All current overridden values must be supplied if they are to be retained;
// e.g. if due_at was overridden, but this PUT omits a value for due_at,
// due_at will no longer be overridden. If the override is adhoc and
// student_ids is not supplied, the target override set is unchanged. Target
// override sets cannot be changed for group or section overrides.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides/{id}
//
// Example:
// const body = {
//   assignment_override[student_ids]
//   assignment_override[title]
//   assignment_override[due_at]
//   assignment_override[unlock_at]
//   assignment_override[lock_at]
// }
// return canvasRequest(update_assignment_override, {course_id, assignment_id, id}, body);
var updateAssignmentOverride = exports.updateAssignmentOverride = { type: 'UPDATE_ASSIGNMENT_OVERRIDE', method: 'put', key: 'update_assignment_overrideupdate_assignment_override_{course_id}_{assignment_id}_{id}', required: ['course_id', 'assignment_id', 'id'] };

// Delete an assignment override
// Deletes an override and returns its former details.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides/{id}
//
// Example:
// return canvasRequest(delete_assignment_override, {course_id, assignment_id, id});
var deleteAssignmentOverride = exports.deleteAssignmentOverride = { type: 'DELETE_ASSIGNMENT_OVERRIDE', method: 'delete', key: 'delete_assignment_overridedelete_assignment_override_{course_id}_{assignment_id}_{id}', required: ['course_id', 'assignment_id', 'id'] };

// Batch retrieve overrides in a course
// Returns a list of specified overrides in this course, providing
// they target sections/groups/students visible to the current user.
// Returns null elements in the list for requests that were not found.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/overrides
//
// Example:
// const query = {
//   assignment_overrides[id] (required)
//   assignment_overrides[assignment_id] (required)
// }
// return canvasRequest(batch_retrieve_overrides_in_course, {course_id, ...query});
var batchRetrieveOverridesInCourse = exports.batchRetrieveOverridesInCourse = { type: 'BATCH_RETRIEVE_OVERRIDES_IN_COURSE', method: 'get', key: 'batch_retrieve_overrides_in_coursebatch_retrieve_overrides_in_course_course_id', required: ['course_id'] };

// Batch create overrides in a course
// Creates the specified overrides for each assignment.  Handles creation in a
// transaction, so all records are created or none are.
// 
// One of student_ids, group_id, or course_section_id must be present. At most
// one should be present; if multiple are present only the most specific
// (student_ids first, then group_id, then course_section_id) is used and any
// others are ignored.
// 
// Errors are reported in an errors attribute, an array of errors corresponding
// to inputs.  Global errors will be reported as a single element errors array
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/overrides
//
// Example:
// const body = {
//   assignment_overrides (required)
// }
// return canvasRequest(batch_create_overrides_in_course, {course_id}, body);
var batchCreateOverridesInCourse = exports.batchCreateOverridesInCourse = { type: 'BATCH_CREATE_OVERRIDES_IN_COURSE', method: 'post', key: 'batch_create_overrides_in_coursebatch_create_overrides_in_course_course_id', required: ['course_id'] };

// Batch update overrides in a course
// Updates a list of specified overrides for each assignment.  Handles overrides
// in a transaction, so either all updates are applied or none.
// See {api:AssignmentOverridesController#update Update an assignment override} for
// available attributes.
// 
// All current overridden values must be supplied if they are to be retained;
// e.g. if due_at was overridden, but this PUT omits a value for due_at,
// due_at will no longer be overridden. If the override is adhoc and
// student_ids is not supplied, the target override set is unchanged. Target
// override sets cannot be changed for group or section overrides.
// 
// Errors are reported in an errors attribute, an array of errors corresponding
// to inputs.  Global errors will be reported as a single element errors array
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/overrides
//
// Example:
// const body = {
//   assignment_overrides (required)
// }
// return canvasRequest(batch_update_overrides_in_course, {course_id}, body);
var batchUpdateOverridesInCourse = exports.batchUpdateOverridesInCourse = { type: 'BATCH_UPDATE_OVERRIDES_IN_COURSE', method: 'put', key: 'batch_update_overrides_in_coursebatch_update_overrides_in_course_course_id', required: ['course_id'] };