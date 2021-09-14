'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Submission Comments
//
// Edit a submission comment
// Edit the given submission comment.
//
// API Docs: https://canvas.instructure.com/doc/api/submission_comments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}
//
// Example:
// const body = {
//   comment
// }
// return canvasRequest(edit_submission_comment, {course_id, assignment_id, user_id, id}, body);
var editSubmissionComment = exports.editSubmissionComment = { type: 'EDIT_SUBMISSION_COMMENT', method: 'put', key: 'edit_submission_commentedit_submission_comment_{course_id}_{assignment_id}_{user_id}_{id}', required: ['course_id', 'assignment_id', 'user_id', 'id'] };

// Delete a submission comment
// Delete the given submission comment.
//
// API Docs: https://canvas.instructure.com/doc/api/submission_comments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}
//
// Example:
// return canvasRequest(delete_submission_comment, {course_id, assignment_id, user_id, id});
var deleteSubmissionComment = exports.deleteSubmissionComment = { type: 'DELETE_SUBMISSION_COMMENT', method: 'delete', key: 'delete_submission_commentdelete_submission_comment_{course_id}_{assignment_id}_{user_id}_{id}', required: ['course_id', 'assignment_id', 'user_id', 'id'] };

// Upload a file
// Upload a file to attach to a submission comment
// 
// See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
// 
// The final step of the file upload workflow will return the attachment data,
// including the new file id. The caller can then PUT the file_id to the
// submission API to attach it to a comment
//
// API Docs: https://canvas.instructure.com/doc/api/submission_comments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/files
//
// Example:
// return canvasRequest(submission_comments_upload_file, {course_id, assignment_id, user_id});
var submissionCommentsUploadFile = exports.submissionCommentsUploadFile = { type: 'SUBMISSION_COMMENTS_UPLOAD_FILE', method: 'post', key: 'submission_comments_upload_filesubmission_comments_upload_file_{course_id}_{assignment_id}_{user_id}', required: ['course_id', 'assignment_id', 'user_id'] };