"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookmark = exports.updateBookmark = exports.getBookmark = exports.createBookmark = exports.listBookmarks = void 0;
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
exports.listBookmarks = { type: 'LIST_BOOKMARKS', method: 'get', key: 'list_bookmarks', required: [] };
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
exports.createBookmark = { type: 'CREATE_BOOKMARK', method: 'post', key: 'create_bookmark', required: [] };
// Get bookmark
// Returns the details for a bookmark.
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}
//
// Example:
// return canvasRequest(get_bookmark, {id});
exports.getBookmark = { type: 'GET_BOOKMARK', method: 'get', key: 'get_bookmarkget_bookmark_id', required: ['id'] };
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
exports.updateBookmark = { type: 'UPDATE_BOOKMARK', method: 'put', key: 'update_bookmarkupdate_bookmark_id', required: ['id'] };
// Delete bookmark
// Deletes a bookmark
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}
//
// Example:
// return canvasRequest(delete_bookmark, {id});
exports.deleteBookmark = { type: 'DELETE_BOOKMARK', method: 'delete', key: 'delete_bookmarkdelete_bookmark_id', required: ['id'] };
//# sourceMappingURL=bookmarks.js.map