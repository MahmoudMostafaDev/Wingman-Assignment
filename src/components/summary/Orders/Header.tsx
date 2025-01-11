import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { flexRender, Table } from '@tanstack/react-table';
import React from 'react';

const Header = ({ table }: { table: Table<never> }) => {
    return (
        <TableHeader className='bg-[rgba(0,0,0,0.04)] border-slate-200 border-b-2 text-[#667085]  '>
            {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
                    ))}
                </TableRow>
            ))}
        </TableHeader>
    );
}

export default Header;
