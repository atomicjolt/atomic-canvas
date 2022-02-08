"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFileSections = exports.uploadFileCourses = exports.submitAssignmentSections = exports.submitAssignmentCourses = exports.submissionSummarySections = exports.submissionSummaryCourses = exports.markSubmissionAsUnreadSections = exports.markSubmissionAsUnreadCourses = exports.markSubmissionAsReadSections = exports.markSubmissionAsReadCourses = exports.markRubricCommentsAsReadSections = exports.markRubricCommentsAsReadCourses = exports.markDocumentAnnotationsAsReadSections = exports.markDocumentAnnotationsAsReadCourses = exports.listSubmissionsForMultipleAssignmentsSections = exports.listSubmissionsForMultipleAssignmentsCourses = exports.listMultipleAssignmentsGradeableStudents = exports.listGradeableStudents = exports.listAssignmentSubmissionsSections = exports.listAssignmentSubmissionsCourses = exports.gradeOrCommentOnSubmissionSections = exports.gradeOrCommentOnSubmissionCourses = exports.gradeOrCommentOnSubmissionByAnonymousIdSections = exports.gradeOrCommentOnSubmissionByAnonymousIdCourses = exports.gradeOrCommentOnMultipleSubmissionsSectionsSubmissions = exports.gradeOrCommentOnMultipleSubmissionsSectionsAssignments = exports.gradeOrCommentOnMultipleSubmissionsCoursesSubmissions = exports.gradeOrCommentOnMultipleSubmissionsCoursesAssignments = exports.getSingleSubmissionSections = exports.getSingleSubmissionCourses = exports.getSingleSubmissionByAnonymousIdSections = exports.getSingleSubmissionByAnonymousIdCourses = exports.getRubricCommentsReadStateSections = exports.getRubricCommentsReadStateCourses = exports.getDocumentAnnotationsReadStateSections = exports.getDocumentAnnotationsReadStateCourses = void 0;
//
// Submissions
//
// Submit an assignment
// Make a submission for an assignment. You must be enrolled as a student in
// the course/section to do this.
// 
// All online turn-in submission types are supported in this API. However,
// there are a few things that are not yet supported:
// 
// * Files can be submitted based on a file ID of a user or group file or through the {api:SubmissionsApiController#create_file file upload API}. However, there is no API yet for listing the user and group files.
// * Media comments can be submitted, however, there is no API yet for creating a media comment to submit.
// * Integration with Google Docs is not yet supported.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions
//
// Example:
// const body = {
//   comment[text_comment]
//   submission[submission_type] (required)
//   submission[body]
//   submission[url]
//   submission[file_ids]
//   submission[media_comment_id]
//   submission[media_comment_type]
//   submission[user_id]
//   submission[annotatable_attachment_id]
//   submission[submitted_at]
// }
// return canvasRequest(submit_assignment_courses, {course_id, assignment_id}, body);
var submitAssignmentCourses = {
  type: 'SUBMIT_ASSIGNMENT_COURSES',
  method: 'post',
  key: 'submit_assignment_coursessubmit_assignment_courses_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
}; // Submit an assignment
// Make a submission for an assignment. You must be enrolled as a student in
// the course/section to do this.
// 
// All online turn-in submission types are supported in this API. However,
// there are a few things that are not yet supported:
// 
// * Files can be submitted based on a file ID of a user or group file or through the {api:SubmissionsApiController#create_file file upload API}. However, there is no API yet for listing the user and group files.
// * Media comments can be submitted, however, there is no API yet for creating a media comment to submit.
// * Integration with Google Docs is not yet supported.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions
//
// Example:
// const body = {
//   comment[text_comment]
//   submission[submission_type] (required)
//   submission[body]
//   submission[url]
//   submission[file_ids]
//   submission[media_comment_id]
//   submission[media_comment_type]
//   submission[user_id]
//   submission[annotatable_attachment_id]
//   submission[submitted_at]
// }
// return canvasRequest(submit_assignment_sections, {section_id, assignment_id}, body);

