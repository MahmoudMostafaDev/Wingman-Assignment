import { TableBody, TableRow } from '@/components/ui/table';
import { flexRender, Table } from '@tanstack/react-table';
import React from 'react';

const Body = ({ table }: { table: Table<never> }) => {
    return (
        <TableBody>
            {table.getPaginationRowModel().rows.map((row, i) => (
                <TableRow key={`${row.id}-row-${i}`}>
                    {row.getVisibleCells().map(cell => {
                        return <>{!cell ? null : flexRender(cell.column.columnDef.cell, cell.getContext())}</>
                    })}
                </TableRow>
            ))}
        </TableBody>
    );
}

export default Body;
