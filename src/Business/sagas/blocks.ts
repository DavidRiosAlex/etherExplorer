import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { getBlockTimestampRequest, getBlockTimestampSuccess, getTransactionsPerBlock, GET_BLOCK_TIMESTAMP_REQUEST } from '../actions';
import { getLastBlockQuery, getTransactions } from '../selectors';
import { fetchBlockByTimestamp, fetchDetailBlock } from '../services';
import { TransactionBlockNumber } from '../types';

function* getBlockByTimestamp(action: ReturnType<typeof getBlockTimestampRequest>) {
    try{
        const {data: {result}} = yield call(fetchBlockByTimestamp, action.payload);
        if (!result) return;
        const lastBlock = (yield select(getLastBlockQuery)) as unknown as string;
        const transactions = (yield select(getTransactions)) as ReturnType<typeof getTransactions>;
        const numberBlockToHex = '0x' + Number(result).toString(16);
        if (lastBlock !== numberBlockToHex && !transactions[numberBlockToHex]) {
            const {data: {result: block}} = yield call(fetchDetailBlock, numberBlockToHex);
            const blockTransactions = block.transactions.map((tx: TransactionBlockNumber) => ({...tx, timestamp: Number(block.timestamp)}));
            block.transactions = block.transactions.length;
            const transactionsPayload = {
                name: numberBlockToHex,
                transactions: blockTransactions
            };
            yield put(getBlockTimestampSuccess(block));
            yield put(getTransactionsPerBlock(transactionsPayload));
        }
    } catch(err) {
        console.log(err);
    }
}

export default all([
    takeLatest(GET_BLOCK_TIMESTAMP_REQUEST, getBlockByTimestamp)
]);