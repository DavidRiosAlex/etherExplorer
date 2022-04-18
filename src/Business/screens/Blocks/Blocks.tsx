import React, { useCallback, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import List from '../../../Commons/Components/List';
import TransactionsRow from '../../../Commons/Components/List/TransactionsRow';
import { ScreenCommon } from '../../../Commons/Components/ScreenCommon';
import { Text } from '../../../Commons/Components/Text';
import { getTransactionsPerBlockRequest } from '../../actions';
import { getBlock, getTransactionsBlock } from '../../selectors';
import { TransactionBlockNumber } from '../../types';

function BlocksScreenComponent() {
    const {number: blockNumber} = useParams<string>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const transactions = useSelector(getTransactionsBlock);
    const block = useSelector(getBlock);
    console.log(block);
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
        <div className='h-2/6 flex flex-col'>
            <Text className="mx-2 my-10 text-xl font-bold text-primary ">{`Bloque numero: ${block?.number ? Number(block?.number) : '-'}`}</Text>
            <div className="flex flex-row flex-wrap w-full h-5/6">
                <div className="flex-1 h-full shadow-xl mx-2 rounded-lg bg-secondary">
                    <Text className="text-lg font-bold text-white m-10 h-1/6 uppercase	">{'Fecha'}</Text>
                    <div className="h-5/6 w-full flex items-center justify-center">
                        <Text className="text-3xl font-bold text-white ">{`${block?.timestamp ? moment(Number(block?.timestamp) * 1000).format('DD/MM/YYYY HH:mm:ss') : '-'}`}</Text>
                    </div>
                </div>
                <div className="flex-1 h-full shadow-xl mx-2 rounded-lg bg-secondary">
                    <Text className="text-lg font-bold text-white m-10 h-1/6 uppercase	">{'Cantidad de transacciones'}</Text>
                    <div className="h-5/6 w-full flex items-center justify-center">
                        <Text className="text-3xl font-bold text-white ">{(Array.isArray(block?.transactions) ? block?.transactions.length : 0)?.toString()}</Text>
                    </div>
                </div>
                <div className="flex-1 h-full shadow-xl mx-2 rounded-lg bg-secondary">
                    <Text className="text-lg font-bold text-white m-10 h-1/6 uppercase	">{'Tarifa base por Gas (Gwei)'}</Text>
                    <div className="h-5/6 w-full flex items-center justify-center">
                        <Text className="text-3xl font-bold text-white ">{(Number(block?.baseFeePerGas) / 1_000_000_000).toString()}</Text>
                    </div>
                </div>
                <div className="flex-1 h-full shadow-xl mx-2 rounded-lg bg-secondary">
                    <Text className="text-lg font-bold text-white m-10 h-1/6 uppercase	">{'Gas limit (Gwei)'}</Text>
                    <div className="h-5/6 w-full flex items-center justify-center">
                        <Text className="text-3xl font-bold text-white ">{Number(block?.gasLimit).toString()}</Text>
                    </div>
                </div>
            </div>
        </div>
        <div className="shadow-2xl rounded-lg h-3/6 border-2">
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