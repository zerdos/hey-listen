(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.heyListen = {}));
}(this, (function (exports) { 'use strict';

  var _a;
  exports.warning = function () { };
  exports.invariant = function () { };
  if (typeof process !== "undefined" && ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) !== 'production') {
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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
