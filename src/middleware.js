import _ from 'lodash';
import api from '@atomicjolt/atomic-fuel/libs/api/api';
import { DONE } from '@atomicjolt/atomic-fuel/libs/constants/wrapper';
import { getNextUrl, parseParams } from './urls';
import { canvasProxyUrl } from './constants';


function checkRequired(action) {
  if (action.canvas.required.length > 0) {
    const missing = _.difference(action.canvas.required, _.keys(action.params));
    if (missing.length > 0) {
      throw new Error(`Missing required parameter(s): ${missing.join(', ')}`);
    }
  }
}

export function proxyCanvas(store, action, params) {
  const state = store.getState();

  checkRequired(action);

  const promise = api.execRequest(
    action.canvas.method,
    canvasProxyUrl,
    state.settings.api_url,
    state.jwt,
    state.settings.csrf_token,
    {
      ...action.params,
      ...params,
      lms_proxy_call_type: action.canvas.type,
      context_id: state.settings.context_id,
      oauth_consumer_key: state.settings.oauth_consumer_key
    },
    action.body,
    undefined,
    action.timeout,
  );

  if (promise) {
    promise.then((response) => {
      let lastPage = false;

      if (action.canvas.method === 'get' && response.header) {
        const nextUrl = getNextUrl(response.headers.link);
        if (nextUrl) {
          const newParams = parseParams(nextUrl);
          if (newParams) {
            proxyCanvas(store, action, newParams);
          }
        } else {
          lastPage = true;
        }
      }

      store.dispatch({
        type: action.canvas.type + DONE,
        payload: response.body,
        original: action,
        lastPage,
        response,
      }); // Dispatch the new data

    }).catch((error) => {
      store.dispatch({
        type: action.canvas.type + DONE,
        original: action,
        error,
      });
    });

  }

  return promise;

}

const CanvasApi = store => next => (action) => {
  if (action.canvas) {
    proxyCanvas(store, action, {});
  }

  // call the next middleWare
  next(action);
};

export { CanvasApi as default };
