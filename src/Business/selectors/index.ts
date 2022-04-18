import { ReducersRootState } from '../reducers';

export const realTimeBlocks = (state: ReducersRootState) =>  state.blocks.list;
export const getLastBlockQuery = (state: ReducersRootState) => state.blocks.query.block;

export const getTransactions = (state: ReducersRootState) => state.transactions.list;

export const getTransactionsBlock = (state: ReducersRootState) => state.transactions.block.transactions;

export const getAddress = (state: ReducersRootState) => state.address;

export const getBlock = (state: ReducersRootState) => state.blocks.block;