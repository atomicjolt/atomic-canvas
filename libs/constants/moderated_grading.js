"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showProvisionalGradeStatusForStudent = exports.selectStudentsForModeration = exports.selectProvisionalGrade = exports.publishProvisionalGradesForAssignment = exports.moderatedGradingShowProvisionalGradeStatusForStudent = exports.listStudentsSelectedForModeration = exports.bulkSelectProvisionalGrades = void 0;
//
// Moderated Grading
//
// List students selected for moderation
// Returns a paginated list of students selected for moderation
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/moderated_students
//
// Example:
// return canvasRequest(list_students_selected_for_moderation, {course_id, assignment_id});
var listStudentsSelectedForModeration = {
  type: 'LIST_STUDENTS_SELECTED_FOR_MODERATION',
  method: 'get',
  key: 'list_students_selected_for_moderationlist_students_selected_for_moderation_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
}; // Select students for moderation
// Returns an array of users that were selected for moderation
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/moderated_students
//
// Example:
// const body = {
//   student_ids
// }
// return canvasRequest(select_students_for_moderation, {course_id, assignment_id}, body);

exports.listStudentsSelectedForModeration = listStudentsSelectedForModeration;
var selectStudentsForModeration = {
  type: 'SELECT_STUDENTS_FOR_MODERATION',
  method: 'post',
  key: 'select_students_for_moderationselect_students_for_moderation_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
}; // Bulk select provisional grades
// Choose which provisional grades will be received by associated students for an assignment.
// The caller must be the final grader for the assignment or an admin with :select_final_grade rights.
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/bulk_select
//
// Example:
// return canvasRequest(bulk_select_provisional_grades, {course_id, assignment_id});

exports.selectStudentsForModeration = selectStudentsForModeration;
var bulkSelectProvisionalGrades = {
  type: 'BULK_SELECT_PROVISIONAL_GRADES',
  method: 'put',
  key: 'bulk_select_provisional_gradesbulk_select_provisional_grades_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
}; // Show provisional grade status for a student
// Tell whether the student's submission needs one or more provisional grades.
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/status
//
// Example:
// const query = {
//   student_id
// }
// return canvasRequest(show_provisional_grade_status_for_student, {course_id, assignment_id, ...query});

exports.bulkSelectProvisionalGrades = bulkSelectProvisionalGrades;
var showProvisionalGradeStatusForStudent = {
  type: 'SHOW_PROVISIONAL_GRADE_STATUS_FOR_STUDENT',
  method: 'get',
  key: 'show_provisional_grade_status_for_studentshow_provisional_grade_status_for_student_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
}; // Select provisional grade
// Choose which provisional grade the student should receive for a submission.
// The caller must be the final grader for the assignment or an admin with :select_final_grade rights.
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/{provisional_grade_id}/select
//
// Example:
// return canvasRequest(select_provisional_grade, {course_id, assignment_id, provisional_grade_id});

exports.showProvisionalGradeStatusForStudent = showProvisionalGradeStatusForStudent;
var selectProvisionalGrade = {
  type: 'SELECT_PROVISIONAL_GRADE',
  method: 'put',
  key: 'select_provisional_gradeselect_provisional_grade_{course_id}_{assignment_id}_{provisional_grade_id}',
  required: ['course_id', 'assignment_id', 'provisional_grade_id']
}; // Publish provisional grades for an assignment
// Publish the selected provisional grade for all submissions to an assignment.
// Use the "Select provisional grade" endpoint to choose which provisional grade to publish
// for a particular submission.
// 
// Students not in the moderation set will have their one and only provisional grade published.
// 
// WARNING: This is irreversible. This will overwrite existing grades in the gradebook.
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/publish
//
// Example:
// return canvasRequest(publish_provisional_grades_for_assignment, {course_id, assignment_id});

exports.selectProvisionalGrade = selectProvisionalGrade;
var publishProvisionalGradesForAssignment = {
  type: 'PUBLISH_PROVISIONAL_GRADES_FOR_ASSIGNMENT',
  method: 'post',
  key: 'publish_provisional_grades_for_assignmentpublish_provisional_grades_for_assignment_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
}; // Show provisional grade status for a student
// Determine whether or not the student's submission needs one or more provisional grades.
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/anonymous_provisional_grades/status
//
// Example:
// const query = {
//   anonymous_id
// }
// return canvasRequest(moderated_grading_show_provisional_grade_status_for_student, {course_id, assignment_id, ...query});

exports.publishProvisionalGradesForAssignment = publishProvisionalGradesForAssignment;
var moderatedGradingShowProvisionalGradeStatusForStudent = {
  type: 'MODERATED_GRADING_SHOW_PROVISIONAL_GRADE_STATUS_FOR_STUDENT',
  method: 'get',
  key: 'moderated_grading_show_provisional_grade_status_for_studentmoderated_grading_show_provisional_grade_status_for_student_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
};
exports.moderatedGradingShowProvisionalGradeStatusForStudent = moderatedGradingShowProvisionalGradeStatusForStudent;