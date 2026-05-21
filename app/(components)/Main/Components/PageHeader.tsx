import Image from "next/image"
import Logo from "@/public/images/logo.svg"
import UnitsIcon from "@/public/images/icon-units.svg"
import DropdownIcon from "@/public/images/icon-dropdown.svg"
import { Dropdown } from "@/app/util/Components/Dropdown"



function UnitsBtn(){


    return(
        <div className="flex shrink min-w-0 flex-row rounded-md gap-2 bg-light-bg px-3 py-2">
            <Image src={UnitsIcon} alt={"Units"}/>
            <p>Units</p>
            <Image src={DropdownIcon} alt={"Drop"}/>
        </div>
    )
}


export default function PageHeader(){
    return(
        <header className="h-9 flex items-center w-full">
            <Image src={Logo} alt={"Logo"} className="mr-auto w-auto shrink min-w-0 max-h-full"/>
            {/* <UnitsBtn/> */}
            <Dropdown logo={UnitsIcon} title="Units" value={0}/>
        </header>
    )
}