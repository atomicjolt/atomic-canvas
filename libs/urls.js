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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseParams = exports.getNextUrl = void 0;
var lodash_1 = __importDefault(require("lodash"));
function getNextUrl(link) {
    if (link) {
        var url = lodash_1.default.find(link.split(','), function (l) {
            var val = lodash_1.default.trim(l.split(';')[1]);
            return val === 'rel="next"';
        });
        if (url) {
            return url.split(';')[0].replace(/[<>\s]/g, '');
        }
    }
    return null;
}
exports.getNextUrl = getNextUrl;
function parseParams(url) {
    var parts = url.split('?');
    if (parts.length > 1) {
        return lodash_1.default.reduce(parts[1].split('&'), function (params, pair) {
            var _a;
            return (__assign(__assign({}, params), (_a = {}, _a[pair.split('=')[0]] = pair.split('=')[1], _a)));
        }, {});
    }
    return undefined;
}
exports.parseParams = parseParams;
//# sourceMappingURL=urls.js.map