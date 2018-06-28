"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_status_1 = require("./get-status");
var statuses = require("./statuses");
test('Make sure correct status returned', function () {
    expect(get_status_1.default(statuses.DRAFT.id)).toEqual(statuses.DRAFT);
    expect(get_status_1.default(statuses.WAITING_FOR_PAYMENT.id)).toEqual(statuses.WAITING_FOR_PAYMENT);
    expect(get_status_1.default(statuses.PAID.id)).toEqual(statuses.PAID);
    expect(get_status_1.default(statuses.EXPIRED.id)).toEqual(statuses.EXPIRED);
    expect(get_status_1.default(statuses.CANCELED.id)).toEqual(statuses.CANCELED);
});
