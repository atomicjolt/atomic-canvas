import { listYourCourses } from '../constants/courses';
import { listCoursesForUser } from '../constants/courses';

import { DONE } from 'atomic-fuel/libs/constants/wrapper';

import courses from './courses';

describe('courses reducer', () => {
  describe('initial state', () => {
    it('has no courses', () => {
      const initialState = {};
      const state = courses(initialState, { type: 'initializeme' });
      expect(state).toEqual({});
    });
  });

  describe('canvas_authorization_required', () => {
    it('responds to listYourCourses by adding courses', () => {
      const action = {
        type: `${listYourCourses.type}_${DONE}`,
        payload: [{id: 1, name: 'fakecourse'}],
      };
      const newState = courses({}, action);
      expect(newState.length).toEqual(1);
    });
    it('responds to listCoursesForUser by adding courses', () => {
      const action = {
        type: `${listCoursesForUser.type}_${DONE}`,
        payload: [{id: 1, name: 'fakecourse'}],
      };
      const newState = courses({}, action);
      expect(newState.length).toEqual(1);
    });
  });

});
