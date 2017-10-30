'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
  'button',
  { type: 'submit' },
  'Finish'
);

var ContentItemSelectionForm = function (_React$Component) {
  (0, _inherits3.default)(ContentItemSelectionForm, _React$Component);

  function ContentItemSelectionForm() {
    (0, _classCallCheck3.default)(this, ContentItemSelectionForm);
    return (0, _possibleConstructorReturn3.default)(this, (ContentItemSelectionForm.__proto__ || (0, _getPrototypeOf2.default)(ContentItemSelectionForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContentItemSelectionForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.form.submit();
    }
  }, {
    key: 'renderLaunchData',
    value: function renderLaunchData() {
      return _lodash2.default.map(this.props.launchData, function (value, key) {
        return _react2.default.createElement('input', { key: key, type: 'hidden', value: value || '', name: key });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formStyle = { display: 'none' };
      return _react2.default.createElement(
        'form',
        {
          ref: function ref(_ref2) {
            _this2.form = _ref2;
          },
          action: this.props.contentItemReturnURL,
          style: formStyle,
          method: 'post',
          encType: 'application/x-www-form-urlencoded'
        },
        this.renderLaunchData(),
        _ref
      );
    }
  }]);
  return ContentItemSelectionForm;
}(_react2.default.Component);

exports.default = ContentItemSelectionForm;