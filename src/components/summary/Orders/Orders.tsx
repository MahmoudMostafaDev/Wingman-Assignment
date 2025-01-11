import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../../ui/card';
import OrdersTable from './OrdersTable';

const Orders = () => {
    return (

        <>
            <CardHeader>
                <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent className=''>
                <OrdersTable />
            </CardContent>

        </>

    );
}

export default Orders;
