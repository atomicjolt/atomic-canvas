"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAllCourses = exports.findRecipientsSearch = exports.findRecipientsConversations = void 0;
//
// Search
//
// Find recipients
// Find valid recipients (users, courses and groups) that the current user
// can send messages to. The /api/v1/search/recipients path is the preferred
// endpoint, /api/v1/conversations/find_recipients is deprecated.
// 
// Pagination is supported.
//
// API Docs: https://canvas.instructure.com/doc/api/search.html
// API Url: conversations/find_recipients
//
// Example:
// const query = {
//   search
//   context
//   exclude
//   type
//   user_id
//   from_conversation_id
//   permissions
// }
// return canvasRequest(find_recipients_conversations, {, ...query});
exports.findRecipientsConversations = { type: 'FIND_RECIPIENTS_CONVERSATIONS', method: 'get', key: 'find_recipients_conversations', required: [] };
// Find recipients
// Find valid recipients (users, courses and groups) that the current user
// can send messages to. The /api/v1/search/recipients path is the preferred
// endpoint, /api/v1/conversations/find_recipients is deprecated.
// 
// Pagination is supported.
//
// API Docs: https://canvas.instructure.com/doc/api/search.html
// API Url: search/recipients
//
// Example:
// const query = {
//   search
//   context
//   exclude
//   type
//   user_id
//   from_conversation_id
//   permissions
// }
// return canvasRequest(find_recipients_search, {, ...query});
exports.findRecipientsSearch = { type: 'FIND_RECIPIENTS_SEARCH', method: 'get', key: 'find_recipients_search', required: [] };
// List all courses
// A paginated list of all courses visible in the public index
//
// API Docs: https://canvas.instructure.com/doc/api/search.html
// API Url: search/all_courses
//
// Example:
// const query = {
//   search
//   public_only
//   open_enrollment_only
// }
// return canvasRequest(list_all_courses, {, ...query});
exports.listAllCourses = { type: 'LIST_ALL_COURSES', method: 'get', key: 'list_all_courses', required: [] };
//# sourceMappingURL=search.js.map