exports.submitAssignmentCourses = submitAssignmentCourses;
var submitAssignmentSections = {
  type: 'SUBMIT_ASSIGNMENT_SECTIONS',
  method: 'post',
  key: 'submit_assignment_sectionssubmit_assignment_sections_{section_id}_{assignment_id}',
  required: ['section_id', 'assignment_id']
}; // List assignment submissions
// A paginated list of all existing submissions for an assignment.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions
//
// Example:
// const query = {
//   include
//   grouped
// }
// return canvasRequest(list_assignment_submissions_courses, {course_id, assignment_id, ...query});

exports.submitAssignmentSections = submitAssignmentSections;
var listAssignmentSubmissionsCourses = {
  type: 'LIST_ASSIGNMENT_SUBMISSIONS_COURSES',
  method: 'get',
  key: 'list_assignment_submissions_courseslist_assignment_submissions_courses_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
}; // List assignment submissions
// A paginated list of all existing submissions for an assignment.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions
//
// Example:
// const query = {
//   include
//   grouped
// }
// return canvasRequest(list_assignment_submissions_sections, {section_id, assignment_id, ...query});

exports.listAssignmentSubmissionsCourses = listAssignmentSubmissionsCourses;
var listAssignmentSubmissionsSections = {
  type: 'LIST_ASSIGNMENT_SUBMISSIONS_SECTIONS',
  method: 'get',
  key: 'list_assignment_submissions_sectionslist_assignment_submissions_sections_{section_id}_{assignment_id}',
  required: ['section_id', 'assignment_id']
}; // List submissions for multiple assignments
// A paginated list of all existing submissions for a given set of students and assignments.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/students/submissions
//
// Example:
// const query = {
//   student_ids
//   assignment_ids
//   grouped
//   post_to_sis
//   submitted_since
//   graded_since
//   grading_period_id
//   workflow_state
//   enrollment_state
//   state_based_on_date
//   order
//   order_direction
//   include
// }
// return canvasRequest(list_submissions_for_multiple_assignments_courses, {course_id, ...query});

exports.listAssignmentSubmissionsSections = listAssignmentSubmissionsSections;
var listSubmissionsForMultipleAssignmentsCourses = {
  type: 'LIST_SUBMISSIONS_FOR_MULTIPLE_ASSIGNMENTS_COURSES',
  method: 'get',
  key: 'list_submissions_for_multiple_assignments_courseslist_submissions_for_multiple_assignments_courses_course_id',
  required: ['course_id']
}; // List submissions for multiple assignments
// A paginated list of all existing submissions for a given set of students and assignments.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/students/submissions
//
// Example:
// const query = {
//   student_ids
//   assignment_ids
//   grouped
//   post_to_sis
//   submitted_since
//   graded_since
//   grading_period_id
//   workflow_state
//   enrollment_state
//   state_based_on_date
//   order
//   order_direction
//   include
// }
// return canvasRequest(list_submissions_for_multiple_assignments_sections, {section_id, ...query});

exports.listSubmissionsForMultipleAssignmentsCourses = listSubmissionsForMultipleAssignmentsCourses;
var listSubmissionsForMultipleAssignmentsSections = {
  type: 'LIST_SUBMISSIONS_FOR_MULTIPLE_ASSIGNMENTS_SECTIONS',
  method: 'get',
  key: 'list_submissions_for_multiple_assignments_sectionslist_submissions_for_multiple_assignments_sections_section_id',
  required: ['section_id']
}; // Get a single submission
// Get a single submission, based on user id.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_single_submission_courses, {course_id, assignment_id, user_id, ...query});

exports.listSubmissionsForMultipleAssignmentsSections = listSubmissionsForMultipleAssignmentsSections;
var getSingleSubmissionCourses = {
  type: 'GET_SINGLE_SUBMISSION_COURSES',
  method: 'get',
  key: 'get_single_submission_coursesget_single_submission_courses_{course_id}_{assignment_id}_{user_id}',
  required: ['course_id', 'assignment_id', 'user_id']
}; // Get a single submission
// Get a single submission, based on user id.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_single_submission_sections, {section_id, assignment_id, user_id, ...query});

