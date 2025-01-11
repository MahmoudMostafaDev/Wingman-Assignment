import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '../../ui/card';
import Image from 'next/image';
import OrdersTable from './OrdersTable';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


// function renderRow(row: any) {
//     return (
//         <TableRow >
//             <TableCell className='flex gap-4 items-center p-4'>
//                 <Image src={row.img} alt={row.product} width={40} height={40} className='rounded-full' />
//                 <p>{row.product}</p>
//             </TableCell>
//             <TableCell>
//                 <p>{row.date}</p>
//                 <p className='text-xs'>{row.time}</p>
//             </TableCell>
//             <TableCell>{row.timeSpent}</TableCell>
//             <TableCell>{row.orderValue}</TableCell>
//             <TableCell className='font-semibold'>{row.commission}</TableCell>
//         </TableRow>
//     )
// }

// const data = [
//     {
//         img: "/Avatar.png",
//         product: "Product 1",
//         date: "24 Apr '2024",
//         time: "10:24 AM",
//         timeSpent: "2h 5m",
//         orderValue: "$100",
//         commission: "$55"
//     }
// ]
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
