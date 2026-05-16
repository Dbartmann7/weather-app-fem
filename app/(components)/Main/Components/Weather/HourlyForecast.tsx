"use client"

import Image from "next/image"

import DropdownIcon from "@/public/images/icon-dropdown.svg"
import RainIcon from "@/public/images/icon-rain.webp"
import { HourlyWeatherData } from "@/app/util/types"
import { dateToHour } from "@/app/util/DateConversions"


function DayDropdown(){
    
    return (
        <div className="relative flex gap-2 h-10 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-md">
            <p>Tuesday</p>
            <Image src={DropdownIcon} alt="Drop"/>
            <button className="absolute w-full h-full top-0 left-0" onClick={() => console.log("hello")}/>
        </div>
    )
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

    return(
        <div className="flex flex-col w-full max-w-200 xl:max-w-93 p-6 max-h-167 bg-light-bg rounded-2xl border border-border-color relative ">
            <div className="flex flex-row items-center pb-4">
                <h3 className="mr-auto">Hourly Forecast</h3>
                <DayDropdown/>
            </div>
            <div className="flex flex-col  gap-4 overflow-y-scroll h-full">
                {
                    data?.slice(0,24).map((hour) => {
                        
                        return <HourInfoCard data={hour}/>
                    })
                }
            </div>
        </div>
    )
}