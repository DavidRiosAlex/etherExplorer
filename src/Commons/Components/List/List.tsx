import React from 'react';
import ReactLoading from 'react-loading';

interface ListComponentProps <T>{
    rowRender: (...args: any[]) => JSX.Element;
    data: Array<T>;
    className?: string;
    columns: string[]
}

function ListComponent <T>({rowRender, data, columns}: ListComponentProps<T>) {
    return (
        <div className="flex flex-col h-full w-full">
            <div className="w-full flex flex-row flex-wrap px-10 py-4 border-b-2">
                {columns.map(column => <div key={column} className="truncate  min-w-fit flex-1 text-center">{column}</div>)}
            </div>
            <div className={`flex flex-col h-full w-full scrollbar overflow-auto ${data.length ? '' : 'items-center justify-center'}`}>
                {data.length ? data.map(rowRender) : <ReactLoading type="spin" color="#5475f9" height={'2%'} width={'2%'} />}
            </div>
        </div>
    );
}

export default React.memo(ListComponent);