exports.getSingleSubmissionCourses = getSingleSubmissionCourses;
var getSingleSubmissionSections = {
  type: 'GET_SINGLE_SUBMISSION_SECTIONS',
  method: 'get',
  key: 'get_single_submission_sectionsget_single_submission_sections_{section_id}_{assignment_id}_{user_id}',
  required: ['section_id', 'assignment_id', 'user_id']
}; // Get a single submission by anonymous id
// Get a single submission, based on the submission's anonymous id.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_single_submission_by_anonymous_id_courses, {course_id, assignment_id, anonymous_id, ...query});

exports.getSingleSubmissionSections = getSingleSubmissionSections;
var getSingleSubmissionByAnonymousIdCourses = {
  type: 'GET_SINGLE_SUBMISSION_BY_ANONYMOUS_ID_COURSES',
  method: 'get',
  key: 'get_single_submission_by_anonymous_id_coursesget_single_submission_by_anonymous_id_courses_{course_id}_{assignment_id}_{anonymous_id}',
  required: ['course_id', 'assignment_id', 'anonymous_id']
}; // Get a single submission by anonymous id
// Get a single submission, based on the submission's anonymous id.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_single_submission_by_anonymous_id_sections, {section_id, assignment_id, anonymous_id, ...query});

exports.getSingleSubmissionByAnonymousIdCourses = getSingleSubmissionByAnonymousIdCourses;
var getSingleSubmissionByAnonymousIdSections = {
  type: 'GET_SINGLE_SUBMISSION_BY_ANONYMOUS_ID_SECTIONS',
  method: 'get',
  key: 'get_single_submission_by_anonymous_id_sectionsget_single_submission_by_anonymous_id_sections_{section_id}_{assignment_id}_{anonymous_id}',
  required: ['section_id', 'assignment_id', 'anonymous_id']
}; // Upload a file
// Upload a file to a submission.
// 
// This API endpoint is the first step in uploading a file to a submission as a student.
// See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
// 
// The final step of the file upload workflow will return the attachment data,
// including the new file id. The caller can then POST to submit the
// +online_upload+ assignment with these file ids.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/files
//
// Example:
// return canvasRequest(upload_file_courses, {course_id, assignment_id, user_id});

exports.getSingleSubmissionByAnonymousIdSections = getSingleSubmissionByAnonymousIdSections;
var uploadFileCourses = {
  type: 'UPLOAD_FILE_COURSES',
  method: 'post',
  key: 'upload_file_coursesupload_file_courses_{course_id}_{assignment_id}_{user_id}',
  required: ['course_id', 'assignment_id', 'user_id']
}; // Upload a file
// Upload a file to a submission.
// 
// This API endpoint is the first step in uploading a file to a submission as a student.
// See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
// 
// The final step of the file upload workflow will return the attachment data,
// including the new file id. The caller can then POST to submit the
// +online_upload+ assignment with these file ids.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/files
//
// Example:
// return canvasRequest(upload_file_sections, {section_id, assignment_id, user_id});

exports.uploadFileCourses = uploadFileCourses;
var uploadFileSections = {
  type: 'UPLOAD_FILE_SECTIONS',
  method: 'post',
  key: 'upload_file_sectionsupload_file_sections_{section_id}_{assignment_id}_{user_id}',
  required: ['section_id', 'assignment_id', 'user_id']
}; // Grade or comment on a submission
// Comment on and/or update the grading for a student's assignment submission.
// If any submission or rubric_assessment arguments are provided, the user
// must have permission to manage grades in the appropriate context (course or
// section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}
//
// Example:
// const body = {
//   comment[text_comment]
//   comment[group_comment]
//   comment[media_comment_id]
//   comment[media_comment_type]
//   comment[file_ids]
//   include[visibility]
//   submission[posted_grade]
//   submission[excuse]
//   submission[late_policy_status]
//   submission[seconds_late_override]
//   rubric_assessment
// }
// return canvasRequest(grade_or_comment_on_submission_courses, {course_id, assignment_id, user_id}, body);

