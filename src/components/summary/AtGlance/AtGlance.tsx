
import React from 'react';
import { CardHeader, CardContent, CardTitle } from '../../ui/card';
import GlanceCard from './GlanceCard';

const Insights = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/glance`, {
        cache: 'no-cache',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await res.json();
    return (
        <>
            <CardHeader>
                <CardTitle>At a glance</CardTitle>
            </CardHeader>
            <CardContent className='grid grid-cols-3 max-[700px]:grid-cols-2 max-[490px]:grid-cols-1  mx-auto gap-4'>
                <GlanceCard title='Consultations' iconType='message' isIncreasing={data.consultations.isIncreasing} percentage={data.consultations.percentage} value={data.consultations.value} />
                <GlanceCard title='ORDERS PLACED' iconType='tag' isIncreasing={data.ordersPlaced.isIncreasing} percentage={data.ordersPlaced.percentage} value={data.ordersPlaced.value} />
                <GlanceCard title='CONVERSION' iconType='right' isIncreasing={data.conversion.isIncreasing} percentage={data.conversion.percentage} value={data.conversion.value} />
                <GlanceCard title='TOTAL SALES VALUE' iconType='coins' isIncreasing={data.totalSalesValue.isIncreasing} percentage={data.totalSalesValue.percentage} value={data.totalSalesValue.value} />
                <GlanceCard title='AVG ORDER VALUE' iconType='coin' isIncreasing={data.avgOrderValue.isIncreasing} percentage={data.avgOrderValue.percentage} value={data.avgOrderValue.value} />
                <GlanceCard title='COMMISSION PAID' iconType='saveMoney' isIncreasing={data.commissionPaid.isIncreasing} percentage={data.commissionPaid.percentage} value={data.commissionPaid.value} />
            </CardContent>
        </>
    );
}

export default Insights;
