//
// Group Categories
//
// List group categories for a context
// Returns a paginated list of group categories in a context
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: accounts/{account_id}/group_categories
//
// Example:
// return canvasRequest(list_group_categories_for_context_accounts, {account_id});
export const listGroupCategoriesForContextAccounts = { type: 'LIST_GROUP_CATEGORIES_FOR_CONTEXT_ACCOUNTS', method: 'get', key: 'list_group_categories_for_context_accountslist_group_categories_for_context_accounts_account_id', required: ['account_id'] };

// List group categories for a context
// Returns a paginated list of group categories in a context
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: courses/{course_id}/group_categories
//
// Example:
// return canvasRequest(list_group_categories_for_context_courses, {course_id});
export const listGroupCategoriesForContextCourses = { type: 'LIST_GROUP_CATEGORIES_FOR_CONTEXT_COURSES', method: 'get', key: 'list_group_categories_for_context_courseslist_group_categories_for_context_courses_course_id', required: ['course_id'] };

// Get a single group category
// Returns the data for a single group category, or a 401 if the caller doesn't have
// the rights to see it.
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}
//
// Example:
// return canvasRequest(get_single_group_category, {group_category_id});
export const getSingleGroupCategory = { type: 'GET_SINGLE_GROUP_CATEGORY', method: 'get', key: 'get_single_group_categoryget_single_group_category_group_category_id', required: ['group_category_id'] };

// Create a Group Category
// Create a new group category
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: accounts/{account_id}/group_categories
//
// Example:
// const body = {
//   name (required)
//   self_signup
//   auto_leader
//   group_limit
//   sis_group_category_id
//   create_group_count
//   split_group_count
// }
// return canvasRequest(create_group_category_accounts, {account_id}, body);
export const createGroupCategoryAccounts = { type: 'CREATE_GROUP_CATEGORY_ACCOUNTS', method: 'post', key: 'create_group_category_accountscreate_group_category_accounts_account_id', required: ['account_id'] };

// Create a Group Category
// Create a new group category
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: courses/{course_id}/group_categories
//
// Example:
// const body = {
//   name (required)
//   self_signup
//   auto_leader
//   group_limit
//   sis_group_category_id
//   create_group_count
//   split_group_count
// }
// return canvasRequest(create_group_category_courses, {course_id}, body);
export const createGroupCategoryCourses = { type: 'CREATE_GROUP_CATEGORY_COURSES', method: 'post', key: 'create_group_category_coursescreate_group_category_courses_course_id', required: ['course_id'] };

// Import category groups
// Create Groups in a Group Category through a CSV import
// 
// For more information on the format that's expected here, please see the
// "Group Category CSV" section in the API docs.
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/import
//
// Example:
// const body = {
//   attachment
// }
// return canvasRequest(import_category_groups, {group_category_id}, body);
export const importCategoryGroups = { type: 'IMPORT_CATEGORY_GROUPS', method: 'post', key: 'import_category_groupsimport_category_groups_group_category_id', required: ['group_category_id'] };

// Update a Group Category
// Modifies an existing group category.
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}
//
// Example:
// const body = {
//   name
//   self_signup
//   auto_leader
//   group_limit
//   sis_group_category_id
//   create_group_count
//   split_group_count
// }
// return canvasRequest(update_group_category, {group_category_id}, body);
export const updateGroupCategory = { type: 'UPDATE_GROUP_CATEGORY', method: 'put', key: 'update_group_categoryupdate_group_category_group_category_id', required: ['group_category_id'] };

// Delete a Group Category
// Deletes a group category and all groups under it. Protected group
// categories can not be deleted, i.e. "communities" and "student_organized".
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}
//
// Example:
// return canvasRequest(delete_group_category, {group_category_id});
export const deleteGroupCategory = { type: 'DELETE_GROUP_CATEGORY', method: 'delete', key: 'delete_group_categorydelete_group_category_group_category_id', required: ['group_category_id'] };

// List groups in group category
// Returns a paginated list of groups in a group category
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/groups
//
// Example:
// return canvasRequest(list_groups_in_group_category, {group_category_id});
export const listGroupsInGroupCategory = { type: 'LIST_GROUPS_IN_GROUP_CATEGORY', method: 'get', key: 'list_groups_in_group_categorylist_groups_in_group_category_group_category_id', required: ['group_category_id'] };

// export groups in and users in category
// Returns a csv file of users in format ready to import.
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/export
//
// Example:
// return canvasRequest(export_groups_in_and_users_in_category, {group_category_id});
export const exportGroupsInAndUsersInCategory = { type: 'EXPORT_GROUPS_IN_AND_USERS_IN_CATEGORY', method: 'get', key: 'export_groups_in_and_users_in_categoryexport_groups_in_and_users_in_category_group_category_id', required: ['group_category_id'] };

// List users in group category
// Returns a paginated list of users in the group category.
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/users
//
// Example:
// const query = {
//   search_term
//   unassigned
// }
// return canvasRequest(list_users_in_group_category, {group_category_id, ...query});
export const listUsersInGroupCategory = { type: 'LIST_USERS_IN_GROUP_CATEGORY', method: 'get', key: 'list_users_in_group_categorylist_users_in_group_category_group_category_id', required: ['group_category_id'] };

// Assign unassigned members
// Assign all unassigned members as evenly as possible among the existing
// student groups.
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/assign_unassigned_members
//
// Example:
// const body = {
//   sync
// }
// return canvasRequest(assign_unassigned_members, {group_category_id}, body);
export const assignUnassignedMembers = { type: 'ASSIGN_UNASSIGNED_MEMBERS', method: 'post', key: 'assign_unassigned_membersassign_unassigned_members_group_category_id', required: ['group_category_id'] };