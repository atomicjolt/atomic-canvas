'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Quiz Question Groups
//
// Get a single quiz group
// Returns details of the quiz group with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_question_groups.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/groups/{id}
//
// Example:
// return canvasRequest(get_single_quiz_group, {course_id, quiz_id, id});
var getSingleQuizGroup = exports.getSingleQuizGroup = { type: 'GET_SINGLE_QUIZ_GROUP', method: 'get', key: 'get_single_quiz_groupget_single_quiz_group_{course_id}_{quiz_id}_{id}', required: ['course_id', 'quiz_id', 'id'] };

// Create a question group
// Create a new question group for this quiz
// 
// <b>201 Created</b> response code is returned if the creation was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_question_groups.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/groups
//
// Example:
// const query = {
//   quiz_groups[name]
//   quiz_groups[pick_count]
//   quiz_groups[question_points]
//   quiz_groups[assessment_question_bank_id]
// }
// return canvasRequest(create_question_group, {course_id, quiz_id}, query);
var createQuestionGroup = exports.createQuestionGroup = { type: 'CREATE_QUESTION_GROUP', method: 'post', key: 'create_question_groupcreate_question_group_{course_id}_{quiz_id}', required: ['course_id', 'quiz_id'] };

// Update a question group
// Update a question group
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_question_groups.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/groups/{id}
//
// Example:
// const query = {
//   quiz_groups[name]
//   quiz_groups[pick_count]
//   quiz_groups[question_points]
// }
// return canvasRequest(update_question_group, {course_id, quiz_id, id}, query);
var updateQuestionGroup = exports.updateQuestionGroup = { type: 'UPDATE_QUESTION_GROUP', method: 'put', key: 'update_question_groupupdate_question_group_{course_id}_{quiz_id}_{id}', required: ['course_id', 'quiz_id', 'id'] };

// Delete a question group
// Delete a question group
// 
// <b>204 No Content<b> response code is returned if the deletion was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_question_groups.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/groups/{id}
//
// Example:
// return canvasRequest(delete_question_group, {course_id, quiz_id, id});
var deleteQuestionGroup = exports.deleteQuestionGroup = { type: 'DELETE_QUESTION_GROUP', method: 'delete', key: 'delete_question_groupdelete_question_group_{course_id}_{quiz_id}_{id}', required: ['course_id', 'quiz_id', 'id'] };

// Reorder question groups
// Change the order of the quiz questions within the group
// 
// <b>204 No Content<b> response code is returned if the reorder was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_question_groups.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/groups/{id}/reorder
//
// Example:
// const query = {
//   order[id] (required)
//   order[type]
// }
// return canvasRequest(reorder_question_groups, {course_id, quiz_id, id}, query);
var reorderQuestionGroups = exports.reorderQuestionGroups = { type: 'REORDER_QUESTION_GROUPS', method: 'post', key: 'reorder_question_groupsreorder_question_groups_{course_id}_{quiz_id}_{id}', required: ['course_id', 'quiz_id', 'id'] };