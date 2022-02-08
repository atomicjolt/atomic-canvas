"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ContentItemSelectionForm;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ContentItemSelectionForm(props) {
  var launchData = props.launchData,
      contentItemReturnURL = props.contentItemReturnURL;
  var formRef = (0, _react.useRef)(null);
  var formStyle = {
    display: 'none'
  };
  (0, _react.useEffect)(function () {
    if (formRef.current) {
      formRef.current.submit();
    }
  }, [formRef.current]);

  function renderLaunchData() {
    return _lodash["default"].map(launchData, function (value, key) {
      return /*#__PURE__*/_react["default"].createElement("input", {
        key: key,
        type: "hidden",
        value: value || '',
        name: key
      });
    });
  }

  return /*#__PURE__*/_react["default"].createElement("form", {
    ref: formRef,
    action: contentItemReturnURL,
    style: formStyle,
    method: "post",
    encType: "application/x-www-form-urlencoded"
  }, renderLaunchData(), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit"
  }, "Finish"));
}

ContentItemSelectionForm.propTypes = {
  launchData: _propTypes["default"].shape({}),
  contentItemReturnURL: _propTypes["default"].string
};