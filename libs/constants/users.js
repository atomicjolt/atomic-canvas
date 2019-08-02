'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Users
//
// List users in account
// A paginated list of of users associated with this account.
// 
//  @example_request
//    curl https://<canvas>/api/v1/accounts/self/users?search_term=<search value> \
//       -X GET \
//       -H 'Authorization: Bearer <token>'
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: accounts/{account_id}/users
//
// Example:
// const query = {
//   search_term
//   enrollment_type
//   sort
//   order
// }
// return canvasRequest(list_users_in_account, {account_id, ...query});
var listUsersInAccount = exports.listUsersInAccount = { type: 'LIST_USERS_IN_ACCOUNT', method: 'get', key: 'list_users_in_accountlist_users_in_account_account_id', required: ['account_id'] };

// List the activity stream
// Returns the current user's global activity stream, paginated.
// 
// There are many types of objects that can be returned in the activity
// stream. All object types have the same basic set of shared attributes:
//   !!!javascript
//   {
//     'created_at': '2011-07-13T09:12:00Z',
//     'updated_at': '2011-07-25T08:52:41Z',
//     'id': 1234,
//     'title': 'Stream Item Subject',
//     'message': 'This is the body text of the activity stream item. It is plain-text, and can be multiple paragraphs.',
//     'type': 'DiscussionTopic|Conversation|Message|Submission|Conference|Collaboration|AssessmentRequest...',
//     'read_state': false,
//     'context_type': 'course', // course|group
//     'course_id': 1,
//     'group_id': null,
//     'html_url': "http://..." // URL to the Canvas web UI for this stream item
//   }
// 
// In addition, each item type has its own set of attributes available.
// 
// DiscussionTopic:
// 
//   !!!javascript
//   {
//     'type': 'DiscussionTopic',
//     'discussion_topic_id': 1234,
//     'total_root_discussion_entries': 5,
//     'require_initial_post': true,
//     'user_has_posted': true,
//     'root_discussion_entries': {
//       ...
//     }
//   }
// 
// For DiscussionTopic, the message is truncated at 4kb.
// 
// Announcement:
// 
//   !!!javascript
//   {
//     'type': 'Announcement',
//     'announcement_id': 1234,
//     'total_root_discussion_entries': 5,
//     'require_initial_post': true,
//     'user_has_posted': null,
//     'root_discussion_entries': {
//       ...
//     }
//   }
// 
// For Announcement, the message is truncated at 4kb.
// 
// Conversation:
// 
//   !!!javascript
//   {
//     'type': 'Conversation',
//     'conversation_id': 1234,
//     'private': false,
//     'participant_count': 3,
//   }
// 
// Message:
// 
//   !!!javascript
//   {
//     'type': 'Message',
//     'message_id': 1234,
//     'notification_category': 'Assignment Graded'
//   }
// 
// Submission:
// 
// Returns an {api:Submissions:Submission Submission} with its Course and Assignment data.
// 
// Conference:
// 
//   !!!javascript
//   {
//     'type': 'Conference',
//     'web_conference_id': 1234
//   }
// 
// Collaboration:
// 
//   !!!javascript
//   {
//     'type': 'Collaboration',
//     'collaboration_id': 1234
//   }
// 
// AssessmentRequest:
// 
//   !!!javascript
//   {
//     'type': 'AssessmentRequest',
//     'assessment_request_id': 1234
//   }
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/activity_stream
//
// Example:
// const query = {
//   only_active_courses
// }
// return canvasRequest(list_activity_stream_self, {, ...query});
var listActivityStreamSelf = exports.listActivityStreamSelf = { type: 'LIST_ACTIVITY_STREAM_SELF', method: 'get', key: 'list_activity_stream_self', required: [] };

