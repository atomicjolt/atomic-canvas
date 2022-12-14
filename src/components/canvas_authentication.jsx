import _ from 'lodash';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
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

  // Not all apps use redux so try catch to prevent blowing up
  try {
    var jwt = useSelector(state => state.jwt);
  } catch (error) { }


  useEffect(() => {
    if (autoSubmit && formRef.current) {
      formRef.current.submit();
    }
  }, [autoSubmit, formRef.current]);

  function getButton() {
    if (hideButton) return null;
    return <input type="submit" value={buttonText || "Authorize"} className={buttonClassName} />;
  }

  function renderSettings() {
    const all = { ...settings, ...overrides };
    return _.map(all, (value, key) => {
      let outValue = value || '';
      if (_.isObjectLike(value)) {
        outValue = JSON.stringify(outValue);
      }
      return (
        <input key={key} type="hidden" value={`${outValue}`} name={key} />
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
      {
        jwt
        ? <input type="hidden" value={jwt} name="authorization" />
        : null
      }
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
