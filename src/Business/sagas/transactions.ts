import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getAddressRequest, getBlockDetail, getTransactionsPerBlockSuccess, GET_TRANSACTIONS_PER_BLOCK_REQUEST } from '../actions';
import { fetchDetailBlock } from '../services';

function* getTransactionsPerBlockWorker(action: ReturnType<typeof getAddressRequest>) {
    try{
        const {data: {result}} = yield call(fetchDetailBlock, action.payload);
        if (!result?.transactions) return;
        const {data: {result: block}} = yield call(fetchDetailBlock, action.payload);
        yield put(getBlockDetail(block));
        yield put(getTransactionsPerBlockSuccess(result.transactions));
    } catch(err) {
        console.log(err);
    }
}

export default all([
    takeLatest(GET_TRANSACTIONS_PER_BLOCK_REQUEST, getTransactionsPerBlockWorker),
]);