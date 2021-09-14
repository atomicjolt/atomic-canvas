'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Grade Change Log
//
// Query by assignment
// List grade change events for a given assignment.
//
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/assignments/{assignment_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(query_by_assignment, {assignment_id, ...query});
var queryByAssignment = exports.queryByAssignment = { type: 'QUERY_BY_ASSIGNMENT', method: 'get', key: 'query_by_assignmentquery_by_assignment_assignment_id', required: ['assignment_id'] };

// Query by course
// List grade change events for a given course.
//
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/courses/{course_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(grade_change_log_query_by_course, {course_id, ...query});
var gradeChangeLogQueryByCourse = exports.gradeChangeLogQueryByCourse = { type: 'GRADE_CHANGE_LOG_QUERY_BY_COURSE', method: 'get', key: 'grade_change_log_query_by_coursegrade_change_log_query_by_course_course_id', required: ['course_id'] };

// Query by student
// List grade change events for a given student.
//
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/students/{student_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(query_by_student, {student_id, ...query});
var queryByStudent = exports.queryByStudent = { type: 'QUERY_BY_STUDENT', method: 'get', key: 'query_by_studentquery_by_student_student_id', required: ['student_id'] };

// Query by grader
// List grade change events for a given grader.
//
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/graders/{grader_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(query_by_grader, {grader_id, ...query});
var queryByGrader = exports.queryByGrader = { type: 'QUERY_BY_GRADER', method: 'get', key: 'query_by_graderquery_by_grader_grader_id', required: ['grader_id'] };

// Advanced query
// List grade change events satisfying all given parameters. Teachers may query for events in courses they teach.
// Queries without +course_id+ require account administrator rights.
// 
// At least one of +course_id+, +assignment_id+, +student_id+, or +grader_id+ must be specified.
//
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change
//
// Example:
// const query = {
//   course_id
//   assignment_id
//   student_id
//   grader_id
//   start_time
//   end_time
// }
// return canvasRequest(advanced_query, {, ...query});
var advancedQuery = exports.advancedQuery = { type: 'ADVANCED_QUERY', method: 'get', key: 'advanced_query', required: [] };