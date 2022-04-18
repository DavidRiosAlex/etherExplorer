import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import List from '../../../Commons/Components/List';
import TransactionsRow from '../../../Commons/Components/List/TransactionsRow';
import { ScreenCommon } from '../../../Commons/Components/ScreenCommon';
import { Text } from '../../../Commons/Components/Text';
import { getAddressRequest } from '../../actions';
import { getAddress } from '../../selectors';
import { TransactionBlockNumber } from '../../types';

function AddressScreenComponent() {
    const {hash: address} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {transactions} = useSelector(getAddress);

    useEffect(() => {
        if (address) {
            dispatch(getAddressRequest(address));
        }
    }, [address]);

    const goToAddress = useCallback((hash: string) => {
        navigate(`/address/${hash}`);
    }, []);

    const renderRow = (item: TransactionBlockNumber) => <TransactionsRow {...item} onClickAddress={goToAddress}>
        <div className="truncate min-w-fit flex-1 text-center">{Number(item.gas)}</div>
        <div className="truncate min-w-fit flex-1 text-center">{Number(item.gasPrice)}</div>
    </TransactionsRow>;

    return  <ScreenCommon className='flex p-10 flex-col justify-between'>
        <div className='h-1/3 w-full'>
            <Text className="text-3xl font-bold text-stone-700">{`Address: ${address}`}</Text>
        </div>
        <div className='w-full h-2/3'>
            <div className='shadow-2xl border-2 rounded-lg w-full h-full'>
                <List data={transactions} rowRender={renderRow} columns={['Hash', 'Origen', 'Destino', 'Cantidad', 'Gas', 'Gas price']}></List>
            </div>
        </div>
    </ScreenCommon>;
}

export default React.memo(AddressScreenComponent);