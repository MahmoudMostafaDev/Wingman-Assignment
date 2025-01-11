import React from 'react';
import { Badge } from './ui/badge';
import Icon from './Icon';
import SidebarButton from './ui/SidebarButton';

const AppNavigation = () => {
    return (
        <nav className='flex gap-2 p-5 ps-9 border-b-2 border-[#DCDFE4] '>
            <SidebarButton />
            <Badge className='gap-2 text-md font-medium px-3 py-2' >
                <Icon type='stat' width={20} height={20} color='#212636' />
                <p className='hidden min-[450px]:block'>Summary</p></Badge>
            <Badge className='gap-2 text-md font-medium px-3 py-2' variant={"secondary"}>
                <Icon type='tag' width={20} height={20} color='#8a94a6' />
                <p className='hidden min-[450px]:block'>Sales</p></Badge>
            <Badge className='gap-2 text-md font-medium px-3 py-2' variant={"secondary"}>
                <Icon type='message' width={20} height={20} color='#8a94a6' />
                <p className='hidden min-[450px]:block'>Chats</p></Badge>
        </nav>);
}

export default AppNavigation;
