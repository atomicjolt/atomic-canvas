'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasAuthentication = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var select = function select(state) {
  return {
    settings: state.settings
  };
};

var CanvasAuthentication = exports.CanvasAuthentication = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(CanvasAuthentication, _React$Component);

  function CanvasAuthentication() {
    (0, _classCallCheck3.default)(this, CanvasAuthentication);
    return (0, _possibleConstructorReturn3.default)(this, (CanvasAuthentication.__proto__ || (0, _getPrototypeOf2.default)(CanvasAuthentication)).apply(this, arguments));
  }

  (0, _createClass3.default)(CanvasAuthentication, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoSubmit) {
        this.form.submit();
      }
    }
  }, {
    key: 'getButton',
    value: function getButton() {
      if (this.props.hideButton) return null;
      return _react2.default.createElement('input', { type: 'submit', value: this.props.buttonText || "Authorize", className: this.props.buttonClassName });
    }
  }, {
    key: 'renderSettings',
    value: function renderSettings() {
      var settings = (0, _extends3.default)({}, this.props.settings, this.props.overrides);
      return _lodash2.default.map(settings, function (value, key) {
        return _react2.default.createElement('input', { key: key, type: 'hidden', value: value || '', name: key });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        {
          ref: function ref(_ref) {
            _this2.form = _ref;
          },
          action: this.props.settings.canvas_oauth_url
        },
        this.getButton(),
        this.renderSettings()
      );
    }
  }]);
  return CanvasAuthentication;
}(_react2.default.Component), _class.defaultProps = {
  overrides: {},
  hideButton: false,
  autoSubmit: false,
  buttonClassName: "",
  buttonText: null
}, _temp);
exports.default = (0, _reactRedux.connect)(select)(CanvasAuthentication);