'use client'
import { RefObject } from "react"

type DropDownMenuProps = {
    options:any[] 
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
                    return(
                        <div className="flex w-full h-10 hover:bg-white/10 rounded-md"  key={i} onClick={() => submitFn(option)}>
                            <p className="my-auto px-2">{option}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}