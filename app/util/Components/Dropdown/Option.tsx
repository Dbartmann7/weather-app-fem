import Image from "next/image"
import { OptionType } from "../../types"

import tick from "@/public/images/icon-checkmark.svg"

type OptionProps = {
    data:OptionType,
    close: () => void,
    isSelected?:boolean
}

export const Option = ({data, close, isSelected=false}:OptionProps) => {

    const handleSubmit = () => {
        close()
        data.onSelect(data.value)
    }

    return(
        <div className="flex w-full h-10 hover:bg-white/10 rounded-md pr-2" onClick={handleSubmit}>
            <p className="my-auto px-2">{
               data.label
            }</p>
            {isSelected ? <Image className="ml-auto" src={tick} alt={"tick"}/> : null} 
        </div>
    )
}