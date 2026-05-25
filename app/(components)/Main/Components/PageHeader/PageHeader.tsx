import Image from "next/image"
import Logo from "@/public/images/logo.svg"


import { UnitsDropdown } from "./UnitsDropdown"




export default function PageHeader(){
    return(
        <header className="h-9 flex items-center w-full">
            <Image src={Logo} alt={"Logo"} className="mr-auto w-auto shrink min-w-0 max-h-full"/>
            <UnitsDropdown/>
        </header>
    )
}