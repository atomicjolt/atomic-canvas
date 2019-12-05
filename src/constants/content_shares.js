//
// Content Shares
//
// Create a content share
// Share content directly between two or more users
//
// API Docs: https://canvas.instructure.com/doc/api/content_shares.html
// API Url: users/{user_id}/content_shares
//
// Example:
// const body = {
//   receiver_ids (required)
//   content_type (required)
//   content_id (required)
// }
// return canvasRequest(create_content_share, {user_id}, body);
export const createContentShare = { type: 'CREATE_CONTENT_SHARE', method: 'post', key: 'create_content_sharecreate_content_share_user_id', required: ['user_id'] };

// List content shares
// Return a paginated list of content shares a user has sent or received. Use +self+ as the user_id
// to retrieve your own content shares. Only linked observers and administrators may view other users'
// content shares.
//
// API Docs: https://canvas.instructure.com/doc/api/content_shares.html
// API Url: users/{user_id}/content_shares/sent
//
// Example:
// return canvasRequest(list_content_shares_sent, {user_id});
export const listContentSharesSent = { type: 'LIST_CONTENT_SHARES_SENT', method: 'get', key: 'list_content_shares_sentlist_content_shares_sent_user_id', required: ['user_id'] };

// List content shares
// Return a paginated list of content shares a user has sent or received. Use +self+ as the user_id
// to retrieve your own content shares. Only linked observers and administrators may view other users'
// content shares.
//
// API Docs: https://canvas.instructure.com/doc/api/content_shares.html
// API Url: users/{user_id}/content_shares/received
//
// Example:
// return canvasRequest(list_content_shares_received, {user_id});
export const listContentSharesReceived = { type: 'LIST_CONTENT_SHARES_RECEIVED', method: 'get', key: 'list_content_shares_receivedlist_content_shares_received_user_id', required: ['user_id'] };

// Get unread shares count
// Return the number of content shares a user has received that have not yet been read. Use +self+ as the user_id
// to retrieve your own content shares. Only linked observers and administrators may view other users'
// content shares.
//
// API Docs: https://canvas.instructure.com/doc/api/content_shares.html
// API Url: users/{user_id}/content_shares/unread_count
//
// Example:
// return canvasRequest(get_unread_shares_count, {user_id});
export const getUnreadSharesCount = { type: 'GET_UNREAD_SHARES_COUNT', method: 'get', key: 'get_unread_shares_countget_unread_shares_count_user_id', required: ['user_id'] };

// Get content share
// Return information about a single content share. You may use +self+ as the user_id to retrieve your own content share.
//
// API Docs: https://canvas.instructure.com/doc/api/content_shares.html
// API Url: users/{user_id}/content_shares/{id}
//
// Example:
// return canvasRequest(get_content_share, {user_id, id});
export const getContentShare = { type: 'GET_CONTENT_SHARE', method: 'get', key: 'get_content_shareget_content_share_{user_id}_{id}', required: ['user_id', 'id'] };

// Remove content share
// Remove a content share from your list. Use +self+ as the user_id. Note that this endpoint does not delete other users'
// copies of the content share.
//
// API Docs: https://canvas.instructure.com/doc/api/content_shares.html
// API Url: users/{user_id}/content_shares/{id}
//
// Example:
// return canvasRequest(remove_content_share, {user_id, id});
export const removeContentShare = { type: 'REMOVE_CONTENT_SHARE', method: 'delete', key: 'remove_content_shareremove_content_share_{user_id}_{id}', required: ['user_id', 'id'] };

// Add users to content share
// Send a previously created content share to additional users
//
// API Docs: https://canvas.instructure.com/doc/api/content_shares.html
// API Url: users/{user_id}/content_shares/{id}/add_users
//
// Example:
// const body = {
//   receiver_ids
// }
// return canvasRequest(add_users_to_content_share, {user_id, id}, body);
export const addUsersToContentShare = { type: 'ADD_USERS_TO_CONTENT_SHARE', method: 'post', key: 'add_users_to_content_shareadd_users_to_content_share_{user_id}_{id}', required: ['user_id', 'id'] };

// Update a content share
// Mark a content share read or unread
//
// API Docs: https://canvas.instructure.com/doc/api/content_shares.html
// API Url: users/{user_id}/content_shares/{id}
//
// Example:
// const body = {
//   read_state
// }
// return canvasRequest(update_content_share, {user_id, id}, body);
export const updateContentShare = { type: 'UPDATE_CONTENT_SHARE', method: 'put', key: 'update_content_shareupdate_content_share_{user_id}_{id}', required: ['user_id', 'id'] };