// List the activity stream
// Returns the current user's global activity stream, paginated.
// 
// There are many types of objects that can be returned in the activity
// stream. All object types have the same basic set of shared attributes:
//   !!!javascript
//   {
//     'created_at': '2011-07-13T09:12:00Z',
//     'updated_at': '2011-07-25T08:52:41Z',
//     'id': 1234,
//     'title': 'Stream Item Subject',
//     'message': 'This is the body text of the activity stream item. It is plain-text, and can be multiple paragraphs.',
//     'type': 'DiscussionTopic|Conversation|Message|Submission|Conference|Collaboration|AssessmentRequest...',
//     'read_state': false,
//     'context_type': 'course', // course|group
//     'course_id': 1,
//     'group_id': null,
//     'html_url': "http://..." // URL to the Canvas web UI for this stream item
//   }
// 
// In addition, each item type has its own set of attributes available.
// 
// DiscussionTopic:
// 
//   !!!javascript
//   {
//     'type': 'DiscussionTopic',
//     'discussion_topic_id': 1234,
//     'total_root_discussion_entries': 5,
//     'require_initial_post': true,
//     'user_has_posted': true,
//     'root_discussion_entries': {
//       ...
//     }
//   }
// 
// For DiscussionTopic, the message is truncated at 4kb.
// 
// Announcement:
// 
//   !!!javascript
//   {
//     'type': 'Announcement',
//     'announcement_id': 1234,
//     'total_root_discussion_entries': 5,
//     'require_initial_post': true,
//     'user_has_posted': null,
//     'root_discussion_entries': {
//       ...
//     }
//   }
// 
// For Announcement, the message is truncated at 4kb.
// 
// Conversation:
// 
//   !!!javascript
//   {
//     'type': 'Conversation',
//     'conversation_id': 1234,
//     'private': false,
//     'participant_count': 3,
//   }
// 
// Message:
// 
//   !!!javascript
//   {
//     'type': 'Message',
//     'message_id': 1234,
//     'notification_category': 'Assignment Graded'
//   }
// 
// Submission:
// 
// Returns an {api:Submissions:Submission Submission} with its Course and Assignment data.
// 
// Conference:
// 
//   !!!javascript
//   {
//     'type': 'Conference',
//     'web_conference_id': 1234
//   }
// 
// Collaboration:
// 
//   !!!javascript
//   {
//     'type': 'Collaboration',
//     'collaboration_id': 1234
//   }
// 
// AssessmentRequest:
// 
//   !!!javascript
//   {
//     'type': 'AssessmentRequest',
//     'assessment_request_id': 1234
//   }
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/activity_stream
//
// Example:
// const query = {
//   only_active_courses
// }
// return canvasRequest(list_activity_stream_activity_stream, {, ...query});
var listActivityStreamActivityStream = exports.listActivityStreamActivityStream = { type: 'LIST_ACTIVITY_STREAM_ACTIVITY_STREAM', method: 'get', key: 'list_activity_stream_activity_stream', required: [] };

// Activity stream summary
// Returns a summary of the current user's global activity stream.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/activity_stream/summary
//
// Example:
// return canvasRequest(activity_stream_summary, {});
var activityStreamSummary = exports.activityStreamSummary = { type: 'ACTIVITY_STREAM_SUMMARY', method: 'get', key: 'activity_stream_summary', required: [] };

// List the TODO items
// A paginated list of the current user's list of todo items.
// 
// There is a limit to the number of items returned.
// 
// The `ignore` and `ignore_permanently` URLs can be used to update the user's
// preferences on what items will be displayed.
// Performing a DELETE request against the `ignore` URL will hide that item
// from future todo item requests, until the item changes.
// Performing a DELETE request against the `ignore_permanently` URL will hide
// that item forever.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/todo
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_todo_items, {, ...query});
var listTodoItems = exports.listTodoItems = { type: 'LIST_TODO_ITEMS', method: 'get', key: 'list_todo_items', required: [] };

// List counts for todo items
// Counts of different todo items such as the number of assignments needing grading as well as the number of assignments needing submitting.
// 
// There is a limit to the number of todo items this endpoint will count.
// It will only look at the first 100 todo items for the user. If the user has more than 100 todo items this count may not be reliable.
// The largest reliable number for both counts is 100.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/todo_item_count
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_counts_for_todo_items, {, ...query});
var listCountsForTodoItems = exports.listCountsForTodoItems = { type: 'LIST_COUNTS_FOR_TODO_ITEMS', method: 'get', key: 'list_counts_for_todo_items', required: [] };

// List upcoming assignments, calendar events
// A paginated list of the current user's upcoming events.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/upcoming_events
//
// Example:
// return canvasRequest(list_upcoming_assignments_calendar_events, {});
var listUpcomingAssignmentsCalendarEvents = exports.listUpcomingAssignmentsCalendarEvents = { type: 'LIST_UPCOMING_ASSIGNMENTS_CALENDAR_EVENTS', method: 'get', key: 'list_upcoming_assignments_calendar_events', required: [] };

// List Missing Submissions
// A paginated list of past-due assignments for which the student does not have a submission.
// The user sending the request must either be the student, an admin or a parent observer using the parent app
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/missing_submissions
//
// Example:
// const query = {
//   include
//   filter
// }
// return canvasRequest(list_missing_submissions, {user_id, ...query});
var listMissingSubmissions = exports.listMissingSubmissions = { type: 'LIST_MISSING_SUBMISSIONS', method: 'get', key: 'list_missing_submissionslist_missing_submissions_user_id', required: ['user_id'] };

// Hide a stream item
// Hide the given stream item.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/activity_stream/{id}
//
// Example:
// return canvasRequest(hide_stream_item, {id});
var hideStreamItem = exports.hideStreamItem = { type: 'HIDE_STREAM_ITEM', method: 'delete', key: 'hide_stream_itemhide_stream_item_id', required: ['id'] };

