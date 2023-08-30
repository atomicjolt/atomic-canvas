"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.courseAuditLogQueryByCourse = exports.courseAuditLogQueryByAccount = void 0;
//
// Course Audit log
//
// Query by course.
// List course change events for a given course.
//
// API Docs: https://canvas.instructure.com/doc/api/course_audit_log.html
// API Url: audit/course/courses/{course_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(course_audit_log_query_by_course, {course_id, ...query});
var courseAuditLogQueryByCourse = {
  type: 'COURSE_AUDIT_LOG_QUERY_BY_COURSE',
  method: 'get',
  key: 'course_audit_log_query_by_coursecourse_audit_log_query_by_course_course_id',
  required: ['course_id']
};

// Query by account.
// List course change events for a given account.
//
// API Docs: https://canvas.instructure.com/doc/api/course_audit_log.html
// API Url: audit/course/accounts/{account_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(course_audit_log_query_by_account, {account_id, ...query});
exports.courseAuditLogQueryByCourse = courseAuditLogQueryByCourse;
var courseAuditLogQueryByAccount = {
  type: 'COURSE_AUDIT_LOG_QUERY_BY_ACCOUNT',
  method: 'get',
  key: 'course_audit_log_query_by_accountcourse_audit_log_query_by_account_account_id',
  required: ['account_id']
};
exports.courseAuditLogQueryByAccount = courseAuditLogQueryByAccount;