import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import List from '../../../Commons/Components/List';
import TransactionsRow from '../../../Commons/Components/List/TransactionsRow';
import { ScreenCommon } from '../../../Commons/Components/ScreenCommon';
import { Text } from '../../../Commons/Components/Text';
import { getTransactionsPerBlockRequest } from '../../actions';
import { getTransactionsBlock } from '../../selectors';
import { TransactionBlockNumber } from '../../types';

function BlocksScreenComponent() {
    const {number: blockNumber} = useParams<string>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const transactions = useSelector(getTransactionsBlock);
    
    const goToAddress = useCallback((hash: string) => {
        navigate(`/address/${hash}`);
    }, []);

    const renderRow = (item: TransactionBlockNumber) => <TransactionsRow {...item} onClickAddress={goToAddress}>
        <div className="truncate min-w-fit flex-1 text-center">{Number(item.gas)}</div>
        <div className="truncate min-w-fit flex-1 text-center">{Number(item.gasPrice)}</div>
    </TransactionsRow>;

    useEffect(() => {
        if (blockNumber) {
            dispatch(getTransactionsPerBlockRequest('0x' + Number(blockNumber).toString(16)));
        }
    }, [blockNumber]);


    return  <ScreenCommon className='flex p-10 flex-col justify-between'>
        <div className='h-1/3'>
            <Text className="text-xl font-bold text-white ">{`Bloque numero: ${blockNumber}`}</Text>
        </div>
        <div className="shadow-2xl h-2/3 border-2">
            <div className="h-1/6 flex items-center">
                <Text className="text-xl font-bold text-primary ml-10 flex">Transacciones realizadas</Text>
            </div>
            <div className="h-5/6">
                <List data={transactions ?? []} rowRender={renderRow} columns={['Hash', 'Origen', 'Destino', 'Cantidad (Ether)', 'Gas (Gwei)', 'Gas price (Gwei)']}></List>
            </div>
        </div>
    </ScreenCommon>;
}

export default React.memo(BlocksScreenComponent);