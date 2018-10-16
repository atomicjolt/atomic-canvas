'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Groups
//
// List your groups
// Returns a paginated list of active groups for the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: users/self/groups
//
// Example:
// const query = {
//   context_type
//   include
// }
// return canvasRequest(list_your_groups, {, ...query});
var listYourGroups = exports.listYourGroups = { type: 'LIST_YOUR_GROUPS', method: 'get', key: 'list_your_groups', required: [] };

// List the groups available in a context.
// Returns the paginated list of active groups in the given context that are visible to user.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: accounts/{account_id}/groups
//
// Example:
// const query = {
//   only_own_groups
//   include
// }
// return canvasRequest(list_groups_available_in_context_accounts, {account_id, ...query});
var listGroupsAvailableInContextAccounts = exports.listGroupsAvailableInContextAccounts = { type: 'LIST_GROUPS_AVAILABLE_IN_CONTEXT_ACCOUNTS', method: 'get', key: 'list_groups_available_in_context_accountslist_groups_available_in_context_accounts_account_id', required: ['account_id'] };

// List the groups available in a context.
// Returns the paginated list of active groups in the given context that are visible to user.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: courses/{course_id}/groups
//
// Example:
// const query = {
//   only_own_groups
//   include
// }
// return canvasRequest(list_groups_available_in_context_courses, {course_id, ...query});
var listGroupsAvailableInContextCourses = exports.listGroupsAvailableInContextCourses = { type: 'LIST_GROUPS_AVAILABLE_IN_CONTEXT_COURSES', method: 'get', key: 'list_groups_available_in_context_courseslist_groups_available_in_context_courses_course_id', required: ['course_id'] };

// Get a single group
// Returns the data for a single group, or a 401 if the caller doesn't have
// the rights to see it.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_single_group, {group_id, ...query});
var getSingleGroup = exports.getSingleGroup = { type: 'GET_SINGLE_GROUP', method: 'get', key: 'get_single_groupget_single_group_group_id', required: ['group_id'] };

// Create a group
// Creates a new group. Groups created using the "/api/v1/groups/"
// endpoint will be community groups.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups
//
// Example:
// const body = {
//   name
//   description
//   is_public
//   join_level
//   storage_quota_mb
//   sis_group_id
// }
// return canvasRequest(create_group_groups, {}, body);
var createGroupGroups = exports.createGroupGroups = { type: 'CREATE_GROUP_GROUPS', method: 'post', key: 'create_group_groups', required: [] };

// Create a group
// Creates a new group. Groups created using the "/api/v1/groups/"
// endpoint will be community groups.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: group_categories/{group_category_id}/groups
//
// Example:
// const body = {
//   name
//   description
//   is_public
//   join_level
//   storage_quota_mb
//   sis_group_id
// }
// return canvasRequest(create_group_group_categories, {group_category_id}, body);
var createGroupGroupCategories = exports.createGroupGroupCategories = { type: 'CREATE_GROUP_GROUP_CATEGORIES', method: 'post', key: 'create_group_group_categoriescreate_group_group_categories_group_category_id', required: ['group_category_id'] };

// Edit a group
// Modifies an existing group.  Note that to set an avatar image for the
// group, you must first upload the image file to the group, and the use the
// id in the response as the argument to this function.  See the
// {file:file_uploads.html File Upload Documentation} for details on the file
// upload workflow.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}
//
// Example:
// const body = {
//   name
//   description
//   is_public
//   join_level
//   avatar_id
//   storage_quota_mb
//   members
//   sis_group_id
// }
// return canvasRequest(edit_group, {group_id}, body);
var editGroup = exports.editGroup = { type: 'EDIT_GROUP', method: 'put', key: 'edit_groupedit_group_group_id', required: ['group_id'] };

// Delete a group
// Deletes a group and removes all members.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}
//
// Example:
// return canvasRequest(delete_group, {group_id});
var deleteGroup = exports.deleteGroup = { type: 'DELETE_GROUP', method: 'delete', key: 'delete_groupdelete_group_group_id', required: ['group_id'] };

// Invite others to a group
// Sends an invitation to all supplied email addresses which will allow the
// receivers to join the group.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/invite
//
// Example:
// const body = {
//   invitees (required)
// }
// return canvasRequest(invite_others_to_group, {group_id}, body);
var inviteOthersToGroup = exports.inviteOthersToGroup = { type: 'INVITE_OTHERS_TO_GROUP', method: 'post', key: 'invite_others_to_groupinvite_others_to_group_group_id', required: ['group_id'] };

// List group's users
// Returns a paginated list of users in the group.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users
//
// Example:
// const query = {
//   search_term
//   include
// }
// return canvasRequest(list_group_s_users, {group_id, ...query});
var listGroupSUsers = exports.listGroupSUsers = { type: 'LIST_GROUP_S_USERS', method: 'get', key: 'list_group_s_userslist_group_s_users_group_id', required: ['group_id'] };

// Upload a file
// Upload a file to the group.
// 
// This API endpoint is the first step in uploading a file to a group.
// See the {file:file_uploads.html File Upload Documentation} for details on
// the file upload workflow.
// 
// Only those with the "Manage Files" permission on a group can upload files
// to the group. By default, this is anybody participating in the
// group, or any admin over the group.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/files
//
// Example:
// return canvasRequest(groups_upload_file, {group_id});
var groupsUploadFile = exports.groupsUploadFile = { type: 'GROUPS_UPLOAD_FILE', method: 'post', key: 'groups_upload_filegroups_upload_file_group_id', required: ['group_id'] };

