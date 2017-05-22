"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = observe;
function observe(data, key) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get function() {
            return val;
        },
        set function(newVal) {
            val = newVal;
            notify();
        }
    });
}
function notify() {}