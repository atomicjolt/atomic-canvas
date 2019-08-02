'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Assignment Extensions
//
// Set extensions for student assignment submissions
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>403 Forbidden</b> if you are not allowed to extend assignments for this course
// * <b>400 Bad Request</b> if any of the extensions are invalid
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_extensions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/extensions
//
// Example:
// const body = {
//   assignment_extensions[user_id] (required)
//   assignment_extensions[extra_attempts] (required)
// }
// return canvasRequest(set_extensions_for_student_assignment_submissions, {course_id, assignment_id}, body);
var setExtensionsForStudentAssignmentSubmissions = exports.setExtensionsForStudentAssignmentSubmissions = { type: 'SET_EXTENSIONS_FOR_STUDENT_ASSIGNMENT_SUBMISSIONS', method: 'post', key: 'set_extensions_for_student_assignment_submissionsset_extensions_for_student_assignment_submissions_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };