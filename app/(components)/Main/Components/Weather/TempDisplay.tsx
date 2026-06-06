"use client"

import {UnitContext} from "@/app/util/UnitContext"
import { temp } from "@/app/util/UnitConversions"
import { use } from "react"

export const TempDisplay = ({value}: {value:number}) => {
    const context = use(UnitContext)
    
    const preferences = context?.preferences
    if(!preferences){
        return(
        <p className='text-8xl font-semibold font-sans'>{`${Math.floor(value)}°`}</p>
    )
    }
    return(
        <p className='text-8xl font-semibold font-sans'>{`${Math.floor(temp(value, preferences))}°`}</p>
    )
}