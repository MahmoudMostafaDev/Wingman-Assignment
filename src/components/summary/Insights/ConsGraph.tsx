"use client"
import React from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Label,
    ResponsiveContainer
} from "recharts";
import { grid, xaxis, yaxisLeft, yaxisRight } from '../../../lib/chartConstants';
type data = { day: string, ExpertsOnline: number, incoming: number, answerd: number }

const ConsGraph = ({ data }: { data: data[] }) => {

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 10,
                        bottom: 30,
                        left: 10,
                    }}
                >
                    <CartesianGrid  {...grid} />
                    <XAxis
                        dataKey="day"
                        scale={"point"}
                        {...xaxis}
                    />
                    <YAxis
                        dataKey={"answerd"}
                        {...yaxisLeft}
                    >
                        <Label offset={0} position="insideLeft" fontSize={12} angle={-90} style={{ textAnchor: "middle" }} >CONSULTATIONS</Label>
                    </YAxis>
                    <YAxis
                        dataKey={"ExpertsOnline"}
                        {...yaxisRight}
                    >
                        <Label offset={0} position="insideRight" fontSize={12} angle={90} style={{ textAnchor: "middle" }} >CONSULTATIONS</Label>
                    </YAxis>
                    <Tooltip />
                    <Bar dataKey="ExpertsOnline" barSize={32} fill="#FFF3C6" yAxisId={"right"} />
                    <Line type="natural" dataKey="answerd" stroke="#15B79F" strokeWidth={2} dot={false} yAxisId={"left"} />
                    <Line type="natural" dataKey="incoming" stroke="#8A94A6" strokeWidth={2} strokeDasharray={6} dot={false} yAxisId={"left"} />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ConsGraph;
