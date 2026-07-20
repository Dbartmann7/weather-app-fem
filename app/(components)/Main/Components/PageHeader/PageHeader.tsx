import Image from "next/image"
import Logo from "@/public/images/logo.svg"


import { UnitsDropdown } from "./UnitsDropdown"




export default function PageHeader(){
    return(
        <header className="pt-5 flex items-center self-center w-full h-full xl:max-w-300 text-white">
            <Image src={Logo} alt={"Logo"} className="mr-auto w-auto shrink min-w-0 max-h-full"/>
            <UnitsDropdown/>
        </header>
    )
}