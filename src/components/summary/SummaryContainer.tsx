import React from 'react';
import { Card } from '../ui/card';
import AtGlance from './AtGlance/AtGlance';
import Insights from './Insights/Insights';
import Orders from './Orders/Orders';
const SummaryContainer = () => {
    return (
        <Card className='m-6 max-[450px]:m-2'>
            <AtGlance />
            <Insights />
            <Orders />
        </Card>
    );
}

export default SummaryContainer;
