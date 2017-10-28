'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
var queryProgress = exports.queryProgress = { type: 'QUERY_PROGRESS', method: 'get', key: 'query_progressquery_progress_id', required: ['id'] };