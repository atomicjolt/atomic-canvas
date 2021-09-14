'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Account Notifications
//
// Index of active global notification for the user
// Returns a list of all global notifications in the account for the current user
// Any notifications that have been closed by the user will not be returned, unless
// a include_past parameter is passed in as true.
//
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/account_notifications
//
// Example:
// const query = {
//   include_past
// }
// return canvasRequest(index_of_active_global_notification_for_user, {account_id, ...query});
var indexOfActiveGlobalNotificationForUser = exports.indexOfActiveGlobalNotificationForUser = { type: 'INDEX_OF_ACTIVE_GLOBAL_NOTIFICATION_FOR_USER', method: 'get', key: 'index_of_active_global_notification_for_userindex_of_active_global_notification_for_user_account_id', required: ['account_id'] };

// Show a global notification
// Returns a global notification for the current user
// A notification that has been closed by the user will not be returned
//
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/account_notifications/{id}
//
// Example:
// return canvasRequest(show_global_notification, {account_id, id});
var showGlobalNotification = exports.showGlobalNotification = { type: 'SHOW_GLOBAL_NOTIFICATION', method: 'get', key: 'show_global_notificationshow_global_notification_{account_id}_{id}', required: ['account_id', 'id'] };

// Close notification for user
// If the current user no long wants to see this notification it can be excused with this call
//
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/account_notifications/{id}
//
// Example:
// return canvasRequest(close_notification_for_user, {account_id, id});
var closeNotificationForUser = exports.closeNotificationForUser = { type: 'CLOSE_NOTIFICATION_FOR_USER', method: 'delete', key: 'close_notification_for_userclose_notification_for_user_{account_id}_{id}', required: ['account_id', 'id'] };

// Create a global notification
// Create and return a new global notification for an account.
//
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/account_notifications
//
// Example:
// const body = {
//   account_notification[subject] (required)
//   account_notification[message] (required)
//   account_notification[start_at] (required)
//   account_notification[end_at] (required)
//   account_notification[icon]
//   account_notification_roles
// }
// return canvasRequest(create_global_notification, {account_id}, body);
var createGlobalNotification = exports.createGlobalNotification = { type: 'CREATE_GLOBAL_NOTIFICATION', method: 'post', key: 'create_global_notificationcreate_global_notification_account_id', required: ['account_id'] };

// Update a global notification
// Update global notification for an account.
//
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/account_notifications/{id}
//
// Example:
// const body = {
//   account_notification[subject]
//   account_notification[message]
//   account_notification[start_at]
//   account_notification[end_at]
//   account_notification[icon]
//   account_notification_roles
// }
// return canvasRequest(update_global_notification, {account_id, id}, body);
var updateGlobalNotification = exports.updateGlobalNotification = { type: 'UPDATE_GLOBAL_NOTIFICATION', method: 'put', key: 'update_global_notificationupdate_global_notification_{account_id}_{id}', required: ['account_id', 'id'] };