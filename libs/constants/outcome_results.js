"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOutcomeResults = exports.getOutcomeResultRollups = void 0;
//
// Outcome Results
//
// Get outcome results
// Gets the outcome results for users and outcomes in the specified context.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_results.html
// API Url: courses/{course_id}/outcome_results
//
// Example:
// const query = {
//   user_ids
//   outcome_ids
//   include
//   include_hidden
// }
// return canvasRequest(get_outcome_results, {course_id, ...query});
var getOutcomeResults = {
  type: 'GET_OUTCOME_RESULTS',
  method: 'get',
  key: 'get_outcome_resultsget_outcome_results_course_id',
  required: ['course_id']
}; // Get outcome result rollups
// Gets the outcome rollups for the users and outcomes in the specified
// context.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_results.html
// API Url: courses/{course_id}/outcome_rollups
//
// Example:
// const query = {
//   aggregate
//   aggregate_stat
//   user_ids
//   outcome_ids
//   include
//   exclude
//   sort_by
//   sort_outcome_id
//   sort_order
// }
// return canvasRequest(get_outcome_result_rollups, {course_id, ...query});

exports.getOutcomeResults = getOutcomeResults;
var getOutcomeResultRollups = {
  type: 'GET_OUTCOME_RESULT_ROLLUPS',
  method: 'get',
  key: 'get_outcome_result_rollupsget_outcome_result_rollups_course_id',
  required: ['course_id']
};
exports.getOutcomeResultRollups = getOutcomeResultRollups;