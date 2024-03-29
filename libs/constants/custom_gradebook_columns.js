"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCustomGradebookColumn = exports.updateColumnData = exports.reorderCustomColumns = exports.listEntriesForColumn = exports.listCustomGradebookColumns = exports.deleteCustomGradebookColumn = exports.createCustomGradebookColumn = exports.bulkUpdateColumnData = void 0;
//
// Custom Gradebook Columns
//
// List custom gradebook columns
// A paginated list of all custom gradebook columns for a course
//
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns
//
// Example:
// const query = {
//   include_hidden
// }
// return canvasRequest(list_custom_gradebook_columns, {course_id, ...query});
var listCustomGradebookColumns = {
  type: 'LIST_CUSTOM_GRADEBOOK_COLUMNS',
  method: 'get',
  key: 'list_custom_gradebook_columnslist_custom_gradebook_columns_course_id',
  required: ['course_id']
};

// Create a custom gradebook column
// Create a custom gradebook column
//
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns
//
// Example:
// const body = {
//   column[title] (required)
//   column[position]
//   column[hidden]
//   column[teacher_notes]
//   column[read_only]
// }
// return canvasRequest(create_custom_gradebook_column, {course_id}, body);
exports.listCustomGradebookColumns = listCustomGradebookColumns;
var createCustomGradebookColumn = {
  type: 'CREATE_CUSTOM_GRADEBOOK_COLUMN',
  method: 'post',
  key: 'create_custom_gradebook_columncreate_custom_gradebook_column_course_id',
  required: ['course_id']
};

// Update a custom gradebook column
// Accepts the same parameters as custom gradebook column creation
//
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns/{id}
//
// Example:
// return canvasRequest(update_custom_gradebook_column, {course_id, id});
exports.createCustomGradebookColumn = createCustomGradebookColumn;
var updateCustomGradebookColumn = {
  type: 'UPDATE_CUSTOM_GRADEBOOK_COLUMN',
  method: 'put',
  key: 'update_custom_gradebook_columnupdate_custom_gradebook_column_{course_id}_{id}',
  required: ['course_id', 'id']
};

// Delete a custom gradebook column
// Permanently deletes a custom column and its associated data
//
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns/{id}
//
// Example:
// return canvasRequest(delete_custom_gradebook_column, {course_id, id});
exports.updateCustomGradebookColumn = updateCustomGradebookColumn;
var deleteCustomGradebookColumn = {
  type: 'DELETE_CUSTOM_GRADEBOOK_COLUMN',
  method: 'delete',
  key: 'delete_custom_gradebook_columndelete_custom_gradebook_column_{course_id}_{id}',
  required: ['course_id', 'id']
};

// Reorder custom columns
// Puts the given columns in the specified order
// 
// <b>200 OK</b> is returned if successful
//
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns/reorder
//
// Example:
// const body = {
//   order (required)
// }
// return canvasRequest(reorder_custom_columns, {course_id}, body);
exports.deleteCustomGradebookColumn = deleteCustomGradebookColumn;
var reorderCustomColumns = {
  type: 'REORDER_CUSTOM_COLUMNS',
  method: 'post',
  key: 'reorder_custom_columnsreorder_custom_columns_course_id',
  required: ['course_id']
};

// List entries for a column
// This does not list entries for students without associated data.
//
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns/{id}/data
//
// Example:
// const query = {
//   include_hidden
// }
// return canvasRequest(list_entries_for_column, {course_id, id, ...query});
exports.reorderCustomColumns = reorderCustomColumns;
var listEntriesForColumn = {
  type: 'LIST_ENTRIES_FOR_COLUMN',
  method: 'get',
  key: 'list_entries_for_columnlist_entries_for_column_{course_id}_{id}',
  required: ['course_id', 'id']
};

// Update column data
// Set the content of a custom column
//
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns/{id}/data/{user_id}
//
// Example:
// const body = {
//   column_data[content] (required)
// }
// return canvasRequest(update_column_data, {course_id, id, user_id}, body);
exports.listEntriesForColumn = listEntriesForColumn;
var updateColumnData = {
  type: 'UPDATE_COLUMN_DATA',
  method: 'put',
  key: 'update_column_dataupdate_column_data_{course_id}_{id}_{user_id}',
  required: ['course_id', 'id', 'user_id']
};

// Bulk update column data
// Set the content of custom columns
// 
// {
//   "column_data": [
//     {
//       "column_id": example_column_id,
//       "user_id": example_student_id,
//       "content": example_content
//       },
//       {
//       "column_id": example_column_id,
//       "user_id": example_student_id,
//       "content: example_content
//     }
//   ]
// }
//
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_column_data
//
// Example:
// const body = {
//   column_data (required)
// }
// return canvasRequest(bulk_update_column_data, {course_id}, body);
exports.updateColumnData = updateColumnData;
var bulkUpdateColumnData = {
  type: 'BULK_UPDATE_COLUMN_DATA',
  method: 'put',
  key: 'bulk_update_column_databulk_update_column_data_course_id',
  required: ['course_id']
};
exports.bulkUpdateColumnData = bulkUpdateColumnData;