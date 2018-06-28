import * as L from 'list';

export type BookingStatusType = {
    id: number,
    name: string,
}

export const DRAFT: BookingStatusType = {
    id: 1,
    name: 'Draft',
};

export const WAITING_FOR_PAYMENT: BookingStatusType = {
    id: 2,
    name: 'Waiting for Payment',
};

export const PAID: BookingStatusType = {
    id: 4,
    name: 'Paid',
};

export const EXPIRED: BookingStatusType = {
    id: 5,
    name: 'Expired',
};

export const CANCELED: BookingStatusType = {
    id: 6,
    name: 'Canceled',
};

const statuses: L.List<BookingStatusType> = L.list(DRAFT, WAITING_FOR_PAYMENT, PAID, EXPIRED, CANCELED);

export default statuses;