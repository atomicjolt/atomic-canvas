"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasAuthentication = void 0;
var lodash_1 = __importDefault(require("lodash"));
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var prop_types_1 = __importDefault(require("prop-types"));
var settings_1 = require("@atomicjolt/atomic-fuel/libs/components/settings");
function CanvasAuthentication(props) {
    var autoSubmit = props.autoSubmit, hideButton = props.hideButton, buttonText = props.buttonText, buttonClassName = props.buttonClassName, settings = props.settings, overrides = props.overrides;
    var formRef = (0, react_1.useRef)(null);
    // Not all apps use redux so try catch to prevent blowing up
    try {
        var jwt = (0, react_redux_1.useSelector)(function (state) { return state.jwt; });
    }
    catch (error) { }
    (0, react_1.useEffect)(function () {
        if (autoSubmit && formRef.current) {
            formRef.current.submit();
        }
    }, [autoSubmit, formRef.current]);
    function getButton() {
        if (hideButton)
            return null;
        return react_1.default.createElement("input", { type: "submit", value: buttonText || "Authorize", className: buttonClassName });
    }
    function renderSettings() {
        var all = __assign(__assign({}, settings), overrides);
        return lodash_1.default.map(all, function (value, key) {
            var outValue = value || '';
            if (lodash_1.default.isObjectLike(value)) {
                outValue = JSON.stringify(outValue);
            }
            return (react_1.default.createElement("input", { key: key, type: "hidden", value: "".concat(outValue), name: key }));
        });
    }
    return (react_1.default.createElement("form", { ref: formRef, action: settings.canvas_oauth_url, method: "post" },
        getButton(),
        renderSettings(),
        jwt
            ? react_1.default.createElement("input", { type: "hidden", value: jwt, name: "authorization" })
            : null));
}
exports.CanvasAuthentication = CanvasAuthentication;
CanvasAuthentication.defaultProps = {
    overrides: {},
    hideButton: false,
    autoSubmit: false,
    buttonClassName: "",
    buttonText: null,
};
CanvasAuthentication.propTypes = {
    overrides: prop_types_1.default.shape({}),
    hideButton: prop_types_1.default.bool,
    autoSubmit: prop_types_1.default.bool,
    settings: prop_types_1.default.shape({
        canvas_oauth_url: prop_types_1.default.string,
    }).isRequired,
    buttonClassName: prop_types_1.default.string,
    buttonText: prop_types_1.default.string,
};
exports.default = (0, settings_1.withSettings)(CanvasAuthentication);
//# sourceMappingURL=canvas_authentication.js.map