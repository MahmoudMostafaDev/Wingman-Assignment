"use client"
import React, { useEffect, useState } from 'react';
import {
    Table,
    TableCell,
} from "@/components/ui/table"
import Image from 'next/image';
import { useReactTable, getPaginationRowModel, getCoreRowModel, PaginationState } from "@tanstack/react-table"
import Icon from '../../Icon'
import Header from './Header';
import Body from './Body';



const columns = [
    {
        accessorKey: "product",
        header: "Product",
        cell: ({ _, row }: any) => {
            return (<TableCell className='flex gap-4 items-center min-w-[140px] '>
                <Image src={row.original.product.img} alt={row.original.product.product} width={40} height={40} className='rounded-full' />
                <p>{row.original.product.product}</p>
            </TableCell>)
        }
    }
    ,
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ _, row }: any) => {
            return (<TableCell className='min-w-[120px]'>
                <p>{row.original.date.date}</p>
                <p className='text-xs'>{row.original.date.time}</p>
            </TableCell>)
        }
    }
    , {
        accessorKey: "timeSpent",
        header: "Time spent",
        cell: ({ _, row }: any) => {
            return (<TableCell className='min-w-[100px]'>{row.original.timeSpent}</TableCell>)
        }
    }, {
        accessorKey: "orderValue",
        header: "Order Value",
        cell: ({ _, row }: any) => {
            return (<TableCell>{row.original.orderValue}</TableCell>)
        }
    }
    , {
        accessorKey: "commission",
        header: "Commission",
        cell: ({ _, row }: any) => {
            return (<TableCell className='font-semibold'>{row.original.commission}</TableCell>)
        }
    }, {
        accessorKey: "empty",
        header: "",
        cell: ({ }: any) => {
            return (<><TableCell className=' text-[#8A94A6]'><button className='flex gap-4'>View Chat <Icon type={"upArrow"} color="#8A94A6" width={15} height={15} /></button></TableCell></>)
        }
    }
]
const OrdersTable = () => {
    const [tdata, setTdata] = useState([]);
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5,
    });
    const getPageData = async (page: number, size: number) => {
        const { data } = await fetch(`http://localhost:3000/api/orders?page=${page}&size=${size}`).then((res) => res.json());
        setTdata(data)
    };
    const table = useReactTable({
        data: tdata,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        manualPagination: true,
        rowCount: 5,
        pageCount: 25,
        state: {
            pagination: {
                pageIndex,
                pageSize,
            },
        }
    });
    //if pagenation changes -> setPagination will update the pageIndex -> as that happen -> effect will fetch new data
    useEffect(() => {
        getPageData(pageIndex, pageSize);
    }, [pageIndex, pageSize]);
    return (
        <div className='rounded-md  border-slate-200 border-2 overflow-hidden shadow-sm'>
            <Table >
                <Header table={table} />
                <Body table={table} />
            </Table>
            <div className='flex justify-between w-[415px] mx-auto p-3 max-[500px]:hidden items-center'>
                <button className='w-40 py-3 bg-[#115E56] hover:bg-[#268375] rounded-md shadow-lg text-white disabled:bg-slate-400' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Pervious Page</button>
                <p className='text-center text-sm mx-2'>{pageIndex + 1} of 25</p>
                <button className='w-40 py-3 rounded-md bg-[#268375] hover:bg-[#115E56] shadow-lg text-white disabled:bg-slate-400' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
            </div>
            <div className='justify-between w-96 mx-auto p-3 max-w-[250px] hidden max-[500px]:flex items-center'>
                <button className='w-20 py-3 bg-[#115E56] hover:bg-[#268375] rounded-md shadow-lg text-white disabled:bg-slate-400' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>{"<-"}</button>
                <p className='text-center text-sm mx-2'>{pageIndex + 1} of 25</p>
                <button className='w-20 py-3 rounded-md bg-[#268375] hover:bg-[#115E56] shadow-lg text-white disabled:bg-slate-400' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>{"->"}</button>
            </div>
        </div>
    );
}

export default OrdersTable;
