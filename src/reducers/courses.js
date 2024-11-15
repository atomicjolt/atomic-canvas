import _ from 'lodash';

import { listYourCourses } from 'atomic-canvas/libs/constants/courses';
import { listCoursesForUser } from 'atomic-canvas/libs/constants/courses';

import { DONE } from '@atomicjolt/atomic-fuel/libs/constants/wrapper';

const initialState = [];

export default (state = initialState, action) => {
  if (!action.payload) { return state; }

  switch (action.type) {

    case `${listYourCourses.type}${DONE}`:
      return _.concat(state, action.payload);

    case `${listCoursesForUser.type}${DONE}`:
      return _.concat(state, action.payload);

    default:
      return state;
  }
};
