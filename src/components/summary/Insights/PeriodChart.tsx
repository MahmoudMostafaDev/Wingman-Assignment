"use client"
import React from 'react';
import { Bar, CartesianGrid, ComposedChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { grid, xaxis, yaxisLeft } from '../../../lib/chartConstants';

const PeriodChart = ({ data }: { data: { period: string, consulations: number, orders: number }[] }) => {
    console.log(data)
    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                    maxBarSize={35}
                    data={data}
                    margin={{
                        top: 20,
                        right: 0,
                        bottom: 30,
                        left: -20,
                    }} >
                    <CartesianGrid   {...grid} />
                    <YAxis  {...yaxisLeft} />
                    <XAxis dataKey={"period"} {...xaxis} />
                    <Bar yAxisId={"left"} dataKey="consultations" fill="#CCFBEF" />
                    <Bar yAxisId={"left"} dataKey="ordersClosed" fill="#134E48" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PeriodChart;
