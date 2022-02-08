"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSinglePoll = exports.listPolls = exports.getSinglePoll = exports.deletePoll = exports.createSinglePoll = void 0;
//
// Polls
//
// List polls
// Returns the paginated list of polls for the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls
//
// Example:
// return canvasRequest(list_polls, {});
var listPolls = {
  type: 'LIST_POLLS',
  method: 'get',
  key: 'list_polls',
  required: []
}; // Get a single poll
// Returns the poll with the given id
//
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls/{id}
//
// Example:
// return canvasRequest(get_single_poll, {id});

exports.listPolls = listPolls;
var getSinglePoll = {
  type: 'GET_SINGLE_POLL',
  method: 'get',
  key: 'get_single_pollget_single_poll_id',
  required: ['id']
}; // Create a single poll
// Create a new poll for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls
//
// Example:
// const body = {
//   polls[question] (required)
//   polls[description]
// }
// return canvasRequest(create_single_poll, {}, body);

exports.getSinglePoll = getSinglePoll;
var createSinglePoll = {
  type: 'CREATE_SINGLE_POLL',
  method: 'post',
  key: 'create_single_poll',
  required: []
}; // Update a single poll
// Update an existing poll belonging to the current user
//
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls/{id}
//
// Example:
// const body = {
//   polls[question] (required)
//   polls[description]
// }
// return canvasRequest(update_single_poll, {id}, body);

exports.createSinglePoll = createSinglePoll;
var updateSinglePoll = {
  type: 'UPDATE_SINGLE_POLL',
  method: 'put',
  key: 'update_single_pollupdate_single_poll_id',
  required: ['id']
}; // Delete a poll
// <b>204 No Content</b> response code is returned if the deletion was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls/{id}
//
// Example:
// return canvasRequest(delete_poll, {id});

exports.updateSinglePoll = updateSinglePoll;
var deletePoll = {
  type: 'DELETE_POLL',
  method: 'delete',
  key: 'delete_polldelete_poll_id',
  required: ['id']
};
exports.deletePoll = deletePoll;