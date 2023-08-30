"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _courses = require("atomic-canvas/libs/constants/courses");
var _wrapper = require("atomic-fuel/libs/constants/wrapper");
var initialState = [];
var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (!action.payload) {
    return state;
  }
  switch (action.type) {
    case "".concat(_courses.listYourCourses.type).concat(_wrapper.DONE):
      return _lodash["default"].concat(state, action.payload);
    case "".concat(_courses.listCoursesForUser.type).concat(_wrapper.DONE):
      return _lodash["default"].concat(state, action.payload);
    default:
      return state;
  }
};
exports["default"] = _default;