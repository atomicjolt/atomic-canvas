//
// New Quiz Items
//
// Get a quiz item
// Get details about a single item in a new quiz.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quiz_items.html
// API Url: /quizcourses/{course_id}/quizzes/{assignment_id}/items/{item_id}
//
// Example:
// return canvasRequest(get_quiz_item, {course_id, assignment_id, item_id});
export const getQuizItem = { type: 'GET_QUIZ_ITEM', method: 'get', key: 'get_quiz_itemget_quiz_item_{course_id}_{assignment_id}_{item_id}', required: ['course_id', 'assignment_id', 'item_id'] };

// List quiz items
// Get a list of items in a new quiz.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quiz_items.html
// API Url: /quizcourses/{course_id}/quizzes/{assignment_id}/items
//
// Example:
// return canvasRequest(list_quiz_items, {course_id, assignment_id});
export const listQuizItems = { type: 'LIST_QUIZ_ITEMS', method: 'get', key: 'list_quiz_itemslist_quiz_items_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };

// Create a quiz item
// Create a quiz item in a new quiz. Only +QuestionItem+ types can be created.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quiz_items.html
// API Url: /quizcourses/{course_id}/quizzes/{assignment_id}/items
//
// Example:
// const body = {
//   item[position]
//   item[points_possible]
//   item[entry_type] (required)
//   item[entry][title]
//   item[entry][item_body] (required)
//   item[entry][calculator_type]
//   item[entry][feedback][neutral]
//   item[entry][feedback][correct]
//   item[entry][feedback][incorrect]
//   item[entry][interaction_type_slug] (required)
//   item[entry][interaction_data] (required)
//   item[entry][properties]
//   item[entry][scoring_data] (required)
//   item[entry][answer_feedback]
//   item[entry][scoring_algorithm] (required)
// }
// return canvasRequest(create_quiz_item, {course_id, assignment_id}, body);
export const createQuizItem = { type: 'CREATE_QUIZ_ITEM', method: 'post', key: 'create_quiz_itemcreate_quiz_item_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };

// Update a quiz item
// Update a single quiz item in a new quiz. Only +QuestionItem+ types can be updated.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quiz_items.html
// API Url: /quizcourses/{course_id}/quizzes/{assignment_id}/items/{item_id}
//
// Example:
// const body = {
//   item[position]
//   item[points_possible]
//   item[entry_type]
//   item[entry][title]
//   item[entry][item_body]
//   item[entry][calculator_type]
//   item[entry][feedback][neutral]
//   item[entry][feedback][correct]
//   item[entry][feedback][incorrect]
//   item[entry][interaction_type_slug]
//   item[entry][interaction_data]
//   item[entry][properties]
//   item[entry][scoring_data]
//   item[entry][answer_feedback]
//   item[entry][scoring_algorithm]
// }
// return canvasRequest(update_quiz_item, {course_id, assignment_id, item_id}, body);
export const updateQuizItem = { type: 'UPDATE_QUIZ_ITEM', method: 'patch', key: 'update_quiz_itemupdate_quiz_item_{course_id}_{assignment_id}_{item_id}', required: ['course_id', 'assignment_id', 'item_id'] };

// Delete a quiz item
// Delete a single quiz item in a new quiz.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quiz_items.html
// API Url: /quizcourses/{course_id}/quizzes/{assignment_id}/items/{item_id}
//
// Example:
// return canvasRequest(delete_quiz_item, {course_id, assignment_id, item_id});
export const deleteQuizItem = { type: 'DELETE_QUIZ_ITEM', method: 'delete', key: 'delete_quiz_itemdelete_quiz_item_{course_id}_{assignment_id}_{item_id}', required: ['course_id', 'assignment_id', 'item_id'] };

// Get items media_upload_url
// Get a url for uploading media for use in hot-spot question types. See the hot-spot
// question type in the {Appendix: Question Types} for more details about using this endpoint.
//
// API Docs: https://canvas.instructure.com/doc/api/new_quiz_items.html
// API Url: /quizcourses/{course_id}/quizzes/{assignment_id}/items/media_upload_url
//
// Example:
// return canvasRequest(get_items_media_upload_url, {course_id, assignment_id});
export const getItemsMediaUploadUrl = { type: 'GET_ITEMS_MEDIA_UPLOAD_URL', method: 'get', key: 'get_items_media_upload_urlget_items_media_upload_url_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };