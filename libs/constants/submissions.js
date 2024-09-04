"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionSummarySections = exports.submissionSummaryCourses = exports.markDocumentAnnotationsAsReadSections = exports.markDocumentAnnotationsAsReadCourses = exports.getDocumentAnnotationsReadStateSections = exports.getDocumentAnnotationsReadStateCourses = exports.markRubricAssessmentsAsReadSectionsRubricAssessments = exports.markRubricAssessmentsAsReadSectionsRubricComments = exports.markRubricAssessmentsAsReadCoursesRubricAssessments = exports.markRubricAssessmentsAsReadCoursesRubricComments = exports.getRubricAssessmentsReadStateSectionsRubricAssessments = exports.getRubricAssessmentsReadStateSectionsRubricComments = exports.getRubricAssessmentsReadStateCoursesRubricAssessments = exports.getRubricAssessmentsReadStateCoursesRubricComments = exports.clearUnreadStatusForAllSubmissionsSections = exports.clearUnreadStatusForAllSubmissionsCourses = exports.markSubmissionItemAsReadSections = exports.markSubmissionItemAsReadCourses = exports.markBulkSubmissionsAsReadSections = exports.markBulkSubmissionsAsReadCourses = exports.markSubmissionAsUnreadSections = exports.markSubmissionAsUnreadCourses = exports.markSubmissionAsReadSections = exports.markSubmissionAsReadCourses = exports.gradeOrCommentOnMultipleSubmissionsSectionsAssignments = exports.gradeOrCommentOnMultipleSubmissionsSectionsSubmissions = exports.gradeOrCommentOnMultipleSubmissionsCoursesAssignments = exports.gradeOrCommentOnMultipleSubmissionsCoursesSubmissions = exports.listMultipleAssignmentsGradeableStudents = exports.listGradeableStudents = exports.gradeOrCommentOnSubmissionByAnonymousIdSections = exports.gradeOrCommentOnSubmissionByAnonymousIdCourses = exports.gradeOrCommentOnSubmissionSections = exports.gradeOrCommentOnSubmissionCourses = exports.uploadFileSections = exports.uploadFileCourses = exports.getSingleSubmissionByAnonymousIdSections = exports.getSingleSubmissionByAnonymousIdCourses = exports.getSingleSubmissionSections = exports.getSingleSubmissionCourses = exports.listSubmissionsForMultipleAssignmentsSections = exports.listSubmissionsForMultipleAssignmentsCourses = exports.listAssignmentSubmissionsSections = exports.listAssignmentSubmissionsCourses = exports.submitAssignmentSections = exports.submitAssignmentCourses = void 0;
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
exports.submitAssignmentCourses = { type: 'SUBMIT_ASSIGNMENT_COURSES', method: 'post', key: 'submit_assignment_coursessubmit_assignment_courses_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };
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
exports.submitAssignmentSections = { type: 'SUBMIT_ASSIGNMENT_SECTIONS', method: 'post', key: 'submit_assignment_sectionssubmit_assignment_sections_{section_id}_{assignment_id}', required: ['section_id', 'assignment_id'] };
// List assignment submissions
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
exports.listAssignmentSubmissionsCourses = { type: 'LIST_ASSIGNMENT_SUBMISSIONS_COURSES', method: 'get', key: 'list_assignment_submissions_courseslist_assignment_submissions_courses_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };
// List assignment submissions
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
exports.listAssignmentSubmissionsSections = { type: 'LIST_ASSIGNMENT_SUBMISSIONS_SECTIONS', method: 'get', key: 'list_assignment_submissions_sectionslist_assignment_submissions_sections_{section_id}_{assignment_id}', required: ['section_id', 'assignment_id'] };
// List submissions for multiple assignments
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
exports.listSubmissionsForMultipleAssignmentsCourses = { type: 'LIST_SUBMISSIONS_FOR_MULTIPLE_ASSIGNMENTS_COURSES', method: 'get', key: 'list_submissions_for_multiple_assignments_courseslist_submissions_for_multiple_assignments_courses_course_id', required: ['course_id'] };
// List submissions for multiple assignments
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
exports.listSubmissionsForMultipleAssignmentsSections = { type: 'LIST_SUBMISSIONS_FOR_MULTIPLE_ASSIGNMENTS_SECTIONS', method: 'get', key: 'list_submissions_for_multiple_assignments_sectionslist_submissions_for_multiple_assignments_sections_section_id', required: ['section_id'] };
// Get a single submission
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
exports.getSingleSubmissionCourses = { type: 'GET_SINGLE_SUBMISSION_COURSES', method: 'get', key: 'get_single_submission_coursesget_single_submission_courses_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Get a single submission
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
exports.getSingleSubmissionSections = { type: 'GET_SINGLE_SUBMISSION_SECTIONS', method: 'get', key: 'get_single_submission_sectionsget_single_submission_sections_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Get a single submission by anonymous id
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
exports.getSingleSubmissionByAnonymousIdCourses = { type: 'GET_SINGLE_SUBMISSION_BY_ANONYMOUS_ID_COURSES', method: 'get', key: 'get_single_submission_by_anonymous_id_coursesget_single_submission_by_anonymous_id_courses_{course_id}_{assignment_id}_{anonymous_id}', required: ['course_id', 'assignment_id', 'anonymous_id'] };
// Get a single submission by anonymous id
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
exports.getSingleSubmissionByAnonymousIdSections = { type: 'GET_SINGLE_SUBMISSION_BY_ANONYMOUS_ID_SECTIONS', method: 'get', key: 'get_single_submission_by_anonymous_id_sectionsget_single_submission_by_anonymous_id_sections_{section_id}_{assignment_id}_{anonymous_id}', required: ['section_id', 'assignment_id', 'anonymous_id'] };
// Upload a file
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
exports.uploadFileCourses = { type: 'UPLOAD_FILE_COURSES', method: 'post', key: 'upload_file_coursesupload_file_courses_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Upload a file
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
exports.uploadFileSections = { type: 'UPLOAD_FILE_SECTIONS', method: 'post', key: 'upload_file_sectionsupload_file_sections_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Grade or comment on a submission
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
//   comment[attempt]
//   comment[group_comment]
//   comment[media_comment_id]
//   comment[media_comment_type]
//   comment[file_ids]
//   include[visibility]
//   prefer_points_over_scheme
//   submission[posted_grade]
//   submission[excuse]
//   submission[late_policy_status]
//   submission[sticker]
//   submission[seconds_late_override]
//   rubric_assessment
// }
// return canvasRequest(grade_or_comment_on_submission_courses, {course_id, assignment_id, user_id}, body);
exports.gradeOrCommentOnSubmissionCourses = { type: 'GRADE_OR_COMMENT_ON_SUBMISSION_COURSES', method: 'put', key: 'grade_or_comment_on_submission_coursesgrade_or_comment_on_submission_courses_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Grade or comment on a submission
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
//   comment[attempt]
//   comment[group_comment]
//   comment[media_comment_id]
//   comment[media_comment_type]
//   comment[file_ids]
//   include[visibility]
//   prefer_points_over_scheme
//   submission[posted_grade]
//   submission[excuse]
//   submission[late_policy_status]
//   submission[sticker]
//   submission[seconds_late_override]
//   rubric_assessment
// }
// return canvasRequest(grade_or_comment_on_submission_sections, {section_id, assignment_id, user_id}, body);
exports.gradeOrCommentOnSubmissionSections = { type: 'GRADE_OR_COMMENT_ON_SUBMISSION_SECTIONS', method: 'put', key: 'grade_or_comment_on_submission_sectionsgrade_or_comment_on_submission_sections_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Grade or comment on a submission by anonymous id
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
exports.gradeOrCommentOnSubmissionByAnonymousIdCourses = { type: 'GRADE_OR_COMMENT_ON_SUBMISSION_BY_ANONYMOUS_ID_COURSES', method: 'put', key: 'grade_or_comment_on_submission_by_anonymous_id_coursesgrade_or_comment_on_submission_by_anonymous_id_courses_{course_id}_{assignment_id}_{anonymous_id}', required: ['course_id', 'assignment_id', 'anonymous_id'] };
// Grade or comment on a submission by anonymous id
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
exports.gradeOrCommentOnSubmissionByAnonymousIdSections = { type: 'GRADE_OR_COMMENT_ON_SUBMISSION_BY_ANONYMOUS_ID_SECTIONS', method: 'put', key: 'grade_or_comment_on_submission_by_anonymous_id_sectionsgrade_or_comment_on_submission_by_anonymous_id_sections_{section_id}_{assignment_id}_{anonymous_id}', required: ['section_id', 'assignment_id', 'anonymous_id'] };
// List gradeable students
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
exports.listGradeableStudents = { type: 'LIST_GRADEABLE_STUDENTS', method: 'get', key: 'list_gradeable_studentslist_gradeable_students_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };
// List multiple assignments gradeable students
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
exports.listMultipleAssignmentsGradeableStudents = { type: 'LIST_MULTIPLE_ASSIGNMENTS_GRADEABLE_STUDENTS', method: 'get', key: 'list_multiple_assignments_gradeable_studentslist_multiple_assignments_gradeable_students_course_id', required: ['course_id'] };
// Grade or comment on multiple submissions
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
exports.gradeOrCommentOnMultipleSubmissionsCoursesSubmissions = { type: 'GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_COURSES_SUBMISSIONS', method: 'post', key: 'grade_or_comment_on_multiple_submissions_courses_submissionsgrade_or_comment_on_multiple_submissions_courses_submissions_course_id', required: ['course_id'] };
// Grade or comment on multiple submissions
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
exports.gradeOrCommentOnMultipleSubmissionsCoursesAssignments = { type: 'GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_COURSES_ASSIGNMENTS', method: 'post', key: 'grade_or_comment_on_multiple_submissions_courses_assignmentsgrade_or_comment_on_multiple_submissions_courses_assignments_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };
// Grade or comment on multiple submissions
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
exports.gradeOrCommentOnMultipleSubmissionsSectionsSubmissions = { type: 'GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_SECTIONS_SUBMISSIONS', method: 'post', key: 'grade_or_comment_on_multiple_submissions_sections_submissionsgrade_or_comment_on_multiple_submissions_sections_submissions_section_id', required: ['section_id'] };
// Grade or comment on multiple submissions
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
exports.gradeOrCommentOnMultipleSubmissionsSectionsAssignments = { type: 'GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_SECTIONS_ASSIGNMENTS', method: 'post', key: 'grade_or_comment_on_multiple_submissions_sections_assignmentsgrade_or_comment_on_multiple_submissions_sections_assignments_{section_id}_{assignment_id}', required: ['section_id', 'assignment_id'] };
// Mark submission as read
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_read_courses, {course_id, assignment_id, user_id});
exports.markSubmissionAsReadCourses = { type: 'MARK_SUBMISSION_AS_READ_COURSES', method: 'put', key: 'mark_submission_as_read_coursesmark_submission_as_read_courses_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Mark submission as read
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_read_sections, {section_id, assignment_id, user_id});
exports.markSubmissionAsReadSections = { type: 'MARK_SUBMISSION_AS_READ_SECTIONS', method: 'put', key: 'mark_submission_as_read_sectionsmark_submission_as_read_sections_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Mark submission as unread
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_unread_courses, {course_id, assignment_id, user_id});
exports.markSubmissionAsUnreadCourses = { type: 'MARK_SUBMISSION_AS_UNREAD_COURSES', method: 'delete', key: 'mark_submission_as_unread_coursesmark_submission_as_unread_courses_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Mark submission as unread
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_unread_sections, {section_id, assignment_id, user_id});
exports.markSubmissionAsUnreadSections = { type: 'MARK_SUBMISSION_AS_UNREAD_SECTIONS', method: 'delete', key: 'mark_submission_as_unread_sectionsmark_submission_as_unread_sections_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Mark bulk submissions as read
// Accepts a string array of submission ids. Loops through and marks each submission as read
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/submissions/bulk_mark_read
//
// Example:
// const body = {
//   submissionIds
// }
// return canvasRequest(mark_bulk_submissions_as_read_courses, {course_id}, body);
exports.markBulkSubmissionsAsReadCourses = { type: 'MARK_BULK_SUBMISSIONS_AS_READ_COURSES', method: 'put', key: 'mark_bulk_submissions_as_read_coursesmark_bulk_submissions_as_read_courses_course_id', required: ['course_id'] };
// Mark bulk submissions as read
// Accepts a string array of submission ids. Loops through and marks each submission as read
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/submissions/bulk_mark_read
//
// Example:
// const body = {
//   submissionIds
// }
// return canvasRequest(mark_bulk_submissions_as_read_sections, {section_id}, body);
exports.markBulkSubmissionsAsReadSections = { type: 'MARK_BULK_SUBMISSIONS_AS_READ_SECTIONS', method: 'put', key: 'mark_bulk_submissions_as_read_sectionsmark_bulk_submissions_as_read_sections_section_id', required: ['section_id'] };
// Mark submission item as read
// No request fields are necessary.
// 
// A submission item can be "grade", "comment" or "rubric"
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read/{item}
//
// Example:
// return canvasRequest(mark_submission_item_as_read_courses, {course_id, assignment_id, user_id, item});
exports.markSubmissionItemAsReadCourses = { type: 'MARK_SUBMISSION_ITEM_AS_READ_COURSES', method: 'put', key: 'mark_submission_item_as_read_coursesmark_submission_item_as_read_courses_{course_id}_{assignment_id}_{user_id}_{item}', required: ['course_id', 'assignment_id', 'user_id', 'item'] };
// Mark submission item as read
// No request fields are necessary.
// 
// A submission item can be "grade", "comment" or "rubric"
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read/{item}
//
// Example:
// return canvasRequest(mark_submission_item_as_read_sections, {section_id, assignment_id, user_id, item});
exports.markSubmissionItemAsReadSections = { type: 'MARK_SUBMISSION_ITEM_AS_READ_SECTIONS', method: 'put', key: 'mark_submission_item_as_read_sectionsmark_submission_item_as_read_sections_{section_id}_{assignment_id}_{user_id}_{item}', required: ['section_id', 'assignment_id', 'user_id', 'item'] };
// Clear unread status for all submissions.
// Site-admin-only endpoint.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/submissions/{user_id}/clear_unread
//
// Example:
// return canvasRequest(clear_unread_status_for_all_submissions_courses, {course_id, user_id});
exports.clearUnreadStatusForAllSubmissionsCourses = { type: 'CLEAR_UNREAD_STATUS_FOR_ALL_SUBMISSIONS_COURSES', method: 'put', key: 'clear_unread_status_for_all_submissions_coursesclear_unread_status_for_all_submissions_courses_{course_id}_{user_id}', required: ['course_id', 'user_id'] };
// Clear unread status for all submissions.
// Site-admin-only endpoint.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/submissions/{user_id}/clear_unread
//
// Example:
// return canvasRequest(clear_unread_status_for_all_submissions_sections, {section_id, user_id});
exports.clearUnreadStatusForAllSubmissionsSections = { type: 'CLEAR_UNREAD_STATUS_FOR_ALL_SUBMISSIONS_SECTIONS', method: 'put', key: 'clear_unread_status_for_all_submissions_sectionsclear_unread_status_for_all_submissions_sections_{section_id}_{user_id}', required: ['section_id', 'user_id'] };
// Get rubric assessments read state
// Return whether new rubric comments/grading made on a submission have been seen by the student being assessed.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read
//
// Example:
// return canvasRequest(get_rubric_assessments_read_state_courses_rubric_comments, {course_id, assignment_id, user_id});
exports.getRubricAssessmentsReadStateCoursesRubricComments = { type: 'GET_RUBRIC_ASSESSMENTS_READ_STATE_COURSES_RUBRIC_COMMENTS', method: 'get', key: 'get_rubric_assessments_read_state_courses_rubric_commentsget_rubric_assessments_read_state_courses_rubric_comments_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Get rubric assessments read state
// Return whether new rubric comments/grading made on a submission have been seen by the student being assessed.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read
//
// Example:
// return canvasRequest(get_rubric_assessments_read_state_courses_rubric_assessments, {course_id, assignment_id, user_id});
exports.getRubricAssessmentsReadStateCoursesRubricAssessments = { type: 'GET_RUBRIC_ASSESSMENTS_READ_STATE_COURSES_RUBRIC_ASSESSMENTS', method: 'get', key: 'get_rubric_assessments_read_state_courses_rubric_assessmentsget_rubric_assessments_read_state_courses_rubric_assessments_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Get rubric assessments read state
// Return whether new rubric comments/grading made on a submission have been seen by the student being assessed.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read
//
// Example:
// return canvasRequest(get_rubric_assessments_read_state_sections_rubric_comments, {section_id, assignment_id, user_id});
exports.getRubricAssessmentsReadStateSectionsRubricComments = { type: 'GET_RUBRIC_ASSESSMENTS_READ_STATE_SECTIONS_RUBRIC_COMMENTS', method: 'get', key: 'get_rubric_assessments_read_state_sections_rubric_commentsget_rubric_assessments_read_state_sections_rubric_comments_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Get rubric assessments read state
// Return whether new rubric comments/grading made on a submission have been seen by the student being assessed.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read
//
// Example:
// return canvasRequest(get_rubric_assessments_read_state_sections_rubric_assessments, {section_id, assignment_id, user_id});
exports.getRubricAssessmentsReadStateSectionsRubricAssessments = { type: 'GET_RUBRIC_ASSESSMENTS_READ_STATE_SECTIONS_RUBRIC_ASSESSMENTS', method: 'get', key: 'get_rubric_assessments_read_state_sections_rubric_assessmentsget_rubric_assessments_read_state_sections_rubric_assessments_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Mark rubric assessments as read
// Indicate that rubric comments/grading made on a submission have been read by the student being assessed.
// Only the student who owns the submission can use this endpoint.
// 
// NOTE: Rubric assessments will be marked as read automatically when they are viewed in Canvas web.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read
//
// Example:
// return canvasRequest(mark_rubric_assessments_as_read_courses_rubric_comments, {course_id, assignment_id, user_id});
exports.markRubricAssessmentsAsReadCoursesRubricComments = { type: 'MARK_RUBRIC_ASSESSMENTS_AS_READ_COURSES_RUBRIC_COMMENTS', method: 'put', key: 'mark_rubric_assessments_as_read_courses_rubric_commentsmark_rubric_assessments_as_read_courses_rubric_comments_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Mark rubric assessments as read
// Indicate that rubric comments/grading made on a submission have been read by the student being assessed.
// Only the student who owns the submission can use this endpoint.
// 
// NOTE: Rubric assessments will be marked as read automatically when they are viewed in Canvas web.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read
//
// Example:
// return canvasRequest(mark_rubric_assessments_as_read_courses_rubric_assessments, {course_id, assignment_id, user_id});
exports.markRubricAssessmentsAsReadCoursesRubricAssessments = { type: 'MARK_RUBRIC_ASSESSMENTS_AS_READ_COURSES_RUBRIC_ASSESSMENTS', method: 'put', key: 'mark_rubric_assessments_as_read_courses_rubric_assessmentsmark_rubric_assessments_as_read_courses_rubric_assessments_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Mark rubric assessments as read
// Indicate that rubric comments/grading made on a submission have been read by the student being assessed.
// Only the student who owns the submission can use this endpoint.
// 
// NOTE: Rubric assessments will be marked as read automatically when they are viewed in Canvas web.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read
//
// Example:
// return canvasRequest(mark_rubric_assessments_as_read_sections_rubric_comments, {section_id, assignment_id, user_id});
exports.markRubricAssessmentsAsReadSectionsRubricComments = { type: 'MARK_RUBRIC_ASSESSMENTS_AS_READ_SECTIONS_RUBRIC_COMMENTS', method: 'put', key: 'mark_rubric_assessments_as_read_sections_rubric_commentsmark_rubric_assessments_as_read_sections_rubric_comments_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Mark rubric assessments as read
// Indicate that rubric comments/grading made on a submission have been read by the student being assessed.
// Only the student who owns the submission can use this endpoint.
// 
// NOTE: Rubric assessments will be marked as read automatically when they are viewed in Canvas web.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read
//
// Example:
// return canvasRequest(mark_rubric_assessments_as_read_sections_rubric_assessments, {section_id, assignment_id, user_id});
exports.markRubricAssessmentsAsReadSectionsRubricAssessments = { type: 'MARK_RUBRIC_ASSESSMENTS_AS_READ_SECTIONS_RUBRIC_ASSESSMENTS', method: 'put', key: 'mark_rubric_assessments_as_read_sections_rubric_assessmentsmark_rubric_assessments_as_read_sections_rubric_assessments_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Get document annotations read state
// Return whether annotations made on a submitted document have been read by the student
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read
//
// Example:
// return canvasRequest(get_document_annotations_read_state_courses, {course_id, assignment_id, user_id});
exports.getDocumentAnnotationsReadStateCourses = { type: 'GET_DOCUMENT_ANNOTATIONS_READ_STATE_COURSES', method: 'get', key: 'get_document_annotations_read_state_coursesget_document_annotations_read_state_courses_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Get document annotations read state
// Return whether annotations made on a submitted document have been read by the student
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read
//
// Example:
// return canvasRequest(get_document_annotations_read_state_sections, {section_id, assignment_id, user_id});
exports.getDocumentAnnotationsReadStateSections = { type: 'GET_DOCUMENT_ANNOTATIONS_READ_STATE_SECTIONS', method: 'get', key: 'get_document_annotations_read_state_sectionsget_document_annotations_read_state_sections_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Mark document annotations as read
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
exports.markDocumentAnnotationsAsReadCourses = { type: 'MARK_DOCUMENT_ANNOTATIONS_AS_READ_COURSES', method: 'put', key: 'mark_document_annotations_as_read_coursesmark_document_annotations_as_read_courses_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };
// Mark document annotations as read
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
exports.markDocumentAnnotationsAsReadSections = { type: 'MARK_DOCUMENT_ANNOTATIONS_AS_READ_SECTIONS', method: 'put', key: 'mark_document_annotations_as_read_sectionsmark_document_annotations_as_read_sections_{section_id}_{assignment_id}_{user_id}', required: ['section_id', 'assignment_id', 'user_id'] };
// Submission Summary
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
exports.submissionSummaryCourses = { type: 'SUBMISSION_SUMMARY_COURSES', method: 'get', key: 'submission_summary_coursessubmission_summary_courses_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };
// Submission Summary
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
exports.submissionSummarySections = { type: 'SUBMISSION_SUMMARY_SECTIONS', method: 'get', key: 'submission_summary_sectionssubmission_summary_sections_{section_id}_{assignment_id}', required: ['section_id', 'assignment_id'] };
//# sourceMappingURL=submissions.js.map