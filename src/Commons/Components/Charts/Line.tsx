/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
//@ts-ignore
import {Chart} from 'react-charts';
import ReactLoading from 'react-loading';

interface LineChartProps <T>{
    data: Array<T>,
    label?: string;
}

export function LineChartComponent <T>({data, label = ''}: LineChartProps<T>) {
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom', },
            { type: 'linear', position: 'left' }
        ],
        []
    );
    return data.length >= 2 ? <Chart data={[{label, data}]} axes={axes} /> : <ReactLoading type="spin" color="#5475f9" height={'5%'} width={'5%'} />;
}

const LineChart = React.memo(LineChartComponent);
export default LineChart;
