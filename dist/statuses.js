"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var L = require("list");
exports.DRAFT = {
    id: 1,
    name: 'Draft',
};
exports.WAITING_FOR_PAYMENT = {
    id: 2,
    name: 'Waiting for Payment',
};
exports.PAID = {
    id: 4,
    name: 'Paid',
};
exports.EXPIRED = {
    id: 5,
    name: 'Expired',
};
exports.CANCELED = {
    id: 6,
    name: 'Canceled',
};
var statuses = L.list(exports.DRAFT, exports.WAITING_FOR_PAYMENT, exports.PAID, exports.EXPIRED, exports.CANCELED);
exports.default = statuses;
