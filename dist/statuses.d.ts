import * as L from 'list';
export declare type BookingStatusType = {
    id: number;
    name: string;
};
export declare const DRAFT: BookingStatusType;
export declare const WAITING_FOR_PAYMENT: BookingStatusType;
export declare const PAID: BookingStatusType;
export declare const EXPIRED: BookingStatusType;
export declare const CANCELED: BookingStatusType;
declare const statuses: L.List<BookingStatusType>;
export default statuses;
