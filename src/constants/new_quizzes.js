//
// New Quizzes
//
// Get a new quiz
// Get details about a single new quiz.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quizzes.html
// API Url: /quizcourses/{course_id}/quizzes/{assignment_id}
//
// Example:
// return canvasRequest(get_new_quiz, {course_id, assignment_id});
export const getNewQuiz = { type: 'GET_NEW_QUIZ', method: 'get', key: 'get_new_quizget_new_quiz_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };

// List new quizzes
// Get a list of new quizzes.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quizzes.html
// API Url: /quizcourses/{course_id}/quizzes
//
// Example:
// return canvasRequest(list_new_quizzes, {course_id});
export const listNewQuizzes = { type: 'LIST_NEW_QUIZZES', method: 'get', key: 'list_new_quizzeslist_new_quizzes_course_id', required: ['course_id'] };

// Create a new quiz
// Create a new quiz for the course.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quizzes.html
// API Url: /quizcourses/{course_id}/quizzes
//
// Example:
// const body = {
//   quiz[title]
//   quiz[assignment_group_id]
//   quiz[points_possible]
//   quiz[due_at]
//   quiz[lock_at]
//   quiz[unlock_at]
//   quiz[grading_type]
//   quiz[instructions]
//   quiz[quiz_settings][calculator_type]
//   quiz[quiz_settings][filter_ip_address]
//   quiz[quiz_settings][filters][ips]
//   quiz[quiz_settings][multiple_attempts][multiple_attempts_enabled]
//   quiz[quiz_settings][multiple_attempts][attempt_limit]
//   quiz[quiz_settings][multiple_attempts][max_attempts]
//   quiz[quiz_settings][multiple_attempts][score_to_keep]
//   quiz[quiz_settings][multiple_attempts][cooling_period]
//   quiz[quiz_settings][multiple_attempts][cooling_period_seconds]
//   quiz[quiz_settings][one_at_a_time_type]
//   quiz[quiz_settings][allow_backtracking]
//   quiz[quiz_settings][results_view_settings][result_view_restricted]
//   quiz[quiz_settings][results_view_settings][display_points_awarded]
//   quiz[quiz_settings][results_view_settings][display_points_possible]
//   quiz[quiz_settings][results_view_settings][display_items]
//   quiz[quiz_settings][results_view_settings][display_item_response]
//   quiz[quiz_settings][results_view_settings][display_item_response_correctness]
//   quiz[quiz_settings][results_view_settings][display_item_correct_answer]
//   quiz[quiz_settings][results_view_settings][display_item_feedback]
//   quiz[quiz_settings][shuffle_answers]
//   quiz[quiz_settings][shuffle_questions]
//   quiz[quiz_settings][require_student_access_code]
//   quiz[quiz_settings][student_access_code]
//   quiz[quiz_settings][has_time_limit]
//   quiz[quiz_settings][session_time_limit_in_seconds]
// }
// return canvasRequest(create_new_quiz, {course_id}, body);
export const createNewQuiz = { type: 'CREATE_NEW_QUIZ', method: 'post', key: 'create_new_quizcreate_new_quiz_course_id', required: ['course_id'] };

// Update a single quiz
// Update a single quiz for the course.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quizzes.html
// API Url: /quizcourses/{course_id}/quizzes/{assignment_id}
//
// Example:
// const body = {
//   quiz[title]
//   quiz[assignment_group_id]
//   quiz[points_possible]
//   quiz[due_at]
//   quiz[lock_at]
//   quiz[unlock_at]
//   quiz[grading_type]
//   quiz[instructions]
//   quiz[quiz_settings][calculator_type]
//   quiz[quiz_settings][filter_ip_address]
//   quiz[quiz_settings][filters][ips]
//   quiz[quiz_settings][multiple_attempts][multiple_attempts_enabled]
//   quiz[quiz_settings][multiple_attempts][attempt_limit]
//   quiz[quiz_settings][multiple_attempts][max_attempts]
//   quiz[quiz_settings][multiple_attempts][score_to_keep]
//   quiz[quiz_settings][multiple_attempts][cooling_period]
//   quiz[quiz_settings][multiple_attempts][cooling_period_seconds]
//   quiz[quiz_settings][one_at_a_time_type]
//   quiz[quiz_settings][allow_backtracking]
//   quiz[quiz_settings][results_view_settings][result_view_restricted]
//   quiz[quiz_settings][results_view_settings][display_points_awarded]
//   quiz[quiz_settings][results_view_settings][display_points_possible]
//   quiz[quiz_settings][results_view_settings][display_items]
//   quiz[quiz_settings][results_view_settings][display_item_response]
//   quiz[quiz_settings][results_view_settings][display_item_response_correctness]
//   quiz[quiz_settings][results_view_settings][display_item_correct_answer]
//   quiz[quiz_settings][results_view_settings][display_item_feedback]
//   quiz[quiz_settings][shuffle_answers]
//   quiz[quiz_settings][shuffle_questions]
//   quiz[quiz_settings][require_student_access_code]
//   quiz[quiz_settings][student_access_code]
//   quiz[quiz_settings][has_time_limit]
//   quiz[quiz_settings][session_time_limit_in_seconds]
// }
// return canvasRequest(update_single_quiz, {course_id, assignment_id}, body);
export const updateSingleQuiz = { type: 'UPDATE_SINGLE_QUIZ', method: 'patch', key: 'update_single_quizupdate_single_quiz_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };

// Delete a new quiz
// Delete a single new quiz.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quizzes.html
// API Url: /quizcourses/{course_id}/quizzes/{assignment_id}
//
// Example:
// return canvasRequest(delete_new_quiz, {course_id, assignment_id});
export const deleteNewQuiz = { type: 'DELETE_NEW_QUIZ', method: 'delete', key: 'delete_new_quizdelete_new_quiz_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };