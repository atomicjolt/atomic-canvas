'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Content Migrations
//
// List migration issues
// Returns paginated migration issues
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues
//
// Example:
// return canvasRequest(list_migration_issues_accounts, {account_id, content_migration_id});
var listMigrationIssuesAccounts = exports.listMigrationIssuesAccounts = { type: 'LIST_MIGRATION_ISSUES_ACCOUNTS', method: 'get', key: 'list_migration_issues_accountslist_migration_issues_accounts_{account_id}_{content_migration_id}', required: ['account_id', 'content_migration_id'] };

// List migration issues
// Returns paginated migration issues
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{content_migration_id}/migration_issues
//
// Example:
// return canvasRequest(list_migration_issues_courses, {course_id, content_migration_id});
var listMigrationIssuesCourses = exports.listMigrationIssuesCourses = { type: 'LIST_MIGRATION_ISSUES_COURSES', method: 'get', key: 'list_migration_issues_courseslist_migration_issues_courses_{course_id}_{content_migration_id}', required: ['course_id', 'content_migration_id'] };

// List migration issues
// Returns paginated migration issues
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{content_migration_id}/migration_issues
//
// Example:
// return canvasRequest(list_migration_issues_groups, {group_id, content_migration_id});
var listMigrationIssuesGroups = exports.listMigrationIssuesGroups = { type: 'LIST_MIGRATION_ISSUES_GROUPS', method: 'get', key: 'list_migration_issues_groupslist_migration_issues_groups_{group_id}_{content_migration_id}', required: ['group_id', 'content_migration_id'] };

// List migration issues
// Returns paginated migration issues
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{content_migration_id}/migration_issues
//
// Example:
// return canvasRequest(list_migration_issues_users, {user_id, content_migration_id});
var listMigrationIssuesUsers = exports.listMigrationIssuesUsers = { type: 'LIST_MIGRATION_ISSUES_USERS', method: 'get', key: 'list_migration_issues_userslist_migration_issues_users_{user_id}_{content_migration_id}', required: ['user_id', 'content_migration_id'] };

// Get a migration issue
// Returns data on an individual migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// return canvasRequest(get_migration_issue_accounts, {account_id, content_migration_id, id});
var getMigrationIssueAccounts = exports.getMigrationIssueAccounts = { type: 'GET_MIGRATION_ISSUE_ACCOUNTS', method: 'get', key: 'get_migration_issue_accountsget_migration_issue_accounts_{account_id}_{content_migration_id}_{id}', required: ['account_id', 'content_migration_id', 'id'] };

// Get a migration issue
// Returns data on an individual migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// return canvasRequest(get_migration_issue_courses, {course_id, content_migration_id, id});
var getMigrationIssueCourses = exports.getMigrationIssueCourses = { type: 'GET_MIGRATION_ISSUE_COURSES', method: 'get', key: 'get_migration_issue_coursesget_migration_issue_courses_{course_id}_{content_migration_id}_{id}', required: ['course_id', 'content_migration_id', 'id'] };

// Get a migration issue
// Returns data on an individual migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// return canvasRequest(get_migration_issue_groups, {group_id, content_migration_id, id});
var getMigrationIssueGroups = exports.getMigrationIssueGroups = { type: 'GET_MIGRATION_ISSUE_GROUPS', method: 'get', key: 'get_migration_issue_groupsget_migration_issue_groups_{group_id}_{content_migration_id}_{id}', required: ['group_id', 'content_migration_id', 'id'] };

// Get a migration issue
// Returns data on an individual migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// return canvasRequest(get_migration_issue_users, {user_id, content_migration_id, id});
var getMigrationIssueUsers = exports.getMigrationIssueUsers = { type: 'GET_MIGRATION_ISSUE_USERS', method: 'get', key: 'get_migration_issue_usersget_migration_issue_users_{user_id}_{content_migration_id}_{id}', required: ['user_id', 'content_migration_id', 'id'] };

