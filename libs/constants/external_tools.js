"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeToolFromRceFavorites = exports.listExternalToolsGroups = exports.listExternalToolsCourses = exports.listExternalToolsAccounts = exports.getVisibleCourseNavigationToolsForSingleCourse = exports.getVisibleCourseNavigationTools = exports.getSingleExternalToolCourses = exports.getSingleExternalToolAccounts = exports.getSessionlessLaunchUrlForExternalToolCourses = exports.getSessionlessLaunchUrlForExternalToolAccounts = exports.editExternalToolCourses = exports.editExternalToolAccounts = exports.deleteExternalToolCourses = exports.deleteExternalToolAccounts = exports.createExternalToolCourses = exports.createExternalToolAccounts = exports.addToolToRceFavorites = void 0;
//
// External Tools
//
// List external tools
// Returns the paginated list of external tools for the current context.
// See the get request docs for a single tool for a list of properties on an external tool.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools
//
// Example:
// const query = {
//   search_term
//   selectable
//   include_parents
// }
// return canvasRequest(list_external_tools_courses, {course_id, ...query});
var listExternalToolsCourses = {
  type: 'LIST_EXTERNAL_TOOLS_COURSES',
  method: 'get',
  key: 'list_external_tools_courseslist_external_tools_courses_course_id',
  required: ['course_id']
}; // List external tools
// Returns the paginated list of external tools for the current context.
// See the get request docs for a single tool for a list of properties on an external tool.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools
//
// Example:
// const query = {
//   search_term
//   selectable
//   include_parents
// }
// return canvasRequest(list_external_tools_accounts, {account_id, ...query});

exports.listExternalToolsCourses = listExternalToolsCourses;
var listExternalToolsAccounts = {
  type: 'LIST_EXTERNAL_TOOLS_ACCOUNTS',
  method: 'get',
  key: 'list_external_tools_accountslist_external_tools_accounts_account_id',
  required: ['account_id']
}; // List external tools
// Returns the paginated list of external tools for the current context.
// See the get request docs for a single tool for a list of properties on an external tool.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: groups/{group_id}/external_tools
//
// Example:
// const query = {
//   search_term
//   selectable
//   include_parents
// }
// return canvasRequest(list_external_tools_groups, {group_id, ...query});

exports.listExternalToolsAccounts = listExternalToolsAccounts;
var listExternalToolsGroups = {
  type: 'LIST_EXTERNAL_TOOLS_GROUPS',
  method: 'get',
  key: 'list_external_tools_groupslist_external_tools_groups_group_id',
  required: ['group_id']
}; // Get a sessionless launch url for an external tool.
// Returns a sessionless launch url for an external tool.
// 
// NOTE: Either the id or url must be provided unless launch_type is assessment or module_item.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools/sessionless_launch
//
// Example:
// const query = {
//   id
//   url
//   assignment_id
//   module_item_id
//   launch_type
// }
// return canvasRequest(get_sessionless_launch_url_for_external_tool_courses, {course_id, ...query});

exports.listExternalToolsGroups = listExternalToolsGroups;
var getSessionlessLaunchUrlForExternalToolCourses = {
  type: 'GET_SESSIONLESS_LAUNCH_URL_FOR_EXTERNAL_TOOL_COURSES',
  method: 'get',
  key: 'get_sessionless_launch_url_for_external_tool_coursesget_sessionless_launch_url_for_external_tool_courses_course_id',
  required: ['course_id']
}; // Get a sessionless launch url for an external tool.
// Returns a sessionless launch url for an external tool.
// 
// NOTE: Either the id or url must be provided unless launch_type is assessment or module_item.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools/sessionless_launch
//
// Example:
// const query = {
//   id
//   url
//   assignment_id
//   module_item_id
//   launch_type
// }
// return canvasRequest(get_sessionless_launch_url_for_external_tool_accounts, {account_id, ...query});

