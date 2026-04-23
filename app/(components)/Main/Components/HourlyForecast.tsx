"use client"

import Image from "next/image"

import DropdownIcon from "@/public/images/icon-dropdown.svg"
import RainIcon from "@/public/images/icon-rain.webp"


function DayDropdown(){
    
    return (
        <div className="relative flex gap-2 h-10 py-2 px-4 bg-white/10 rounded-md">
            <p>Tuesday</p>
            <Image src={DropdownIcon} alt="Drop"/>
            <button className="absolute w-full h-full top-0 left-0" onClick={() => console.log("hello")}/>
        </div>
    )
}

function HourInfoCard(){

    return(
        <div className="flex w-full gap-2 h-14 py-2 px-4 items-center bg-white/5 rounded-md border border-border-color">
            <Image className="max-h-full w-auto" src={RainIcon} alt={"Rain"}/>
            <p className="mr-auto">3 PM</p>
            <p>20</p>
        </div>
    )
}

export default function HourlyForecast(){

    return(
        <div className="w-full max-w-200 h-fit p-3 bg-light-bg rounded-2xl border border-border-color">
            <div className="flex flex-row items-center pb-4">
                <h3 className="mr-auto">Hourly Forecast</h3>
                <DayDropdown/>
            </div>
            <div className="flex flex-col gap-4">
                <HourInfoCard/>
                <HourInfoCard/>
                <HourInfoCard/>
                <HourInfoCard/>
                <HourInfoCard/>
                <HourInfoCard/>
                <HourInfoCard/>
                <HourInfoCard/>
            </div>
        </div>
    )
}