'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _courses = require('atomic-canvas/libs/constants/courses');

var _wrapper = require('atomic-fuel/libs/constants/wrapper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case '' + _courses.listYourCourses.type + _wrapper.DONE && action.payload:
      return _lodash2.default.concat(state, action.payload);

    case '' + _courses.listCoursesForUser.type + _wrapper.DONE && action.payload:
      return _lodash2.default.concat(state, action.payload);

    default:
      return state;
  }
};