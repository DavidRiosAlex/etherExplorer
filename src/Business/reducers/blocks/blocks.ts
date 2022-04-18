import {AnyAction} from '@reduxjs/toolkit';
import {GET_BLOCK_DETAIL, GET_BLOCK_TIMESTAMP_REQUEST, GET_BLOCK_TIMESTAMP_SUCCESS} from '../../actions';
import {BlockEtherDetailList, BlockEtherDetail} from '../../types';

const defaultValue = {
    list: [],
    query: {
        timestamp: null,
        block: null,
    },
    block: null,
};

export type BlocksActionType = typeof GET_BLOCK_TIMESTAMP_REQUEST | typeof GET_BLOCK_TIMESTAMP_SUCCESS;

interface ExclusiveAction extends AnyAction {
    type: BlocksActionType;
    payload: BlockEtherDetail;
}

export interface BlocksReduxStateModel {
    list: BlockEtherDetailList;
    query: {
        timestamp: number | null;
        block: string | null;
    };
    block: BlockEtherDetail | null;
}

export default function (state: BlocksReduxStateModel = defaultValue, action: ExclusiveAction) {
    console.log(action.type);
    if (action.type === GET_BLOCK_TIMESTAMP_REQUEST) {
        return {...state, query: {...state.query, timestamp: action.payload}};
    } else if (action.type === GET_BLOCK_TIMESTAMP_SUCCESS) {
        return {...state, list: [action.payload, ...state.list], query: {...state.query, block: action.payload.number}};
    } else if (action.type === GET_BLOCK_DETAIL) {
        return {...state, block: action.payload};
    }
    return state;
}