//
// Course Pace
//
// Show a Course pace
// Returns a course pace for the course and pace id provided
//
// API Docs: https://canvas.instructure.com/doc/api/course_pace.html
// API Url: courses/{course_id}/course_pacing/{id}
//
// Example:
// const query = {
//   course_pace_id (required)
// }
// return canvasRequest(show_course_pace, {course_id, id, ...query});
export const showCoursePace = { type: 'SHOW_COURSE_PACE', method: 'get', key: 'show_course_paceshow_course_pace_{course_id}_{id}', required: ['course_id', 'id'] };

// Create a Course pace
// 
//
// API Docs: https://canvas.instructure.com/doc/api/course_pace.html
// API Url: courses/{course_id}/course_pacing
//
// Example:
// const body = {
//   end_date
//   end_date_context
//   start_date
//   start_date_context
//   exclude_weekends
//   hard_end_dates
//   workflow_state
//   course_pace_module_item_attributes
//   context_id
//   context_type
// }
// return canvasRequest(create_course_pace, {course_id}, body);
export const createCoursePace = { type: 'CREATE_COURSE_PACE', method: 'post', key: 'create_course_pacecreate_course_pace_course_id', required: ['course_id'] };

// Update a Course pace
// Returns the updated course pace
//
// API Docs: https://canvas.instructure.com/doc/api/course_pace.html
// API Url: courses/{course_id}/course_pacing/{id}
//
// Example:
// const body = {
//   course_pace_id (required)
//   end_date
//   exclude_weekends
//   hard_end_dates
//   workflow_state
//   course_pace_module_item_attributes
// }
// return canvasRequest(update_course_pace, {course_id, id}, body);
export const updateCoursePace = { type: 'UPDATE_COURSE_PACE', method: 'put', key: 'update_course_paceupdate_course_pace_{course_id}_{id}', required: ['course_id', 'id'] };

// Delete a Course pace
// Returns the updated course pace
//
// API Docs: https://canvas.instructure.com/doc/api/course_pace.html
// API Url: courses/{course_id}/course_pacing/{id}
//
// Example:
// const body = {
//   course_pace_id (required)
// }
// return canvasRequest(delete_course_pace, {course_id, id}, body);
export const deleteCoursePace = { type: 'DELETE_COURSE_PACE', method: 'delete', key: 'delete_course_pacedelete_course_pace_{course_id}_{id}', required: ['course_id', 'id'] };