// Hide all stream items
// Hide all stream items for the user
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/activity_stream
//
// Example:
// return canvasRequest(hide_all_stream_items, {});
var hideAllStreamItems = exports.hideAllStreamItems = { type: 'HIDE_ALL_STREAM_ITEMS', method: 'delete', key: 'hide_all_stream_items', required: [] };

// Upload a file
// Upload a file to the user's personal files section.
// 
// This API endpoint is the first step in uploading a file to a user's files.
// See the {file:file_uploads.html File Upload Documentation} for details on
// the file upload workflow.
// 
// Note that typically users will only be able to upload files to their
// own files section. Passing a user_id of +self+ is an easy shortcut
// to specify the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/files
//
// Example:
// return canvasRequest(users_upload_file, {user_id});
var usersUploadFile = exports.usersUploadFile = { type: 'USERS_UPLOAD_FILE', method: 'post', key: 'users_upload_fileusers_upload_file_user_id', required: ['user_id'] };

// Show user details
// Shows details for user.
// 
// Also includes an attribute "permissions", a non-comprehensive list of permissions for the user.
// Example:
//   !!!javascript
//   "permissions": {
//    "can_update_name": true, // Whether the user can update their name.
//    "can_update_avatar": false // Whether the user can update their avatar.
//   }
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(show_user_details, {id, ...query});
var showUserDetails = exports.showUserDetails = { type: 'SHOW_USER_DETAILS', method: 'get', key: 'show_user_detailsshow_user_details_id', required: ['id'] };

// Create a user
// Create and return a new user and pseudonym for an account.
// 
// If you don't have the "Modify login details for users" permission, but
// self-registration is enabled on the account, you can still use this
// endpoint to register new users. Certain fields will be required, and
// others will be ignored (see below).
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: accounts/{account_id}/users
//
// Example:
// const body = {
//   user[name]
//   user[short_name]
//   user[sortable_name]
//   user[time_zone]
//   user[locale]
//   user[birthdate]
//   user[terms_of_use]
//   user[skip_registration]
//   pseudonym[unique_id] (required)
//   pseudonym[password]
//   pseudonym[sis_user_id]
//   pseudonym[integration_id]
//   pseudonym[send_confirmation]
//   pseudonym[force_self_registration]
//   pseudonym[authentication_provider_id]
//   communication_channel[type]
//   communication_channel[address]
//   communication_channel[confirmation_url]
//   communication_channel[skip_confirmation]
//   force_validations
//   enable_sis_reactivation
//   destination
// }
// return canvasRequest(create_user, {account_id}, body);
var createUser = exports.createUser = { type: 'CREATE_USER', method: 'post', key: 'create_usercreate_user_account_id', required: ['account_id'] };

// Self register a user
// Self register and return a new user and pseudonym for an account.
// 
// If self-registration is enabled on the account, you can use this
// endpoint to self register new users.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: accounts/{account_id}/self_registration
//
// Example:
// const body = {
//   user[name] (required)
//   user[short_name]
//   user[sortable_name]
//   user[time_zone]
//   user[locale]
//   user[birthdate]
//   user[terms_of_use] (required)
//   pseudonym[unique_id] (required)
//   communication_channel[type]
//   communication_channel[address]
// }
// return canvasRequest(self_register_user, {account_id}, body);
var selfRegisterUser = exports.selfRegisterUser = { type: 'SELF_REGISTER_USER', method: 'post', key: 'self_register_userself_register_user_account_id', required: ['account_id'] };

// Update user settings.
// Update an existing user's settings.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/settings
//
// Example:
// const query = {
//   manual_mark_as_read
//   collapse_global_nav
//   hide_dashcard_color_overlays
// }
// return canvasRequest(update_user_settings, {id, ...query});
var updateUserSettings = exports.updateUserSettings = { type: 'UPDATE_USER_SETTINGS', method: 'get', key: 'update_user_settingsupdate_user_settings_id', required: ['id'] };

// Get custom colors
// Returns all custom colors that have been saved for a user.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/colors
//
// Example:
// return canvasRequest(get_custom_colors, {id});
var getCustomColors = exports.getCustomColors = { type: 'GET_CUSTOM_COLORS', method: 'get', key: 'get_custom_colorsget_custom_colors_id', required: ['id'] };

// Get custom color
// Returns the custom colors that have been saved for a user for a given context.
// 
// The asset_string parameter should be in the format 'context_id', for example
// 'course_42'.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/colors/{asset_string}
//
// Example:
// return canvasRequest(get_custom_color, {id, asset_string});
var getCustomColor = exports.getCustomColor = { type: 'GET_CUSTOM_COLOR', method: 'get', key: 'get_custom_colorget_custom_color_{id}_{asset_string}', required: ['id', 'asset_string'] };

