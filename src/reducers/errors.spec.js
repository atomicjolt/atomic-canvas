import errors from './errors';

describe('error reducer', () => {
  describe('initial state', () => {
    it('has no errors', () => {
      const initialState = {};
      const state = errors(initialState, { type: 'initializeme' });
      expect(state).toEqual({});
    });
  });

  describe('canvas_authorization_required', () => {
    it('sets canvasReAuthorizationRequired to true', () => {
      const action = {
        type: 'AnythingisDone',
        error: {
          response: {
            status: 401,
            text: '{ message: "canvas_authorization_required" }'
          },
        },
      };
      const newState = errors({}, action);
      expect(newState.canvasReAuthorizationRequired).toEqual(true);
    });
  });

});
