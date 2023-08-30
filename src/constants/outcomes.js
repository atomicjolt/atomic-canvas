//
// Outcomes
//
// Show an outcome
// Returns the details of the outcome with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/outcomes.html
// API Url: outcomes/{id}
//
// Example:
// const query = {
//   add_defaults
// }
// return canvasRequest(show_outcome, {id, ...query});
export const showOutcome = { type: 'SHOW_OUTCOME', method: 'get', key: 'show_outcomeshow_outcome_id', required: ['id'] };

// Update an outcome
// Modify an existing outcome. Fields not provided are left as is;
// unrecognized fields are ignored.
// 
// If any new ratings are provided, the combination of all new ratings
// provided completely replace any existing embedded rubric criterion; it is
// not possible to tweak the ratings of the embedded rubric criterion.
// 
// A new embedded rubric criterion's mastery_points default to the maximum
// points in the highest rating if not specified in the mastery_points
// parameter. Any new ratings lacking a description are given a default of "No
// description". Any new ratings lacking a point value are given a default of
// 0.
//
// API Docs: https://canvas.instructure.com/doc/api/outcomes.html
// API Url: outcomes/{id}
//
// Example:
// const body = {
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
//   add_defaults
// }
// return canvasRequest(update_outcome, {id}, body);
export const updateOutcome = { type: 'UPDATE_OUTCOME', method: 'put', key: 'update_outcomeupdate_outcome_id', required: ['id'] };

// Get aligned assignments for an outcome in a course for a particular student
// 
//
// API Docs: https://canvas.instructure.com/doc/api/outcomes.html
// API Url: courses/{course_id}/outcome_alignments
//
// Example:
// const query = {
//   student_id
// }
// return canvasRequest(get_aligned_assignments_for_outcome_in_course_for_particular_student, {course_id, ...query});
export const getAlignedAssignmentsForOutcomeInCourseForParticularStudent = { type: 'GET_ALIGNED_ASSIGNMENTS_FOR_OUTCOME_IN_COURSE_FOR_PARTICULAR_STUDENT', method: 'get', key: 'get_aligned_assignments_for_outcome_in_course_for_particular_studentget_aligned_assignments_for_outcome_in_course_for_particular_student_course_id', required: ['course_id'] };