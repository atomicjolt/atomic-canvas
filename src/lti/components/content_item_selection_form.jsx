import _ from 'lodash';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function ContentItemSelectionForm(props) {
  const {
    launchData,
    contentItemReturnURL,
  } = props;
  const formRef = useRef(null);
  const formStyle = { display: 'none' };

  useEffect(() => {
    if(formRef.current){
      formRef.current.submit();
    }
  }, [formRef.current]);

  function renderLaunchData() {
    return _.map(launchData, (value, key) => (
      <input key={key} type="hidden" value={value || ''} name={key} />
    ));
  }

  return (
    <form
      ref={formRef}
      action={contentItemReturnURL}
      style={formStyle}
      method="post"
      encType="application/x-www-form-urlencoded"
    >
      { renderLaunchData() }
      <button type="submit">Finish</button>
    </form>
  );
}

ContentItemSelectionForm.propTypes = {
  launchData : PropTypes.shape({}),
  contentItemReturnURL: PropTypes.string,
}
