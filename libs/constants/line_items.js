"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLineItem = exports.showLineItem = exports.listLineItems = exports.deleteLineItem = exports.createLineItem = void 0;
//
// Line Items
//
// Create a Line Item
// Create a new Line Item
//
// API Docs: https://canvas.instructure.com/doc/api/line_items.html
// API Url: /lti/courses/{course_id}/line_items
//
// Example:
// const body = {
//   scoreMaximum (required)
//   label (required)
//   resourceId
//   tag
//   resourceLinkId
//   endDateTime
//   https://canvas.instructure.com/lti/submission_type
// }
// return canvasRequest(create_line_item, {course_id}, body);
var createLineItem = {
  type: 'CREATE_LINE_ITEM',
  method: 'post',
  key: 'create_line_itemcreate_line_item_course_id',
  required: ['course_id']
};

// Update a Line Item
// Update new Line Item
//
// API Docs: https://canvas.instructure.com/doc/api/line_items.html
// API Url: /lti/courses/{course_id}/line_items/{id}
//
// Example:
// const body = {
//   scoreMaximum
//   label
//   resourceId
//   tag
//   endDateTime
// }
// return canvasRequest(update_line_item, {course_id, id}, body);
exports.createLineItem = createLineItem;
var updateLineItem = {
  type: 'UPDATE_LINE_ITEM',
  method: 'put',
  key: 'update_line_itemupdate_line_item_{course_id}_{id}',
  required: ['course_id', 'id']
};

// Show a Line Item
// Show existing Line Item
//
// API Docs: https://canvas.instructure.com/doc/api/line_items.html
// API Url: /lti/courses/{course_id}/line_items/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(show_line_item, {course_id, id, ...query});
exports.updateLineItem = updateLineItem;
var showLineItem = {
  type: 'SHOW_LINE_ITEM',
  method: 'get',
  key: 'show_line_itemshow_line_item_{course_id}_{id}',
  required: ['course_id', 'id']
};

// List line Items
// List all Line Items for a course
//
// API Docs: https://canvas.instructure.com/doc/api/line_items.html
// API Url: /lti/courses/{course_id}/line_items
//
// Example:
// const query = {
//   tag
//   resource_id
//   resource_link_id
//   limit
//   include
// }
// return canvasRequest(list_line_items, {course_id, ...query});
exports.showLineItem = showLineItem;
var listLineItems = {
  type: 'LIST_LINE_ITEMS',
  method: 'get',
  key: 'list_line_itemslist_line_items_course_id',
  required: ['course_id']
};

// Delete a Line Item
// Delete an existing Line Item
//
// API Docs: https://canvas.instructure.com/doc/api/line_items.html
// API Url: /lti/courses/{course_id}/line_items/{id}
//
// Example:
// return canvasRequest(delete_line_item, {course_id, id});
exports.listLineItems = listLineItems;
var deleteLineItem = {
  type: 'DELETE_LINE_ITEM',
  method: 'delete',
  key: 'delete_line_itemdelete_line_item_{course_id}_{id}',
  required: ['course_id', 'id']
};
exports.deleteLineItem = deleteLineItem;