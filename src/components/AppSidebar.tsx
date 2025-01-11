"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader
    , useSidebar
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import Image from "next/image"
import Icon from "./Icon"
import { DialogTitle } from "@radix-ui/react-dialog"


export function AppSidebar() {
    const { isMobile, toggleSidebar } = useSidebar()
    return (
        <Sidebar collapsible="icon" className="h-[100vh] absolute z-10" >
            <SidebarHeader className="items-center my-4" >
                <Image src="/Logo.png" alt="logo" width={32} height={32} />
            </SidebarHeader >
            <div className="h-[1px] w-2/5 mx-auto bg-[#134E48]"></div>
            <SidebarContent >
                <SidebarGroup className="items-center my-4 gap-4">
                    <Button className="bg-white hover:bg-[#72ffdc]" size={"icon"}>
                        <Icon type={"home"} color="#134E48" width={20} height={20} />
                    </Button>
                    <Button variant={"ghost"} size={"icon"}>
                        <Icon type={"message"} color="#CCFBEF" width={20} height={20} />
                    </Button>
                    <Button variant={"ghost"} size={"icon"}>
                        <Icon type={"people"} color="#CCFBEF" width={20} height={20} />
                    </Button>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="items-center" >
                {isMobile && <Button onClick={() => { toggleSidebar() }} className=" bg-[#134E48] text-red-500" size={"icon"}>
                    X
                </Button>}

                <Button variant={"ghost"} size={"icon"}>
                    <Icon type={"gear"} color="#CCFBEF" width={20} height={20} />
                </Button>
            </SidebarFooter>
        </Sidebar>
    )
}