"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveAssignmentOverriddenDatesForNewQuizzes = exports.retrieveAssignmentOverriddenDatesForClassicQuizzes = void 0;
//
// Quiz Assignment Overrides
//
// Retrieve assignment-overridden dates for Classic Quizzes
// Retrieve the actual due-at, unlock-at, and available-at dates for quizzes
// based on the assignment overrides active for the current API user.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_assignment_overrides.html
// API Url: courses/{course_id}/quizzes/assignment_overrides
//
// Example:
// const query = {
//   quiz_assignment_overrides[0][quiz_ids]
// }
// return canvasRequest(retrieve_assignment_overridden_dates_for_classic_quizzes, {course_id, ...query});
exports.retrieveAssignmentOverriddenDatesForClassicQuizzes = { type: 'RETRIEVE_ASSIGNMENT_OVERRIDDEN_DATES_FOR_CLASSIC_QUIZZES', method: 'get', key: 'retrieve_assignment_overridden_dates_for_classic_quizzesretrieve_assignment_overridden_dates_for_classic_quizzes_course_id', required: ['course_id'] };
// Retrieve assignment-overridden dates for New Quizzes
// Retrieve the actual due-at, unlock-at, and available-at dates for quizzes
// based on the assignment overrides active for the current API user.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_assignment_overrides.html
// API Url: courses/{course_id}/new_quizzes/assignment_overrides
//
// Example:
// const query = {
//   quiz_assignment_overrides[0][quiz_ids]
// }
// return canvasRequest(retrieve_assignment_overridden_dates_for_new_quizzes, {course_id, ...query});
exports.retrieveAssignmentOverriddenDatesForNewQuizzes = { type: 'RETRIEVE_ASSIGNMENT_OVERRIDDEN_DATES_FOR_NEW_QUIZZES', method: 'get', key: 'retrieve_assignment_overridden_dates_for_new_quizzesretrieve_assignment_overridden_dates_for_new_quizzes_course_id', required: ['course_id'] };
//# sourceMappingURL=quiz_assignment_overrides.js.map