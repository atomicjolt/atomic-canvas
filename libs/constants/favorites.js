"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetGroupFavorites = exports.resetCourseFavorites = exports.removeGroupFromFavorites = exports.removeCourseFromFavorites = exports.addGroupToFavorites = exports.addCourseToFavorites = exports.listFavoriteGroups = exports.listFavoriteCourses = void 0;
//
// Favorites
//
// List favorite courses
// Retrieve the paginated list of favorite courses for the current user. If the user has not chosen
// any favorites, then a selection of currently enrolled courses will be returned.
// 
// See the {api:CoursesController#index List courses API} for details on accepted include[] parameters.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses
//
// Example:
// const query = {
//   exclude_blueprint_courses
// }
// return canvasRequest(list_favorite_courses, {, ...query});
exports.listFavoriteCourses = { type: 'LIST_FAVORITE_COURSES', method: 'get', key: 'list_favorite_courses', required: [] };
// List favorite groups
// Retrieve the paginated list of favorite groups for the current user. If the user has not chosen
// any favorites, then a selection of groups that the user is a member of will be returned.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups
//
// Example:
// return canvasRequest(list_favorite_groups, {});
exports.listFavoriteGroups = { type: 'LIST_FAVORITE_GROUPS', method: 'get', key: 'list_favorite_groups', required: [] };
// Add course to favorites
// Add a course to the current user's favorites.  If the course is already
// in the user's favorites, nothing happens. Canvas for Elementary subject
// and homeroom courses can be added to favorites, but this has no effect in
// the UI.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses/{id}
//
// Example:
// return canvasRequest(add_course_to_favorites, {id});
exports.addCourseToFavorites = { type: 'ADD_COURSE_TO_FAVORITES', method: 'post', key: 'add_course_to_favoritesadd_course_to_favorites_id', required: ['id'] };
// Add group to favorites
// Add a group to the current user's favorites.  If the group is already
// in the user's favorites, nothing happens.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups/{id}
//
// Example:
// return canvasRequest(add_group_to_favorites, {id});
exports.addGroupToFavorites = { type: 'ADD_GROUP_TO_FAVORITES', method: 'post', key: 'add_group_to_favoritesadd_group_to_favorites_id', required: ['id'] };
// Remove course from favorites
// Remove a course from the current user's favorites.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses/{id}
//
// Example:
// return canvasRequest(remove_course_from_favorites, {id});
exports.removeCourseFromFavorites = { type: 'REMOVE_COURSE_FROM_FAVORITES', method: 'delete', key: 'remove_course_from_favoritesremove_course_from_favorites_id', required: ['id'] };
// Remove group from favorites
// Remove a group from the current user's favorites.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups/{id}
//
// Example:
// return canvasRequest(remove_group_from_favorites, {id});
exports.removeGroupFromFavorites = { type: 'REMOVE_GROUP_FROM_FAVORITES', method: 'delete', key: 'remove_group_from_favoritesremove_group_from_favorites_id', required: ['id'] };
// Reset course favorites
// Reset the current user's course favorites to the default
// automatically generated list of enrolled courses
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses
//
// Example:
// return canvasRequest(reset_course_favorites, {});
exports.resetCourseFavorites = { type: 'RESET_COURSE_FAVORITES', method: 'delete', key: 'reset_course_favorites', required: [] };
// Reset group favorites
// Reset the current user's group favorites to the default
// automatically generated list of enrolled group
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups
//
// Example:
// return canvasRequest(reset_group_favorites, {});
exports.resetGroupFavorites = { type: 'RESET_GROUP_FAVORITES', method: 'delete', key: 'reset_group_favorites', required: [] };
//# sourceMappingURL=favorites.js.map