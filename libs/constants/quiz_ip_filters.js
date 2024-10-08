"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailableQuizIpFilters = void 0;
//
// Quiz IP Filters
//
// Get available quiz IP filters.
// Get a list of available IP filters for this Quiz.
// 
// <b>200 OK</b> response code is returned if the request was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_ip_filters.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/ip_filters
//
// Example:
// return canvasRequest(get_available_quiz_ip_filters, {course_id, quiz_id});
exports.getAvailableQuizIpFilters = { type: 'GET_AVAILABLE_QUIZ_IP_FILTERS', method: 'get', key: 'get_available_quiz_ip_filtersget_available_quiz_ip_filters_{course_id}_{quiz_id}', required: ['course_id', 'quiz_id'] };
//# sourceMappingURL=quiz_ip_filters.js.map