'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Collaborations
//
// List collaborations
// A paginated list of collaborations the current user has access to in the
// context of the course provided in the url. NOTE: this only returns
// ExternalToolCollaboration type collaborations.
// 
//   curl https://<canvas>/api/v1/courses/1/collaborations/
//
// API Docs: https://canvas.instructure.com/doc/api/collaborations.html
// API Url: courses/{course_id}/collaborations
//
// Example:
// return canvasRequest(list_collaborations_courses, {course_id});
var listCollaborationsCourses = exports.listCollaborationsCourses = { type: 'LIST_COLLABORATIONS_COURSES', method: 'get', key: 'list_collaborations_courseslist_collaborations_courses_course_id', required: ['course_id'] };

// List collaborations
// A paginated list of collaborations the current user has access to in the
// context of the course provided in the url. NOTE: this only returns
// ExternalToolCollaboration type collaborations.
// 
//   curl https://<canvas>/api/v1/courses/1/collaborations/
//
// API Docs: https://canvas.instructure.com/doc/api/collaborations.html
// API Url: groups/{group_id}/collaborations
//
// Example:
// return canvasRequest(list_collaborations_groups, {group_id});
var listCollaborationsGroups = exports.listCollaborationsGroups = { type: 'LIST_COLLABORATIONS_GROUPS', method: 'get', key: 'list_collaborations_groupslist_collaborations_groups_group_id', required: ['group_id'] };

// List members of a collaboration.
// A paginated list of the collaborators of a given collaboration
//
// API Docs: https://canvas.instructure.com/doc/api/collaborations.html
// API Url: collaborations/{id}/members
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_members_of_collaboration, {id, ...query});
var listMembersOfCollaboration = exports.listMembersOfCollaboration = { type: 'LIST_MEMBERS_OF_COLLABORATION', method: 'get', key: 'list_members_of_collaborationlist_members_of_collaboration_id', required: ['id'] };

// List potential members
// A paginated list of the users who can potentially be added to a
// collaboration in the given context.
// 
// For courses, this consists of all enrolled users.  For groups, it is comprised of the
// group members plus the admins of the course containing the group.
//
// API Docs: https://canvas.instructure.com/doc/api/collaborations.html
// API Url: courses/{course_id}/potential_collaborators
//
// Example:
// return canvasRequest(list_potential_members_courses, {course_id});
var listPotentialMembersCourses = exports.listPotentialMembersCourses = { type: 'LIST_POTENTIAL_MEMBERS_COURSES', method: 'get', key: 'list_potential_members_courseslist_potential_members_courses_course_id', required: ['course_id'] };

// List potential members
// A paginated list of the users who can potentially be added to a
// collaboration in the given context.
// 
// For courses, this consists of all enrolled users.  For groups, it is comprised of the
// group members plus the admins of the course containing the group.
//
// API Docs: https://canvas.instructure.com/doc/api/collaborations.html
// API Url: groups/{group_id}/potential_collaborators
//
// Example:
// return canvasRequest(list_potential_members_groups, {group_id});
var listPotentialMembersGroups = exports.listPotentialMembersGroups = { type: 'LIST_POTENTIAL_MEMBERS_GROUPS', method: 'get', key: 'list_potential_members_groupslist_potential_members_groups_group_id', required: ['group_id'] };