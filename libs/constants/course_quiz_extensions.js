"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseQuizExtensionsSetExtensionsForStudentQuizSubmissions = void 0;
//
// Course Quiz Extensions
//
// Set extensions for student quiz submissions
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>403 Forbidden</b> if you are not allowed to extend quizzes for this course
//
// API Docs: https://canvas.instructure.com/doc/api/course_quiz_extensions.html
// API Url: courses/{course_id}/quiz_extensions
//
// Example:
// const body = {
//   user_id (required)
//   extra_attempts
//   extra_time
//   manually_unlocked
//   extend_from_now
//   extend_from_end_at
// }
// return canvasRequest(course_quiz_extensions_set_extensions_for_student_quiz_submissions, {course_id}, body);
exports.courseQuizExtensionsSetExtensionsForStudentQuizSubmissions = { type: 'COURSE_QUIZ_EXTENSIONS_SET_EXTENSIONS_FOR_STUDENT_QUIZ_SUBMISSIONS', method: 'post', key: 'course_quiz_extensions_set_extensions_for_student_quiz_submissionscourse_quiz_extensions_set_extensions_for_student_quiz_submissions_course_id', required: ['course_id'] };
//# sourceMappingURL=course_quiz_extensions.js.map