exports.getSessionlessLaunchUrlForExternalToolCourses = getSessionlessLaunchUrlForExternalToolCourses;
var getSessionlessLaunchUrlForExternalToolAccounts = {
  type: 'GET_SESSIONLESS_LAUNCH_URL_FOR_EXTERNAL_TOOL_ACCOUNTS',
  method: 'get',
  key: 'get_sessionless_launch_url_for_external_tool_accountsget_sessionless_launch_url_for_external_tool_accounts_account_id',
  required: ['account_id']
}; // Get a single external tool
// Returns the specified external tool.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools/{external_tool_id}
//
// Example:
// return canvasRequest(get_single_external_tool_courses, {course_id, external_tool_id});

exports.getSessionlessLaunchUrlForExternalToolAccounts = getSessionlessLaunchUrlForExternalToolAccounts;
var getSingleExternalToolCourses = {
  type: 'GET_SINGLE_EXTERNAL_TOOL_COURSES',
  method: 'get',
  key: 'get_single_external_tool_coursesget_single_external_tool_courses_{course_id}_{external_tool_id}',
  required: ['course_id', 'external_tool_id']
}; // Get a single external tool
// Returns the specified external tool.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools/{external_tool_id}
//
// Example:
// return canvasRequest(get_single_external_tool_accounts, {account_id, external_tool_id});

exports.getSingleExternalToolCourses = getSingleExternalToolCourses;
var getSingleExternalToolAccounts = {
  type: 'GET_SINGLE_EXTERNAL_TOOL_ACCOUNTS',
  method: 'get',
  key: 'get_single_external_tool_accountsget_single_external_tool_accounts_{account_id}_{external_tool_id}',
  required: ['account_id', 'external_tool_id']
}; // Create an external tool
// Create an external tool in the specified course/account.
// The created tool will be returned, see the "show" endpoint for an example.
// If a client ID is supplied canvas will attempt to create a context external
// tool using the LTI 1.3 standard.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools
//
// Example:
// const body = {
//   client_id (required)
//   name (required)
//   privacy_level (required)
//   consumer_key (required)
//   shared_secret (required)
//   description
//   url
//   domain
//   icon_url
//   text
//   custom_fields[field_name]
//   is_rce_favorite
//   account_navigation[url]
//   account_navigation[enabled]
//   account_navigation[text]
//   account_navigation[selection_width]
//   account_navigation[selection_height]
//   account_navigation[display_type]
//   user_navigation[url]
//   user_navigation[enabled]
//   user_navigation[text]
//   user_navigation[visibility]
//   course_home_sub_navigation[url]
//   course_home_sub_navigation[enabled]
//   course_home_sub_navigation[text]
//   course_home_sub_navigation[icon_url]
//   course_navigation[enabled]
//   course_navigation[text]
//   course_navigation[visibility]
//   course_navigation[windowTarget]
//   course_navigation[default]
//   course_navigation[display_type]
//   editor_button[url]
//   editor_button[enabled]
//   editor_button[icon_url]
//   editor_button[selection_width]
//   editor_button[selection_height]
//   editor_button[message_type]
//   homework_submission[url]
//   homework_submission[enabled]
//   homework_submission[text]
//   homework_submission[message_type]
//   link_selection[url]
//   link_selection[enabled]
//   link_selection[text]
//   link_selection[message_type]
//   migration_selection[url]
//   migration_selection[enabled]
//   migration_selection[message_type]
//   tool_configuration[url]
//   tool_configuration[enabled]
//   tool_configuration[message_type]
//   tool_configuration[prefer_sis_email]
//   resource_selection[url]
//   resource_selection[enabled]
//   resource_selection[icon_url]
//   resource_selection[selection_width]
//   resource_selection[selection_height]
//   config_type
//   config_xml
//   config_url
//   not_selectable
//   oauth_compliant
// }
// return canvasRequest(create_external_tool_courses, {course_id}, body);

