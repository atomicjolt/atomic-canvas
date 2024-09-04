"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressQueryProgress = exports.cancelProgress = exports.queryProgress = void 0;
//
// Progress
//
// Query progress
// Return completion and status information about an asynchronous job
//
// API Docs: https://canvas.instructure.com/doc/api/progress.html
// API Url: progress/{id}
//
// Example:
// return canvasRequest(query_progress, {id});
exports.queryProgress = { type: 'QUERY_PROGRESS', method: 'get', key: 'query_progressquery_progress_id', required: ['id'] };
// Cancel progress
// Cancel an asynchronous job associated with a Progress object
// If you include "message" in the POSTed data, it will be set on
// the Progress and returned. This is handy to distinguish between
// cancel and fail for a workflow_state of "failed".
//
// API Docs: https://canvas.instructure.com/doc/api/progress.html
// API Url: progress/{id}/cancel
//
// Example:
// return canvasRequest(cancel_progress, {id});
exports.cancelProgress = { type: 'CANCEL_PROGRESS', method: 'post', key: 'cancel_progresscancel_progress_id', required: ['id'] };
// Query progress
// Return completion and status information about an asynchronous job
//
// API Docs: https://canvas.instructure.com/doc/api/progress.html
// API Url: /lti/courses/{course_id}/progress/{id}
//
// Example:
// return canvasRequest(progress_query_progress, {course_id, id});
exports.progressQueryProgress = { type: 'PROGRESS_QUERY_PROGRESS', method: 'get', key: 'progress_query_progressprogress_query_progress_{course_id}_{id}', required: ['course_id', 'id'] };
//# sourceMappingURL=progress.js.map