exports.uploadFileSections = uploadFileSections;
var gradeOrCommentOnSubmissionCourses = {
  type: 'GRADE_OR_COMMENT_ON_SUBMISSION_COURSES',
  method: 'put',
  key: 'grade_or_comment_on_submission_coursesgrade_or_comment_on_submission_courses_{course_id}_{assignment_id}_{user_id}',
  required: ['course_id', 'assignment_id', 'user_id']
}; // Grade or comment on a submission
// Comment on and/or update the grading for a student's assignment submission.
// If any submission or rubric_assessment arguments are provided, the user
// must have permission to manage grades in the appropriate context (course or
// section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}
//
// Example:
// const body = {
//   comment[text_comment]
//   comment[group_comment]
//   comment[media_comment_id]
//   comment[media_comment_type]
//   comment[file_ids]
//   include[visibility]
//   submission[posted_grade]
//   submission[excuse]
//   submission[late_policy_status]
//   submission[seconds_late_override]
//   rubric_assessment
// }
// return canvasRequest(grade_or_comment_on_submission_sections, {section_id, assignment_id, user_id}, body);

exports.gradeOrCommentOnSubmissionCourses = gradeOrCommentOnSubmissionCourses;
var gradeOrCommentOnSubmissionSections = {
  type: 'GRADE_OR_COMMENT_ON_SUBMISSION_SECTIONS',
  method: 'put',
  key: 'grade_or_comment_on_submission_sectionsgrade_or_comment_on_submission_sections_{section_id}_{assignment_id}_{user_id}',
  required: ['section_id', 'assignment_id', 'user_id']
}; // Grade or comment on a submission by anonymous id
// Comment on and/or update the grading for a student's assignment submission,
// fetching the submission by anonymous id (instead of user id). If any
// submission or rubric_assessment arguments are provided, the user must
// have permission to manage grades in the appropriate context (course or
// section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}
//
// Example:
// const body = {
//   comment[text_comment]
//   comment[group_comment]
//   comment[media_comment_id]
//   comment[media_comment_type]
//   comment[file_ids]
//   include[visibility]
//   submission[posted_grade]
//   submission[excuse]
//   submission[late_policy_status]
//   submission[seconds_late_override]
//   rubric_assessment
// }
// return canvasRequest(grade_or_comment_on_submission_by_anonymous_id_courses, {course_id, assignment_id, anonymous_id}, body);

exports.gradeOrCommentOnSubmissionSections = gradeOrCommentOnSubmissionSections;
var gradeOrCommentOnSubmissionByAnonymousIdCourses = {
  type: 'GRADE_OR_COMMENT_ON_SUBMISSION_BY_ANONYMOUS_ID_COURSES',
  method: 'put',
  key: 'grade_or_comment_on_submission_by_anonymous_id_coursesgrade_or_comment_on_submission_by_anonymous_id_courses_{course_id}_{assignment_id}_{anonymous_id}',
  required: ['course_id', 'assignment_id', 'anonymous_id']
}; // Grade or comment on a submission by anonymous id
// Comment on and/or update the grading for a student's assignment submission,
// fetching the submission by anonymous id (instead of user id). If any
// submission or rubric_assessment arguments are provided, the user must
// have permission to manage grades in the appropriate context (course or
// section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}
//
// Example:
// const body = {
//   comment[text_comment]
//   comment[group_comment]
//   comment[media_comment_id]
//   comment[media_comment_type]
//   comment[file_ids]
//   include[visibility]
//   submission[posted_grade]
//   submission[excuse]
//   submission[late_policy_status]
//   submission[seconds_late_override]
//   rubric_assessment
// }
// return canvasRequest(grade_or_comment_on_submission_by_anonymous_id_sections, {section_id, assignment_id, anonymous_id}, body);

exports.gradeOrCommentOnSubmissionByAnonymousIdCourses = gradeOrCommentOnSubmissionByAnonymousIdCourses;
var gradeOrCommentOnSubmissionByAnonymousIdSections = {
  type: 'GRADE_OR_COMMENT_ON_SUBMISSION_BY_ANONYMOUS_ID_SECTIONS',
  method: 'put',
  key: 'grade_or_comment_on_submission_by_anonymous_id_sectionsgrade_or_comment_on_submission_by_anonymous_id_sections_{section_id}_{assignment_id}_{anonymous_id}',
  required: ['section_id', 'assignment_id', 'anonymous_id']
}; // List gradeable students
// A paginated list of students eligible to submit the assignment. The caller must have permission to view grades.
// 
// If anonymous grading is enabled for the current assignment and the allow_new_anonymous_id parameter is passed,
// the returned data will not include any values identifying the student, but will instead include an
// assignment-specific anonymous ID for each student.
// 
// Section-limited instructors will only see students in their own sections.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/gradeable_students
//
// Example:
// return canvasRequest(list_gradeable_students, {course_id, assignment_id});

