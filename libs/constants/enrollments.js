'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Enrollments
//
// List enrollments
// Depending on the URL given, return a paginated list of either (1) all of
// the enrollments in a course, (2) all of the enrollments in a section or (3)
// all of a user's enrollments. This includes student, teacher, TA, and
// observer enrollments.
// 
// If a user has multiple enrollments in a context (e.g. as a teacher
// and a student or in multiple course sections), each enrollment will be
// listed separately.
// 
// note: Currently, only a root level admin user can return other users' enrollments. A
// user can, however, return his/her own enrollments.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments
//
// Example:
// const query = {
//   type
//   role
//   state
//   include
//   user_id
//   grading_period_id
//   enrollment_term_id
//   sis_account_id
//   sis_course_id
//   sis_section_id
//   sis_user_id
// }
// return canvasRequest(list_enrollments_courses, {course_id, ...query});
var listEnrollmentsCourses = exports.listEnrollmentsCourses = { type: 'LIST_ENROLLMENTS_COURSES', method: 'get', key: 'list_enrollments_courseslist_enrollments_courses_course_id', required: ['course_id'] };

// List enrollments
// Depending on the URL given, return a paginated list of either (1) all of
// the enrollments in a course, (2) all of the enrollments in a section or (3)
// all of a user's enrollments. This includes student, teacher, TA, and
// observer enrollments.
// 
// If a user has multiple enrollments in a context (e.g. as a teacher
// and a student or in multiple course sections), each enrollment will be
// listed separately.
// 
// note: Currently, only a root level admin user can return other users' enrollments. A
// user can, however, return his/her own enrollments.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: sections/{section_id}/enrollments
//
// Example:
// const query = {
//   type
//   role
//   state
//   include
//   user_id
//   grading_period_id
//   enrollment_term_id
//   sis_account_id
//   sis_course_id
//   sis_section_id
//   sis_user_id
// }
// return canvasRequest(list_enrollments_sections, {section_id, ...query});
var listEnrollmentsSections = exports.listEnrollmentsSections = { type: 'LIST_ENROLLMENTS_SECTIONS', method: 'get', key: 'list_enrollments_sectionslist_enrollments_sections_section_id', required: ['section_id'] };

// List enrollments
// Depending on the URL given, return a paginated list of either (1) all of
// the enrollments in a course, (2) all of the enrollments in a section or (3)
// all of a user's enrollments. This includes student, teacher, TA, and
// observer enrollments.
// 
// If a user has multiple enrollments in a context (e.g. as a teacher
// and a student or in multiple course sections), each enrollment will be
// listed separately.
// 
// note: Currently, only a root level admin user can return other users' enrollments. A
// user can, however, return his/her own enrollments.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: users/{user_id}/enrollments
//
// Example:
// const query = {
//   type
//   role
//   state
//   include
//   grading_period_id
//   enrollment_term_id
//   sis_account_id
//   sis_course_id
//   sis_section_id
//   sis_user_id
// }
// return canvasRequest(list_enrollments_users, {user_id, ...query});
var listEnrollmentsUsers = exports.listEnrollmentsUsers = { type: 'LIST_ENROLLMENTS_USERS', method: 'get', key: 'list_enrollments_userslist_enrollments_users_user_id', required: ['user_id'] };

// Enrollment by ID
// Get an Enrollment object by Enrollment ID
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: accounts/{account_id}/enrollments/{id}
//
// Example:
// return canvasRequest(enrollment_by_id, {account_id, id});
var enrollmentById = exports.enrollmentById = { type: 'ENROLLMENT_BY_ID', method: 'get', key: 'enrollment_by_idenrollment_by_id_{account_id}_{id}', required: ['account_id', 'id'] };