// Update custom color
// Updates a custom color for a user for a given context.  This allows
// colors for the calendar and elsewhere to be customized on a user basis.
// 
// The asset string parameter should be in the format 'context_id', for example
// 'course_42'
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/colors/{asset_string}
//
// Example:
// const body = {
//   hexcode
// }
// return canvasRequest(update_custom_color, {id, asset_string}, body);
var updateCustomColor = exports.updateCustomColor = { type: 'UPDATE_CUSTOM_COLOR', method: 'put', key: 'update_custom_colorupdate_custom_color_{id}_{asset_string}', required: ['id', 'asset_string'] };

// Get dashboard positions
// Returns all dashboard positions that have been saved for a user.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/dashboard_positions
//
// Example:
// return canvasRequest(get_dashboard_positions, {id});
var getDashboardPositions = exports.getDashboardPositions = { type: 'GET_DASHBOARD_POSITIONS', method: 'get', key: 'get_dashboard_positionsget_dashboard_positions_id', required: ['id'] };

// Update dashboard positions
// Updates the dashboard positions for a user for a given context.  This allows
// positions for the dashboard cards and elsewhere to be customized on a per
// user basis.
// 
// The asset string parameter should be in the format 'context_id', for example
// 'course_42'
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/dashboard_positions
//
// Example:
// return canvasRequest(update_dashboard_positions, {id});
var updateDashboardPositions = exports.updateDashboardPositions = { type: 'UPDATE_DASHBOARD_POSITIONS', method: 'put', key: 'update_dashboard_positionsupdate_dashboard_positions_id', required: ['id'] };

// Edit a user
// Modify an existing user. To modify a user's login, see the documentation for logins.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}
//
// Example:
// const body = {
//   user[name]
//   user[short_name]
//   user[sortable_name]
//   user[time_zone]
//   user[email]
//   user[locale]
//   user[avatar][token]
//   user[avatar][url]
//   user[title]
//   user[bio]
// }
// return canvasRequest(edit_user, {id}, body);
var editUser = exports.editUser = { type: 'EDIT_USER', method: 'put', key: 'edit_useredit_user_id', required: ['id'] };

// Merge user into another user
// Merge a user into another user.
// To merge users, the caller must have permissions to manage both users. This
// should be considered irreversible. This will delete the user and move all
// the data into the destination user.
// 
// User merge details and caveats:
// The from_user is the user that was deleted in the user_merge process.
// The destination_user is the user that remains, that is being split.
// 
// Avatars:
// When both users have avatars, only the destination_users avatar will remain.
// When one user has an avatar, will it will end up on the destination_user.
// 
// Terms of Use:
// If either user has accepted terms of use, it will be be left as accepted.
// 
// Communication Channels:
// All unique communication channels moved to the destination_user.
// All notification preferences are moved to the destination_user.
// 
// Enrollments:
// All unique enrollments are moved to the destination_user.
// When there is an enrollment that would end up making it so that a user would
// be observing themselves, the enrollment is not moved over.
// Everything that is tied to the from_user at the course level relating to the
// enrollment is also moved to the destination_user.
// 
// Submissions:
// All submissions are moved to the destination_user. If there are enrollments
// for both users in the same course, we prefer submissions that have grades
// then submissions that have work in them, and if there are no grades or no
// work, they are not moved.
// 
// Other notes:
// Access Tokens are moved on merge.
// Conversations are moved on merge.
// Favorites are moved on merge.
// Courses will commonly use LTI tools. LTI tools reference the user with IDs
// that are stored on a user object. Merging users deletes one user and moves
// all records from the deleted user to the destination_user. These IDs are
// kept for all enrollments, group_membership, and account_users for the
// from_user at the time of the merge. When the destination_user launches an
// LTI tool from a course that used to be the from_user's, it doesn't appear as
// a new user to the tool provider. Instead it will send the stored ids. The
// destination_user's LTI IDs remain as they were for the courses that they
// originally had. Future enrollments for the destination_user will use the IDs
// that are on the destination_user object. LTI IDs that are kept and tracked
// per context include lti_context_id, lti_id and uuid. APIs that return the
// LTI ids will return the one for the context that it is called for, except
// for the user uuid. The user UUID will display the destination_users uuid,
// and when getting the uuid from an api that is in a context that was
// recorded from a merge event, an additional attribute is added as past_uuid.
// 
// When finding users by SIS ids in different accounts the
// destination_account_id is required.
// 
// The account can also be identified by passing the domain in destination_account_id.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/merge_into/{destination_user_id}
//
// Example:
// return canvasRequest(merge_user_into_another_user_destination_user_id, {id, destination_user_id});
var mergeUserIntoAnotherUserDestinationUserId = exports.mergeUserIntoAnotherUserDestinationUserId = { type: 'MERGE_USER_INTO_ANOTHER_USER_DESTINATION_USER_ID', method: 'put', key: 'merge_user_into_another_user_destination_user_idmerge_user_into_another_user_destination_user_id_{id}_{destination_user_id}', required: ['id', 'destination_user_id'] };

