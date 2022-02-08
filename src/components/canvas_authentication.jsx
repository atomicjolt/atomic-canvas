import _ from 'lodash';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withSettings } from 'atomic-fuel/libs/components/settings';

export function CanvasAuthentication(props) {
  const {
    autoSubmit,
    hideButton,
    buttonText,
    buttonClassName,
    settings,
    overrides,
  } = props;

  const formRef = useRef(null);

  useEffect(() => {
    if (autoSubmit) {
      formRef.current.submit();
    }
  }, [autoSubmit]);

  function getButton() {
    if (hideButton) return null;
    return <input type="submit" value={buttonText || "Authorize"} className={buttonClassName} />;
  }

  function renderSettings() {
    const settings = { ...settings, ...overrides };
    return _.map(settings, (value, key) => {
      let outValue = value || '';
      if (_.isObjectLike(value)) {
        outValue = JSON.stringify(outValue);
      }
      return (
        <input key={key} type="hidden" value={outValue} name={key} />
      )
    });
  }

  return (
    <form
      ref={formRef}
      action={settings.canvas_oauth_url}
      method="post"
    >
      { getButton() }
      { renderSettings() }
    </form>
  );
}

CanvasAuthentication.defaultProps = {
  overrides: {},
  hideButton: false,
  autoSubmit: false,
  buttonClassName: "",
  buttonText: null,
}

CanvasAuthentication.propTypes = {
  overrides: PropTypes.shape({}),
  hideButton: PropTypes.bool,
  autoSubmit: PropTypes.bool,
  settings: PropTypes.shape({
    canvas_oauth_url: PropTypes.string,
  }).isRequired,
  buttonClassName: PropTypes.string,
  buttonText: PropTypes.string,
}

export default withSettings(CanvasAuthentication);
