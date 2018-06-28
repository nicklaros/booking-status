"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statuses = require("./statuses");
var get_status_1 = require("./get-status");
exports.default = {
    getStatus: get_status_1.default,
    statuses: statuses,
};
