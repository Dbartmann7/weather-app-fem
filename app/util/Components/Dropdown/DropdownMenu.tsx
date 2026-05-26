'use client'
import { RefObject } from "react"
import { Option } from "./Option"

import { OptionType} from "../../types"
import { OptionSection } from "./OptionSection"

type DropDownMenuProps = {
    options:OptionType[]
    onSelect:(...args:any[]) => void
    className?:string
    ref?:RefObject<HTMLDivElement | null>
}





export const DropdownMenu = ({options, onSelect, className, ref}: DropDownMenuProps) =>{
    

    return(
        <div ref={ref} className={`${className} absolute flex flex-col bg-light-bg rounded-lg h-fit min-h-14 z-50`}>
            <div className="my-2 px-2">
            {
                options.map((option, i) => {
                    if(option.type === "option"){
                        return <Option data={option} onSelect={onSelect}/> 
                    }
                    if(option.type === "section"){
                        return <OptionSection data={option} onSelect={onSelect}/>
                    }
                    
                })
            }
            </div>
        </div>
    )
}