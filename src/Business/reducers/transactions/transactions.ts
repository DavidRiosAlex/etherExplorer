import { AnyAction } from '@reduxjs/toolkit';
import { GET_BLOCK_TRANSACTIONS, GET_TRANSACTIONS_PER_BLOCK_REQUEST, GET_TRANSACTIONS_PER_BLOCK_SUCCESS } from '../../actions';
import { TransactionBlockNumber } from '../../types';

const defaultValue = {
    list: {},
    block: {
        transactions: [],
        blockNumber: null,
    }
};

export interface TransactionssReduxStateModel {
    list: {
        [key: string]: TransactionBlockNumber[]
    },
    block: {
        transactions: TransactionBlockNumber[],
        blockNumber: string | null;
    }
}

export type TransactionsActionType = typeof GET_BLOCK_TRANSACTIONS;

interface ExclusiveAction extends AnyAction {
    type: TransactionsActionType;
    payload: {
        name: string;
        transactions: TransactionBlockNumber[]
    }
}

const TRANSACTIONS_LIST_LIMIT = 3;

export default function (state: TransactionssReduxStateModel = defaultValue, action: ExclusiveAction) {
    if (action.type === GET_BLOCK_TRANSACTIONS) {
        const list = state.list;
        const transactions = Object.keys(state.list);
        if (transactions.length >= TRANSACTIONS_LIST_LIMIT) {
            const keysToDelete = transactions[TRANSACTIONS_LIST_LIMIT - 1];
            delete list[keysToDelete];
        }
        return {...state, list: {[action.payload.name]: [...action.payload.transactions], ...list} };
    } else if (GET_TRANSACTIONS_PER_BLOCK_REQUEST === action.type) {
        return {...state, block: {...state.block, blockNumber: action.payload}};
    } else if (GET_TRANSACTIONS_PER_BLOCK_SUCCESS === action.type) {
        return {...state, block: {...state.block, transactions: action.payload}};
    }
    return state;
}