exports.gradeOrCommentOnSubmissionByAnonymousIdSections = gradeOrCommentOnSubmissionByAnonymousIdSections;
var listGradeableStudents = {
  type: 'LIST_GRADEABLE_STUDENTS',
  method: 'get',
  key: 'list_gradeable_studentslist_gradeable_students_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
}; // List multiple assignments gradeable students
// A paginated list of students eligible to submit a list of assignments. The caller must have
// permission to view grades for the requested course.
// 
// Section-limited instructors will only see students in their own sections.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/gradeable_students
//
// Example:
// const query = {
//   assignment_ids
// }
// return canvasRequest(list_multiple_assignments_gradeable_students, {course_id, ...query});

exports.listGradeableStudents = listGradeableStudents;
var listMultipleAssignmentsGradeableStudents = {
  type: 'LIST_MULTIPLE_ASSIGNMENTS_GRADEABLE_STUDENTS',
  method: 'get',
  key: 'list_multiple_assignments_gradeable_studentslist_multiple_assignments_gradeable_students_course_id',
  required: ['course_id']
}; // Grade or comment on multiple submissions
// Update the grading and comments on multiple student's assignment
// submissions in an asynchronous job.
// 
// The user must have permission to manage grades in the appropriate context
// (course or section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/submissions/update_grades
//
// Example:
// const body = {
//   grade_data[<student_id>][posted_grade]
//   grade_data[<student_id>][excuse]
//   grade_data[<student_id>][rubric_assessment]
//   grade_data[<student_id>][text_comment]
//   grade_data[<student_id>][group_comment]
//   grade_data[<student_id>][media_comment_id]
//   grade_data[<student_id>][media_comment_type]
//   grade_data[<student_id>][file_ids]
//   grade_data[<assignment_id>][<student_id>]
// }
// return canvasRequest(grade_or_comment_on_multiple_submissions_courses_submissions, {course_id}, body);

exports.listMultipleAssignmentsGradeableStudents = listMultipleAssignmentsGradeableStudents;
var gradeOrCommentOnMultipleSubmissionsCoursesSubmissions = {
  type: 'GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_COURSES_SUBMISSIONS',
  method: 'post',
  key: 'grade_or_comment_on_multiple_submissions_courses_submissionsgrade_or_comment_on_multiple_submissions_courses_submissions_course_id',
  required: ['course_id']
}; // Grade or comment on multiple submissions
// Update the grading and comments on multiple student's assignment
// submissions in an asynchronous job.
// 
// The user must have permission to manage grades in the appropriate context
// (course or section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/update_grades
//
// Example:
// const body = {
//   grade_data[<student_id>][posted_grade]
//   grade_data[<student_id>][excuse]
//   grade_data[<student_id>][rubric_assessment]
//   grade_data[<student_id>][text_comment]
//   grade_data[<student_id>][group_comment]
//   grade_data[<student_id>][media_comment_id]
//   grade_data[<student_id>][media_comment_type]
//   grade_data[<student_id>][file_ids]
//   grade_data[<assignment_id>][<student_id>]
// }
// return canvasRequest(grade_or_comment_on_multiple_submissions_courses_assignments, {course_id, assignment_id}, body);

