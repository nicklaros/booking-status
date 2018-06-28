import getStatus from './get-status';
import * as statuses from './statuses';

test('Make sure correct status returned', () => {
    expect(getStatus(statuses.DRAFT.id)).toEqual(statuses.DRAFT);
    expect(getStatus(statuses.WAITING_FOR_PAYMENT.id)).toEqual(statuses.WAITING_FOR_PAYMENT);
    expect(getStatus(statuses.PAID.id)).toEqual(statuses.PAID);
    expect(getStatus(statuses.EXPIRED.id)).toEqual(statuses.EXPIRED);
    expect(getStatus(statuses.CANCELED.id)).toEqual(statuses.CANCELED);
});