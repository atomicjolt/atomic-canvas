"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProficiencyRatingsCourses = exports.getProficiencyRatingsAccounts = exports.createUpdateProficiencyRatingsCourses = exports.createUpdateProficiencyRatingsAccounts = void 0;
//
// Proficiency Ratings
//
// Create/update proficiency ratings
// Create or update account-level proficiency ratings. These ratings will apply to all
// sub-accounts, unless they have their own account-level proficiency ratings defined.
//
// API Docs: https://canvas.instructure.com/doc/api/proficiency_ratings.html
// API Url: accounts/{account_id}/outcome_proficiency
//
// Example:
// const body = {
//   ratings[description]
//   ratings[points]
//   ratings[mastery]
//   ratings[color]
// }
// return canvasRequest(create_update_proficiency_ratings_accounts, {account_id}, body);
var createUpdateProficiencyRatingsAccounts = {
  type: 'CREATE_UPDATE_PROFICIENCY_RATINGS_ACCOUNTS',
  method: 'post',
  key: 'create_update_proficiency_ratings_accountscreate_update_proficiency_ratings_accounts_account_id',
  required: ['account_id']
};

// Create/update proficiency ratings
// Create or update account-level proficiency ratings. These ratings will apply to all
// sub-accounts, unless they have their own account-level proficiency ratings defined.
//
// API Docs: https://canvas.instructure.com/doc/api/proficiency_ratings.html
// API Url: courses/{course_id}/outcome_proficiency
//
// Example:
// const body = {
//   ratings[description]
//   ratings[points]
//   ratings[mastery]
//   ratings[color]
// }
// return canvasRequest(create_update_proficiency_ratings_courses, {course_id}, body);
exports.createUpdateProficiencyRatingsAccounts = createUpdateProficiencyRatingsAccounts;
var createUpdateProficiencyRatingsCourses = {
  type: 'CREATE_UPDATE_PROFICIENCY_RATINGS_COURSES',
  method: 'post',
  key: 'create_update_proficiency_ratings_coursescreate_update_proficiency_ratings_courses_course_id',
  required: ['course_id']
};

// Get proficiency ratings
// Get account-level proficiency ratings. If not defined for this account,
// it will return proficiency ratings for the nearest super-account with ratings defined.
// Will return 404 if none found.
// 
//   Examples:
//     curl https://<canvas>/api/v1/accounts/<account_id>/outcome_proficiency \
//         -H 'Authorization: Bearer <token>'
//
// API Docs: https://canvas.instructure.com/doc/api/proficiency_ratings.html
// API Url: accounts/{account_id}/outcome_proficiency
//
// Example:
// return canvasRequest(get_proficiency_ratings_accounts, {account_id});
exports.createUpdateProficiencyRatingsCourses = createUpdateProficiencyRatingsCourses;
var getProficiencyRatingsAccounts = {
  type: 'GET_PROFICIENCY_RATINGS_ACCOUNTS',
  method: 'get',
  key: 'get_proficiency_ratings_accountsget_proficiency_ratings_accounts_account_id',
  required: ['account_id']
};

// Get proficiency ratings
// Get account-level proficiency ratings. If not defined for this account,
// it will return proficiency ratings for the nearest super-account with ratings defined.
// Will return 404 if none found.
// 
//   Examples:
//     curl https://<canvas>/api/v1/accounts/<account_id>/outcome_proficiency \
//         -H 'Authorization: Bearer <token>'
//
// API Docs: https://canvas.instructure.com/doc/api/proficiency_ratings.html
// API Url: courses/{course_id}/outcome_proficiency
//
// Example:
// return canvasRequest(get_proficiency_ratings_courses, {course_id});
exports.getProficiencyRatingsAccounts = getProficiencyRatingsAccounts;
var getProficiencyRatingsCourses = {
  type: 'GET_PROFICIENCY_RATINGS_COURSES',
  method: 'get',
  key: 'get_proficiency_ratings_coursesget_proficiency_ratings_courses_course_id',
  required: ['course_id']
};
exports.getProficiencyRatingsCourses = getProficiencyRatingsCourses;