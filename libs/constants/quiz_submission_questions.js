"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unflaggingQuestion = exports.getFormattedStudentNumericalAnswer = exports.getAllQuizSubmissionQuestions = exports.flaggingQuestion = exports.answeringQuestions = void 0;
//
// Quiz Submission Questions
//
// Get all quiz submission questions.
// Get a list of all the question records for this quiz submission.
// 
// <b>200 OK</b> response code is returned if the request was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_quiz_submission_questions, {quiz_submission_id, ...query});
var getAllQuizSubmissionQuestions = {
  type: 'GET_ALL_QUIZ_SUBMISSION_QUESTIONS',
  method: 'get',
  key: 'get_all_quiz_submission_questionsget_all_quiz_submission_questions_quiz_submission_id',
  required: ['quiz_submission_id']
}; // Answering questions
// Provide or update an answer to one or more QuizQuestions.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions
//
// Example:
// const body = {
//   attempt (required)
//   validation_token (required)
//   access_code
//   quiz_questions
// }
// return canvasRequest(answering_questions, {quiz_submission_id}, body);

exports.getAllQuizSubmissionQuestions = getAllQuizSubmissionQuestions;
var answeringQuestions = {
  type: 'ANSWERING_QUESTIONS',
  method: 'post',
  key: 'answering_questionsanswering_questions_quiz_submission_id',
  required: ['quiz_submission_id']
}; // Get a formatted student numerical answer.
// Matches the intended behavior of the UI when a numerical answer is entered
// and returns the resulting formatted number
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions/{id}/formatted_answer
//
// Example:
// const query = {
//   answer (required)
// }
// return canvasRequest(get_formatted_student_numerical_answer, {quiz_submission_id, id, ...query});

exports.answeringQuestions = answeringQuestions;
var getFormattedStudentNumericalAnswer = {
  type: 'GET_FORMATTED_STUDENT_NUMERICAL_ANSWER',
  method: 'get',
  key: 'get_formatted_student_numerical_answerget_formatted_student_numerical_answer_{quiz_submission_id}_{id}',
  required: ['quiz_submission_id', 'id']
}; // Flagging a question.
// Set a flag on a quiz question to indicate that you want to return to it
// later.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions/{id}/flag
//
// Example:
// const body = {
//   attempt (required)
//   validation_token (required)
//   access_code
// }
// return canvasRequest(flagging_question, {quiz_submission_id, id}, body);

exports.getFormattedStudentNumericalAnswer = getFormattedStudentNumericalAnswer;
var flaggingQuestion = {
  type: 'FLAGGING_QUESTION',
  method: 'put',
  key: 'flagging_questionflagging_question_{quiz_submission_id}_{id}',
  required: ['quiz_submission_id', 'id']
}; // Unflagging a question.
// Remove the flag that you previously set on a quiz question after you've
// returned to it.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions/{id}/unflag
//
// Example:
// const body = {
//   attempt (required)
//   validation_token (required)
//   access_code
// }
// return canvasRequest(unflagging_question, {quiz_submission_id, id}, body);

exports.flaggingQuestion = flaggingQuestion;
var unflaggingQuestion = {
  type: 'UNFLAGGING_QUESTION',
  method: 'put',
  key: 'unflagging_questionunflagging_question_{quiz_submission_id}_{id}',
  required: ['quiz_submission_id', 'id']
};
exports.unflaggingQuestion = unflaggingQuestion;