// Merge user into another user
// Merge a user into another user.
// To merge users, the caller must have permissions to manage both users. This
// should be considered irreversible. This will delete the user and move all
// the data into the destination user.
// 
// User merge details and caveats:
// The from_user is the user that was deleted in the user_merge process.
// The destination_user is the user that remains, that is being split.
// 
// Avatars:
// When both users have avatars, only the destination_users avatar will remain.
// When one user has an avatar, will it will end up on the destination_user.
// 
// Terms of Use:
// If either user has accepted terms of use, it will be be left as accepted.
// 
// Communication Channels:
// All unique communication channels moved to the destination_user.
// All notification preferences are moved to the destination_user.
// 
// Enrollments:
// All unique enrollments are moved to the destination_user.
// When there is an enrollment that would end up making it so that a user would
// be observing themselves, the enrollment is not moved over.
// Everything that is tied to the from_user at the course level relating to the
// enrollment is also moved to the destination_user.
// 
// Submissions:
// All submissions are moved to the destination_user. If there are enrollments
// for both users in the same course, we prefer submissions that have grades
// then submissions that have work in them, and if there are no grades or no
// work, they are not moved.
// 
// Other notes:
// Access Tokens are moved on merge.
// Conversations are moved on merge.
// Favorites are moved on merge.
// Courses will commonly use LTI tools. LTI tools reference the user with IDs
// that are stored on a user object. Merging users deletes one user and moves
// all records from the deleted user to the destination_user. These IDs are
// kept for all enrollments, group_membership, and account_users for the
// from_user at the time of the merge. When the destination_user launches an
// LTI tool from a course that used to be the from_user's, it doesn't appear as
// a new user to the tool provider. Instead it will send the stored ids. The
// destination_user's LTI IDs remain as they were for the courses that they
// originally had. Future enrollments for the destination_user will use the IDs
// that are on the destination_user object. LTI IDs that are kept and tracked
// per context include lti_context_id, lti_id and uuid. APIs that return the
// LTI ids will return the one for the context that it is called for, except
// for the user uuid. The user UUID will display the destination_users uuid,
// and when getting the uuid from an api that is in a context that was
// recorded from a merge event, an additional attribute is added as past_uuid.
// 
// When finding users by SIS ids in different accounts the
// destination_account_id is required.
// 
// The account can also be identified by passing the domain in destination_account_id.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/merge_into/accounts/{destination_account_id}/users/{destination_user_id}
//
// Example:
// return canvasRequest(merge_user_into_another_user_accounts, {id, destination_account_id, destination_user_id});
var mergeUserIntoAnotherUserAccounts = exports.mergeUserIntoAnotherUserAccounts = { type: 'MERGE_USER_INTO_ANOTHER_USER_ACCOUNTS', method: 'put', key: 'merge_user_into_another_user_accountsmerge_user_into_another_user_accounts_{id}_{destination_account_id}_{destination_user_id}', required: ['id', 'destination_account_id', 'destination_user_id'] };

