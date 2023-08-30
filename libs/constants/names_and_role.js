"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namesAndRoleListGroupMemberships = exports.listCourseMemberships = void 0;
//
// Names and Role
//
// List Course Memberships
// Return active NamesAndRoleMemberships in the given course.
//
// API Docs: https://canvas.instructure.com/doc/api/names_and_role.html
// API Url: /lti/courses/{course_id}/names_and_roles
//
// Example:
// const query = {
//   rlid
//   role
//   limit
// }
// return canvasRequest(list_course_memberships, {course_id, ...query});
var listCourseMemberships = {
  type: 'LIST_COURSE_MEMBERSHIPS',
  method: 'get',
  key: 'list_course_membershipslist_course_memberships_course_id',
  required: ['course_id']
};

// List Group Memberships
// Return active NamesAndRoleMemberships in the given group.
//
// API Docs: https://canvas.instructure.com/doc/api/names_and_role.html
// API Url: /lti/groups/{group_id}/names_and_roles
//
// Example:
// const query = {
//   `rlid`
//   role
//   limit
// }
// return canvasRequest(names_and_role_list_group_memberships, {group_id, ...query});
exports.listCourseMemberships = listCourseMemberships;
var namesAndRoleListGroupMemberships = {
  type: 'NAMES_AND_ROLE_LIST_GROUP_MEMBERSHIPS',
  method: 'get',
  key: 'names_and_role_list_group_membershipsnames_and_role_list_group_memberships_group_id',
  required: ['group_id']
};
exports.namesAndRoleListGroupMemberships = namesAndRoleListGroupMemberships;