"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCalendarEvent = exports.setCourseTimetable = exports.reserveTimeSlotParticipantId = exports.reserveTimeSlot = exports.listCalendarEventsForUser = exports.listCalendarEvents = exports.getSingleCalendarEventOrAssignment = exports.getCourseTimetable = exports.deleteCalendarEvent = exports.createOrUpdateEventsDirectlyForCourseTimetable = exports.createCalendarEvent = void 0;
//
// Calendar Events
//
// List calendar events
// Retrieve the paginated list of calendar events or assignments for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events
//
// Example:
// const query = {
//   type
//   start_date
//   end_date
//   undated
//   all_events
//   context_codes
//   excludes
//   important_dates
// }
// return canvasRequest(list_calendar_events, {, ...query});
var listCalendarEvents = {
  type: 'LIST_CALENDAR_EVENTS',
  method: 'get',
  key: 'list_calendar_events',
  required: []
}; // List calendar events for a user
// Retrieve the paginated list of calendar events or assignments for the specified user.
// To view calendar events for a user other than yourself,
// you must either be an observer of that user or an administrator.
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: users/{user_id}/calendar_events
//
// Example:
// const query = {
//   type
//   start_date
//   end_date
//   undated
//   all_events
//   context_codes
//   excludes
//   submission_types
//   exclude_submission_types
//   important_dates
// }
// return canvasRequest(list_calendar_events_for_user, {user_id, ...query});

exports.listCalendarEvents = listCalendarEvents;
var listCalendarEventsForUser = {
  type: 'LIST_CALENDAR_EVENTS_FOR_USER',
  method: 'get',
  key: 'list_calendar_events_for_userlist_calendar_events_for_user_user_id',
  required: ['user_id']
}; // Create a calendar event
// Create and return a new calendar event
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events
//
// Example:
// const body = {
//   calendar_event[context_code] (required)
//   calendar_event[title]
//   calendar_event[description]
//   calendar_event[start_at]
//   calendar_event[end_at]
//   calendar_event[location_name]
//   calendar_event[location_address]
//   calendar_event[time_zone_edited]
//   calendar_event[all_day]
//   calendar_event[child_event_data][X][start_at]
//   calendar_event[child_event_data][X][end_at]
//   calendar_event[child_event_data][X][context_code]
//   calendar_event[duplicate][count]
//   calendar_event[duplicate][interval]
//   calendar_event[duplicate][frequency]
//   calendar_event[duplicate][append_iterator]
// }
// return canvasRequest(create_calendar_event, {}, body);

exports.listCalendarEventsForUser = listCalendarEventsForUser;
var createCalendarEvent = {
  type: 'CREATE_CALENDAR_EVENT',
  method: 'post',
  key: 'create_calendar_event',
  required: []
}; // Get a single calendar event or assignment
// 
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}
//
// Example:
// return canvasRequest(get_single_calendar_event_or_assignment, {id});

exports.createCalendarEvent = createCalendarEvent;
var getSingleCalendarEventOrAssignment = {
  type: 'GET_SINGLE_CALENDAR_EVENT_OR_ASSIGNMENT',
  method: 'get',
  key: 'get_single_calendar_event_or_assignmentget_single_calendar_event_or_assignment_id',
  required: ['id']
}; // Reserve a time slot
// Reserves a particular time slot and return the new reservation
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}/reservations
//
// Example:
// const body = {
//   participant_id
//   comments
//   cancel_existing
// }
// return canvasRequest(reserve_time_slot, {id}, body);

exports.getSingleCalendarEventOrAssignment = getSingleCalendarEventOrAssignment;
var reserveTimeSlot = {
  type: 'RESERVE_TIME_SLOT',
  method: 'post',
  key: 'reserve_time_slotreserve_time_slot_id',
  required: ['id']
}; // Reserve a time slot
// Reserves a particular time slot and return the new reservation
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}/reservations/{participant_id}
//
// Example:
// const body = {
//   comments
//   cancel_existing
// }
// return canvasRequest(reserve_time_slot_participant_id, {id, participant_id}, body);