// Split merged users into separate users
// Merged users cannot be fully restored to their previous state, but this will
// attempt to split as much as possible to the previous state.
// To split a merged user, the caller must have permissions to manage all of
// the users logins. If there are multiple users that have been merged into one
// user it will split each merge into a separate user.
// A split can only happen within 180 days of a user merge. A user merge deletes
// the previous user and may be permanently deleted. In this scenario we create
// a new user object and proceed to move as much as possible to the new user.
// The user object will not have preserved the name or settings from the
// previous user. Some items may have been deleted during a user_merge that
// cannot be restored, and/or the data has become stale because of other
// changes to the objects since the time of the user_merge.
// 
// Split users details and caveats:
// 
// The from_user is the user that was deleted in the user_merge process.
// The destination_user is the user that remains, that is being split.
// 
// Avatars:
// When both users had avatars, both will be remain.
// When from_user had an avatar and destination_user did not have an avatar,
// the destination_user's avatar will be deleted if it still matches what was
// there are the time of the merge.
// If the destination_user's avatar was changed at anytime after the merge, it
// will remain on the destination user.
// If the from_user had an avatar it will be there after split.
// 
// Terms of Use:
// If from_user had not accepted terms of use, they will be prompted again
// to accept terms of use after the split.
// If the destination_user had not accepted terms of use, hey will be prompted
// again to accept terms of use after the split.
// If neither user had accepted the terms of use, but since the time of the
// merge had accepted, both will be prompted to accept terms of use.
// If both had accepted terms of use, this will remain.
// 
// Communication Channels:
// All communication channels are restored to what they were prior to the
// merge. If a communication channel was added after the merge, it will remain
// on the destination_user.
// Notification preferences remain with the communication channels.
// 
// Enrollments:
// All enrollments from the time of the merge will be moved back to where they
// were. Enrollments created since the time of the merge that were created by
// sis_import will go to the user that owns that sis_id used for the import.
// Other new enrollments will remain on the destination_user.
// Everything that is tied to the destination_user at the course level relating
// to an enrollment is moved to the from_user. When both users are in the same
// course prior to merge this can cause some unexpected items to move.
// 
// Submissions:
// Unlike other items tied to a course, submissions are explicitly recorded to
// avoid problems with grades.
// All submissions were moved are restored to the spot prior to merge.
// All submission that were created in a course that was moved in enrollments
// are moved over to the from_user.
// 
// Other notes:
// Access Tokens are moved back on split.
// Conversations are moved back on split.
// Favorites that existing at the time of merge are moved back on split.
// LTI ids are restored to how they were prior to merge.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/split
//
// Example:
// return canvasRequest(split_merged_users_into_separate_users, {id});
var splitMergedUsersIntoSeparateUsers = exports.splitMergedUsersIntoSeparateUsers = { type: 'SPLIT_MERGED_USERS_INTO_SEPARATE_USERS', method: 'post', key: 'split_merged_users_into_separate_userssplit_merged_users_into_separate_users_id', required: ['id'] };

// Get a Pandata Events jwt token and its expiration date
// Returns a jwt auth and props token that can be used to send events to
// Pandata.
// 
// NOTE: This is currently only available to the mobile developer keys.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/pandata_events_token
//
// Example:
// const body = {
//   app_key
// }
// return canvasRequest(get_pandata_events_jwt_token_and_its_expiration_date, {}, body);
var getPandataEventsJwtTokenAndItsExpirationDate = exports.getPandataEventsJwtTokenAndItsExpirationDate = { type: 'GET_PANDATA_EVENTS_JWT_TOKEN_AND_ITS_EXPIRATION_DATE', method: 'post', key: 'get_pandata_events_jwt_token_and_its_expiration_date', required: [] };

// Get a users most recently graded submissions
// 
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/graded_submissions
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_users_most_recently_graded_submissions, {id, ...query});
var getUsersMostRecentlyGradedSubmissions = exports.getUsersMostRecentlyGradedSubmissions = { type: 'GET_USERS_MOST_RECENTLY_GRADED_SUBMISSIONS', method: 'get', key: 'get_users_most_recently_graded_submissionsget_users_most_recently_graded_submissions_id', required: ['id'] };

// Get user profile
// Returns user profile data, including user id, name, and profile pic.
// 
// When requesting the profile for the user accessing the API, the user's
// calendar feed URL and LTI user id will be returned as well.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/profile
//
// Example:
// return canvasRequest(get_user_profile, {user_id});
var getUserProfile = exports.getUserProfile = { type: 'GET_USER_PROFILE', method: 'get', key: 'get_user_profileget_user_profile_user_id', required: ['user_id'] };

// List avatar options
// A paginated list of the possible user avatar options that can be set with the user update endpoint. The response will be an array of avatar records. If the 'type' field is 'attachment', the record will include all the normal attachment json fields; otherwise it will include only the 'url' and 'display_name' fields. Additionally, all records will include a 'type' field and a 'token' field. The following explains each field in more detail
// type:: ["gravatar"|"attachment"|"no_pic"] The type of avatar record, for categorization purposes.
// url:: The url of the avatar
// token:: A unique representation of the avatar record which can be used to set the avatar with the user update endpoint. Note: this is an internal representation and is subject to change without notice. It should be consumed with this api endpoint and used in the user update endpoint, and should not be constructed by the client.
// display_name:: A textual description of the avatar record
// id:: ['attachment' type only] the internal id of the attachment
// content-type:: ['attachment' type only] the content-type of the attachment
// filename:: ['attachment' type only] the filename of the attachment
// size:: ['attachment' type only] the size of the attachment
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/avatars
//
// Example:
// return canvasRequest(list_avatar_options, {user_id});
var listAvatarOptions = exports.listAvatarOptions = { type: 'LIST_AVATAR_OPTIONS', method: 'get', key: 'list_avatar_optionslist_avatar_options_user_id', required: ['user_id'] };

// List user page views
// Return a paginated list of the user's page view history in json format,
// similar to the available CSV download. Page views are returned in
// descending order, newest to oldest.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/page_views
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(list_user_page_views, {user_id, ...query});
var listUserPageViews = exports.listUserPageViews = { type: 'LIST_USER_PAGE_VIEWS', method: 'get', key: 'list_user_page_viewslist_user_page_views_user_id', required: ['user_id'] };

