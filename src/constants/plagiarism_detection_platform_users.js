//
// Plagiarism Detection Platform Users
//
// Get a single user (lti)
// Get a single Canvas user by Canvas id or LTI id. Tool providers may only access
// users that have been assigned an assignment associated with their tool.
//
// API Docs: https://canvas.instructure.com/doc/api/plagiarism_detection_platform_users.html
// API Url: /lti/users/{id}
//
// Example:
// return canvasRequest(get_single_user_lti, {id});
export const getSingleUserLti = { type: 'GET_SINGLE_USER_LTI', method: 'get', key: 'get_single_user_ltiget_single_user_lti_id', required: ['id'] };

// Get all users in a group (lti)
// Get all Canvas users in a group. Tool providers may only access
// groups that belong to the context the tool is installed in.
//
// API Docs: https://canvas.instructure.com/doc/api/plagiarism_detection_platform_users.html
// API Url: /lti/groups/{group_id}/users
//
// Example:
// return canvasRequest(get_all_users_in_group_lti, {group_id});
export const getAllUsersInGroupLti = { type: 'GET_ALL_USERS_IN_GROUP_LTI', method: 'get', key: 'get_all_users_in_group_ltiget_all_users_in_group_lti_group_id', required: ['group_id'] };