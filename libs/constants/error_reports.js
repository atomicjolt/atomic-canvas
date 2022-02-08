"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createErrorReport = void 0;
//
// Error Reports
//
// Create Error Report
// Create a new error report documenting an experienced problem
// 
// Performs the same action as when a user uses the "help -> report a problem"
// dialog.
//
// API Docs: https://canvas.instructure.com/doc/api/error_reports.html
// API Url: error_reports
//
// Example:
// const body = {
//   error[subject] (required)
//   error[url]
//   error[email]
//   error[comments]
//   error[http_env]
// }
// return canvasRequest(create_error_report, {}, body);
var createErrorReport = {
  type: 'CREATE_ERROR_REPORT',
  method: 'post',
  key: 'create_error_report',
  required: []
};
exports.createErrorReport = createErrorReport;