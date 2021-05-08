'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _a;
exports.warning = function () { };
exports.invariant = function () { };
if (((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) !== 'production') {
    exports.warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    exports.invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}
