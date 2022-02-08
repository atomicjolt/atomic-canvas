"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreDeletedEportfolio = exports.moderateEportfolio = exports.moderateAllEportfoliosForUser = exports.getEportfolioPages = exports.getEportfolio = exports.getAllEportfoliosForUser = exports.deleteEportfolio = void 0;
//
// ePortfolios
//
// Get all ePortfolios for a User
// Get a list of all ePortfolios for the specified user.
//
// API Docs: https://canvas.instructure.com/doc/api/e_portfolios.html
// API Url: users/{user_id}/eportfolios
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_eportfolios_for_user, {user_id, ...query});
var getAllEportfoliosForUser = {
  type: 'GET_ALL_EPORTFOLIOS_FOR_USER',
  method: 'get',
  key: 'get_all_eportfolios_for_userget_all_eportfolios_for_user_user_id',
  required: ['user_id']
}; // Get an ePortfolio
// Get details for a single ePortfolio.
//
// API Docs: https://canvas.instructure.com/doc/api/e_portfolios.html
// API Url: eportfolios/{id}
//
// Example:
// return canvasRequest(get_eportfolio, {id});

exports.getAllEportfoliosForUser = getAllEportfoliosForUser;
var getEportfolio = {
  type: 'GET_EPORTFOLIO',
  method: 'get',
  key: 'get_eportfolioget_eportfolio_id',
  required: ['id']
}; // Delete an ePortfolio
// Mark an ePortfolio as deleted.
//
// API Docs: https://canvas.instructure.com/doc/api/e_portfolios.html
// API Url: eportfolios/{id}
//
// Example:
// return canvasRequest(delete_eportfolio, {id});

exports.getEportfolio = getEportfolio;
var deleteEportfolio = {
  type: 'DELETE_EPORTFOLIO',
  method: 'delete',
  key: 'delete_eportfoliodelete_eportfolio_id',
  required: ['id']
}; // Get ePortfolio Pages
// Get details for the pages of an ePortfolio
//
// API Docs: https://canvas.instructure.com/doc/api/e_portfolios.html
// API Url: eportfolios/{eportfolio_id}/pages
//
// Example:
// return canvasRequest(get_eportfolio_pages, {eportfolio_id});

exports.deleteEportfolio = deleteEportfolio;
var getEportfolioPages = {
  type: 'GET_EPORTFOLIO_PAGES',
  method: 'get',
  key: 'get_eportfolio_pagesget_eportfolio_pages_eportfolio_id',
  required: ['eportfolio_id']
}; // Moderate an ePortfolio
// Update the spam_status of an eportfolio. Only available to admins who can
// moderate_user_content.
//
// API Docs: https://canvas.instructure.com/doc/api/e_portfolios.html
// API Url: eportfolios/{eportfolio_id}/moderate
//
// Example:
// const body = {
//   spam_status
// }
// return canvasRequest(moderate_eportfolio, {eportfolio_id}, body);

exports.getEportfolioPages = getEportfolioPages;
var moderateEportfolio = {
  type: 'MODERATE_EPORTFOLIO',
  method: 'put',
  key: 'moderate_eportfoliomoderate_eportfolio_eportfolio_id',
  required: ['eportfolio_id']
}; // Moderate all ePortfolios for a User
// Update the spam_status for all active eportfolios of a user. Only available to
// admins who can moderate_user_content.
//
// API Docs: https://canvas.instructure.com/doc/api/e_portfolios.html
// API Url: users/{user_id}/eportfolios
//
// Example:
// const body = {
//   spam_status
// }
// return canvasRequest(moderate_all_eportfolios_for_user, {user_id}, body);

exports.moderateEportfolio = moderateEportfolio;
var moderateAllEportfoliosForUser = {
  type: 'MODERATE_ALL_EPORTFOLIOS_FOR_USER',
  method: 'put',
  key: 'moderate_all_eportfolios_for_usermoderate_all_eportfolios_for_user_user_id',
  required: ['user_id']
}; // Restore a deleted ePortfolio
// Restore an ePortfolio back to active that was previously deleted. Only
// available to admins who can moderate_user_content.
//
// API Docs: https://canvas.instructure.com/doc/api/e_portfolios.html
// API Url: eportfolios/{eportfolio_id}/restore
//
// Example:
// return canvasRequest(restore_deleted_eportfolio, {eportfolio_id});

exports.moderateAllEportfoliosForUser = moderateAllEportfoliosForUser;
var restoreDeletedEportfolio = {
  type: 'RESTORE_DELETED_EPORTFOLIO',
  method: 'put',
  key: 'restore_deleted_eportfoliorestore_deleted_eportfolio_eportfolio_id',
  required: ['eportfolio_id']
};
exports.restoreDeletedEportfolio = restoreDeletedEportfolio;