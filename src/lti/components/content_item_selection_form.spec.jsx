import React from 'react';
import { render } from 'enzyme';
import ContentItemSelectionForm from './content_item_selection_form';

describe('Content Item Selection Form', () => {
  let result;
  let props;
  it('matches the snapshot', () => {
    props = {
      launchData: {},
      contentItemReturnURL: 'http://www.example.com',
    };
    result = render(<ContentItemSelectionForm {...props} />);
    expect(result).toMatchSnapshot();
  });
});