// Store custom data
// Store arbitrary user data as JSON.
// 
// Arbitrary JSON data can be stored for a User.
// A typical scenario would be an external site/service that registers users in Canvas
// and wants to capture additional info about them.  The part of the URL that follows
// +/custom_data/+ defines the scope of the request, and it reflects the structure of
// the JSON data to be stored or retrieved.
// 
// The value +self+ may be used for +user_id+ to store data associated with the calling user.
// In order to access another user's custom data, you must be an account administrator with
// permission to manage users.
// 
// A namespace parameter, +ns+, is used to prevent custom_data collisions between
// different apps.  This parameter is required for all custom_data requests.
// 
// A request with Content-Type multipart/form-data or Content-Type
// application/x-www-form-urlencoded can only be used to store strings.
// 
// Example PUT with multipart/form-data data:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/telephone' \
//     -X PUT \
//     -F 'ns=com.my-organization.canvas-app' \
//     -F 'data=555-1234' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": "555-1234"
//   }
// 
// Subscopes (or, generated scopes) can also be specified by passing values to
// +data+[+subscope+].
// 
// Example PUT specifying subscopes:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/body/measurements' \
//     -X PUT \
//     -F 'ns=com.my-organization.canvas-app' \
//     -F 'data[waist]=32in' \
//     -F 'data[inseam]=34in' \
//     -F 'data[chest]=40in' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": {
//       "chest": "40in",
//       "waist": "32in",
//       "inseam": "34in"
//     }
//   }
// 
// Following such a request, subsets of the stored data to be retrieved directly from a subscope.
// 
// Example {api:UsersController#get_custom_data GET} from a generated scope
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/body/measurements/chest' \
//     -X GET \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": "40in"
//   }
// 
// If you want to store more than just strings (i.e. numbers, arrays, hashes, true, false,
// and/or null), you must make a request with Content-Type application/json as in the following
// example.
// 
// Example PUT with JSON data:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
//     -H 'Content-Type: application/json' \
//     -X PUT \
//     -d '{
//           "ns": "com.my-organization.canvas-app",
//           "data": {
//             "a-number": 6.02e23,
//             "a-bool": true,
//             "a-string": "true",
//             "a-hash": {"a": {"b": "ohai"}},
//             "an-array": [1, "two", null, false]
//           }
//         }' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": {
//       "a-number": 6.02e+23,
//       "a-bool": true,
//       "a-string": "true",
//       "a-hash": {
//         "a": {
//           "b": "ohai"
//         }
//       },
//       "an-array": [1, "two", null, false]
//     }
//   }
// 
// If the data is an Object (as it is in the above example), then subsets of the data can
// be accessed by including the object's (possibly nested) keys in the scope of a GET request.
// 
// Example {api:UsersController#get_custom_data GET} with a generated scope:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/a-hash/a/b' \
//     -X GET \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": "ohai"
//   }
// 
// 
// On success, this endpoint returns an object containing the data that was stored.
// 
// Responds with status code 200 if the scope already contained data, and it was overwritten
// by the data specified in the request.
// 
// Responds with status code 201 if the scope was previously empty, and the data specified
// in the request was successfully stored there.
// 
// Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid, or if
// the +data+ parameter is missing.
// 
// Responds with status code 409 if the requested scope caused a conflict and data was not stored.
// This happens when storing data at the requested scope would cause data at an outer scope
// to be lost.  e.g., if +/custom_data+ was +{"fashion_app": {"hair": "blonde"}}+, but
// you tried to +`PUT /custom_data/fashion_app/hair/style -F data=buzz`+, then for the request
// to succeed,the value of +/custom_data/fashion_app/hair+ would have to become a hash, and its
// old string value would be lost.  In this situation, an error object is returned with the
// following format:
// 
//   !!!javascript
//   {
//     "message": "write conflict for custom_data hash",
//     "conflict_scope": "fashion_app/hair",
//     "type_at_conflict": "String",
//     "value_at_conflict": "blonde"
//   }
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/custom_data
//
// Example:
// const body = {
//   ns (required)
//   data (required)
// }
// return canvasRequest(store_custom_data, {user_id}, body);
var storeCustomData = exports.storeCustomData = { type: 'STORE_CUSTOM_DATA', method: 'put', key: 'store_custom_datastore_custom_data_user_id', required: ['user_id'] };

