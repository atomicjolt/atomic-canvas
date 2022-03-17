/**
 * @jest-environment jsdom
 */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import jwt from 'atomic-fuel/libs/reducers/jwt';
import { SettingsContext } from 'atomic-fuel/libs/components/settings';
import CanvasAuthentication from './canvas_authentication';

describe('Canvas authentication', () => {
  it('renders a button to authenticate with Canvas', async () => {
    const settings = {
      canvas_oauth_url: 'http://www.example.com',
      user:  {
        name: 'doug',
      }
    };
    const fakeJwt = 'afakejwt';
    const rootReducer = combineReducers({
      jwt,
    });
    const store = createStore(rootReducer, { jwt: fakeJwt });
    const result = TestRenderer.create(
      <Provider store={store}>
        <SettingsContext.Provider value={settings}>
          <CanvasAuthentication />
        </SettingsContext.Provider>
      </Provider>
    );
    expect(result).toMatchSnapshot();
  });

  it('handles an empty jwt', async () => {
    const settings = {
      canvas_oauth_url: 'http://www.example.com',
      user:  {
        name: 'doug',
      }
    };
    let fakeJwt;
    const rootReducer = combineReducers({
      jwt,
    });
    const store = createStore(rootReducer, { jwt: fakeJwt });
    const result = TestRenderer.create(
      <Provider store={store}>
        <SettingsContext.Provider value={settings}>
          <CanvasAuthentication />
        </SettingsContext.Provider>
      </Provider>
    );
    expect(result).toMatchSnapshot();
  });
});
