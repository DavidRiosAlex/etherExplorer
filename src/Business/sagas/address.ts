import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getAddressRequest, getAddressSuccess, GET_ADDRESS_REQUEST } from '../actions';
import { fetchAddressTransactions } from '../services';

function* getBlockByTimestamp(action: ReturnType<typeof getAddressRequest>) {
    try{
        const {data: {result}} = yield call(fetchAddressTransactions, action.payload);
        if (!result) return;
        yield put(getAddressSuccess(result));
    } catch(err) {
        console.log(err);
    }
}

export default all([
    takeLatest(GET_ADDRESS_REQUEST, getBlockByTimestamp),
]);