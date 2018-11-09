import React from 'react';
import { shallow } from 'enzyme';
import { CanvasAuthentication } from './canvas_authentication';

describe('Canvas authentication', () => {
  it('renders a button to authenticate with Canvas', () => {
    const settings = {
      canvas_oauth_url: 'http://www.example.com',
      user:  {
        name: 'doug',
      }
    };
    const result = shallow(<CanvasAuthentication settings={settings} />);
    expect(result).toBeDefined();
  });
});