exports.gradeOrCommentOnMultipleSubmissionsCoursesSubmissions = gradeOrCommentOnMultipleSubmissionsCoursesSubmissions;
var gradeOrCommentOnMultipleSubmissionsCoursesAssignments = {
  type: 'GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_COURSES_ASSIGNMENTS',
  method: 'post',
  key: 'grade_or_comment_on_multiple_submissions_courses_assignmentsgrade_or_comment_on_multiple_submissions_courses_assignments_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
}; // Grade or comment on multiple submissions
// Update the grading and comments on multiple student's assignment
// submissions in an asynchronous job.
// 
// The user must have permission to manage grades in the appropriate context
// (course or section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/submissions/update_grades
//
// Example:
// const body = {
//   grade_data[<student_id>][posted_grade]
//   grade_data[<student_id>][excuse]
//   grade_data[<student_id>][rubric_assessment]
//   grade_data[<student_id>][text_comment]
//   grade_data[<student_id>][group_comment]
//   grade_data[<student_id>][media_comment_id]
//   grade_data[<student_id>][media_comment_type]
//   grade_data[<student_id>][file_ids]
//   grade_data[<assignment_id>][<student_id>]
// }
// return canvasRequest(grade_or_comment_on_multiple_submissions_sections_submissions, {section_id}, body);

exports.gradeOrCommentOnMultipleSubmissionsCoursesAssignments = gradeOrCommentOnMultipleSubmissionsCoursesAssignments;
var gradeOrCommentOnMultipleSubmissionsSectionsSubmissions = {
  type: 'GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_SECTIONS_SUBMISSIONS',
  method: 'post',
  key: 'grade_or_comment_on_multiple_submissions_sections_submissionsgrade_or_comment_on_multiple_submissions_sections_submissions_section_id',
  required: ['section_id']
}; // Grade or comment on multiple submissions
// Update the grading and comments on multiple student's assignment
// submissions in an asynchronous job.
// 
// The user must have permission to manage grades in the appropriate context
// (course or section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/update_grades
//
// Example:
// const body = {
//   grade_data[<student_id>][posted_grade]
//   grade_data[<student_id>][excuse]
//   grade_data[<student_id>][rubric_assessment]
//   grade_data[<student_id>][text_comment]
//   grade_data[<student_id>][group_comment]
//   grade_data[<student_id>][media_comment_id]
//   grade_data[<student_id>][media_comment_type]
//   grade_data[<student_id>][file_ids]
//   grade_data[<assignment_id>][<student_id>]
// }
// return canvasRequest(grade_or_comment_on_multiple_submissions_sections_assignments, {section_id, assignment_id}, body);

exports.gradeOrCommentOnMultipleSubmissionsSectionsSubmissions = gradeOrCommentOnMultipleSubmissionsSectionsSubmissions;
var gradeOrCommentOnMultipleSubmissionsSectionsAssignments = {
  type: 'GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_SECTIONS_ASSIGNMENTS',
  method: 'post',
  key: 'grade_or_comment_on_multiple_submissions_sections_assignmentsgrade_or_comment_on_multiple_submissions_sections_assignments_{section_id}_{assignment_id}',
  required: ['section_id', 'assignment_id']
}; // Mark submission as read
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_read_courses, {course_id, assignment_id, user_id});

exports.gradeOrCommentOnMultipleSubmissionsSectionsAssignments = gradeOrCommentOnMultipleSubmissionsSectionsAssignments;
var markSubmissionAsReadCourses = {
  type: 'MARK_SUBMISSION_AS_READ_COURSES',
  method: 'put',
  key: 'mark_submission_as_read_coursesmark_submission_as_read_courses_{course_id}_{assignment_id}_{user_id}',
  required: ['course_id', 'assignment_id', 'user_id']
}; // Mark submission as read
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_read_sections, {section_id, assignment_id, user_id});

exports.markSubmissionAsReadCourses = markSubmissionAsReadCourses;
var markSubmissionAsReadSections = {
  type: 'MARK_SUBMISSION_AS_READ_SECTIONS',
  method: 'put',
  key: 'mark_submission_as_read_sectionsmark_submission_as_read_sections_{section_id}_{assignment_id}_{user_id}',
  required: ['section_id', 'assignment_id', 'user_id']
}; // Mark submission as unread
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_unread_courses, {course_id, assignment_id, user_id});

