import React from 'react';
import {create, act} from 'react-test-renderer';
import ContentItemSelectionForm from './content_item_selection_form';

describe('Content Item Selection Form', () => {
  it('matches the snapshot', () => {
    const props = {
      launchData: {},
      contentItemReturnURL: 'http://www.example.com',
    };

    let result;
    act(() => {
      result = create(<ContentItemSelectionForm {...props} />);
    });

    expect(result).toMatchSnapshot();
  });
});
