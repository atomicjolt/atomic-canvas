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
// return canvasRequest(create_update_proficiency_ratings, {account_id}, body);
export const createUpdateProficiencyRatings = { type: 'CREATE_UPDATE_PROFICIENCY_RATINGS', method: 'post', key: 'create_update_proficiency_ratingscreate_update_proficiency_ratings_account_id', required: ['account_id'] };

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
// return canvasRequest(get_proficiency_ratings, {account_id});
export const getProficiencyRatings = { type: 'GET_PROFICIENCY_RATINGS', method: 'get', key: 'get_proficiency_ratingsget_proficiency_ratings_account_id', required: ['account_id'] };