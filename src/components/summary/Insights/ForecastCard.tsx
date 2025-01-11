import React from 'react';
import Icon from '../../Icon';

interface Props {
    description: string
    value: string
}
const ForecastCard: React.FC<Props> = ({ description, value }) => {
    return (
        <div>
            <div>
                <div className='flex justify-between items-start mt-8'>
                    <p className='text-6xl text-[#F0FDFA]'>{value}</p>
                    <Icon type={'increase'} width={30} height={30} color='#F0FDFA' />
                </div>
                <p className='text-md text-[#CCFBEF]'>{description}</p>
            </div>
        </div>
    );
}

export default ForecastCard;
