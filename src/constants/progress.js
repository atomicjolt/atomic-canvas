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
export const queryProgress = { type: 'QUERY_PROGRESS', method: 'get', key: 'query_progressquery_progress_id', required: ['id'] };

// Query progress
// Return completion and status information about an asynchronous job
//
// API Docs: https://canvas.instructure.com/doc/api/progress.html
// API Url: /lti/courses/{course_id}/progress/{id}
//
// Example:
// return canvasRequest(progress_query_progress, {course_id, id});
export const progressQueryProgress = { type: 'PROGRESS_QUERY_PROGRESS', method: 'get', key: 'progress_query_progressprogress_query_progress_{course_id}_{id}', required: ['course_id', 'id'] };