'use strict';

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('canvas reducer', function () {

  describe('initial state', function () {

    it('has no data', function () {
      var state = (0, _reducer2.default)(undefined, {});
      expect(state).toEqual({});
    });
  });

  describe('get requests - load data', function () {});
});