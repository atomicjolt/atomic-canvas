"use strict";
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
var lodash_1 = __importDefault(require("lodash"));
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
function ContentItemSelectionForm(props) {
    var launchData = props.launchData, contentItemReturnURL = props.contentItemReturnURL;
    var formRef = (0, react_1.useRef)(null);
    var formStyle = { display: 'none' };
    (0, react_1.useEffect)(function () {
        if (formRef.current) {
            formRef.current.submit();
        }
    }, [formRef.current]);
    function renderLaunchData() {
        return lodash_1.default.map(launchData, function (value, key) { return (react_1.default.createElement("input", { key: key, type: "hidden", value: value || '', name: key })); });
    }
    return (react_1.default.createElement("form", { ref: formRef, action: contentItemReturnURL, style: formStyle, method: "post", encType: "application/x-www-form-urlencoded" },
        renderLaunchData(),
        react_1.default.createElement("button", { type: "submit" }, "Finish")));
}
exports.default = ContentItemSelectionForm;
ContentItemSelectionForm.propTypes = {
    launchData: prop_types_1.default.shape({}),
    contentItemReturnURL: prop_types_1.default.string,
};
//# sourceMappingURL=content_item_selection_form.js.map