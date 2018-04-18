import _ from 'lodash';

import { listYourCourses } from 'atomic-canvas/libs/constants/courses';
import { listCoursesForUser } from 'atomic-canvas/libs/constants/courses';

import { DONE } from 'atomic-fuel/libs/constants/wrapper';

const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {

    case `${listYourCourses.type}${DONE}`:
      return _.concat(state, action.payload);

    case `${listCoursesForUser.type}${DONE}`:
      return _.concat(state, action.payload);

    default:
      return state;
  }
};
