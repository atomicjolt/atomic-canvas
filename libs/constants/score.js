"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScore = void 0;
//
// Score
//
// Create a Score
// Create a new Result from the score params. If this is for the first created line_item for a
// resourceLinkId, or it is a line item that is not attached to a resourceLinkId, then a submission
// record will be created for the associated assignment when gradingProgress is set to
// FullyGraded or PendingManual.
// 
// The submission score will also be updated when a score object is sent with either of those
// two values for gradingProgress. If a score object is sent with either of FullyGraded or
// PendingManual as the value for gradingProgress and scoreGiven is missing, the assignment
// will not be graded. This also supposes the line_item meets the condition to create a submission.
// 
// A submission comment with an unknown author will be created when the comment value is included.
// This also supposes the line_item meets the condition to create a submission.
// 
// It is also possible to submit a file along with this score, which will attach the file to the
// submission that is created. Files should be formatted as Content Items, with the correct syntax
// below.
// 
// Returns a url pointing to the Result. If any files were submitted, also returns the Content Items
// which were sent in the request, each with a url pointing to the Progress of the file upload.
//
// API Docs: https://canvas.instructure.com/doc/api/score.html
// API Url: /lti/courses/{course_id}/line_items/{line_item_id}/scores
//
// Example:
// const body = {
//   userId (required)
//   activityProgress (required)
//   gradingProgress (required)
//   timestamp (required)
//   scoreGiven
//   scoreMaximum
//   comment
//   https://canvas.instructure.com/lti/submission
//   https://canvas.instructure.com/lti/submission[new_submission]
//   https://canvas.instructure.com/lti/submission[prioritize_non_tool_grade]
//   https://canvas.instructure.com/lti/submission[submission_type]
//   https://canvas.instructure.com/lti/submission[submission_data]
//   https://canvas.instructure.com/lti/submission[submitted_at]
//   https://canvas.instructure.com/lti/submission[content_items]
// }
// return canvasRequest(create_score, {course_id, line_item_id}, body);
exports.createScore = { type: 'CREATE_SCORE', method: 'post', key: 'create_scorecreate_score_{course_id}_{line_item_id}', required: ['course_id', 'line_item_id'] };
//# sourceMappingURL=score.js.map