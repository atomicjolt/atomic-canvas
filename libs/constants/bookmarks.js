'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Bookmarks
//
// List bookmarks
// Returns the paginated list of bookmarks.
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks
//
// Example:
// return canvasRequest(list_bookmarks, {});
var listBookmarks = exports.listBookmarks = { type: 'LIST_BOOKMARKS', method: 'get', key: 'list_bookmarks', required: [] };

// Create bookmark
// Creates a bookmark.
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks
//
// Example:
// const body = {
//   name
//   url
//   position
//   data
// }
// return canvasRequest(create_bookmark, {}, body);
var createBookmark = exports.createBookmark = { type: 'CREATE_BOOKMARK', method: 'post', key: 'create_bookmark', required: [] };

// Get bookmark
// Returns the details for a bookmark.
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}
//
// Example:
// return canvasRequest(get_bookmark, {id});
var getBookmark = exports.getBookmark = { type: 'GET_BOOKMARK', method: 'get', key: 'get_bookmarkget_bookmark_id', required: ['id'] };

// Update bookmark
// Updates a bookmark
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}
//
// Example:
// const body = {
//   name
//   url
//   position
//   data
// }
// return canvasRequest(update_bookmark, {id}, body);
var updateBookmark = exports.updateBookmark = { type: 'UPDATE_BOOKMARK', method: 'put', key: 'update_bookmarkupdate_bookmark_id', required: ['id'] };

// Delete bookmark
// Deletes a bookmark
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}
//
// Example:
// return canvasRequest(delete_bookmark, {id});
var deleteBookmark = exports.deleteBookmark = { type: 'DELETE_BOOKMARK', method: 'delete', key: 'delete_bookmarkdelete_bookmark_id', required: ['id'] };