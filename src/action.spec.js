import canvasRequest         from './action';

describe('canvasRequest', () => {
  it('Generates an action that can be dispatched to canvas middleware', () => {
    const listAccounts = { type: 'LIST_ACCOUNTS', method: 'get', reducer: 'accounts' };
    const action = canvasRequest(listAccounts, { course_id: 1 });
    expect(action.params.course_id).toBe(1);
    expect(action.canvas.method).toBe('get');
    expect(action.canvas.type).toBe('LIST_ACCOUNTS');
  });

  it('Supports adding localData to request', () => {
    const listAccounts = { type: 'LIST_ACCOUNTS', method: 'get', reducer: 'accounts' };
    const action = canvasRequest(listAccounts, { course_id: 1 }, null, { thing: true });
    expect(action.localData.thing).toBeTruthy();
  });

  it('Supports network timeout', () => {
    const listAccounts = { type: 'LIST_ACCOUNTS', method: 'get', reducer: 'accounts' };
    const action = canvasRequest(listAccounts, { course_id: 1 }, null, null, 60e3);
    expect(action.timeout).toBe(60e3);
  });
});