exports.getSingleExternalToolAccounts = getSingleExternalToolAccounts;
var createExternalToolCourses = {
  type: 'CREATE_EXTERNAL_TOOL_COURSES',
  method: 'post',
  key: 'create_external_tool_coursescreate_external_tool_courses_course_id',
  required: ['course_id']
}; // Create an external tool
// Create an external tool in the specified course/account.
// The created tool will be returned, see the "show" endpoint for an example.
// If a client ID is supplied canvas will attempt to create a context external
// tool using the LTI 1.3 standard.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools
//
// Example:
// const body = {
//   client_id (required)
//   name (required)
//   privacy_level (required)
//   consumer_key (required)
//   shared_secret (required)
//   description
//   url
//   domain
//   icon_url
//   text
//   custom_fields[field_name]
//   is_rce_favorite
//   account_navigation[url]
//   account_navigation[enabled]
//   account_navigation[text]
//   account_navigation[selection_width]
//   account_navigation[selection_height]
//   account_navigation[display_type]
//   user_navigation[url]
//   user_navigation[enabled]
//   user_navigation[text]
//   user_navigation[visibility]
//   course_home_sub_navigation[url]
//   course_home_sub_navigation[enabled]
//   course_home_sub_navigation[text]
//   course_home_sub_navigation[icon_url]
//   course_navigation[enabled]
//   course_navigation[text]
//   course_navigation[visibility]
//   course_navigation[windowTarget]
//   course_navigation[default]
//   course_navigation[display_type]
//   editor_button[url]
//   editor_button[enabled]
//   editor_button[icon_url]
//   editor_button[selection_width]
//   editor_button[selection_height]
//   editor_button[message_type]
//   homework_submission[url]
//   homework_submission[enabled]
//   homework_submission[text]
//   homework_submission[message_type]
//   link_selection[url]
//   link_selection[enabled]
//   link_selection[text]
//   link_selection[message_type]
//   migration_selection[url]
//   migration_selection[enabled]
//   migration_selection[message_type]
//   tool_configuration[url]
//   tool_configuration[enabled]
//   tool_configuration[message_type]
//   tool_configuration[prefer_sis_email]
//   resource_selection[url]
//   resource_selection[enabled]
//   resource_selection[icon_url]
//   resource_selection[selection_width]
//   resource_selection[selection_height]
//   config_type
//   config_xml
//   config_url
//   not_selectable
//   oauth_compliant
// }
// return canvasRequest(create_external_tool_accounts, {account_id}, body);

exports.createExternalToolCourses = createExternalToolCourses;
var createExternalToolAccounts = {
  type: 'CREATE_EXTERNAL_TOOL_ACCOUNTS',
  method: 'post',
  key: 'create_external_tool_accountscreate_external_tool_accounts_account_id',
  required: ['account_id']
}; // Edit an external tool
// Update the specified external tool. Uses same parameters as create
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools/{external_tool_id}
//
// Example:
// return canvasRequest(edit_external_tool_courses, {course_id, external_tool_id});

exports.createExternalToolAccounts = createExternalToolAccounts;
var editExternalToolCourses = {
  type: 'EDIT_EXTERNAL_TOOL_COURSES',
  method: 'put',
  key: 'edit_external_tool_coursesedit_external_tool_courses_{course_id}_{external_tool_id}',
  required: ['course_id', 'external_tool_id']
}; // Edit an external tool
// Update the specified external tool. Uses same parameters as create
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools/{external_tool_id}
//
// Example:
// return canvasRequest(edit_external_tool_accounts, {account_id, external_tool_id});

exports.editExternalToolCourses = editExternalToolCourses;
var editExternalToolAccounts = {
  type: 'EDIT_EXTERNAL_TOOL_ACCOUNTS',
  method: 'put',
  key: 'edit_external_tool_accountsedit_external_tool_accounts_{account_id}_{external_tool_id}',
  required: ['account_id', 'external_tool_id']
}; // Delete an external tool
// Remove the specified external tool
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools/{external_tool_id}
//
// Example:
// return canvasRequest(delete_external_tool_courses, {course_id, external_tool_id});

