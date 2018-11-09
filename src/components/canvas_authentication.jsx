import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { withSettings } from 'atomic-fuel/libs/components/settings';

export class CanvasAuthentication extends React.Component {
  static defaultProps = {
    overrides: {},
    hideButton: false,
    autoSubmit: false,
    buttonClassName: "",
    buttonText: null,
  }

  static propTypes = {
    overrides: PropTypes.shape({}),
    hideButton: PropTypes.bool,
    autoSubmit: PropTypes.bool,
    settings: PropTypes.shape({
      canvas_oauth_url: PropTypes.string,
    }).isRequired,
    buttonClassName: PropTypes.string,
    buttonText: PropTypes.string,
  }

  componentDidMount() {
    if (this.props.autoSubmit) {
      this.form.submit();
    }
  }

  getButton() {
    if (this.props.hideButton) return null;
    return <input type="submit" value={this.props.buttonText || "Authorize"} className={this.props.buttonClassName} />;
  }

  renderSettings() {
    const settings = { ...this.props.settings, ...this.props.overrides };
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

  render() {
    return (
      <form
        ref={(ref) => { this.form = ref; }}
        action={this.props.settings.canvas_oauth_url}
      >
        { this.getButton() }
        { this.renderSettings() }
      </form>
    );
  }
}

export default withSettings(CanvasAuthentication);
