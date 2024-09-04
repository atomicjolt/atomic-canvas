"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleAssignmentLti = void 0;
//
// Plagiarism Detection Platform Assignments
//
// Get a single assignment (lti)
// Get a single Canvas assignment by Canvas id or LTI id. Tool providers may only access
// assignments that are associated with their tool.
//
// API Docs: https://canvas.instructure.com/doc/api/plagiarism_detection_platform_assignments.html
// API Url: /lti/assignments/{assignment_id}
//
// Example:
// const query = {
//   user_id
// }
// return canvasRequest(get_single_assignment_lti, {assignment_id, ...query});
exports.getSingleAssignmentLti = { type: 'GET_SINGLE_ASSIGNMENT_LTI', method: 'get', key: 'get_single_assignment_ltiget_single_assignment_lti_assignment_id', required: ['assignment_id'] };
//# sourceMappingURL=plagiarism_detection_platform_assignments.js.map