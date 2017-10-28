'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Originality Reports
//
// Create an Originality Report
// Create a new OriginalityReport for the specified file
//
// API Docs: https://canvas.instructure.com/doc/api/originality_reports.html
// API Url: /lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report
//
// Example:
// const query = {
//   originality_report[file_id] (required)
//   originality_report[originality_score] (required)
//   originality_report[originality_report_url]
//   originality_report[originality_report_file_id]
//   originality_report[tool_setting][resource_type_code]
//   originality_report[tool_setting][resource_url]
//   originality_report[workflow_state]
// }
// return canvasRequest(create_originality_report, {assignment_id, submission_id}, query);
var createOriginalityReport = exports.createOriginalityReport = { type: 'CREATE_ORIGINALITY_REPORT', method: 'post', key: 'create_originality_reportcreate_originality_report_{assignment_id}_{submission_id}', required: ['assignment_id', 'submission_id'] };

// Edit an Originality Report
// Modify an existing originality report. An alternative to this endpoint is
// to POST the same parameters listed below to the CREATE endpoint.
//
// API Docs: https://canvas.instructure.com/doc/api/originality_reports.html
// API Url: /lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report/{id}
//
// Example:
// const query = {
//   originality_report[originality_score]
//   originality_report[originality_report_url]
//   originality_report[originality_report_file_id]
//   originality_report[tool_setting][resource_type_code]
//   originality_report[tool_setting][resource_url]
//   originality_report[workflow_state]
// }
// return canvasRequest(edit_originality_report_submissions, {assignment_id, submission_id, id}, query);
var editOriginalityReportSubmissions = exports.editOriginalityReportSubmissions = { type: 'EDIT_ORIGINALITY_REPORT_SUBMISSIONS', method: 'put', key: 'edit_originality_report_submissionsedit_originality_report_submissions_{assignment_id}_{submission_id}_{id}', required: ['assignment_id', 'submission_id', 'id'] };

// Edit an Originality Report
// Modify an existing originality report. An alternative to this endpoint is
// to POST the same parameters listed below to the CREATE endpoint.
//
// API Docs: https://canvas.instructure.com/doc/api/originality_reports.html
// API Url: /lti/assignments/{assignment_id}/files/{file_id}/originality_report
//
// Example:
// const query = {
//   originality_report[originality_score]
//   originality_report[originality_report_url]
//   originality_report[originality_report_file_id]
//   originality_report[tool_setting][resource_type_code]
//   originality_report[tool_setting][resource_url]
//   originality_report[workflow_state]
// }
// return canvasRequest(edit_originality_report_files, {assignment_id, file_id}, query);
var editOriginalityReportFiles = exports.editOriginalityReportFiles = { type: 'EDIT_ORIGINALITY_REPORT_FILES', method: 'put', key: 'edit_originality_report_filesedit_originality_report_files_{assignment_id}_{file_id}', required: ['assignment_id', 'file_id'] };

// Show an Originality Report
// Get a single originality report
//
// API Docs: https://canvas.instructure.com/doc/api/originality_reports.html
// API Url: /lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report/{id}
//
// Example:
// return canvasRequest(show_originality_report_submissions, {assignment_id, submission_id, id});
var showOriginalityReportSubmissions = exports.showOriginalityReportSubmissions = { type: 'SHOW_ORIGINALITY_REPORT_SUBMISSIONS', method: 'get', key: 'show_originality_report_submissionsshow_originality_report_submissions_{assignment_id}_{submission_id}_{id}', required: ['assignment_id', 'submission_id', 'id'] };

// Show an Originality Report
// Get a single originality report
//
// API Docs: https://canvas.instructure.com/doc/api/originality_reports.html
// API Url: /lti/assignments/{assignment_id}/files/{file_id}/originality_report
//
// Example:
// return canvasRequest(show_originality_report_files, {assignment_id, file_id});
var showOriginalityReportFiles = exports.showOriginalityReportFiles = { type: 'SHOW_ORIGINALITY_REPORT_FILES', method: 'get', key: 'show_originality_report_filesshow_originality_report_files_{assignment_id}_{file_id}', required: ['assignment_id', 'file_id'] };