exports.editExternalToolAccounts = editExternalToolAccounts;
var deleteExternalToolCourses = {
  type: 'DELETE_EXTERNAL_TOOL_COURSES',
  method: 'delete',
  key: 'delete_external_tool_coursesdelete_external_tool_courses_{course_id}_{external_tool_id}',
  required: ['course_id', 'external_tool_id']
}; // Delete an external tool
// Remove the specified external tool
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools/{external_tool_id}
//
// Example:
// return canvasRequest(delete_external_tool_accounts, {account_id, external_tool_id});

exports.deleteExternalToolCourses = deleteExternalToolCourses;
var deleteExternalToolAccounts = {
  type: 'DELETE_EXTERNAL_TOOL_ACCOUNTS',
  method: 'delete',
  key: 'delete_external_tool_accountsdelete_external_tool_accounts_{account_id}_{external_tool_id}',
  required: ['account_id', 'external_tool_id']
}; // Add tool to RCE Favorites
// Add the specified editor_button external tool to a preferred location in the RCE
// for courses in the given account and its subaccounts (if the subaccounts
// haven't set their own RCE Favorites). Cannot set more than 2 RCE Favorites.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools/rce_favorites/{id}
//
// Example:
// return canvasRequest(add_tool_to_rce_favorites, {account_id, id});

exports.deleteExternalToolAccounts = deleteExternalToolAccounts;
var addToolToRceFavorites = {
  type: 'ADD_TOOL_TO_RCE_FAVORITES',
  method: 'post',
  key: 'add_tool_to_rce_favoritesadd_tool_to_rce_favorites_{account_id}_{id}',
  required: ['account_id', 'id']
}; // Remove tool from RCE Favorites
// Remove the specified external tool from a preferred location in the RCE
// for the given account
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools/rce_favorites/{id}
//
// Example:
// return canvasRequest(remove_tool_from_rce_favorites, {account_id, id});

exports.addToolToRceFavorites = addToolToRceFavorites;
var removeToolFromRceFavorites = {
  type: 'REMOVE_TOOL_FROM_RCE_FAVORITES',
  method: 'delete',
  key: 'remove_tool_from_rce_favoritesremove_tool_from_rce_favorites_{account_id}_{id}',
  required: ['account_id', 'id']
}; // Get visible course navigation tools
// Get a list of external tools with the course_navigation placement that have not been hidden in
// course settings and whose visibility settings apply to the requesting user. These tools are the
// same that appear in the course navigation.
// 
// The response format is the same as for List external tools, but with additional context_id and
// context_name fields on each element in the array.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: external_tools/visible_course_nav_tools
//
// Example:
// const query = {
//   context_codes (required)
// }
// return canvasRequest(get_visible_course_navigation_tools, {, ...query});

exports.removeToolFromRceFavorites = removeToolFromRceFavorites;
var getVisibleCourseNavigationTools = {
  type: 'GET_VISIBLE_COURSE_NAVIGATION_TOOLS',
  method: 'get',
  key: 'get_visible_course_navigation_tools',
  required: []
}; // Get visible course navigation tools for a single course
// Get a list of external tools with the course_navigation placement that have not been hidden in
// course settings and whose visibility settings apply to the requesting user. These tools are the
// same that appear in the course navigation.
// 
// The response format is the same as Get visible course navigation tools.
//
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools/visible_course_nav_tools
//
// Example:
// return canvasRequest(get_visible_course_navigation_tools_for_single_course, {course_id});

exports.getVisibleCourseNavigationTools = getVisibleCourseNavigationTools;
var getVisibleCourseNavigationToolsForSingleCourse = {
  type: 'GET_VISIBLE_COURSE_NAVIGATION_TOOLS_FOR_SINGLE_COURSE',
  method: 'get',
  key: 'get_visible_course_navigation_tools_for_single_courseget_visible_course_navigation_tools_for_single_course_course_id',
  required: ['course_id']
};
exports.getVisibleCourseNavigationToolsForSingleCourse = getVisibleCourseNavigationToolsForSingleCourse;