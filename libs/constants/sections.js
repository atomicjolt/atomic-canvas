'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Sections
//
// List course sections
// Returns the list of sections for this course.
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: courses/{course_id}/sections
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_course_sections, {course_id}, query);
var listCourseSections = exports.listCourseSections = { type: 'LIST_COURSE_SECTIONS', method: 'get', key: 'list_course_sectionslist_course_sections_course_id', required: ['course_id'] };

// Create course section
// Creates a new section for this course.
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: courses/{course_id}/sections
//
// Example:
// const query = {
//   course_section[name]
//   course_section[sis_section_id]
//   course_section[start_at]
//   course_section[end_at]
//   course_section[restrict_enrollments_to_section_dates]
//   enable_sis_reactivation
// }
// return canvasRequest(create_course_section, {course_id}, query);
var createCourseSection = exports.createCourseSection = { type: 'CREATE_COURSE_SECTION', method: 'post', key: 'create_course_sectioncreate_course_section_course_id', required: ['course_id'] };

// Cross-list a Section
// Move the Section to another course.  The new course may be in a different account (department),
// but must belong to the same root account (institution).
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: sections/{id}/crosslist/{new_course_id}
//
// Example:
// return canvasRequest(cross_list_section, {id, new_course_id});
var crossListSection = exports.crossListSection = { type: 'CROSS_LIST_SECTION', method: 'post', key: 'cross_list_sectioncross_list_section_{id}_{new_course_id}', required: ['id', 'new_course_id'] };

// De-cross-list a Section
// Undo cross-listing of a Section, returning it to its original course.
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: sections/{id}/crosslist
//
// Example:
// return canvasRequest(de_cross_list_section, {id});
var deCrossListSection = exports.deCrossListSection = { type: 'DE_CROSS_LIST_SECTION', method: 'delete', key: 'de_cross_list_sectionde_cross_list_section_id', required: ['id'] };

// Edit a section
// Modify an existing section.
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: sections/{id}
//
// Example:
// const query = {
//   course_section[name]
//   course_section[sis_section_id]
//   course_section[start_at]
//   course_section[end_at]
//   course_section[restrict_enrollments_to_section_dates]
// }
// return canvasRequest(edit_section, {id}, query);
var editSection = exports.editSection = { type: 'EDIT_SECTION', method: 'put', key: 'edit_sectionedit_section_id', required: ['id'] };

// Get section information
// Gets details about a specific section
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: courses/{course_id}/sections/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_section_information_courses, {course_id, id}, query);
var getSectionInformationCourses = exports.getSectionInformationCourses = { type: 'GET_SECTION_INFORMATION_COURSES', method: 'get', key: 'get_section_information_coursesget_section_information_courses_{course_id}_{id}', required: ['course_id', 'id'] };

// Get section information
// Gets details about a specific section
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: sections/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_section_information_sections, {id}, query);
var getSectionInformationSections = exports.getSectionInformationSections = { type: 'GET_SECTION_INFORMATION_SECTIONS', method: 'get', key: 'get_section_information_sectionsget_section_information_sections_id', required: ['id'] };

// Delete a section
// Delete an existing section.  Returns the former Section.
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: sections/{id}
//
// Example:
// return canvasRequest(delete_section, {id});
var deleteSection = exports.deleteSection = { type: 'DELETE_SECTION', method: 'delete', key: 'delete_sectiondelete_section_id', required: ['id'] };