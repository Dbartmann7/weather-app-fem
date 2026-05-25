'use client'
import { RefObject } from "react"
import { Option } from "./Option"
import { SectionTitle } from "./SectionTitle"

type DropDownMenuProps = {
    options:string[] 
    submitFn:(locationData:any) => void
    className?:string
    ref?:RefObject<HTMLDivElement | null>
}





export const DropdownMenu = ({options, submitFn, className, ref}: DropDownMenuProps) =>{
    

    return(
        <div ref={ref} className={`${className} absolute flex flex-col bg-light-bg rounded-lg h-fit min-h-14 z-50`}>
            <div className="my-2 px-2">
            {
                options.map((option, i) => {
                    if(option.startsWith('/')){
                        return <SectionTitle value={option}/>
                    }
                    return (
                        <Option value={option} submitFn={submitFn}/>
                    )
                })
            }
            </div>
        </div>
    )
}