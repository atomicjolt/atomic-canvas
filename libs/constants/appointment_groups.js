"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextAppointment = exports.listStudentGroupParticipants = exports.listUserParticipants = exports.deleteAppointmentGroup = exports.updateAppointmentGroup = exports.getSingleAppointmentGroup = exports.createAppointmentGroup = exports.listAppointmentGroups = void 0;
//
// Appointment Groups
//
// List appointment groups
// Retrieve the paginated list of appointment groups that can be reserved or
// managed by the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups
//
// Example:
// const query = {
//   scope
//   context_codes
//   include_past_appointments
//   include
// }
// return canvasRequest(list_appointment_groups, {, ...query});
exports.listAppointmentGroups = { type: 'LIST_APPOINTMENT_GROUPS', method: 'get', key: 'list_appointment_groups', required: [] };
// Create an appointment group
// Create and return a new appointment group. If new_appointments are
// specified, the response will return a new_appointments array (same format
// as appointments array, see "List appointment groups" action)
//
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups
//
// Example:
// const body = {
//   appointment_group[context_codes] (required)
//   appointment_group[sub_context_codes]
//   appointment_group[title] (required)
//   appointment_group[description]
//   appointment_group[location_name]
//   appointment_group[location_address]
//   appointment_group[publish]
//   appointment_group[participants_per_appointment]
//   appointment_group[min_appointments_per_participant]
//   appointment_group[max_appointments_per_participant]
//   appointment_group[new_appointments][X]
//   appointment_group[participant_visibility]
// }
// return canvasRequest(create_appointment_group, {}, body);
exports.createAppointmentGroup = { type: 'CREATE_APPOINTMENT_GROUP', method: 'post', key: 'create_appointment_group', required: [] };
// Get a single appointment group
// Returns information for a single appointment group
//
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_single_appointment_group, {id, ...query});
exports.getSingleAppointmentGroup = { type: 'GET_SINGLE_APPOINTMENT_GROUP', method: 'get', key: 'get_single_appointment_groupget_single_appointment_group_id', required: ['id'] };
// Update an appointment group
// Update and return an appointment group. If new_appointments are specified,
// the response will return a new_appointments array (same format as
// appointments array, see "List appointment groups" action).
//
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/{id}
//
// Example:
// const body = {
//   appointment_group[context_codes] (required)
//   appointment_group[sub_context_codes]
//   appointment_group[title]
//   appointment_group[description]
//   appointment_group[location_name]
//   appointment_group[location_address]
//   appointment_group[publish]
//   appointment_group[participants_per_appointment]
//   appointment_group[min_appointments_per_participant]
//   appointment_group[max_appointments_per_participant]
//   appointment_group[new_appointments][X]
//   appointment_group[participant_visibility]
// }
// return canvasRequest(update_appointment_group, {id}, body);
exports.updateAppointmentGroup = { type: 'UPDATE_APPOINTMENT_GROUP', method: 'put', key: 'update_appointment_groupupdate_appointment_group_id', required: ['id'] };
// Delete an appointment group
// Delete an appointment group (and associated time slots and reservations)
// and return the deleted group
//
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/{id}
//
// Example:
// const body = {
//   cancel_reason
// }
// return canvasRequest(delete_appointment_group, {id}, body);
exports.deleteAppointmentGroup = { type: 'DELETE_APPOINTMENT_GROUP', method: 'delete', key: 'delete_appointment_groupdelete_appointment_group_id', required: ['id'] };
// List user participants
// A paginated list of users that are (or may be) participating in this
// appointment group.  Refer to the Users API for the response fields. Returns
// no results for appointment groups with the "Group" participant_type.
//
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/{id}/users
//
// Example:
// const query = {
//   registration_status
// }
// return canvasRequest(list_user_participants, {id, ...query});
exports.listUserParticipants = { type: 'LIST_USER_PARTICIPANTS', method: 'get', key: 'list_user_participantslist_user_participants_id', required: ['id'] };
// List student group participants
// A paginated list of student groups that are (or may be) participating in
// this appointment group. Refer to the Groups API for the response fields.
// Returns no results for appointment groups with the "User" participant_type.
//
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/{id}/groups
//
// Example:
// const query = {
//   registration_status
// }
// return canvasRequest(list_student_group_participants, {id, ...query});
exports.listStudentGroupParticipants = { type: 'LIST_STUDENT_GROUP_PARTICIPANTS', method: 'get', key: 'list_student_group_participantslist_student_group_participants_id', required: ['id'] };
// Get next appointment
// Return the next appointment available to sign up for. The appointment
// is returned in a one-element array. If no future appointments are
// available, an empty array is returned.
//
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/next_appointment
//
// Example:
// const query = {
//   appointment_group_ids
// }
// return canvasRequest(get_next_appointment, {, ...query});
exports.getNextAppointment = { type: 'GET_NEXT_APPOINTMENT', method: 'get', key: 'get_next_appointment', required: [] };
//# sourceMappingURL=appointment_groups.js.map