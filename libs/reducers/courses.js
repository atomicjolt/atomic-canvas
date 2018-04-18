'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _courses = require('atomic-canvas/libs/constants/courses');

var _wrapper = require('atomic-fuel/libs/constants/wrapper');

var initialState = [];

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case _courses.listYourCourses.type + '_' + _wrapper.DONE:
      return action.payload;

    case _courses.listCoursesForUser.type + '_' + _wrapper.DONE:
      return action.payload;

    default:
      return state;
  }
};