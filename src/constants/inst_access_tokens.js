//
// InstAccess tokens
//
// Create InstAccess token
// Create a unique, encrypted InstAccess token.
// 
// Generates a different InstAccess token each time it's called, each one expires
// after a short window (1 hour).
//
// API Docs: https://canvas.instructure.com/doc/api/inst_access_tokens.html
// API Url: inst_access_tokens
//
// Example:
// return canvasRequest(create_instaccess_token, {});
export const createInstaccessToken = { type: 'CREATE_INSTACCESS_TOKEN', method: 'post', key: 'create_instaccess_token', required: [] };