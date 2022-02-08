"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSingleRubricAssessment = exports.updateSingleRubric = exports.updateRubricassociation = exports.listRubricsCourses = exports.listRubricsAccounts = exports.getSingleRubricCourses = exports.getSingleRubricAccounts = exports.deleteSingleRubricAssessment = exports.deleteSingleRubric = exports.deleteRubricassociation = exports.createSingleRubricAssessment = exports.createSingleRubric = exports.createRubricassociation = void 0;
//
// Rubrics
//
// Create a single rubric
// Returns the rubric with the given id.
// 
// Unfortuantely this endpoint does not return a standard Rubric object,
// instead it returns a hash that looks like
//   { 'rubric': Rubric, 'rubric_association': RubricAssociation }
// 
// This may eventually be deprecated in favor of a more standardized return
// value, but that is not currently planned.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubrics
//
// Example:
// const body = {
//   id
//   rubric_association_id
//   rubric[title]
//   rubric[free_form_criterion_comments]
//   rubric_association[association_id]
//   rubric_association[association_type]
//   rubric_association[use_for_grading]
//   rubric_association[hide_score_total]
//   rubric_association[purpose]
//   rubric[criteria]
// }
// return canvasRequest(create_single_rubric, {course_id}, body);
var createSingleRubric = {
  type: 'CREATE_SINGLE_RUBRIC',
  method: 'post',
  key: 'create_single_rubriccreate_single_rubric_course_id',
  required: ['course_id']
}; // Update a single rubric
// Returns the rubric with the given id.
// 
// Unfortuantely this endpoint does not return a standard Rubric object,
// instead it returns a hash that looks like
//   { 'rubric': Rubric, 'rubric_association': RubricAssociation }
// 
// This may eventually be deprecated in favor of a more standardized return
// value, but that is not currently planned.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubrics/{id}
//
// Example:
// const body = {
//   rubric_association_id
//   rubric[title]
//   rubric[free_form_criterion_comments]
//   rubric[skip_updating_points_possible]
//   rubric_association[association_id]
//   rubric_association[association_type]
//   rubric_association[use_for_grading]
//   rubric_association[hide_score_total]
//   rubric_association[purpose]
//   rubric[criteria]
// }
// return canvasRequest(update_single_rubric, {course_id, id}, body);

exports.createSingleRubric = createSingleRubric;
var updateSingleRubric = {
  type: 'UPDATE_SINGLE_RUBRIC',
  method: 'put',
  key: 'update_single_rubricupdate_single_rubric_{course_id}_{id}',
  required: ['course_id', 'id']
}; // Delete a single rubric
// Deletes a Rubric and removes all RubricAssociations.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubrics/{id}
//
// Example:
// return canvasRequest(delete_single_rubric, {course_id, id});

exports.updateSingleRubric = updateSingleRubric;
var deleteSingleRubric = {
  type: 'DELETE_SINGLE_RUBRIC',
  method: 'delete',
  key: 'delete_single_rubricdelete_single_rubric_{course_id}_{id}',
  required: ['course_id', 'id']
}; // List rubrics
// Returns the paginated list of active rubrics for the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: accounts/{account_id}/rubrics
//
// Example:
// return canvasRequest(list_rubrics_accounts, {account_id});

exports.deleteSingleRubric = deleteSingleRubric;
var listRubricsAccounts = {
  type: 'LIST_RUBRICS_ACCOUNTS',
  method: 'get',
  key: 'list_rubrics_accountslist_rubrics_accounts_account_id',
  required: ['account_id']
}; // List rubrics
// Returns the paginated list of active rubrics for the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubrics
//
// Example:
// return canvasRequest(list_rubrics_courses, {course_id});

exports.listRubricsAccounts = listRubricsAccounts;
var listRubricsCourses = {
  type: 'LIST_RUBRICS_COURSES',
  method: 'get',
  key: 'list_rubrics_courseslist_rubrics_courses_course_id',
  required: ['course_id']
}; // Get a single rubric
// Returns the rubric with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: accounts/{account_id}/rubrics/{id}
//
// Example:
// const query = {
//   include
//   style
// }
// return canvasRequest(get_single_rubric_accounts, {account_id, id, ...query});

exports.listRubricsCourses = listRubricsCourses;
var getSingleRubricAccounts = {
  type: 'GET_SINGLE_RUBRIC_ACCOUNTS',
  method: 'get',
  key: 'get_single_rubric_accountsget_single_rubric_accounts_{account_id}_{id}',
  required: ['account_id', 'id']
}; // Get a single rubric
// Returns the rubric with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubrics/{id}
//
// Example:
// const query = {
//   include
//   style
// }
// return canvasRequest(get_single_rubric_courses, {course_id, id, ...query});