// Load custom data
// Load custom user data.
// 
// Arbitrary JSON data can be stored for a User.  This API call
// retrieves that data for a (optional) given scope.
// See {api:UsersController#set_custom_data Store Custom Data} for details and
// examples.
// 
// On success, this endpoint returns an object containing the data that was requested.
// 
// Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid,
// or if the specified scope does not contain any data.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/custom_data
//
// Example:
// const query = {
//   ns (required)
// }
// return canvasRequest(load_custom_data, {user_id, ...query});
var loadCustomData = exports.loadCustomData = { type: 'LOAD_CUSTOM_DATA', method: 'get', key: 'load_custom_dataload_custom_data_user_id', required: ['user_id'] };

// Delete custom data
// Delete custom user data.
// 
// Arbitrary JSON data can be stored for a User.  This API call
// deletes that data for a given scope.  Without a scope, all custom_data is deleted.
// See {api:UsersController#set_custom_data Store Custom Data} for details and
// examples of storage and retrieval.
// 
// As an example, we'll store some data, then delete a subset of it.
// 
// Example {api:UsersController#set_custom_data PUT} with valid JSON data:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
//     -X PUT \
//     -F 'ns=com.my-organization.canvas-app' \
//     -F 'data[fruit][apple]=so tasty' \
//     -F 'data[fruit][kiwi]=a bit sour' \
//     -F 'data[veggies][root][onion]=tear-jerking' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": {
//       "fruit": {
//         "apple": "so tasty",
//         "kiwi": "a bit sour"
//       },
//       "veggies": {
//         "root": {
//           "onion": "tear-jerking"
//         }
//       }
//     }
//   }
// 
// Example DELETE:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/fruit/kiwi' \
//     -X DELETE \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": "a bit sour"
//   }
// 
// Example {api:UsersController#get_custom_data GET} following the above DELETE:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
//     -X GET \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": {
//       "fruit": {
//         "apple": "so tasty"
//       },
//       "veggies": {
//         "root": {
//           "onion": "tear-jerking"
//         }
//       }
//     }
//   }
// 
// Note that hashes left empty after a DELETE will get removed from the custom_data store.
// For example, following the previous commands, if we delete /custom_data/veggies/root/onion,
// then the entire /custom_data/veggies scope will be removed.
// 
// Example DELETE that empties a parent scope:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/veggies/root/onion' \
//     -X DELETE \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": "tear-jerking"
//   }
// 
// Example {api:UsersController#get_custom_data GET} following the above DELETE:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
//     -X GET \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": {
//       "fruit": {
//         "apple": "so tasty"
//       }
//     }
//   }
// 
// On success, this endpoint returns an object containing the data that was deleted.
// 
// Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid,
// or if the specified scope does not contain any data.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/custom_data
//
// Example:
// const body = {
//   ns (required)
// }
// return canvasRequest(delete_custom_data, {user_id}, body);
var deleteCustomData = exports.deleteCustomData = { type: 'DELETE_CUSTOM_DATA', method: 'delete', key: 'delete_custom_datadelete_custom_data_user_id', required: ['user_id'] };

// List course nicknames
// Returns all course nicknames you have set.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/course_nicknames
//
// Example:
// return canvasRequest(list_course_nicknames, {});
var listCourseNicknames = exports.listCourseNicknames = { type: 'LIST_COURSE_NICKNAMES', method: 'get', key: 'list_course_nicknames', required: [] };

// Get course nickname
// Returns the nickname for a specific course.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/course_nicknames/{course_id}
//
// Example:
// return canvasRequest(get_course_nickname, {course_id});
var getCourseNickname = exports.getCourseNickname = { type: 'GET_COURSE_NICKNAME', method: 'get', key: 'get_course_nicknameget_course_nickname_course_id', required: ['course_id'] };

// Set course nickname
// Set a nickname for the given course. This will replace the course's name
// in output of API calls you make subsequently, as well as in selected
// places in the Canvas web user interface.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/course_nicknames/{course_id}
//
// Example:
// const body = {
//   nickname (required)
// }
// return canvasRequest(set_course_nickname, {course_id}, body);
var setCourseNickname = exports.setCourseNickname = { type: 'SET_COURSE_NICKNAME', method: 'put', key: 'set_course_nicknameset_course_nickname_course_id', required: ['course_id'] };

// Remove course nickname
// Remove the nickname for the given course.
// Subsequent course API calls will return the actual name for the course.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/course_nicknames/{course_id}
//
// Example:
// return canvasRequest(remove_course_nickname, {course_id});
var removeCourseNickname = exports.removeCourseNickname = { type: 'REMOVE_COURSE_NICKNAME', method: 'delete', key: 'remove_course_nicknameremove_course_nickname_course_id', required: ['course_id'] };

// Clear course nicknames
// Remove all stored course nicknames.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/course_nicknames
//
// Example:
// return canvasRequest(clear_course_nicknames, {});
var clearCourseNicknames = exports.clearCourseNicknames = { type: 'CLEAR_COURSE_NICKNAMES', method: 'delete', key: 'clear_course_nicknames', required: [] };