import React from 'react';
import { BlockEtherDetail } from '../../../Business/types';

interface RowProps extends BlockEtherDetail{

    onClick: (blockNumber: number) => void;
}

function RowComponent({number, transactions, onClick}: RowProps) {
    return (
        <div key={number} className='w-full flex flex-row flex-wrap px-10 py-4 cursor-pointer border-b-2' onClick={() => onClick(Number(number))}>
            <div className="flex-1 text-center">{Number(number)}</div>
            <div className="flex-1 text-center">{transactions ?? 0}</div> 
        </div>
    );
}

export default React.memo(RowComponent);