// Update a migration issue
// Update the workflow_state of a migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// const body = {
//   workflow_state (required)
// }
// return canvasRequest(update_migration_issue_accounts, {account_id, content_migration_id, id}, body);
var updateMigrationIssueAccounts = exports.updateMigrationIssueAccounts = { type: 'UPDATE_MIGRATION_ISSUE_ACCOUNTS', method: 'put', key: 'update_migration_issue_accountsupdate_migration_issue_accounts_{account_id}_{content_migration_id}_{id}', required: ['account_id', 'content_migration_id', 'id'] };

// Update a migration issue
// Update the workflow_state of a migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// const body = {
//   workflow_state (required)
// }
// return canvasRequest(update_migration_issue_courses, {course_id, content_migration_id, id}, body);
var updateMigrationIssueCourses = exports.updateMigrationIssueCourses = { type: 'UPDATE_MIGRATION_ISSUE_COURSES', method: 'put', key: 'update_migration_issue_coursesupdate_migration_issue_courses_{course_id}_{content_migration_id}_{id}', required: ['course_id', 'content_migration_id', 'id'] };

// Update a migration issue
// Update the workflow_state of a migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// const body = {
//   workflow_state (required)
// }
// return canvasRequest(update_migration_issue_groups, {group_id, content_migration_id, id}, body);
var updateMigrationIssueGroups = exports.updateMigrationIssueGroups = { type: 'UPDATE_MIGRATION_ISSUE_GROUPS', method: 'put', key: 'update_migration_issue_groupsupdate_migration_issue_groups_{group_id}_{content_migration_id}_{id}', required: ['group_id', 'content_migration_id', 'id'] };

// Update a migration issue
// Update the workflow_state of a migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// const body = {
//   workflow_state (required)
// }
// return canvasRequest(update_migration_issue_users, {user_id, content_migration_id, id}, body);
var updateMigrationIssueUsers = exports.updateMigrationIssueUsers = { type: 'UPDATE_MIGRATION_ISSUE_USERS', method: 'put', key: 'update_migration_issue_usersupdate_migration_issue_users_{user_id}_{content_migration_id}_{id}', required: ['user_id', 'content_migration_id', 'id'] };

// List content migrations
// Returns paginated content migrations
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations
//
// Example:
// return canvasRequest(list_content_migrations_accounts, {account_id});
var listContentMigrationsAccounts = exports.listContentMigrationsAccounts = { type: 'LIST_CONTENT_MIGRATIONS_ACCOUNTS', method: 'get', key: 'list_content_migrations_accountslist_content_migrations_accounts_account_id', required: ['account_id'] };

// List content migrations
// Returns paginated content migrations
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations
//
// Example:
// return canvasRequest(list_content_migrations_courses, {course_id});
var listContentMigrationsCourses = exports.listContentMigrationsCourses = { type: 'LIST_CONTENT_MIGRATIONS_COURSES', method: 'get', key: 'list_content_migrations_courseslist_content_migrations_courses_course_id', required: ['course_id'] };

// List content migrations
// Returns paginated content migrations
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations
//
// Example:
// return canvasRequest(list_content_migrations_groups, {group_id});
var listContentMigrationsGroups = exports.listContentMigrationsGroups = { type: 'LIST_CONTENT_MIGRATIONS_GROUPS', method: 'get', key: 'list_content_migrations_groupslist_content_migrations_groups_group_id', required: ['group_id'] };

// List content migrations
// Returns paginated content migrations
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations
//
// Example:
// return canvasRequest(list_content_migrations_users, {user_id});
var listContentMigrationsUsers = exports.listContentMigrationsUsers = { type: 'LIST_CONTENT_MIGRATIONS_USERS', method: 'get', key: 'list_content_migrations_userslist_content_migrations_users_user_id', required: ['user_id'] };

// Get a content migration
// Returns data on an individual content migration
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(get_content_migration_accounts, {account_id, id});
var getContentMigrationAccounts = exports.getContentMigrationAccounts = { type: 'GET_CONTENT_MIGRATION_ACCOUNTS', method: 'get', key: 'get_content_migration_accountsget_content_migration_accounts_{account_id}_{id}', required: ['account_id', 'id'] };

// Get a content migration
// Returns data on an individual content migration
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(get_content_migration_courses, {course_id, id});
var getContentMigrationCourses = exports.getContentMigrationCourses = { type: 'GET_CONTENT_MIGRATION_COURSES', method: 'get', key: 'get_content_migration_coursesget_content_migration_courses_{course_id}_{id}', required: ['course_id', 'id'] };

// Get a content migration
// Returns data on an individual content migration
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(get_content_migration_groups, {group_id, id});
var getContentMigrationGroups = exports.getContentMigrationGroups = { type: 'GET_CONTENT_MIGRATION_GROUPS', method: 'get', key: 'get_content_migration_groupsget_content_migration_groups_{group_id}_{id}', required: ['group_id', 'id'] };

// Get a content migration
// Returns data on an individual content migration
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(get_content_migration_users, {user_id, id});
var getContentMigrationUsers = exports.getContentMigrationUsers = { type: 'GET_CONTENT_MIGRATION_USERS', method: 'get', key: 'get_content_migration_usersget_content_migration_users_{user_id}_{id}', required: ['user_id', 'id'] };

// Create a content migration
// Create a content migration. If the migration requires a file to be uploaded
// the actual processing of the file will start once the file upload process is completed.
// File uploading works as described in the {file:file_uploads.html File Upload Documentation}
// except that the values are set on a *pre_attachment* sub-hash.
// 
// For migrations that don't require a file to be uploaded, like course copy, the
// processing will begin as soon as the migration is created.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the migration. The migration's progress is linked to with the
// _progress_url_ value.
// 
// The two general workflows are:
// 
// If no file upload is needed:
// 
// 1. POST to create
// 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
// For file uploading:
// 
// 1. POST to create with file info in *pre_attachment*
// 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
// 3. {api:ContentMigrationsController#show GET} the ContentMigration
// 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
//  (required if doing .zip file upload)
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations
//
// Example:
// const body = {
//   migration_type (required)
//   pre_attachment[name]
//   pre_attachment[*]
//   settings[file_url]
//   settings[content_export_id]
//   settings[source_course_id]
//   settings[folder_id]
//   settings[overwrite_quizzes]
//   settings[question_bank_id]
//   settings[question_bank_name]
//   settings[insert_into_module_id]
//   settings[insert_into_module_type]
//   settings[insert_into_module_position]
//   settings[move_to_assignment_group_id]
//   date_shift_options[shift_dates]
//   date_shift_options[old_start_date]
//   date_shift_options[old_end_date]
//   date_shift_options[new_start_date]
//   date_shift_options[new_end_date]
//   date_shift_options[day_substitutions][X]
//   date_shift_options[remove_dates]
//   selective_import
//   select
// }
// return canvasRequest(create_content_migration_accounts, {account_id}, body);
var createContentMigrationAccounts = exports.createContentMigrationAccounts = { type: 'CREATE_CONTENT_MIGRATION_ACCOUNTS', method: 'post', key: 'create_content_migration_accountscreate_content_migration_accounts_account_id', required: ['account_id'] };

// Create a content migration
// Create a content migration. If the migration requires a file to be uploaded
// the actual processing of the file will start once the file upload process is completed.
// File uploading works as described in the {file:file_uploads.html File Upload Documentation}
// except that the values are set on a *pre_attachment* sub-hash.
// 
// For migrations that don't require a file to be uploaded, like course copy, the
// processing will begin as soon as the migration is created.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the migration. The migration's progress is linked to with the
// _progress_url_ value.
// 
// The two general workflows are:
// 
// If no file upload is needed:
// 
// 1. POST to create
// 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
// For file uploading:
// 
// 1. POST to create with file info in *pre_attachment*
// 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
// 3. {api:ContentMigrationsController#show GET} the ContentMigration
// 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
//  (required if doing .zip file upload)
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations
//
// Example:
// const body = {
//   migration_type (required)
//   pre_attachment[name]
//   pre_attachment[*]
//   settings[file_url]
//   settings[content_export_id]
//   settings[source_course_id]
//   settings[folder_id]
//   settings[overwrite_quizzes]
//   settings[question_bank_id]
//   settings[question_bank_name]
//   settings[insert_into_module_id]
//   settings[insert_into_module_type]
//   settings[insert_into_module_position]
//   settings[move_to_assignment_group_id]
//   date_shift_options[shift_dates]
//   date_shift_options[old_start_date]
//   date_shift_options[old_end_date]
//   date_shift_options[new_start_date]
//   date_shift_options[new_end_date]
//   date_shift_options[day_substitutions][X]
//   date_shift_options[remove_dates]
//   selective_import
//   select
// }
// return canvasRequest(create_content_migration_courses, {course_id}, body);
var createContentMigrationCourses = exports.createContentMigrationCourses = { type: 'CREATE_CONTENT_MIGRATION_COURSES', method: 'post', key: 'create_content_migration_coursescreate_content_migration_courses_course_id', required: ['course_id'] };

// Create a content migration
// Create a content migration. If the migration requires a file to be uploaded
// the actual processing of the file will start once the file upload process is completed.
// File uploading works as described in the {file:file_uploads.html File Upload Documentation}
// except that the values are set on a *pre_attachment* sub-hash.
// 
// For migrations that don't require a file to be uploaded, like course copy, the
// processing will begin as soon as the migration is created.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the migration. The migration's progress is linked to with the
// _progress_url_ value.
// 
// The two general workflows are:
// 
// If no file upload is needed:
// 
// 1. POST to create
// 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
// For file uploading:
// 
// 1. POST to create with file info in *pre_attachment*
// 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
// 3. {api:ContentMigrationsController#show GET} the ContentMigration
// 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
//  (required if doing .zip file upload)
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations
//
// Example:
// const body = {
//   migration_type (required)
//   pre_attachment[name]
//   pre_attachment[*]
//   settings[file_url]
//   settings[content_export_id]
//   settings[source_course_id]
//   settings[folder_id]
//   settings[overwrite_quizzes]
//   settings[question_bank_id]
//   settings[question_bank_name]
//   settings[insert_into_module_id]
//   settings[insert_into_module_type]
//   settings[insert_into_module_position]
//   settings[move_to_assignment_group_id]
//   date_shift_options[shift_dates]
//   date_shift_options[old_start_date]
//   date_shift_options[old_end_date]
//   date_shift_options[new_start_date]
//   date_shift_options[new_end_date]
//   date_shift_options[day_substitutions][X]
//   date_shift_options[remove_dates]
//   selective_import
//   select
// }
// return canvasRequest(create_content_migration_groups, {group_id}, body);
var createContentMigrationGroups = exports.createContentMigrationGroups = { type: 'CREATE_CONTENT_MIGRATION_GROUPS', method: 'post', key: 'create_content_migration_groupscreate_content_migration_groups_group_id', required: ['group_id'] };

// Create a content migration
// Create a content migration. If the migration requires a file to be uploaded
// the actual processing of the file will start once the file upload process is completed.
// File uploading works as described in the {file:file_uploads.html File Upload Documentation}
// except that the values are set on a *pre_attachment* sub-hash.
// 
// For migrations that don't require a file to be uploaded, like course copy, the
// processing will begin as soon as the migration is created.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the migration. The migration's progress is linked to with the
// _progress_url_ value.
// 
// The two general workflows are:
// 
// If no file upload is needed:
// 
// 1. POST to create
// 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
// For file uploading:
// 
// 1. POST to create with file info in *pre_attachment*
// 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
// 3. {api:ContentMigrationsController#show GET} the ContentMigration
// 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
//  (required if doing .zip file upload)
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations
//
// Example:
// const body = {
//   migration_type (required)
//   pre_attachment[name]
//   pre_attachment[*]
//   settings[file_url]
//   settings[content_export_id]
//   settings[source_course_id]
//   settings[folder_id]
//   settings[overwrite_quizzes]
//   settings[question_bank_id]
//   settings[question_bank_name]
//   settings[insert_into_module_id]
//   settings[insert_into_module_type]
//   settings[insert_into_module_position]
//   settings[move_to_assignment_group_id]
//   date_shift_options[shift_dates]
//   date_shift_options[old_start_date]
//   date_shift_options[old_end_date]
//   date_shift_options[new_start_date]
//   date_shift_options[new_end_date]
//   date_shift_options[day_substitutions][X]
//   date_shift_options[remove_dates]
//   selective_import
//   select
// }
// return canvasRequest(create_content_migration_users, {user_id}, body);
var createContentMigrationUsers = exports.createContentMigrationUsers = { type: 'CREATE_CONTENT_MIGRATION_USERS', method: 'post', key: 'create_content_migration_userscreate_content_migration_users_user_id', required: ['user_id'] };

// Update a content migration
// Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem, or when
// importing content selectively. If the first upload has a problem you can
// supply new _pre_attachment_ values to start the process again.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(update_content_migration_accounts, {account_id, id});
var updateContentMigrationAccounts = exports.updateContentMigrationAccounts = { type: 'UPDATE_CONTENT_MIGRATION_ACCOUNTS', method: 'put', key: 'update_content_migration_accountsupdate_content_migration_accounts_{account_id}_{id}', required: ['account_id', 'id'] };

// Update a content migration
// Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem, or when
// importing content selectively. If the first upload has a problem you can
// supply new _pre_attachment_ values to start the process again.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(update_content_migration_courses, {course_id, id});
var updateContentMigrationCourses = exports.updateContentMigrationCourses = { type: 'UPDATE_CONTENT_MIGRATION_COURSES', method: 'put', key: 'update_content_migration_coursesupdate_content_migration_courses_{course_id}_{id}', required: ['course_id', 'id'] };

// Update a content migration
// Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem, or when
// importing content selectively. If the first upload has a problem you can
// supply new _pre_attachment_ values to start the process again.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(update_content_migration_groups, {group_id, id});
var updateContentMigrationGroups = exports.updateContentMigrationGroups = { type: 'UPDATE_CONTENT_MIGRATION_GROUPS', method: 'put', key: 'update_content_migration_groupsupdate_content_migration_groups_{group_id}_{id}', required: ['group_id', 'id'] };

// Update a content migration
// Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem, or when
// importing content selectively. If the first upload has a problem you can
// supply new _pre_attachment_ values to start the process again.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(update_content_migration_users, {user_id, id});
var updateContentMigrationUsers = exports.updateContentMigrationUsers = { type: 'UPDATE_CONTENT_MIGRATION_USERS', method: 'put', key: 'update_content_migration_usersupdate_content_migration_users_{user_id}_{id}', required: ['user_id', 'id'] };

// List Migration Systems
// Lists the currently available migration types. These values may change.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/migrators
//
// Example:
// return canvasRequest(list_migration_systems_accounts, {account_id});
var listMigrationSystemsAccounts = exports.listMigrationSystemsAccounts = { type: 'LIST_MIGRATION_SYSTEMS_ACCOUNTS', method: 'get', key: 'list_migration_systems_accountslist_migration_systems_accounts_account_id', required: ['account_id'] };

// List Migration Systems
// Lists the currently available migration types. These values may change.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/migrators
//
// Example:
// return canvasRequest(list_migration_systems_courses, {course_id});
var listMigrationSystemsCourses = exports.listMigrationSystemsCourses = { type: 'LIST_MIGRATION_SYSTEMS_COURSES', method: 'get', key: 'list_migration_systems_courseslist_migration_systems_courses_course_id', required: ['course_id'] };

// List Migration Systems
// Lists the currently available migration types. These values may change.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/migrators
//
// Example:
// return canvasRequest(list_migration_systems_groups, {group_id});
var listMigrationSystemsGroups = exports.listMigrationSystemsGroups = { type: 'LIST_MIGRATION_SYSTEMS_GROUPS', method: 'get', key: 'list_migration_systems_groupslist_migration_systems_groups_group_id', required: ['group_id'] };

// List Migration Systems
// Lists the currently available migration types. These values may change.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/migrators
//
// Example:
// return canvasRequest(list_migration_systems_users, {user_id});
var listMigrationSystemsUsers = exports.listMigrationSystemsUsers = { type: 'LIST_MIGRATION_SYSTEMS_USERS', method: 'get', key: 'list_migration_systems_userslist_migration_systems_users_user_id', required: ['user_id'] };

