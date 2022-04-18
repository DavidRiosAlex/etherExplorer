import { AnyAction } from '@reduxjs/toolkit';
import { GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS } from '../../actions';
import { TransactionBlockNumber } from '../../types';

export interface AddressReduxStateModel {
    address: string | null;
    transactions: TransactionBlockNumber[];
}

const defaultValue = {
    address: null,
    transactions: [],
};
export default function (state: AddressReduxStateModel = defaultValue, action: AnyAction) {
    if (action.type === GET_ADDRESS_REQUEST) {
        return {...state, address: action.payload};
    } else if (action.type === GET_ADDRESS_SUCCESS) {
        return {...state, transactions: action.payload};
    }
    return defaultValue;
}