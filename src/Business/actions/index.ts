import { BlockEtherDetail, TransactionBlockNumber } from '../types';

export const GET_BLOCK_TIMESTAMP_REQUEST = 'GET_BLOCK_TIMESTAMP_REQUEST';
export const GET_BLOCK_TIMESTAMP_SUCCESS = 'GET_BLOCK_TIMESTAMP_SUCCESS';

export const GET_BLOCK_TRANSACTIONS = 'GET_BLOCK_TRANSACTIONS';

export const GET_ADDRESS_REQUEST = 'GET_ADDRESS_REQUEST';
export const GET_ADDRESS_SUCCESS = 'GET_ADDRESS_SUCCESS';

export const GET_TRANSACTIONS_PER_BLOCK_REQUEST = 'GET_TANSACTIONS_PER_BLOCK_REQUEST';
export const GET_TRANSACTIONS_PER_BLOCK_SUCCESS = 'GET_TRANSACTIONS_PER_BLOCK_SUCCESS';

export const GET_BLOCK_DETAIL = 'GET_BLOCK_DETAIL';

export const getBlockTimestampRequest = (payload: number) => ({type: GET_BLOCK_TIMESTAMP_REQUEST, payload});
export const getBlockTimestampSuccess = (payload?: unknown) => ({type: GET_BLOCK_TIMESTAMP_SUCCESS, payload});

export const getTransactionsPerBlock = (payload?: unknown) => ({type: GET_BLOCK_TRANSACTIONS, payload});

export const getTransactionsPerBlockRequest = (payload?: string) => ({type: GET_TRANSACTIONS_PER_BLOCK_REQUEST, payload});
export const getTransactionsPerBlockSuccess = (payload?: TransactionBlockNumber[]) => ({type: GET_TRANSACTIONS_PER_BLOCK_SUCCESS, payload});

export const getAddressRequest = (payload: string) => ({type: GET_ADDRESS_REQUEST, payload});
export const getAddressSuccess = (payload: unknown) => ({type: GET_ADDRESS_SUCCESS, payload});

export const getBlockDetail = (payload: BlockEtherDetail) => ({type: GET_BLOCK_DETAIL, payload });
