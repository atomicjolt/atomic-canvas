/**
 * @jest-environment jsdom
 */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { CanvasAuthentication } from './canvas_authentication';

describe('Canvas authentication', () => {
  it('renders a button to authenticate with Canvas', async () => {
    const settings = {
      canvas_oauth_url: 'http://www.example.com',
      user:  {
        name: 'doug',
      }
    };

    const result = TestRenderer.create(<CanvasAuthentication settings={settings} />);
    expect(result).toMatchSnapshot();
  });
});