exports.reserveTimeSlot = reserveTimeSlot;
var reserveTimeSlotParticipantId = {
  type: 'RESERVE_TIME_SLOT_PARTICIPANT_ID',
  method: 'post',
  key: 'reserve_time_slot_participant_idreserve_time_slot_participant_id_{id}_{participant_id}',
  required: ['id', 'participant_id']
}; // Update a calendar event
// Update and return a calendar event
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}
//
// Example:
// const body = {
//   calendar_event[context_code]
//   calendar_event[title]
//   calendar_event[description]
//   calendar_event[start_at]
//   calendar_event[end_at]
//   calendar_event[location_name]
//   calendar_event[location_address]
//   calendar_event[time_zone_edited]
//   calendar_event[all_day]
//   calendar_event[child_event_data][X][start_at]
//   calendar_event[child_event_data][X][end_at]
//   calendar_event[child_event_data][X][context_code]
// }
// return canvasRequest(update_calendar_event, {id}, body);

exports.reserveTimeSlotParticipantId = reserveTimeSlotParticipantId;
var updateCalendarEvent = {
  type: 'UPDATE_CALENDAR_EVENT',
  method: 'put',
  key: 'update_calendar_eventupdate_calendar_event_id',
  required: ['id']
}; // Delete a calendar event
// Delete an event from the calendar and return the deleted event
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}
//
// Example:
// const body = {
//   cancel_reason
// }
// return canvasRequest(delete_calendar_event, {id}, body);

exports.updateCalendarEvent = updateCalendarEvent;
var deleteCalendarEvent = {
  type: 'DELETE_CALENDAR_EVENT',
  method: 'delete',
  key: 'delete_calendar_eventdelete_calendar_event_id',
  required: ['id']
}; // Set a course timetable
// Creates and updates "timetable" events for a course.
// Can automaticaly generate a series of calendar events based on simple schedules
// (e.g. "Monday and Wednesday at 2:00pm" )
// 
// Existing timetable events for the course and course sections
// will be updated if they still are part of the timetable.
// Otherwise, they will be deleted.
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: courses/{course_id}/calendar_events/timetable
//
// Example:
// const body = {
//   timetables[course_section_id]
//   timetables[course_section_id][weekdays]
//   timetables[course_section_id][start_time]
//   timetables[course_section_id][end_time]
//   timetables[course_section_id][location_name]
// }
// return canvasRequest(set_course_timetable, {course_id}, body);

exports.deleteCalendarEvent = deleteCalendarEvent;
var setCourseTimetable = {
  type: 'SET_COURSE_TIMETABLE',
  method: 'post',
  key: 'set_course_timetableset_course_timetable_course_id',
  required: ['course_id']
}; // Get course timetable
// Returns the last timetable set by the
// {api:CalendarEventsApiController#set_course_timetable Set a course timetable} endpoint
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: courses/{course_id}/calendar_events/timetable
//
// Example:
// return canvasRequest(get_course_timetable, {course_id});

exports.setCourseTimetable = setCourseTimetable;
var getCourseTimetable = {
  type: 'GET_COURSE_TIMETABLE',
  method: 'get',
  key: 'get_course_timetableget_course_timetable_course_id',
  required: ['course_id']
}; // Create or update events directly for a course timetable
// Creates and updates "timetable" events for a course or course section.
// Similar to {api:CalendarEventsApiController#set_course_timetable setting a course timetable},
// but instead of generating a list of events based on a timetable schedule,
// this endpoint expects a complete list of events.
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: courses/{course_id}/calendar_events/timetable_events
//
// Example:
// const body = {
//   course_section_id
//   events
//   events[start_at]
//   events[end_at]
//   events[location_name]
//   events[code]
//   events[title]
// }
// return canvasRequest(create_or_update_events_directly_for_course_timetable, {course_id}, body);

exports.getCourseTimetable = getCourseTimetable;
var createOrUpdateEventsDirectlyForCourseTimetable = {
  type: 'CREATE_OR_UPDATE_EVENTS_DIRECTLY_FOR_COURSE_TIMETABLE',
  method: 'post',
  key: 'create_or_update_events_directly_for_course_timetablecreate_or_update_events_directly_for_course_timetable_course_id',
  required: ['course_id']
};
exports.createOrUpdateEventsDirectlyForCourseTimetable = createOrUpdateEventsDirectlyForCourseTimetable;