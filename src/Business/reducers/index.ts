import blocks, { BlocksReduxStateModel } from './blocks/blocks';
import transactions, { TransactionssReduxStateModel } from './transactions/transactions';
import address, {AddressReduxStateModel} from './address/address';

export interface ReducersRootState {
    blocks: BlocksReduxStateModel;
    transactions: TransactionssReduxStateModel;
    address: AddressReduxStateModel;
}

export const reducers = {
    blocks,
    transactions,
    address
};