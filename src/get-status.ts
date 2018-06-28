import * as R from 'ramda';
import * as L from 'list';
import statuses, { BookingStatusType } from './statuses';

export default (id: number): BookingStatusType | undefined => {
    return L.find(R.propEq('id', id), statuses);
};
