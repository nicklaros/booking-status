"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var R = require("ramda");
var L = require("list");
var statuses_1 = require("./statuses");
exports.default = (function (id) {
    return L.find(R.propEq('id', id), statuses_1.default);
});
