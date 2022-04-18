import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import List from '../../../Commons/Components/List';
import Row from '../../../Commons/Components/List/Row';
import TransactionsRow from '../../../Commons/Components/List/TransactionsRow';
import LineChart from '../../../Commons/Components/Charts/Line';
import { Text } from '../../../Commons/Components/Text';
import { getBlockTimestampRequest } from '../../actions';
import { getTransactions, realTimeBlocks } from '../../selectors';
import { BlockEtherDetail, TransactionBlockNumber } from '../../types';

const ScreenCommon = React.lazy( () => import('../../../Commons/Components/ScreenCommon/ScreenCommon'));

function HomeComponent() {
    const dispatch = useDispatch();
    const blocksList = useSelector(realTimeBlocks);
    const transactions = useSelector(getTransactions);
    const navigate = useNavigate();
    const showBlocksTransactions = useCallback((blockNumber: number) => {
        navigate(`/block/${blockNumber}/tx`);
    }, []);

    const goToAddress = useCallback((hash: string) => {
        navigate(`/address/${hash}`);
    }, []);

    const renderRow = (item: BlockEtherDetail): JSX.Element => <Row onClick={showBlocksTransactions} {...item} />;
    const renderTransactionRow = (item: TransactionBlockNumber) => <TransactionsRow key={item.hash} {...item} onClickAddress={goToAddress} />;

    useEffect(() => {
        const callback = (): void => {
            const unixTimestamp = Math.floor(Date.now() / 1000);
            dispatch(getBlockTimestampRequest(unixTimestamp));
        };
        callback();
        const idInterval = setInterval(callback, 2000);
        return () => clearInterval(idInterval);
    }, []);
    return (
        <ScreenCommon className="bg-white flex flex-col justify-between bg-[url('https://i.imgur.com/mGsemxo.png')]">
            <div className="h-36  w-full flex items-center">
                <Text className="text-2xl ml-10 font-bold text-white">Ethereum Explorer</Text>
            </div>
            <div className="w-full flex h-5/6 flex-col justify-evenly 2xl:px-44 xl:px-40 lg:px-30 md:px-10 ">
                <div className="shadow-2xl border-2 rounded-lg h-2/5 lg:h-2/5 flex items-center justify-evenly flex-col bg-white">
                    <Text className="text-2xl ml-10 self-start font-semibold text-secondary">Transacciones</Text>
                    <div className="h-4/6 w-5/6 flex p-10 items-center justify-center">
                        <LineChart data={blocksList.map(block => {
                            const time = Number(block.timestamp) * 1000;
                            return [
                                time,
                                block.transactions
                            ];
                        })}/>
                    </div>
                </div>
                <div className="h-1/2 w-full flex items-center justify-between flex-col lg:flex-row">
                    <div className="h-full rounded-lg border-2 shadow-2xl bg-white max-h-96 my-10 lg:my-0 w-full lg:w-1/3 flex flex-col justify-between">
                        <Text className="text-xl m-5 self-start font-semibold text-secondary">Nuevos Bloques</Text>
                        <div className="w-full h-5/6">
                            <List rowRender={renderRow} data={blocksList.slice(0,100)} columns={['Numero', 'Transacciones']}></List>
                        </div>
                    </div>
                    <div className="h-full border-2 rounded-lg shadow-2xl bg-white max-h-96 my-10 lg:my-0 w-full lg:w-2/3 flex flex-col justify-between">
                        <Text className="text-xl m-5 self-start font-semibold text-secondary">Nuevas Transacciones</Text>
                        <div className="w-full h-5/6">
                            <List rowRender={renderTransactionRow} data={Object.values(transactions).flat(1).slice(0,100)} columns={['Hash', 'Origen', 'Destino', 'Cantidad']}></List>
                        </div>
                    </div>
                </div>
            </div>
        </ScreenCommon>);
}

export const Home = React.memo(HomeComponent);

export default Home;