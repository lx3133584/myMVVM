'use strict';

var _init2 = require('./init');

var _init3 = _interopRequireDefault(_init2);

var _observe2 = require('./observe');

var _observe3 = _interopRequireDefault(_observe2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MVVM(option) {
    var _this = this;

    this.$option = option || {};
    this.data = option.data;

    Object.keys(this.data).forEach(function (key) {
        (0, _observe3.default)(_this.data, key);
    });
    (0, _init3.default)(option.el, this);
}