'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _helper = require('atomic-fuel/libs/specs_support/helper');

var _helper2 = _interopRequireDefault(_helper);

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

var _courses = require('./constants/courses');

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Canvas Middleware', function () {

  it('implements Redux middleware interface', function () {
    var store = { getState: function getState() {} };
    var middleware = (0, _middleware2.default)(store);
    var next = function next() {};
    var action = middleware(next);

    // api middleware takes one arg
    expect(_middleware2.default.length).toBe(1);
    // api middleware must return a function to handle next
    expect(typeof middleware === 'undefined' ? 'undefined' : (0, _typeof3.default)(middleware)).toBe('function');
    // next handler returned by api middleware must take one argument
    expect(middleware.length).toBe(1);
    // next handler must return a function to handle action
    expect(typeof action === 'undefined' ? 'undefined' : (0, _typeof3.default)(action)).toBe('function');
    // action handler must take one argument
    expect(action.length).toBe(1);
  });

  it('passes action on to next middleware', function () {
    var store = { getState: function getState() {} };
    var action = {
      type: 'TEST'
    };
    var nextHandler = (0, _middleware2.default)(store);
    var next = function next(actionPassed) {
      expect(actionPassed).toBe(action);
    };
    var actionHandler = nextHandler(next);
    actionHandler(action);
  });

  it('raises an error if a required parameter is not supplied', function () {
    var action = (0, _action2.default)(_courses.listCoursesForUser);
    var store = _helper2.default.makeStore();
    var middleware = (0, _middleware2.default)(store);
    var nextHandler = function nextHandler() {};
    var actionHandler = middleware(nextHandler);
    expect(function () {
      actionHandler(action);
    }).toThrow(new Error('Missing required parameter(s): user_id'));
  });
});