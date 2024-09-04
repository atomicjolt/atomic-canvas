"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var courses_1 = require("atomic-canvas/libs/constants/courses");
var courses_2 = require("atomic-canvas/libs/constants/courses");
var wrapper_1 = require("atomic-fuel/libs/constants/wrapper");
var initialState = [];
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    if (!action.payload) {
        return state;
    }
    switch (action.type) {
        case "".concat(courses_1.listYourCourses.type).concat(wrapper_1.DONE):
            return lodash_1.default.concat(state, action.payload);
        case "".concat(courses_2.listCoursesForUser.type).concat(wrapper_1.DONE):
            return lodash_1.default.concat(state, action.payload);
        default:
            return state;
    }
});
//# sourceMappingURL=courses.js.map