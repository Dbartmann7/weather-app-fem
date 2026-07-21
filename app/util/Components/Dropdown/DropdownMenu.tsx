'use client'

import { Option } from "./Option"

import { MenuItem } from "../../types"
import { OptionSection } from "./OptionSection"

type DropDownMenuProps = {
    options:MenuItem[]
    className?:string
    close:() => void
}





export const DropdownMenu = ({options, className, close}: DropDownMenuProps) =>{
    

    return(
        <div className={`${className} absolute flex flex-col bg-light-bg rounded-lg h-fit min-h-14 z-50`}>
            <div className="my-2 px-2">
            {
                options.map((option, i) => {
                    if(option.type === "option"){
                        return <Option data={option} close={close} key={i}/> 
                    }
                    if(option.type === "section"){
                        return <OptionSection data={option} close={close} key={i}/>
                    }
                    
                })
            }
            </div>
        </div>
    )
}