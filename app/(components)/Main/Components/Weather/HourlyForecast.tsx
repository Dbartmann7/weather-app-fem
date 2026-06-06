"use client"

import Image from "next/image"

import RainIcon from "@/public/images/icon-rain.webp"
import { HourlyWeatherData, OptionType } from "@/app/util/types"
import { dateToDay, dateToHour, getDayNum } from "@/app/util/DateConversions"
import {  RefObject,  useEffect, useState } from "react"
import { Dropdown } from "@/app/util/Components/Dropdown/Dropdown"

type DayDropdownProps = {
    day:number, 
    setDay: (option: string) => void, 
    isFocused:boolean, 
    onClick?: () => void
    menuRef?: RefObject<HTMLDivElement | null>
}

function HourInfoCard({data}:{data:HourlyWeatherData}){

    return(
        <div className="flex w-full gap-2 h-14 py-2 px-4 items-center bg-white/5 rounded-md border border-border-color">
            <Image className="max-h-full w-auto" src={RainIcon} alt={"Rain"}/>
            <p className="mr-auto">{dateToHour(data.time)}</p>
            <p>{data.temp}</p>
        </div>
    )
}

export default function HourlyForecast({data}:{data:HourlyWeatherData[]}){ 
    const currentDay:number = data[0].time.getDay()
    const [selectedDay, setSelectedDay] = useState<number>(currentDay)

    const [dayOffset, setDayOffset] = useState<number>(0)

    const handleSelect = (value:string) => {
        setSelectedDay(getDayNum(value))
    }
    const newOptions:OptionType[] = [
        {
            type:"option",
            label:"Monday",
            value:"Monday",
            onSelect:handleSelect
        }, 
        {
            type:"option",
            label:"Tuesday",
            value:"Tuesday",
            onSelect:handleSelect
        }, {
            type:"option",
            label:"Wednesday",
            value:"Wednesday",
            onSelect:handleSelect
        }, {
            type:"option",
            label:"Thursday",
            value:"Thursday",
            onSelect:handleSelect
        }, {
            type:"option",
            label:"Friday",
            value:"Friday",
            onSelect:handleSelect
        }, {
            type:"option",
            label:"Saturday",
            value:"Saturday",
            onSelect:handleSelect
        }, {
            type:"option",
            label:"Sunday",
            value:"Sunday",
            onSelect:handleSelect
        }, 
    ] 
    
    useEffect(() => {
        if(currentDay > selectedDay){
            setDayOffset(7 - (currentDay - selectedDay))
        }else{
            setDayOffset(selectedDay - currentDay)
        }
    }, [selectedDay])

    return( 
        <div className="flex flex-col w-full max-w-200 xl:max-w-93 p-6 max-h-167 bg-light-bg rounded-2xl border border-border-color relative ">
            <div className="flex flex-row items-center pb-4">
                <h3 className="mr-auto">Hourly Forecast</h3>
                <Dropdown title={dateToDay(selectedDay)} options={newOptions} closeAfterSelect={true}/>
            </div>
            <div className="flex flex-col  gap-4 overflow-y-scroll h-full">
                {
                    data?.slice(0 + 24*dayOffset, 24 + 24*dayOffset).map((hour, i) => {
                        
                        return <HourInfoCard key={i} data={hour}/>
                    })
                }
            </div>
        </div>
    )
}