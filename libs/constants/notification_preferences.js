'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Notification Preferences
//
// List preferences
// Fetch all preferences for the given communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{communication_channel_id}/notification_preferences
//
// Example:
// return canvasRequest(list_preferences_communication_channel_id, {user_id, communication_channel_id});
var listPreferencesCommunicationChannelId = exports.listPreferencesCommunicationChannelId = { type: 'LIST_PREFERENCES_COMMUNICATION_CHANNEL_ID', method: 'get', key: 'list_preferences_communication_channel_idlist_preferences_communication_channel_id_{user_id}_{communication_channel_id}', required: ['user_id', 'communication_channel_id'] };

// List preferences
// Fetch all preferences for the given communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{type}/{address}/notification_preferences
//
// Example:
// return canvasRequest(list_preferences_type, {user_id, type, address});
var listPreferencesType = exports.listPreferencesType = { type: 'LIST_PREFERENCES_TYPE', method: 'get', key: 'list_preferences_typelist_preferences_type_{user_id}_{type}_{address}', required: ['user_id', 'type', 'address'] };

// List of preference categories
// Fetch all notification preference categories for the given communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{communication_channel_id}/notification_preference_categories
//
// Example:
// return canvasRequest(list_of_preference_categories, {user_id, communication_channel_id});
var listOfPreferenceCategories = exports.listOfPreferenceCategories = { type: 'LIST_OF_PREFERENCE_CATEGORIES', method: 'get', key: 'list_of_preference_categorieslist_of_preference_categories_{user_id}_{communication_channel_id}', required: ['user_id', 'communication_channel_id'] };

// Get a preference
// Fetch the preference for the given notification for the given communicaiton channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{communication_channel_id}/notification_preferences/{notification}
//
// Example:
// return canvasRequest(get_preference_communication_channel_id, {user_id, communication_channel_id, notification});
var getPreferenceCommunicationChannelId = exports.getPreferenceCommunicationChannelId = { type: 'GET_PREFERENCE_COMMUNICATION_CHANNEL_ID', method: 'get', key: 'get_preference_communication_channel_idget_preference_communication_channel_id_{user_id}_{communication_channel_id}_{notification}', required: ['user_id', 'communication_channel_id', 'notification'] };

// Get a preference
// Fetch the preference for the given notification for the given communicaiton channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{type}/{address}/notification_preferences/{notification}
//
// Example:
// return canvasRequest(get_preference_type, {user_id, type, address, notification});
var getPreferenceType = exports.getPreferenceType = { type: 'GET_PREFERENCE_TYPE', method: 'get', key: 'get_preference_typeget_preference_type_{user_id}_{type}_{address}_{notification}', required: ['user_id', 'type', 'address', 'notification'] };

// Update a preference
// Change the preference for a single notification for a single communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{communication_channel_id}/notification_preferences/{notification}
//
// Example:
// const body = {
//   notification_preferences[frequency] (required)
// }
// return canvasRequest(update_preference_communication_channel_id, {communication_channel_id, notification}, body);
var updatePreferenceCommunicationChannelId = exports.updatePreferenceCommunicationChannelId = { type: 'UPDATE_PREFERENCE_COMMUNICATION_CHANNEL_ID', method: 'put', key: 'update_preference_communication_channel_idupdate_preference_communication_channel_id_{communication_channel_id}_{notification}', required: ['communication_channel_id', 'notification'] };

// Update a preference
// Change the preference for a single notification for a single communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{type}/{address}/notification_preferences/{notification}
//
// Example:
// const body = {
//   notification_preferences[frequency] (required)
// }
// return canvasRequest(update_preference_type, {type, address, notification}, body);
var updatePreferenceType = exports.updatePreferenceType = { type: 'UPDATE_PREFERENCE_TYPE', method: 'put', key: 'update_preference_typeupdate_preference_type_{type}_{address}_{notification}', required: ['type', 'address', 'notification'] };

// Update preferences by category
// Change the preferences for multiple notifications based on the category for a single communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{communication_channel_id}/notification_preference_categories/{category}
//
// Example:
// const body = {
//   notification_preferences[frequency] (required)
// }
// return canvasRequest(update_preferences_by_category, {communication_channel_id, category}, body);
var updatePreferencesByCategory = exports.updatePreferencesByCategory = { type: 'UPDATE_PREFERENCES_BY_CATEGORY', method: 'put', key: 'update_preferences_by_categoryupdate_preferences_by_category_{communication_channel_id}_{category}', required: ['communication_channel_id', 'category'] };

// Update multiple preferences
// Change the preferences for multiple notifications for a single communication channel at once
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{communication_channel_id}/notification_preferences
//
// Example:
// const body = {
//   notification_preferences[<X>][frequency] (required)
// }
// return canvasRequest(update_multiple_preferences_communication_channel_id, {communication_channel_id}, body);
var updateMultiplePreferencesCommunicationChannelId = exports.updateMultiplePreferencesCommunicationChannelId = { type: 'UPDATE_MULTIPLE_PREFERENCES_COMMUNICATION_CHANNEL_ID', method: 'put', key: 'update_multiple_preferences_communication_channel_idupdate_multiple_preferences_communication_channel_id_communication_channel_id', required: ['communication_channel_id'] };

// Update multiple preferences
// Change the preferences for multiple notifications for a single communication channel at once
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{type}/{address}/notification_preferences
//
// Example:
// const body = {
//   notification_preferences[<X>][frequency] (required)
// }
// return canvasRequest(update_multiple_preferences_type, {type, address}, body);
var updateMultiplePreferencesType = exports.updateMultiplePreferencesType = { type: 'UPDATE_MULTIPLE_PREFERENCES_TYPE', method: 'put', key: 'update_multiple_preferences_typeupdate_multiple_preferences_type_{type}_{address}', required: ['type', 'address'] };