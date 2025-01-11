import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../../ui/card';
import Icon, { type } from '../../Icon';
interface Props {
    title: string
    iconType: "message" | "tag" | "coins" | "coin" | "saveMoney" | "right"
    value: string
    percentage: number
    isIncreasing: boolean
}
const GlanceCard: React.FC<Props> = ({ title, iconType, value, percentage, isIncreasing }) => {
    return (
        <Card>
            <CardHeader className='pb-3'>
                <CardDescription className='flex gap-2 items-center'><Icon type={iconType as type} width={12} height={12} color='#667085' /> <p className='font-semibold uppercase text-[12px]'>{title}</p></CardDescription>
            </CardHeader>
            <CardContent className='pb-3'>
                <CardTitle className='text-3xl'>{value}</CardTitle>
            </CardContent>
            <CardFooter className='gap-1 items-center'>
                <div className='flex gap-2 items-center'><Icon type={isIncreasing ? "increase" : "decrease"} width={22} height={22} color={isIncreasing ? "#15B79F" : "#F04438"} /> <p className={`text-sm text-[${isIncreasing ? "#15B79F" : "#F04438"}]`}>{percentage}%</p></div>
                <CardDescription className='flex gap-2 items-center'>{isIncreasing ? "Increasing" : "Decreasing"}</CardDescription>
            </CardFooter>
        </Card>
    );
}

export default GlanceCard;
