"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasAuthentication = CanvasAuthentication;
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = require("atomic-fuel/libs/components/settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function CanvasAuthentication(props) {
  var autoSubmit = props.autoSubmit,
      hideButton = props.hideButton,
      buttonText = props.buttonText,
      buttonClassName = props.buttonClassName,
      settings = props.settings,
      overrides = props.overrides;
  var formRef = (0, _react.useRef)(null);
  var jwt = (0, _reactRedux.useSelector)(function (state) {
    return state.jwt;
  });
  (0, _react.useEffect)(function () {
    if (autoSubmit) {
      formRef.current.submit();
    }
  }, [autoSubmit]);

  function getButton() {
    if (hideButton) return null;
    return /*#__PURE__*/_react["default"].createElement("input", {
      type: "submit",
      value: buttonText || "Authorize",
      className: buttonClassName
    });
  }

  function renderSettings() {
    var settings = _objectSpread(_objectSpread({}, settings), overrides);

    return _lodash["default"].map(settings, function (value, key) {
      var outValue = value || '';

      if (_lodash["default"].isObjectLike(value)) {
        outValue = JSON.stringify(outValue);
      }

      return /*#__PURE__*/_react["default"].createElement("input", {
        key: key,
        type: "hidden",
        value: outValue,
        name: key
      });
    });
  }

  return /*#__PURE__*/_react["default"].createElement("form", {
    ref: formRef,
    action: settings.canvas_oauth_url,
    method: "post"
  }, getButton(), renderSettings(), jwt ? /*#__PURE__*/_react["default"].createElement("input", {
    type: "hidden",
    value: jwt,
    name: "authorization"
  }) : null);
}

CanvasAuthentication.defaultProps = {
  overrides: {},
  hideButton: false,
  autoSubmit: false,
  buttonClassName: "",
  buttonText: null
};
CanvasAuthentication.propTypes = {
  overrides: _propTypes["default"].shape({}),
  hideButton: _propTypes["default"].bool,
  autoSubmit: _propTypes["default"].bool,
  settings: _propTypes["default"].shape({
    canvas_oauth_url: _propTypes["default"].string
  }).isRequired,
  buttonClassName: _propTypes["default"].string,
  buttonText: _propTypes["default"].string
};

var _default = (0, _settings.withSettings)(CanvasAuthentication);

exports["default"] = _default;