import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getAddressRequest, getTransactionsPerBlockSuccess, GET_TRANSACTIONS_PER_BLOCK_REQUEST } from '../actions';
import { fetchDetailBlock } from '../services';

function* getBlockByTimestamp(action: ReturnType<typeof getAddressRequest>) {
    try{
        const {data: {result}} = yield call(fetchDetailBlock, action.payload);
        if (!result?.transactions) return;
        yield put(getTransactionsPerBlockSuccess(result.transactions));
    } catch(err) {
        console.log(err);
    }
}

export default all([
    takeLatest(GET_TRANSACTIONS_PER_BLOCK_REQUEST, getBlockByTimestamp),
]);