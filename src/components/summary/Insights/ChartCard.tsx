import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../../ui/card';
import ConsGraph from './ConsGraph';
import Icon, { type } from '../../Icon';
interface Props {
    colors: {
        color: string;
        title: string
    }[];
    children: React.ReactNode
    className?: string
    minWidth?: number
    iconType: "message" | "tag" | "coins" | "coin" | "saveMoney" | "right" | "barChart"
    title: string
}

const ChartCard: React.FC<Props> = ({ colors, children, iconType, title, minWidth = 0, ...props }) => {
    return (
        <Card {...props}>
            <CardHeader>
                <CardDescription className='flex gap-2 items-center'><Icon type={iconType as type} width={12} height={12} color='#667085' /> <p className='font-semibold uppercase text-[12px]'>{title}</p></CardDescription>
            </CardHeader>
            <CardContent className='w-full' style={{ minWidth: `${minWidth}px` }}>
                {children}
            </CardContent>
            <CardFooter className='flex-col gap-3 items-start'>
                <div className='w-full h-[2px] bg-slate-300'></div>
                <div className='flex gap-10'>
                    {colors.map((color, index) => (
                        <div key={index} className='flex gap-3 items-center text-sm text-[#667085]'>
                            <div className={`w-5 h-[4px] rounded`} style={{ backgroundColor: color.color }}></div>
                            <p>{color.title}</p>
                        </div>
                    ))}
                </div>
            </CardFooter>

        </Card>
    );
}

export default ChartCard;
