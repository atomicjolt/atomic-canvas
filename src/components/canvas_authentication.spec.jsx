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
  it('renders a button to authenticate with Canvas', () => {
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

  it('renders without a button and autosubmits', () => {
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
          <CanvasAuthentication
            autoSubmit={true}
            hideButton={true}
          />
        </SettingsContext.Provider>
      </Provider>
    );
    expect(result).toMatchSnapshot();
  });

  it('handles an empty jwt', () => {
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

  it('correctly handles settings', () => {
    const settings = {
      canvas_oauth_url: 'http://www.example.com',
      canvas_url: 'https://atomicjolt.instructure.com',
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
    const root = result.root;
    const inputs = root.findAllByType('input');

    function hasInput(name, value) {
      return !!inputs.find(i => i.props.value === value && i.props.name === name);
    }

    expect(inputs.length).toBe(5); // All the settings plus the authorization added for the jwt and the submit button
    expect(hasInput('canvas_oauth_url', settings.canvas_oauth_url)).toBe(true);
    expect(hasInput('canvas_url', settings.canvas_url)).toBe(true);
    expect(hasInput('user', JSON.stringify(settings.user))).toBe(true);
    expect(hasInput('authorization', fakeJwt)).toBe(true);
    expect(hasInput('notreal', null)).toBe(false);
  })
});

