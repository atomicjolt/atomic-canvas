'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Quiz Extensions
//
// Set extensions for student quiz submissions
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>403 Forbidden</b> if you are not allowed to extend quizzes for this course
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_extensions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/extensions
//
// Example:
// const body = {
//   quiz_extensions[user_id] (required)
//   quiz_extensions[extra_attempts]
//   quiz_extensions[extra_time]
//   quiz_extensions[manually_unlocked]
//   quiz_extensions[extend_from_now]
//   quiz_extensions[extend_from_end_at]
// }
// return canvasRequest(Quiz_Extensions_set_extensions_for_student_quiz_submissions, {course_id, quiz_id}, body);
var quizExtensionsSetExtensionsForStudentQuizSubmissions = exports.quizExtensionsSetExtensionsForStudentQuizSubmissions = { type: 'QUIZ_EXTENSIONS_SET_EXTENSIONS_FOR_STUDENT_QUIZ_SUBMISSIONS', method: 'post', key: 'Quiz_Extensions_set_extensions_for_student_quiz_submissionsQuiz_Extensions_set_extensions_for_student_quiz_submissions_{course_id}_{quiz_id}', required: ['course_id', 'quiz_id'] };