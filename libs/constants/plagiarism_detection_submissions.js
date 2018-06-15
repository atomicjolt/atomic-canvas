'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Plagiarism Detection Submissions
//
// Get a single submission
// Get a single submission, based on submission id.
//
// API Docs: https://canvas.instructure.com/doc/api/plagiarism_detection_submissions.html
// API Url: /lti/assignments/{assignment_id}/submissions/{submission_id}
//
// Example:
// return canvasRequest(get_single_submission, {assignment_id, submission_id});
var getSingleSubmission = exports.getSingleSubmission = { type: 'GET_SINGLE_SUBMISSION', method: 'get', key: 'get_single_submissionget_single_submission_{assignment_id}_{submission_id}', required: ['assignment_id', 'submission_id'] };

// Get the history of a single submission
// Get a list of all attempts made for a submission, based on submission id.
//
// API Docs: https://canvas.instructure.com/doc/api/plagiarism_detection_submissions.html
// API Url: /lti/assignments/{assignment_id}/submissions/{submission_id}/history
//
// Example:
// return canvasRequest(get_history_of_single_submission, {assignment_id, submission_id});
var getHistoryOfSingleSubmission = exports.getHistoryOfSingleSubmission = { type: 'GET_HISTORY_OF_SINGLE_SUBMISSION', method: 'get', key: 'get_history_of_single_submissionget_history_of_single_submission_{assignment_id}_{submission_id}', required: ['assignment_id', 'submission_id'] };