// Enroll a user
// Create a new user enrollment for a course or section.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments
//
// Example:
// const body = {
//   enrollment[user_id] (required)
//   enrollment[type] (required)
//   enrollment[role]
//   enrollment[role_id]
//   enrollment[enrollment_state]
//   enrollment[course_section_id]
//   enrollment[limit_privileges_to_course_section]
//   enrollment[notify]
//   enrollment[self_enrollment_code]
//   enrollment[self_enrolled]
//   enrollment[associated_user_id]
// }
// return canvasRequest(enroll_user_courses, {course_id}, body);
var enrollUserCourses = exports.enrollUserCourses = { type: 'ENROLL_USER_COURSES', method: 'post', key: 'enroll_user_coursesenroll_user_courses_course_id', required: ['course_id'] };

// Enroll a user
// Create a new user enrollment for a course or section.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: sections/{section_id}/enrollments
//
// Example:
// const body = {
//   enrollment[user_id] (required)
//   enrollment[type] (required)
//   enrollment[role]
//   enrollment[role_id]
//   enrollment[enrollment_state]
//   enrollment[course_section_id]
//   enrollment[limit_privileges_to_course_section]
//   enrollment[notify]
//   enrollment[self_enrollment_code]
//   enrollment[self_enrolled]
//   enrollment[associated_user_id]
// }
// return canvasRequest(enroll_user_sections, {section_id}, body);
var enrollUserSections = exports.enrollUserSections = { type: 'ENROLL_USER_SECTIONS', method: 'post', key: 'enroll_user_sectionsenroll_user_sections_section_id', required: ['section_id'] };

// Conclude, deactivate, or delete an enrollment
// Conclude, deactivate, or delete an enrollment. If the +task+ argument isn't given, the enrollment
// will be concluded.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments/{id}
//
// Example:
// const body = {
//   task
// }
// return canvasRequest(conclude_deactivate_or_delete_enrollment, {course_id, id}, body);
var concludeDeactivateOrDeleteEnrollment = exports.concludeDeactivateOrDeleteEnrollment = { type: 'CONCLUDE_DEACTIVATE_OR_DELETE_ENROLLMENT', method: 'delete', key: 'conclude_deactivate_or_delete_enrollmentconclude_deactivate_or_delete_enrollment_{course_id}_{id}', required: ['course_id', 'id'] };

// Accept Course Invitation
// accepts a pending course invitation for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments/{id}/accept
//
// Example:
// return canvasRequest(accept_course_invitation, {course_id, id});
var acceptCourseInvitation = exports.acceptCourseInvitation = { type: 'ACCEPT_COURSE_INVITATION', method: 'post', key: 'accept_course_invitationaccept_course_invitation_{course_id}_{id}', required: ['course_id', 'id'] };

// Reject Course Invitation
// rejects a pending course invitation for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments/{id}/reject
//
// Example:
// return canvasRequest(reject_course_invitation, {course_id, id});
var rejectCourseInvitation = exports.rejectCourseInvitation = { type: 'REJECT_COURSE_INVITATION', method: 'post', key: 'reject_course_invitationreject_course_invitation_{course_id}_{id}', required: ['course_id', 'id'] };

// Re-activate an enrollment
// Activates an inactive enrollment
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments/{id}/reactivate
//
// Example:
// return canvasRequest(re_activate_enrollment, {course_id, id});
var reActivateEnrollment = exports.reActivateEnrollment = { type: 'RE_ACTIVATE_ENROLLMENT', method: 'put', key: 're_activate_enrollmentre_activate_enrollment_{course_id}_{id}', required: ['course_id', 'id'] };

// Adds last attended date to student enrollment in course
// 
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/users/{user_id}/last_attended
//
// Example:
// return canvasRequest(adds_last_attended_date_to_student_enrollment_in_course, {course_id, user_id});
var addsLastAttendedDateToStudentEnrollmentInCourse = exports.addsLastAttendedDateToStudentEnrollmentInCourse = { type: 'ADDS_LAST_ATTENDED_DATE_TO_STUDENT_ENROLLMENT_IN_COURSE', method: 'put', key: 'adds_last_attended_date_to_student_enrollment_in_courseadds_last_attended_date_to_student_enrollment_in_course_{course_id}_{user_id}', required: ['course_id', 'user_id'] };