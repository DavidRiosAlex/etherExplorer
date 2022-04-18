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
        <div className='h-2/6 flex flex-col'>
            <Text className="mx-2 my-10 text-xl font-bold text-primary ">{`Address: ${address}`}</Text>
            
        </div>
        <div className='shadow-2xl rounded-lg h-5/6 border-2'>
            <div className='w-full h-full'>
                <div className="h-1/6 flex items-center">
                    <Text className="text-xl font-bold text-primary ml-10 flex">Transacciones realizadas</Text>
                </div>
                <div className="h-5/6">
                    <List data={transactions} rowRender={renderRow} columns={['Hash', 'Origen', 'Destino', 'Cantidad', 'Gas', 'Gas price']}></List>
                </div>
            </div>
        </div>
    </ScreenCommon>;
}

export default React.memo(AddressScreenComponent);