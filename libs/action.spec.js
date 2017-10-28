'use strict';

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('canvasRequest', function () {

  it('Generates an action that can be dispatched to canvas middleware', function () {
    var listAccounts = { type: 'LIST_ACCOUNTS', method: 'get', reducer: 'accounts' };
    var action = (0, _action2.default)(listAccounts, { course_id: 1 });
    expect(action.params.course_id).toBe(1);
    expect(action.canvas.method).toBe('get');
    expect(action.canvas.type).toBe('LIST_ACCOUNTS');
  });
});