"use client"
import React from 'react';
import { Button } from './button';
import { useSidebar } from './sidebar';
import Icon from '../Icon';

const SidebarButton = () => {
    const { isMobile, toggleSidebar } = useSidebar()
    if (!isMobile) {
        return <></>
    }
    return (
        <Button size={"icon"} className='p-5 rounded-full  bg-[#CCFBEF]' onClick={toggleSidebar}>
            <Icon type='menu' width={50} height={50} color='#FCFCFC' />
        </Button>
    );
}

export default SidebarButton;
