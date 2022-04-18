import React, { useMemo } from 'react';
import { TransactionBlockNumber } from '../../../Business/types';

interface TransactionsRowProps extends TransactionBlockNumber {
    children?: React.ReactNode;
    onClickAddress?: (hash: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function TransactionComponent({ from, to, hash, blockNumber, value, children, onClickAddress = () => {}}: TransactionsRowProps) {
    const amount = useMemo(() => {
        const parseAmount = Number(value).toString().padStart(18, '0');
        return '0.' + parseAmount;
    }, [value]);
    return (
        <div key={hash + ' ' + blockNumber} className='w-full border-b-2 flex flex-row flex-wrap px-10 py-4'>
            <div className="truncate min-w-fit flex-1 text-center">{hash}</div>
            <div onClick={() => onClickAddress(from)} className="truncate min-w-fit flex-1 text-center hover:underline-offset-2 cursor-pointer hover:underline">{from}</div>
            <div onClick={() => onClickAddress(to)} className="truncate min-w-fit flex-1 text-center hover:underline-offset-2 cursor-pointer hover:underline">{to}</div> 
            <div className="truncate min-w-fit flex-1 text-center">{amount}</div>
            {children}
        </div>
    );
}

export default React.memo(TransactionComponent);