// List items for selective import
// Enumerates the content available for selective import in a tree structure. Each node provides
// a +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}
// to selectively copy the content associated with that tree node and its children. Each node may also
// provide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters
// for a subset of the resources in a given node.
// 
// If no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:
// 
//   [{
//     "type": "course_settings",
//     "property": "copy[all_course_settings]",
//     "title": "Course Settings"
//   },
//   {
//     "type": "context_modules",
//     "property": "copy[all_context_modules]",
//     "title": "Modules",
//     "count": 5,
//     "sub_items_url": "http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules"
//   },
//   {
//     "type": "assignments",
//     "property": "copy[all_assignments]",
//     "title": "Assignments",
//     "count": 2,
//     "sub_items_url": "http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments"
//   }]
// 
// When a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+
// results in a node for each assignment group and a sub_item for each assignment, like this:
// 
//   [{
//     "type": "assignment_groups",
//     "title": "An Assignment Group",
//     "property": "copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]",
//     "sub_items": [{
//         "type": "assignments",
//         "title": "Assignment 1",
//         "property": "copy[assignments][id_i2102a7fa93b29226774949298626719d]"
//     }, {
//         "type": "assignments",
//         "title": "Assignment 2",
//         "property": "copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]"
//     }]
//   }]
// 
// 
// To import the items corresponding to a particular tree node, use the +property+ as a parameter to the
// {api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:
// 
//   copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1
// 
// You can include multiple copy parameters to selectively import multiple items or groups of items.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{id}/selective_data
//
// Example:
// const query = {
//   type
// }
// return canvasRequest(list_items_for_selective_import_accounts, {account_id, id, ...query});
var listItemsForSelectiveImportAccounts = exports.listItemsForSelectiveImportAccounts = { type: 'LIST_ITEMS_FOR_SELECTIVE_IMPORT_ACCOUNTS', method: 'get', key: 'list_items_for_selective_import_accountslist_items_for_selective_import_accounts_{account_id}_{id}', required: ['account_id', 'id'] };

// List items for selective import
// Enumerates the content available for selective import in a tree structure. Each node provides
// a +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}
// to selectively copy the content associated with that tree node and its children. Each node may also
// provide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters
// for a subset of the resources in a given node.
// 
// If no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:
// 
//   [{
//     "type": "course_settings",
//     "property": "copy[all_course_settings]",
//     "title": "Course Settings"
//   },
//   {
//     "type": "context_modules",
//     "property": "copy[all_context_modules]",
//     "title": "Modules",
//     "count": 5,
//     "sub_items_url": "http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules"
//   },
//   {
//     "type": "assignments",
//     "property": "copy[all_assignments]",
//     "title": "Assignments",
//     "count": 2,
//     "sub_items_url": "http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments"
//   }]
// 
// When a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+
// results in a node for each assignment group and a sub_item for each assignment, like this:
// 
//   [{
//     "type": "assignment_groups",
//     "title": "An Assignment Group",
//     "property": "copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]",
//     "sub_items": [{
//         "type": "assignments",
//         "title": "Assignment 1",
//         "property": "copy[assignments][id_i2102a7fa93b29226774949298626719d]"
//     }, {
//         "type": "assignments",
//         "title": "Assignment 2",
//         "property": "copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]"
//     }]
//   }]
// 
// 
// To import the items corresponding to a particular tree node, use the +property+ as a parameter to the
// {api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:
// 
//   copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1
// 
// You can include multiple copy parameters to selectively import multiple items or groups of items.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{id}/selective_data
//
// Example:
// const query = {
//   type
// }
// return canvasRequest(list_items_for_selective_import_courses, {course_id, id, ...query});
var listItemsForSelectiveImportCourses = exports.listItemsForSelectiveImportCourses = { type: 'LIST_ITEMS_FOR_SELECTIVE_IMPORT_COURSES', method: 'get', key: 'list_items_for_selective_import_courseslist_items_for_selective_import_courses_{course_id}_{id}', required: ['course_id', 'id'] };

