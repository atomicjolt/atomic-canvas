'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Peer Reviews
//
// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/peer_reviews
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_peer_reviews_courses_peer_reviews, {course_id, assignment_id}, query);
var getAllPeerReviewsCoursesPeerReviews = exports.getAllPeerReviewsCoursesPeerReviews = { type: 'GET_ALL_PEER_REVIEWS_COURSES_PEER_REVIEWS', method: 'get', key: 'get_all_peer_reviews_courses_peer_reviewsget_all_peer_reviews_courses_peer_reviews_{course_id}_{assignment_id}', required: ['course_id', 'assignment_id'] };

// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/peer_reviews
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_peer_reviews_sections_peer_reviews, {section_id, assignment_id}, query);
var getAllPeerReviewsSectionsPeerReviews = exports.getAllPeerReviewsSectionsPeerReviews = { type: 'GET_ALL_PEER_REVIEWS_SECTIONS_PEER_REVIEWS', method: 'get', key: 'get_all_peer_reviews_sections_peer_reviewsget_all_peer_reviews_sections_peer_reviews_{section_id}_{assignment_id}', required: ['section_id', 'assignment_id'] };

// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_peer_reviews_courses_submissions, {course_id, assignment_id, submission_id}, query);
var getAllPeerReviewsCoursesSubmissions = exports.getAllPeerReviewsCoursesSubmissions = { type: 'GET_ALL_PEER_REVIEWS_COURSES_SUBMISSIONS', method: 'get', key: 'get_all_peer_reviews_courses_submissionsget_all_peer_reviews_courses_submissions_{course_id}_{assignment_id}_{submission_id}', required: ['course_id', 'assignment_id', 'submission_id'] };

// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_peer_reviews_sections_submissions, {section_id, assignment_id, submission_id}, query);
var getAllPeerReviewsSectionsSubmissions = exports.getAllPeerReviewsSectionsSubmissions = { type: 'GET_ALL_PEER_REVIEWS_SECTIONS_SUBMISSIONS', method: 'get', key: 'get_all_peer_reviews_sections_submissionsget_all_peer_reviews_sections_submissions_{section_id}_{assignment_id}_{submission_id}', required: ['section_id', 'assignment_id', 'submission_id'] };

// Create Peer Review
// Create a peer review for the assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   user_id (required)
// }
// return canvasRequest(peer_reviews_create_peer_review_courses, {course_id, assignment_id, submission_id}, query);
var peerReviewsCreatePeerReviewCourses = exports.peerReviewsCreatePeerReviewCourses = { type: 'PEER_REVIEWS_CREATE_PEER_REVIEW_COURSES', method: 'post', key: 'peer_reviews_create_peer_review_coursespeer_reviews_create_peer_review_courses_{course_id}_{assignment_id}_{submission_id}', required: ['course_id', 'assignment_id', 'submission_id'] };

// Create Peer Review
// Create a peer review for the assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   user_id (required)
// }
// return canvasRequest(peer_reviews_create_peer_review_sections, {section_id, assignment_id, submission_id}, query);
var peerReviewsCreatePeerReviewSections = exports.peerReviewsCreatePeerReviewSections = { type: 'PEER_REVIEWS_CREATE_PEER_REVIEW_SECTIONS', method: 'post', key: 'peer_reviews_create_peer_review_sectionspeer_reviews_create_peer_review_sections_{section_id}_{assignment_id}_{submission_id}', required: ['section_id', 'assignment_id', 'submission_id'] };

// Delete Peer Review
// Delete a peer review for the assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   user_id (required)
// }
// return canvasRequest(delete_peer_review_courses, {course_id, assignment_id, submission_id}, query);
var deletePeerReviewCourses = exports.deletePeerReviewCourses = { type: 'DELETE_PEER_REVIEW_COURSES', method: 'delete', key: 'delete_peer_review_coursesdelete_peer_review_courses_{course_id}_{assignment_id}_{submission_id}', required: ['course_id', 'assignment_id', 'submission_id'] };

// Delete Peer Review
// Delete a peer review for the assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   user_id (required)
// }
// return canvasRequest(delete_peer_review_sections, {section_id, assignment_id, submission_id}, query);
var deletePeerReviewSections = exports.deletePeerReviewSections = { type: 'DELETE_PEER_REVIEW_SECTIONS', method: 'delete', key: 'delete_peer_review_sectionsdelete_peer_review_sections_{section_id}_{assignment_id}_{submission_id}', required: ['section_id', 'assignment_id', 'submission_id'] };