import Helper from 'atomic-fuel/libs/specs_support/helper';
import canvasRequest from './action';
import { listCoursesForUser } from './constants/courses';
import CanvasMiddlware from './middleware';

describe('Canvas Middleware', () => {

  it('implements Redux middleware interface', () => {
    const store = { getState: () => {} };
    const middleware = CanvasMiddlware(store);
    const next = () => {};
    const action = middleware(next);

    // api middleware takes one arg
    expect(CanvasMiddlware.length).toBe(1);
    // api middleware must return a function to handle next
    expect(typeof middleware).toBe('function');
    // next handler returned by api middleware must take one argument
    expect(middleware.length).toBe(1);
    // next handler must return a function to handle action
    expect(typeof action).toBe('function');
    // action handler must take one argument
    expect(action.length).toBe(1);
  });

  it('passes action on to next middleware', () => {
    const store = { getState: () => {} };
    const action = {
      type: 'TEST'
    };
    const nextHandler = CanvasMiddlware(store);
    const next = (actionPassed) => {
      expect(actionPassed).toBe(action);
    };
    const actionHandler = nextHandler(next);
    actionHandler(action);
  });


  it('raises an error if a required parameter is not supplied', () => {
    const action = canvasRequest(listCoursesForUser);
    const store = Helper.makeStore();
    const middleware = CanvasMiddlware(store);
    const nextHandler = () => {};
    const actionHandler = middleware(nextHandler);
    expect(() => { actionHandler(action); }).toThrow(new Error('Missing required parameter(s): user_id'));
  });

});
