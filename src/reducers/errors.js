import _ from 'lodash';

const initialState = {};

export default (state = initialState, action) => {
  if (action.error &&
    action.error.response &&
    action.error.response.status == 401 &&
    action.error.response.text.indexOf('canvas_authorization_required') >= 0) {
    const newState = _.cloneDeep(state);
    newState.canvasReAuthorizationRequired = true;
    return newState;
  }
  return state;
};
