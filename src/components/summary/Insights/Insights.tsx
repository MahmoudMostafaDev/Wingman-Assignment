import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../../ui/card';
import ConsGraph from './ConsGraph';
import Icon, { type } from '../../Icon';
import ChartCard from './ChartCard';
import PeriodChart from './PeriodChart';
import ForecastCard from './ForecastCard';
type data = { day: string, ExpertsOnline: number, incoming: number, answerd: number }
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const AtGlance = async () => {
    let data = (await fetch(`${baseUrl}/api/consulation`, { cache: "no-cache", method: 'GET', headers: { 'Content-Type': 'application/json' } }).then(res => res.json())) as data[];
    data = [{ day: "", ExpertsOnline: 0, incoming: data[0].incoming, answerd: data[0].answerd }, ...data, { day: " ", ExpertsOnline: 0, incoming: data[6].incoming, answerd: data[6].answerd }];
    const weeksData = (await fetch(`${baseUrl}/api/weekPeriod`, { cache: "no-cache", method: 'GET', headers: { 'Content-Type': 'application/json' } }).then(res => res.json())) as { period: string, consulations: number, orders: number }[]
    const forecast = (await fetch(`${baseUrl}/api/forecast`, { cache: "no-cache", method: 'GET', headers: { 'Content-Type': 'application/json' } }).then(res => res.json())) as string[]
    return (
        <>
            <CardHeader>
                <CardTitle>Insights</CardTitle>
            </CardHeader>
            <CardContent className='flex gap-10 flex-wrap max-[450px]:p-1'>
                <ChartCard minWidth={400} className='min-w-[290px] flex-[2] overflow-x-auto' title='CONsultations' iconType='message' colors={[{ color: "#8A94A6", title: "Incoming" }, { color: "#15B79F", title: "Answered" }, { color: "#FFE587", title: "Experts online" }]} >
                    <ConsGraph data={data} />
                </ChartCard>
                <div className='flex flex-1 gap-10 max-[777px]:flex-col '>
                    <ChartCard title='VS PAST PERIOD' iconType='barChart' className=' max-w-[600px] flex-1 ' colors={[{ color: "#CCFBEF", title: "Consultations" }, { color: "#134E48", title: "Orders closed" }]} >
                        <PeriodChart data={weeksData} />
                    </ChartCard>
                    <Card className='   flex-1 rounded-2xl pb-10 ' style={{
                        backgroundImage: `radial-gradient( circle at 0% 0% , #2DBBA7 0% , #2DBBA7 40% , #35B5A3 40% , #35B5A3 64.6% , #0E9584 65% )`
                    }}>
                        <CardHeader>
                            <CardDescription className='flex gap-2 items-center'><Icon type={'message' as type} width={12} height={12} color='#CCFBEF' /> <p className='font-semibold uppercase text-[12px] text-[#CCFBEF]'>{"forecasts"}</p></CardDescription>
                        </CardHeader>
                        <CardContent className='flex flex-col  gap-20 h-full flex-1 items-center'>
                            <ForecastCard description='forecasted increase in your sales closed by the end of the current month' value={forecast[0]} />
                            <ForecastCard description='forecasted increase in your sales closed by the end of the current month' value={forecast[1]} />
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </>
    );
}

export default AtGlance;