// Preview processed html
// Preview html content processed for this group
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/preview_html
//
// Example:
// const body = {
//   html
// }
// return canvasRequest(groups_preview_processed_html, {group_id}, body);
var groupsPreviewProcessedHtml = exports.groupsPreviewProcessedHtml = { type: 'GROUPS_PREVIEW_PROCESSED_HTML', method: 'post', key: 'groups_preview_processed_htmlgroups_preview_processed_html_group_id', required: ['group_id'] };

// Group activity stream
// Returns the current user's group-specific activity stream, paginated.
// 
// For full documentation, see the API documentation for the user activity
// stream, in the user api.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/activity_stream
//
// Example:
// return canvasRequest(group_activity_stream, {group_id});
var groupActivityStream = exports.groupActivityStream = { type: 'GROUP_ACTIVITY_STREAM', method: 'get', key: 'group_activity_streamgroup_activity_stream_group_id', required: ['group_id'] };

// Group activity stream summary
// Returns a summary of the current user's group-specific activity stream.
// 
// For full documentation, see the API documentation for the user activity
// stream summary, in the user api.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/activity_stream/summary
//
// Example:
// return canvasRequest(group_activity_stream_summary, {group_id});
var groupActivityStreamSummary = exports.groupActivityStreamSummary = { type: 'GROUP_ACTIVITY_STREAM_SUMMARY', method: 'get', key: 'group_activity_stream_summarygroup_activity_stream_summary_group_id', required: ['group_id'] };

// Permissions
// Returns permission information for the calling user in the given group.
// See also the {api:AccountsController#permissions Account} and
// {api:CoursesController#permissions Course} counterparts.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/permissions
//
// Example:
// const query = {
//   permissions
// }
// return canvasRequest(permissions, {group_id, ...query});
var permissions = exports.permissions = { type: 'PERMISSIONS', method: 'get', key: 'permissionspermissions_group_id', required: ['group_id'] };

// List group memberships
// A paginated list of the members of a group.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships
//
// Example:
// const query = {
//   filter_states
// }
// return canvasRequest(list_group_memberships, {group_id, ...query});
var listGroupMemberships = exports.listGroupMemberships = { type: 'LIST_GROUP_MEMBERSHIPS', method: 'get', key: 'list_group_membershipslist_group_memberships_group_id', required: ['group_id'] };

// Get a single group membership
// Returns the group membership with the given membership id or user id.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships/{membership_id}
//
// Example:
// return canvasRequest(get_single_group_membership_memberships, {group_id, membership_id});
var getSingleGroupMembershipMemberships = exports.getSingleGroupMembershipMemberships = { type: 'GET_SINGLE_GROUP_MEMBERSHIP_MEMBERSHIPS', method: 'get', key: 'get_single_group_membership_membershipsget_single_group_membership_memberships_{group_id}_{membership_id}', required: ['group_id', 'membership_id'] };

// Get a single group membership
// Returns the group membership with the given membership id or user id.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users/{user_id}
//
// Example:
// return canvasRequest(get_single_group_membership_users, {group_id, user_id});
var getSingleGroupMembershipUsers = exports.getSingleGroupMembershipUsers = { type: 'GET_SINGLE_GROUP_MEMBERSHIP_USERS', method: 'get', key: 'get_single_group_membership_usersget_single_group_membership_users_{group_id}_{user_id}', required: ['group_id', 'user_id'] };

// Create a membership
// Join, or request to join, a group, depending on the join_level of the
// group.  If the membership or join request already exists, then it is simply
// returned
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships
//
// Example:
// const body = {
//   user_id
// }
// return canvasRequest(create_membership, {group_id}, body);
var createMembership = exports.createMembership = { type: 'CREATE_MEMBERSHIP', method: 'post', key: 'create_membershipcreate_membership_group_id', required: ['group_id'] };

// Update a membership
// Accept a membership request, or add/remove moderator rights.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships/{membership_id}
//
// Example:
// const body = {
//   workflow_state
//   moderator
// }
// return canvasRequest(update_membership_memberships, {group_id, membership_id}, body);
var updateMembershipMemberships = exports.updateMembershipMemberships = { type: 'UPDATE_MEMBERSHIP_MEMBERSHIPS', method: 'put', key: 'update_membership_membershipsupdate_membership_memberships_{group_id}_{membership_id}', required: ['group_id', 'membership_id'] };

// Update a membership
// Accept a membership request, or add/remove moderator rights.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users/{user_id}
//
// Example:
// const body = {
//   workflow_state
//   moderator
// }
// return canvasRequest(update_membership_users, {group_id, user_id}, body);
var updateMembershipUsers = exports.updateMembershipUsers = { type: 'UPDATE_MEMBERSHIP_USERS', method: 'put', key: 'update_membership_usersupdate_membership_users_{group_id}_{user_id}', required: ['group_id', 'user_id'] };

// Leave a group
// Leave a group if you are allowed to leave (some groups, such as sets of
// course groups created by teachers, cannot be left). You may also use 'self'
// in place of a membership_id.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships/{membership_id}
//
// Example:
// return canvasRequest(leave_group_memberships, {group_id, membership_id});
var leaveGroupMemberships = exports.leaveGroupMemberships = { type: 'LEAVE_GROUP_MEMBERSHIPS', method: 'delete', key: 'leave_group_membershipsleave_group_memberships_{group_id}_{membership_id}', required: ['group_id', 'membership_id'] };

// Leave a group
// Leave a group if you are allowed to leave (some groups, such as sets of
// course groups created by teachers, cannot be left). You may also use 'self'
// in place of a membership_id.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users/{user_id}
//
// Example:
// return canvasRequest(leave_group_users, {group_id, user_id});
var leaveGroupUsers = exports.leaveGroupUsers = { type: 'LEAVE_GROUP_USERS', method: 'delete', key: 'leave_group_usersleave_group_users_{group_id}_{user_id}', required: ['group_id', 'user_id'] };