exports.getSingleRubricAccounts = getSingleRubricAccounts;
var getSingleRubricCourses = {
  type: 'GET_SINGLE_RUBRIC_COURSES',
  method: 'get',
  key: 'get_single_rubric_coursesget_single_rubric_courses_{course_id}_{id}',
  required: ['course_id', 'id']
}; // Create a single rubric assessment
// Returns the rubric assessment with the given id.
// The returned object also provides the information of
//   :ratings, :assessor_name, :related_group_submissions_and_assessments, :artifact
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments
//
// Example:
// const body = {
//   provisional
//   final
//   graded_anonymously
//   rubric_assessment
// }
// return canvasRequest(create_single_rubric_assessment, {course_id, rubric_association_id}, body);

exports.getSingleRubricCourses = getSingleRubricCourses;
var createSingleRubricAssessment = {
  type: 'CREATE_SINGLE_RUBRIC_ASSESSMENT',
  method: 'post',
  key: 'create_single_rubric_assessmentcreate_single_rubric_assessment_{course_id}_{rubric_association_id}',
  required: ['course_id', 'rubric_association_id']
}; // Update a single rubric assessment
// Returns the rubric assessment with the given id.
// The returned object also provides the information of
//   :ratings, :assessor_name, :related_group_submissions_and_assessments, :artifact
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments/{id}
//
// Example:
// const body = {
//   provisional
//   final
//   graded_anonymously
//   rubric_assessment
// }
// return canvasRequest(update_single_rubric_assessment, {course_id, rubric_association_id, id}, body);

exports.createSingleRubricAssessment = createSingleRubricAssessment;
var updateSingleRubricAssessment = {
  type: 'UPDATE_SINGLE_RUBRIC_ASSESSMENT',
  method: 'put',
  key: 'update_single_rubric_assessmentupdate_single_rubric_assessment_{course_id}_{rubric_association_id}_{id}',
  required: ['course_id', 'rubric_association_id', 'id']
}; // Delete a single rubric assessment
// Deletes a rubric assessment
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments/{id}
//
// Example:
// return canvasRequest(delete_single_rubric_assessment, {course_id, rubric_association_id, id});

exports.updateSingleRubricAssessment = updateSingleRubricAssessment;
var deleteSingleRubricAssessment = {
  type: 'DELETE_SINGLE_RUBRIC_ASSESSMENT',
  method: 'delete',
  key: 'delete_single_rubric_assessmentdelete_single_rubric_assessment_{course_id}_{rubric_association_id}_{id}',
  required: ['course_id', 'rubric_association_id', 'id']
}; // Create a RubricAssociation
// Returns the rubric with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubric_associations
//
// Example:
// const body = {
//   rubric_association[rubric_id]
//   rubric_association[association_id]
//   rubric_association[association_type]
//   rubric_association[title]
//   rubric_association[use_for_grading]
//   rubric_association[hide_score_total]
//   rubric_association[purpose]
//   rubric_association[bookmarked]
// }
// return canvasRequest(create_rubricassociation, {course_id}, body);

exports.deleteSingleRubricAssessment = deleteSingleRubricAssessment;
var createRubricassociation = {
  type: 'CREATE_RUBRICASSOCIATION',
  method: 'post',
  key: 'create_rubricassociationcreate_rubricassociation_course_id',
  required: ['course_id']
}; // Update a RubricAssociation
// Returns the rubric with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubric_associations/{id}
//
// Example:
// const body = {
//   rubric_association[rubric_id]
//   rubric_association[association_id]
//   rubric_association[association_type]
//   rubric_association[title]
//   rubric_association[use_for_grading]
//   rubric_association[hide_score_total]
//   rubric_association[purpose]
//   rubric_association[bookmarked]
// }
// return canvasRequest(update_rubricassociation, {course_id, id}, body);

exports.createRubricassociation = createRubricassociation;
var updateRubricassociation = {
  type: 'UPDATE_RUBRICASSOCIATION',
  method: 'put',
  key: 'update_rubricassociationupdate_rubricassociation_{course_id}_{id}',
  required: ['course_id', 'id']
}; // Delete a RubricAssociation
// Delete the RubricAssociation with the given ID
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubric_associations/{id}
//
// Example:
// return canvasRequest(delete_rubricassociation, {course_id, id});

exports.updateRubricassociation = updateRubricassociation;
var deleteRubricassociation = {
  type: 'DELETE_RUBRICASSOCIATION',
  method: 'delete',
  key: 'delete_rubricassociationdelete_rubricassociation_{course_id}_{id}',
  required: ['course_id', 'id']
};
exports.deleteRubricassociation = deleteRubricassociation;