exports.markSubmissionAsReadSections = markSubmissionAsReadSections;
var markSubmissionAsUnreadCourses = {
  type: 'MARK_SUBMISSION_AS_UNREAD_COURSES',
  method: 'delete',
  key: 'mark_submission_as_unread_coursesmark_submission_as_unread_courses_{course_id}_{assignment_id}_{user_id}',
  required: ['course_id', 'assignment_id', 'user_id']
}; // Mark submission as unread
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_unread_sections, {section_id, assignment_id, user_id});

exports.markSubmissionAsUnreadCourses = markSubmissionAsUnreadCourses;
var markSubmissionAsUnreadSections = {
  type: 'MARK_SUBMISSION_AS_UNREAD_SECTIONS',
  method: 'delete',
  key: 'mark_submission_as_unread_sectionsmark_submission_as_unread_sections_{section_id}_{assignment_id}_{user_id}',
  required: ['section_id', 'assignment_id', 'user_id']
}; // Get rubric comments read state
// Return whether new rubric comments made on a submission have been seen by the student being assessed.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read
//
// Example:
// return canvasRequest(get_rubric_comments_read_state_courses, {course_id, assignment_id, user_id});

exports.markSubmissionAsUnreadSections = markSubmissionAsUnreadSections;
var getRubricCommentsReadStateCourses = {
  type: 'GET_RUBRIC_COMMENTS_READ_STATE_COURSES',
  method: 'get',
  key: 'get_rubric_comments_read_state_coursesget_rubric_comments_read_state_courses_{course_id}_{assignment_id}_{user_id}',
  required: ['course_id', 'assignment_id', 'user_id']
}; // Get rubric comments read state
// Return whether new rubric comments made on a submission have been seen by the student being assessed.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read
//
// Example:
// return canvasRequest(get_rubric_comments_read_state_sections, {section_id, assignment_id, user_id});

exports.getRubricCommentsReadStateCourses = getRubricCommentsReadStateCourses;
var getRubricCommentsReadStateSections = {
  type: 'GET_RUBRIC_COMMENTS_READ_STATE_SECTIONS',
  method: 'get',
  key: 'get_rubric_comments_read_state_sectionsget_rubric_comments_read_state_sections_{section_id}_{assignment_id}_{user_id}',
  required: ['section_id', 'assignment_id', 'user_id']
}; // Mark rubric comments as read
// Indicate that rubric comments made on a submission have been read by the student being assessed.
// Only the student who owns the submission can use this endpoint.
// 
// NOTE: Rubric comments will be marked as read automatically when they are viewed in Canvas web.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read
//
// Example:
// return canvasRequest(mark_rubric_comments_as_read_courses, {course_id, assignment_id, user_id});

exports.getRubricCommentsReadStateSections = getRubricCommentsReadStateSections;
var markRubricCommentsAsReadCourses = {
  type: 'MARK_RUBRIC_COMMENTS_AS_READ_COURSES',
  method: 'put',
  key: 'mark_rubric_comments_as_read_coursesmark_rubric_comments_as_read_courses_{course_id}_{assignment_id}_{user_id}',
  required: ['course_id', 'assignment_id', 'user_id']
}; // Mark rubric comments as read
// Indicate that rubric comments made on a submission have been read by the student being assessed.
// Only the student who owns the submission can use this endpoint.
// 
// NOTE: Rubric comments will be marked as read automatically when they are viewed in Canvas web.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read
//
// Example:
// return canvasRequest(mark_rubric_comments_as_read_sections, {section_id, assignment_id, user_id});

exports.markRubricCommentsAsReadCourses = markRubricCommentsAsReadCourses;
var markRubricCommentsAsReadSections = {
  type: 'MARK_RUBRIC_COMMENTS_AS_READ_SECTIONS',
  method: 'put',
  key: 'mark_rubric_comments_as_read_sectionsmark_rubric_comments_as_read_sections_{section_id}_{assignment_id}_{user_id}',
  required: ['section_id', 'assignment_id', 'user_id']
}; // Get document annotations read state
// Return whether annotations made on a submitted document have been read by the student
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read
//
// Example:
// return canvasRequest(get_document_annotations_read_state_courses, {course_id, assignment_id, user_id});

exports.markRubricCommentsAsReadSections = markRubricCommentsAsReadSections;
var getDocumentAnnotationsReadStateCourses = {
  type: 'GET_DOCUMENT_ANNOTATIONS_READ_STATE_COURSES',
  method: 'get',
  key: 'get_document_annotations_read_state_coursesget_document_annotations_read_state_courses_{course_id}_{assignment_id}_{user_id}',
  required: ['course_id', 'assignment_id', 'user_id']
}; // Get document annotations read state
// Return whether annotations made on a submitted document have been read by the student
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read
//
// Example:
// return canvasRequest(get_document_annotations_read_state_sections, {section_id, assignment_id, user_id});

exports.getDocumentAnnotationsReadStateCourses = getDocumentAnnotationsReadStateCourses;
var getDocumentAnnotationsReadStateSections = {
  type: 'GET_DOCUMENT_ANNOTATIONS_READ_STATE_SECTIONS',
  method: 'get',
  key: 'get_document_annotations_read_state_sectionsget_document_annotations_read_state_sections_{section_id}_{assignment_id}_{user_id}',
  required: ['section_id', 'assignment_id', 'user_id']
}; // Mark document annotations as read
// Indicate that annotations made on a submitted document have been read by the student.
// Only the student who owns the submission can use this endpoint.
// 
// NOTE: Document annotations will be marked as read automatically when they are viewed in Canvas web.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read
//
// Example:
// return canvasRequest(mark_document_annotations_as_read_courses, {course_id, assignment_id, user_id});

exports.getDocumentAnnotationsReadStateSections = getDocumentAnnotationsReadStateSections;
var markDocumentAnnotationsAsReadCourses = {
  type: 'MARK_DOCUMENT_ANNOTATIONS_AS_READ_COURSES',
  method: 'put',
  key: 'mark_document_annotations_as_read_coursesmark_document_annotations_as_read_courses_{course_id}_{assignment_id}_{user_id}',
  required: ['course_id', 'assignment_id', 'user_id']
}; // Mark document annotations as read
// Indicate that annotations made on a submitted document have been read by the student.
// Only the student who owns the submission can use this endpoint.
// 
// NOTE: Document annotations will be marked as read automatically when they are viewed in Canvas web.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read
//
// Example:
// return canvasRequest(mark_document_annotations_as_read_sections, {section_id, assignment_id, user_id});

exports.markDocumentAnnotationsAsReadCourses = markDocumentAnnotationsAsReadCourses;
var markDocumentAnnotationsAsReadSections = {
  type: 'MARK_DOCUMENT_ANNOTATIONS_AS_READ_SECTIONS',
  method: 'put',
  key: 'mark_document_annotations_as_read_sectionsmark_document_annotations_as_read_sections_{section_id}_{assignment_id}_{user_id}',
  required: ['section_id', 'assignment_id', 'user_id']
}; // Submission Summary
// Returns the number of submissions for the given assignment based on gradeable students
// that fall into three categories: graded, ungraded, not submitted.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submission_summary
//
// Example:
// const query = {
//   grouped
// }
// return canvasRequest(submission_summary_courses, {course_id, assignment_id, ...query});

exports.markDocumentAnnotationsAsReadSections = markDocumentAnnotationsAsReadSections;
var submissionSummaryCourses = {
  type: 'SUBMISSION_SUMMARY_COURSES',
  method: 'get',
  key: 'submission_summary_coursessubmission_summary_courses_{course_id}_{assignment_id}',
  required: ['course_id', 'assignment_id']
}; // Submission Summary
// Returns the number of submissions for the given assignment based on gradeable students
// that fall into three categories: graded, ungraded, not submitted.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submission_summary
//
// Example:
// const query = {
//   grouped
// }
// return canvasRequest(submission_summary_sections, {section_id, assignment_id, ...query});

exports.submissionSummaryCourses = submissionSummaryCourses;
var submissionSummarySections = {
  type: 'SUBMISSION_SUMMARY_SECTIONS',
  method: 'get',
  key: 'submission_summary_sectionssubmission_summary_sections_{section_id}_{assignment_id}',
  required: ['section_id', 'assignment_id']
};
exports.submissionSummarySections = submissionSummarySections;