"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOfCommmessagesForUser = void 0;
//
// CommMessages
//
// List of CommMessages for a user
// Retrieve a paginated list of messages sent to a user.
//
// API Docs: https://canvas.instructure.com/doc/api/comm_messages.html
// API Url: comm_messages
//
// Example:
// const query = {
//   user_id (required)
//   start_time
//   end_time
// }
// return canvasRequest(list_of_commmessages_for_user, {, ...query});
exports.listOfCommmessagesForUser = { type: 'LIST_OF_COMMMESSAGES_FOR_USER', method: 'get', key: 'list_of_commmessages_for_user', required: [] };
//# sourceMappingURL=comm_messages.js.map