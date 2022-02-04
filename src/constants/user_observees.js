//
// User Observees
//
// List observees
// A paginated list of the users that the given user is observing.
// 
// *Note:* all users are allowed to list their own observees. Administrators can list
// other users' observees.
// 
// The returned observees will include an attribute "observation_link_root_account_ids", a list
// of ids for the root accounts the observer and observee are linked on. The observer will only be able to
// observe in courses associated with these root accounts.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observees
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_observees, {user_id, ...query});
export const listObservees = { type: 'LIST_OBSERVEES', method: 'get', key: 'list_observeeslist_observees_user_id', required: ['user_id'] };

// List observers
// A paginated list of the observers of a given user.
// 
// *Note:* all users are allowed to list their own observers. Administrators can list
// other users' observers.
// 
// The returned observers will include an attribute "observation_link_root_account_ids", a list
// of ids for the root accounts the observer and observee are linked on. The observer will only be able to
// observe in courses associated with these root accounts.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observers
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_observers, {user_id, ...query});
export const listObservers = { type: 'LIST_OBSERVERS', method: 'get', key: 'list_observerslist_observers_user_id', required: ['user_id'] };

// Add an observee with credentials
// Register the given user to observe another user, given the observee's credentials.
// 
// *Note:* all users are allowed to add their own observees, given the observee's
// credentials or access token are provided. Administrators can add observees given credentials, access token or
// the {api:UserObserveesController#update observee's id}.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observees
//
// Example:
// const body = {
//   observee[unique_id]
//   observee[password]
//   access_token
//   pairing_code
//   root_account_id
// }
// return canvasRequest(add_observee_with_credentials, {user_id}, body);
export const addObserveeWithCredentials = { type: 'ADD_OBSERVEE_WITH_CREDENTIALS', method: 'post', key: 'add_observee_with_credentialsadd_observee_with_credentials_user_id', required: ['user_id'] };

// Show an observee
// Gets information about an observed user.
// 
// *Note:* all users are allowed to view their own observees.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observees/{observee_id}
//
// Example:
// return canvasRequest(show_observee, {user_id, observee_id});
export const showObservee = { type: 'SHOW_OBSERVEE', method: 'get', key: 'show_observeeshow_observee_{user_id}_{observee_id}', required: ['user_id', 'observee_id'] };

// Show an observer
// Gets information about an observer.
// 
// *Note:* all users are allowed to view their own observers.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observers/{observer_id}
//
// Example:
// return canvasRequest(show_observer, {user_id, observer_id});
export const showObserver = { type: 'SHOW_OBSERVER', method: 'get', key: 'show_observershow_observer_{user_id}_{observer_id}', required: ['user_id', 'observer_id'] };

// Add an observee
// Registers a user as being observed by the given user.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observees/{observee_id}
//
// Example:
// const body = {
//   root_account_id
// }
// return canvasRequest(add_observee, {user_id, observee_id}, body);
export const addObservee = { type: 'ADD_OBSERVEE', method: 'put', key: 'add_observeeadd_observee_{user_id}_{observee_id}', required: ['user_id', 'observee_id'] };

// Remove an observee
// Unregisters a user as being observed by the given user.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observees/{observee_id}
//
// Example:
// const body = {
//   root_account_id
// }
// return canvasRequest(remove_observee, {user_id, observee_id}, body);
export const removeObservee = { type: 'REMOVE_OBSERVEE', method: 'delete', key: 'remove_observeeremove_observee_{user_id}_{observee_id}', required: ['user_id', 'observee_id'] };

// Create observer pairing code
// If the user is a student, will generate a code to be used with self registration
// or observees APIs to link another user to this student.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observer_pairing_codes
//
// Example:
// return canvasRequest(create_observer_pairing_code, {user_id});
export const createObserverPairingCode = { type: 'CREATE_OBSERVER_PAIRING_CODE', method: 'post', key: 'create_observer_pairing_codecreate_observer_pairing_code_user_id', required: ['user_id'] };