// List items for selective import
// Enumerates the content available for selective import in a tree structure. Each node provides
// a +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}
// to selectively copy the content associated with that tree node and its children. Each node may also
// provide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters
// for a subset of the resources in a given node.
// 
// If no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:
// 
//   [{
//     "type": "course_settings",
//     "property": "copy[all_course_settings]",
//     "title": "Course Settings"
//   },
//   {
//     "type": "context_modules",
//     "property": "copy[all_context_modules]",
//     "title": "Modules",
//     "count": 5,
//     "sub_items_url": "http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules"
//   },
//   {
//     "type": "assignments",
//     "property": "copy[all_assignments]",
//     "title": "Assignments",
//     "count": 2,
//     "sub_items_url": "http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments"
//   }]
// 
// When a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+
// results in a node for each assignment group and a sub_item for each assignment, like this:
// 
//   [{
//     "type": "assignment_groups",
//     "title": "An Assignment Group",
//     "property": "copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]",
//     "sub_items": [{
//         "type": "assignments",
//         "title": "Assignment 1",
//         "property": "copy[assignments][id_i2102a7fa93b29226774949298626719d]"
//     }, {
//         "type": "assignments",
//         "title": "Assignment 2",
//         "property": "copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]"
//     }]
//   }]
// 
// 
// To import the items corresponding to a particular tree node, use the +property+ as a parameter to the
// {api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:
// 
//   copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1
// 
// You can include multiple copy parameters to selectively import multiple items or groups of items.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{id}/selective_data
//
// Example:
// const query = {
//   type
// }
// return canvasRequest(list_items_for_selective_import_groups, {group_id, id, ...query});
var listItemsForSelectiveImportGroups = exports.listItemsForSelectiveImportGroups = { type: 'LIST_ITEMS_FOR_SELECTIVE_IMPORT_GROUPS', method: 'get', key: 'list_items_for_selective_import_groupslist_items_for_selective_import_groups_{group_id}_{id}', required: ['group_id', 'id'] };

// List items for selective import
// Enumerates the content available for selective import in a tree structure. Each node provides
// a +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}
// to selectively copy the content associated with that tree node and its children. Each node may also
// provide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters
// for a subset of the resources in a given node.
// 
// If no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:
// 
//   [{
//     "type": "course_settings",
//     "property": "copy[all_course_settings]",
//     "title": "Course Settings"
//   },
//   {
//     "type": "context_modules",
//     "property": "copy[all_context_modules]",
//     "title": "Modules",
//     "count": 5,
//     "sub_items_url": "http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules"
//   },
//   {
//     "type": "assignments",
//     "property": "copy[all_assignments]",
//     "title": "Assignments",
//     "count": 2,
//     "sub_items_url": "http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments"
//   }]
// 
// When a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+
// results in a node for each assignment group and a sub_item for each assignment, like this:
// 
//   [{
//     "type": "assignment_groups",
//     "title": "An Assignment Group",
//     "property": "copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]",
//     "sub_items": [{
//         "type": "assignments",
//         "title": "Assignment 1",
//         "property": "copy[assignments][id_i2102a7fa93b29226774949298626719d]"
//     }, {
//         "type": "assignments",
//         "title": "Assignment 2",
//         "property": "copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]"
//     }]
//   }]
// 
// 
// To import the items corresponding to a particular tree node, use the +property+ as a parameter to the
// {api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:
// 
//   copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1
// 
// You can include multiple copy parameters to selectively import multiple items or groups of items.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{id}/selective_data
//
// Example:
// const query = {
//   type
// }
// return canvasRequest(list_items_for_selective_import_users, {user_id, id, ...query});
var listItemsForSelectiveImportUsers = exports.listItemsForSelectiveImportUsers = { type: 'LIST_ITEMS_FOR_SELECTIVE_IMPORT_USERS', method: 'get', key: 'list_items_for_selective_import_userslist_items_for_selective_import_users_{user_id}_{id}', required: ['user_id', 'id'] };