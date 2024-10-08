"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAnnouncements = void 0;
//
// Announcements
//
// List announcements
// Returns the paginated list of announcements for the given courses and date range.  Note that
// a +context_code+ field is added to the responses so you can tell which course each announcement
// belongs to.
//
// API Docs: https://canvas.instructure.com/doc/api/announcements.html
// API Url: announcements
//
// Example:
// const query = {
//   context_codes (required)
//   start_date
//   end_date
//   active_only
//   latest_only
//   include
// }
// return canvasRequest(list_announcements, {, ...query});
exports.listAnnouncements = { type: 'LIST_ANNOUNCEMENTS', method: 'get', key: 'list_announcements', required: [] };
//# sourceMappingURL=announcements.js.map