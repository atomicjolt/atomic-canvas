"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showResult = exports.showCollectionOfResults = void 0;
//
// Result
//
// Show a collection of Results
// Show existing Results of a line item. Can be used to retrieve a specific student's
// result by adding the user_id (defined as the lti_user_id or the Canvas user_id) as
// a query parameter (i.e. user_id=1000). If user_id is included, it will return only
// one Result in the collection if the result exists, otherwise it will be empty. May
// also limit number of results by adding the limit query param (i.e. limit=100)
//
// API Docs: https://canvas.instructure.com/doc/api/result.html
// API Url: /lti/courses/{course_id}/line_items/{line_item_id}/results
//
// Example:
// return canvasRequest(show_collection_of_results, {course_id, line_item_id});
var showCollectionOfResults = {
  type: 'SHOW_COLLECTION_OF_RESULTS',
  method: 'get',
  key: 'show_collection_of_resultsshow_collection_of_results_{course_id}_{line_item_id}',
  required: ['course_id', 'line_item_id']
}; // Show a Result
// Show existing Result of a line item.
//
// API Docs: https://canvas.instructure.com/doc/api/result.html
// API Url: /lti/courses/{course_id}/line_items/{line_item_id}/results/{id}
//
// Example:
// return canvasRequest(show_result, {course_id, line_item_id, id});

exports.showCollectionOfResults = showCollectionOfResults;
var showResult = {
  type: 'SHOW_RESULT',
  method: 'get',
  key: 'show_resultshow_result_{course_id}_{line_item_id}_{id}',
  required: ['course_id', 'line_item_id', 'id']
};
exports.showResult = showResult;